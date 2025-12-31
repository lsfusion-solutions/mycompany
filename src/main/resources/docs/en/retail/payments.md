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

### Change

If more than **To pay** was entered (usually for cash payments), the system will calculate **change**.

### Input validation

Depending on settings, validations may apply:

- you cannot confirm payment if the entered amount is insufficient;
- you cannot “overpay” by cashless methods (for example, bank card) above **To pay**;
- for mixed payment, the system considers the total across all methods.

## Return payment

When processing a return, a pay-out to the customer is made. Available payment methods and rules for splitting amounts are defined by settings.

Step-by-step details and typical restrictions: [Returns](returns.md).