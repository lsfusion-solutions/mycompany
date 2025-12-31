---
title: Bills
---

## Where to find it

Open **“Invoicing” → “Operations” → “Bills”**.

## Purpose

A bill is used to:

- record receiving goods/services from a supplier;
- calculate [tax](taxes.md) and the document total;
- control supplier payment and [debt](debt-and-calendar.md).

A bill can be used as:

- a **basis for planning [outgoing payments](outgoing-payments.md)** (if the [payment calendar](debt-and-calendar.md) is used);
- a **control point for supplier [debt](debt-and-calendar.md)** (if debt accounting is maintained by bills).

## Bill list

The list typically shows:

- number and date;
- [partner](../masterdata/partners.md);
- status;
- amount;
- currency (if used);
- [contract](../masterdata/contracts.md) (if used);
- payment/debt indicators.

Tip: if the list has **Paid**/**Debt** columns, they are convenient for quickly controlling partial payments.

## Bill card

### Main fields

In the bill header you typically fill:

- type;
- date;
- number;
- [partner](../masterdata/partners.md);
- [contract](../masterdata/contracts.md) (if used);
- payment terms (if used);
- note.

#### Payment terms

If **payment terms** are used, they usually affect:

- calculation of the **planned payment date**;
- building the **payment calendar**;
- determining **overdue** documents.

See: [Settings and directories](settings.md), [Debt and payment calendar](debt-and-calendar.md).

### Lines

Lines typically contain:

- [item](../masterdata/items.md)/service;
- quantity;
- price;
- [tax](taxes.md) (if used);
- line amount.

If taxes are configured, the tax can be substituted automatically (for example, from the item/service card or from the document type).

### Statuses

Typical status set:

- Draft;
- To pay;
- Done;
- Canceled.

Statuses affect editing and printing availability.

Typical logic:

- in **Draft** you can change the header and lines;
- in **To pay** the document is confirmed for further actions (for example, payment registration, printing — if used);
- in **Done** the bill is considered closed;
- in **Canceled** the bill is excluded from accounting.

### Payment and debt

A bill can be linked to [outgoing payments](outgoing-payments.md). Based on matched payments the system calculates:

- paid;
- debt.

#### Quick payment from the document

In some configurations you can create an outgoing payment directly from the bill.

Typical flow:

1. Move the document to status **“To pay”**.
2. Click **“Register Payment”**.
3. Review the created **[outgoing payment](outgoing-payments.md)** card and save it.

The system typically:

- substitutes the partner, company, accounts/cash registers and payment type (depending on settings);
- sets the amount equal to the current remaining amount due;
- immediately performs **payments matching** with this bill so that debt decreases.

See: [Outgoing payments](outgoing-payments.md).

#### Partial payment

If the payment does not fully cover the bill:

- **Paid** increases by the matched amount;
- **Debt** stays positive until full settlement.

#### Overpayment / advance

If the transferred amount is greater than the bill amount, behavior depends on matching rules:

- the overpayment can stay as a **not matched** part of the payment;
- or be treated as an **advance** by [partner](../masterdata/partners.md)/[contract](../masterdata/contracts.md).

See: [Payments](payments.md).

See also: [Debt and payment calendar](debt-and-calendar.md).

## Printing

If print forms are enabled in your configuration, the bill can usually be printed from the document card.

Printing availability most often depends on:

- status (for example, printing is available from “To pay”);
- the presence of a configured print template.

See: [Reports and printing](reports-and-printing.md), [Settings and directories](settings.md).