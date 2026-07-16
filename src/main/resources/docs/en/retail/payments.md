---
title: Retail payments
---

This page describes taking payment in **[POS](pos.md)**: payment methods, splitting amounts, and change calculation.

## Payment methods

A payment method is a configured way to receive/pay out money (for example, **cash**, **bank card**). The list of payment methods and their availability may depend on the **[cash register](settings.md)**.

Payment method configuration: see [Settings](settings.md).

## How to take payment

1. On the receipt, proceed to payment.
2. Check the **To pay**.
3. Enter amounts for one or multiple payment methods.
4. Confirm the payment.

> If no amount is entered at all, confirming assigns the whole **To pay** to the currently selected payment method.

### Change

If more cash than **To pay** was entered, the system calculates the **change**. Only cash can exceed the amount to pay.

### Input validation

The following checks always apply when entering amounts:

- you cannot confirm payment if the entered amount is insufficient;
- you cannot “overpay” by cashless methods (for example, bank card) above **To pay**;
- for mixed payment, the system considers the total across all methods.

## Return payment

When processing a return, a pay-out to the customer is made. The splitting rules are fixed: for each payment method you cannot refund more than was paid by that method in the original receipt, and the refund total must equal the return amount. This per-method limit is checked **per return** against the original receipt — earlier returns of the same receipt are not subtracted, so it is not a cumulative cap across multiple returns. Configuration does not change these amount limits, but it determines which payment methods are available and the payment type / cash-register account used to post each refund.

Step-by-step details and typical restrictions: [Returns](returns.md).