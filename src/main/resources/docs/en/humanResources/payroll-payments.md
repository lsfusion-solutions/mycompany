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

A payslip can be linked to several payments — for example, an advance and the final settlement. The payments linked to the payslip are listed in the **“Payments”** block of the payslip card. After registration, the payment is included in the payment control below.

## Payment control

The **Payslips** list (**“Human Resources” → “Operations” → “Payslips”**) shows the **“Paid”** amount for each payslip and provides the **“Not paid”** filter.

The **“Total”** tab of the list shows summary indicators for a date range:

- **“Net wage”** — sum of the “Net wage” totals of the payslips in the range;
- **“Paid”** — sum of the registered payments in the range;
- **“Left”** — “Net wage” minus “Paid”.

The **“Paid”** amount counts payments by their **payment type**: payments of the payroll payment type (see [Settings](settings.md)) and payments of any type with the **“Include in payslip debt”** flag enabled on the outgoing payment type card. If a payment of another type (for example, a loan) is allocated to a payslip without this flag on its type, the payslip card shows it as paid, but the “Paid”/“Left” totals on this tab do not change.

The **“Payment”** button (the `Insert` key) of the payments list on this tab creates an outgoing payment for the selected employee: the amount is prefilled with the employee’s **“Left”** for the selected range, but the payment is initially allocated across **all** the employee’s payslips regardless of the range — review the allocations before saving.

#### What to pay attention to

- If payment for a payslip is registered partially, **“Left”** will not become zero.
- If an employee has multiple payslips in the range, the control sums all of them.
- The dates are compared differently: **“Net wage”** takes payslips whose **period start** falls in the range, while **“Paid”** takes payments by the **payment date** and includes all the employee’s payments of the counted types (the payroll payment type and types with the “Include in payslip debt” flag), even those not linked to the listed payslips.