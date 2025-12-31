---
title: Payroll payment and payment control
---

In some organizations, payments are registered in the system: you can register a payment from a payslip and control how much is already paid and how much remains.

If your UI does not show payment registration actions, the feature may be **disabled** in settings or not available due to permissions.

## Register payment from a payslip

Recommended flow:

1. Open the employee payslip.
2. Verify the **“Net wage”** total.
3. Run **“Register Payment”**.
4. Verify the payment amount.
   - If the payment is partial, reduce the amount.
   - The amount can be adjusted within the available balance.
5. Save the payment.

After registration, the payment is included in the “accrued / paid / remaining” control.

## “Accrued / paid / remaining” control

When payment registration is enabled, the system can show summary indicators for a period:

- **accrued “net wage”** — sum of “Net wage” totals by payslips for the period;
- **paid** — sum of registered payments for the period;
- **remaining to pay** — accrued minus paid.

#### What to pay attention to

- If payment for a payslip is registered partially, “remaining to pay” will not become zero.
- If an employee has multiple payslips for a period, control is typically built as the sum of all documents for the selected date range.