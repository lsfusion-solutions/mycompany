---
title: Payslip
---

A payslip is an employee payroll calculation document for a period. It includes:

- calculation lines (earnings and deductions);
- the **“Net wage”** total;
- (if used) source data details, e.g., a list of time entries.

## Payslip fields

Before reviewing calculation, make sure the payslip correctly specifies:

- **Employee**;
- **Legal entity**;
- **Period**.

## Calculation lines

Calculation lines show **how the amount was formed**. A line usually has:

- **calculation type** (e.g., salary, bonus, tax, time-based earnings);
- **quantity** (e.g., hours);
- **amount** (e.g., hourly rate);
- **total** (line total).

A line can be an **earning** or a **deduction**. Deductions decrease “Net wage”.

### “Skip” and “Hide” flags

- **“Skip”** — the line does not participate in calculating “Net wage”.
- **“Hide”** — the line is not shown in the table, but may participate in the calculation (if not marked as “Skip”).

See detailed rule on [How the “Net wage” total is calculated](net-wage.md).

## Where to check time entry data

If the organization calculates some earnings based on time entries from “Projects”, the payslip can include a **“Time entries”** tab.

It is convenient to check:

- which records got into the calculation;
- date, project, type and hours;
- “Hourly wage” and amount per record.

See: [Payment by time entries](payroll-time-entries.md).

## Register payment (if used)

If payment registration by payslips is enabled, the payslip has the **“Register Payment”** action.

Recommended flow:

1. Open the payslip and make sure **“Net wage”** is correct.
2. Run **“Register Payment”**.
3. Verify the payment amount and adjust it if needed (within the available balance).
4. Save the payment.

See: [Payroll payment and payment control](payroll-payments.md).