---
title: How the “Net wage” total is calculated
---

The **“Net wage”** total is the result of summing calculation lines for a period taking into account whether a line is an **earning** or a **deduction**.

## How the amount is formed

Each calculation line typically has:

- **quantity** (e.g., hours or units);
- **amount** (e.g., hourly rate);
- **total** (line total).

As a rule, the **line total** is calculated as:

`total = quantity × amount`

The line total is rounded to **2 decimals**.

## Calculation rule

**“Net wage”** is calculated as follows:

1. Take **all calculation lines** in the payslip.
2. For each line determine the sign:
   - if the line is marked as a **deduction** — its total is **subtracted**;
   - if the line is an earning — its total is **added**.
3. Lines marked as **“Skip”** **do not participate** in the calculation.

In formula form:
`Net wage = (sum of earning totals) − (sum of deduction totals)`

where both sums include only lines that are **not marked** as **“Skip”**.

## Important notes

- The **“Hide”** flag controls line visibility in the payslip. Such a line may be **hidden** but still **participate** in “Net wage” if not marked as “Skip”.
- “Net wage” is calculated as the **sum of line totals** (after rounding per line). Therefore, with many lines, small rounding differences can occur.

## Example

Calculation lines:

1. **Salary** — total `100,000.00` (earning)
2. **Bonus** — total `10,000.00` (earning)
3. **Tax** — total `15,000.00` (**deduction**)

Then:
`Net wage = 100,000.00 + 10,000.00 − 15,000.00 = 95,000.00`

If any line is marked as **“Skip”**, its total is not included.