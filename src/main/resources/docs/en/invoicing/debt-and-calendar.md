---
title: Debt and payment calendar
---

## Debt

Debt is calculated as the difference:

- document amounts ([bills](bills.md), [invoices](invoices.md), [refunds and corrections](refunds-and-corrections.md));
- minus the amount of linked/matched [payments](payments.md).

Debt can be calculated:

- by [partner](../masterdata/partners.md);
- by [contract](../masterdata/contracts.md);
- by a specific document.

What is important to understand:

- debt changes **only for payments that are linked/matched** with documents;
- if a document is Canceled, it usually does not participate in calculation;
- for partial payment, debt decreases by the matched amount.

## How debt is closed

1. Create a [payment](payments.md).
2. Match the payment with the document (or match with several documents).
3. After posting/saving the payment, debt decreases.

If the payment is matched with several documents, debt decreases for each document by the corresponding amount.

## Payment calendar

The payment calendar is used to plan:

- expected receipts;
- planned payouts.

The calendar is usually built based on:

- due dates in documents;
- payment terms;
- current debt.

### Typical usage scenarios

1. **Receipts planning**: see what amounts are expected for the next week/month by payment terms.
2. **Overdue control**: filter documents whose planned payment date is in the past.
3. **Payout planning**: by [outgoing payments](outgoing-payments.md) (if planned payouts are used).

### What to check if the calendar is “empty” or dates are incorrect

Check:

- whether **payment terms/due date** are filled in documents;
- whether calendar settings and planned date calculation rules are enabled;
- whether documents are excluded by status (for example, Canceled).

See parameters: [Settings and directories](settings.md).