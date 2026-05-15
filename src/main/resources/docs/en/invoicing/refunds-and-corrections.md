---
title: Refunds and corrections
---

In "Invoicing" several mechanisms exist to record returns, refunds and corrections of previously posted documents. They split into two categories:

- **Corrections** — separate documents that adjust a previously confirmed [bill](bills.md) or [invoice](invoices.md) without cancelling the original (see "Bill corrections" and "Invoice corrections" below).
- **Returns** — recorded by creating a document of the opposite type with a special "Return" flag on its type:
  - a **credit note** is a [bill](bills.md) whose type has the **"Return"** flag — it reverses a sales [invoice](invoices.md) from the supplier's side;
  - a **refund** is an [invoice](invoices.md) whose type has the **"Return"** flag — it reverses a purchase [bill](bills.md) from the customer's side.

The exact set of documents and their captions depends on the configuration.

## When to use

- if you need to decrease (or otherwise adjust) a previously issued amount → use a **correction**;
- if goods are returned by a customer → record a **credit note** (return bill);
- if you return goods to a supplier → record a **refund** (return invoice);
- if you need to correct [taxes](taxes.md) or amounts on an already confirmed document → use a **correction**.

## Relationship with original documents

Correction documents are always linked to a specific source document via the **"Original bill"** / **"Original invoice"** field. Returns (credit notes / refunds) carry per-line references to the original document's lines, so the system can track which quantity of which original line has been returned.

## Bill corrections

Bill corrections are used to adjust an existing [bill](bills.md).

### Where to find it

1. Open **"Invoicing" -> "Operations" -> "Bills"**.
2. Open the bill you need to adjust.
3. Click **"Create Correction"**.

The system creates a new bill and links it to the original in **"Original bill"**.

### Validation rules

The system enforces these rules:

- correction vendor must match the original bill vendor;
- correction company must match the original bill company;
- the original bill reference cannot point to another correction.

If you create a correction from an already corrected document, the new correction is still linked to the same original bill.

### Correction modes

#### Replacement correction (default)

Use this mode when the correction should replace the previous version values.

- the previous document is the previous correction in the chain;
- if there is no previous correction, the previous document is the original bill;
- **Amount correction** is calculated as `current amount - previous amount` (replacement effect relative to the previous document).

#### Reversal correction

Use this mode when the correction document itself already contains reversal/replacement values (for example, negative lines).

- set **"Reversal"** in the correction bill;
- in this mode, **Amount correction** is taken from the correction bill amount itself;
- it is not calculated from the previous document.

### Correction chain in the bill card

In the bill card, the **Corrections** tab shows:

- all linked corrections with index, date, status, and amounts;
- correction count in the tab badge.

The footer also shows correction totals, including:

- values from the latest non-reversal correction;
- totals adjusted by reversal corrections;
- correction values for the currently opened correction bill.

### Debt behavior

Debt is recalculated automatically when a bill correction amount changes:

- correction amount is converted into correction debt amount;
- matching between the original bill and the correction is updated automatically;
- correction bills are handled in the dedicated correction debt flow.

### Typical flow

1. Open the original bill.
2. Click **"Create Correction"**.
3. Edit lines and totals.
4. Enable **"Reversal"** only when the correction document itself represents reversal/replacement values.
5. Save and post according to your process.
6. Check totals in **Corrections** and in [Debt and payment calendar](debt-and-calendar.md).

## Invoice corrections

Invoice corrections work similarly to bill corrections, but with one important difference: they **only support replacement mode** — there is no "Reversal" flag on an invoice correction. The replacement formula and chain navigation are the same as for bill corrections.

To create an invoice correction:

1. Open **"Invoicing" → "Operations" → "Invoices"**.
2. Open the invoice you need to adjust.
3. Click **"Create Correction"**.
4. Edit the lines and totals so they describe the corrected state of the invoice.
5. Save and post.

Validation rules mirror those of bill corrections (matching customer/company, no chained-correction-of-correction, etc.).

## Credit notes (return bills)

A **credit note** is implemented as a [bill](bills.md) whose type has the **"Return"** flag set. It is used to record a sales return — the customer returns goods that were previously sold to them via an [invoice](invoices.md).

### How to create a credit note

In the source invoice card a **"Return"** action appears once the invoice has been moved to **To pay** and remains visible afterwards — including after the invoice is marked **Paid** — so the typical case of recording a return after the original sale was already completed is supported. The action disappears only when the invoice is **Canceled**, and is not available for **Draft** invoices. It is also not available from a list selection — open the invoice itself. Click the action to create a new bill:

- of the bill type linked to the invoice type (via the **"Return type"** setting on the invoice type);
- with the customer as vendor;
- with lines copied from the invoice (price and applied taxes are inherited).

Each credit-note line keeps a reference back to the invoice line it was created from, so the system can compute **returned quantity** per invoice line and (optionally) prevent returning more than what was originally sold via the **"Check returned quantity"** flag.

### Workflow

The credit note then follows the normal bill lifecycle (Draft → To pay → Paid → Canceled). Its amount reduces the customer's debt that was originally created by the source invoice.

## Refunds (return invoices)

A **refund** is implemented as an [invoice](invoices.md) whose type has the **"Return"** flag set. It is used to record a purchase return — goods that were previously received via a [bill](bills.md) are returned to the supplier.

### How to create a refund

In the source bill card a **"Return"** action appears once the bill has been moved to **To pay** and remains visible afterwards — including after the bill is marked **Paid** — so the typical case of recording a return after the original purchase was already completed is supported. The action disappears only when the bill is **Canceled**, and is not available for **Draft** bills. It is also not available from a list selection — open the bill itself. Click the action to create a new invoice:

- of the invoice type linked to the bill type (via the **"Return type"** setting on the bill type);
- with the supplier as customer;
- with lines copied from the bill (price and applied taxes are inherited).

Each refund line keeps a reference back to the bill line it was created from. The same **"Check returned quantity"** mechanism is available.

### Workflow

The refund then follows the normal invoice lifecycle (Draft → To pay → Paid → Canceled). Its amount reduces the supplier debt that was originally created by the source bill.

## Choosing the right mechanism

| Situation | Use |
|---|---|
| The invoice/bill amount is wrong and you need to fix it | **Correction** (bill or invoice) |
| A customer returns goods after an invoice was issued | **Credit note** (return bill) |
| You return goods to a supplier after a bill was registered | **Refund** (return invoice) |
| A bill needs a full reversal (negative-amount document) | **Bill correction** with the **"Reversal"** flag |
