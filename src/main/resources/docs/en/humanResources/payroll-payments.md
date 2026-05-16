---
title: Payroll payment and payment control
---

In some organizations, payments are registered in the system: you can register a payment from a payslip and control how much is already paid and how much remains.

If your UI does not show payment registration actions, the feature may be **disabled** in settings or not available due to permissions.

## Register payment from a payslip

Recommended flow:

1. Open the employee payslip.
2. Verify the **“Net wage”** total.
3. Run **“Register Payment”** — the system opens an outgoing payment document, prefilled with the outstanding amount.
4. Check the payment amount; for a partial payment, reduce it.
5. Save the outgoing payment.

A payslip can be linked to several payments — for example, an advance and the final settlement. After registration, the payment is included in the payment control below.

## Payment control

When payment registration is enabled, the **“Total”** tab of the **Payslips** list (**“Human Resources” → “Operations” → “Payslips”**) shows summary indicators for a date range:

- **“Net wage”** — sum of the “Net wage” totals of the payslips in the range;
- **“Paid”** — sum of the registered payments in the range;
- **“Left”** — “Net wage” minus “Paid”.

#### What to pay attention to

- If payment for a payslip is registered partially, **“Left”** will not become zero.
- If an employee has multiple payslips in the range, the control sums all of them.