---
title: Payment by time entries (Projects)
---

In some organizations, part of earnings can be calculated based on **time entries** from **“Project Management”** (effort tracking by projects and tasks).

As a rule, such earnings appear in the payslip as separate lines (for example, per project), and the source records can be viewed on the **“Time entries”** tab.

## What is considered in the calculation

When generating a payslip for a period, the system takes **all employee time entries** for that period where a **project** is selected and sums hours **per project**.

If a time entry is created **without a project**, it **does not participate** in time-based payroll calculation.

## How the amount is calculated

For each project, an earning is calculated:

- **hours** — total hours by employee time entries for the period (for that project);
- **amount** — `hours × “Hourly wage”`.

The earning amount is rounded to 2 decimals.

## Where “Hourly wage” comes from

The **“Hourly wage”** rate can be set depending on your organization model:

- on the employee level;
- on the employee assignment to a project;
- on the team level (if used).

For a specific time entry, the rate used is the one that matches the employee and project **on the time entry date**.

## Where to verify source data

If the time-based amount is wrong or not generated:

1. Verify that time entries exist for the required period and have a project selected.
2. Verify the **“Hourly wage”** rate for the employee/project.
3. Open the payslip and review the **“Time entries”** tab — it shows source records for the period.

See time entry input details in Project Management docs: [Time entries](../projectManagement/time-entries.md).