---
title: Refunds and corrections
---

In “Invoicing”, documents may be available to correct obligations:

- refund;
- correction document.

Document names and the exact set depend on configuration.

## When to use

- if you need to decrease a previously issued amount;
- if goods were returned;
- if you need to correct [taxes](taxes.md) or amounts.

## Relationship with original documents

Refund/correction documents are typically linked:

- to an [invoice](invoices.md);
- to a [contract](../masterdata/contracts.md);
- to [payments](payments.md) (when money is returned).

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
