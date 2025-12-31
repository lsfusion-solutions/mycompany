---
title: Payslip batch
---

A payslip batch is used when you need to **generate payslips for multiple employees** for the same period.

Typically the workflow is:

1. create a payslip batch (legal entity + period);
2. run **“Generate”**;
3. open employee payslips and review calculation lines and the **“Net wage”** total;
4. register payments if needed.

## Where to find it

Open **“Human Resources” → “Operations” → “Payslip batches”**.

## Batch fields

In a batch you usually fill:

- **Legal entity** — for which legal entity payroll is generated;
- **Period** — dates the payroll calculation covers;
- **Name** (if used) — a free comment, e.g., “Payslips for December”.

## What is inside the batch

The batch shows a list of payslips linked to the batch. For each employee you typically see:

- payslip number;
- name;
- position;
- **“Net wage”** total.

From the batch you can open a payslip and go into calculation details.

## What “Generate” does

The **“Generate”** action performs two key steps:

1. **Creates payslips** for employees of the legal entity for the selected period.
   - As a rule, payslips are created for **active employees**.
   - If a payslip for the period already exists, the system **does not create a duplicate**.
2. **Fills (or updates) calculation lines** in the payslips of the batch.
   - Some lines may be calculated automatically (for example, based on time entries).
   - After generation, it is recommended to open several payslips and review the result.

#### How the employee list is formed

The employee set depends on the selected **legal entity** and on the employee active flag.

If an employee does not belong to the selected legal entity or is not active, a payslip for them is typically not created.

#### If a payslip was created separately

If a payslip for the period already exists, the batch does not create it again.

At the same time, in the batch you usually see **only the payslips linked to this batch**. Therefore, if a payslip was created separately (not from the batch), it may not appear in the current batch list.

In such a case, it is recommended to choose a single scenario (generate payroll via batches) and avoid parallel document creation for the same period.

#### Re-running “Generate”

You can run generation again if source data changed (e.g., time entries, hourly rate, calculation settings). Re-running is typically used to **refresh** the calculation.

## If a payslip did not appear in the batch

Check typical reasons:

1. The employee is **inactive** or does not belong to the selected legal entity.
2. A payslip for this period was already created earlier.
3. No source data for automatic earnings (e.g., no time entries with a selected project — see [Payment by time entries](payroll-time-entries.md)).

## Copying a batch

If the **“Copy”** action is available, it helps create a new batch based on an existing one:

- copies main fields (typically legal entity and name);
- copies the linked payslips.

After copying, verify the period and payslips in the new batch and run **“Generate”** if needed.