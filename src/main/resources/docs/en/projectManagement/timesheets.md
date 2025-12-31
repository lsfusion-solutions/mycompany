---
title: Timesheets
---

This page describes two timesheet forms:

- **Supervisor timesheet** — to control and adjust employees’ effort by days within the selected project.
- **Employee timesheet** — to enter and view effort by tasks (usually within the selected project).

Timesheets work based on **time entries** data. If your organization tracks time strictly by tasks and projects, timesheets help you quickly fill in/check hours without switching to separate lists.

> For details about the time records themselves, see [Time entries](time-entries.md).

## General principles

Both forms use common elements:

- **Period** — a date interval (typically a month). The header usually contains buttons to move to the previous/next month.
- **Project** — limits tracking and viewing hours to a specific project.
- **Time entry type** — a work type (for example, “Development”, “Analysis”, “Support” — the exact list depends on settings).
- **Hours template** (if used) — allows quickly inserting a typical hours value during input.

### How hours are entered

Hours are entered directly in the table.

Two options are typically available:

1. **Manual input** — you enter the number of hours for the selected day.
2. **Quick input using a template** — if an hours template is selected, the system inserts its value.

If you clear the hours value (make it empty/zero), the corresponding time entries for that day may be deleted (depending on tracking rules).

### Day highlighting

For easier control, the table usually uses highlighting:

- the current day is highlighted separately;
- weekends may be highlighted with a different color;
- if an employee has time entries of different types on the same day, the day may be highlighted as “requires attention”.

## Supervisor timesheet

Open **Projects → Processes → Supervisor timesheet**.

### Purpose

The form is intended for supervisors and managers who need to:

- control whether employees fill in their time;
- quickly see workload by days;
- if needed, adjust hours within the project.

### What is displayed

The timesheet displays a table:

- rows — **employees**;
- columns — **days of the selected period**;
- values — **hours**.

Additionally, the employee row may show position and project roles (if roles are maintained).

### Employee list limitation

The employee list in the timesheet is typically formed from:

- participants assigned to the selected project in the selected period;
- employees who already have hours/time entries in the selected period;
- (in some configurations) users with extended permissions who are allowed access to all projects.

### Input and actions

When you edit a cell (day/employee), the system:

- creates/updates the required time entry type — if a **time entry type** is selected on the form;
- opens a form with the list of time entries for that day and employee — **only if no time entry type is selected**.

#### Copying and clearing hours (context menu)

In the supervisor timesheet, day actions are usually available:

- **Copy** — copies time entries from the nearest previous day when there were records to the selected day.
- **Clear** — deletes time entries for the selected day.

If autosave is enabled, such actions may require confirmation because changes are saved immediately.

### Typical situations

#### Entering hours opens a time entry list

The list of time entries opens **only if no time entry type is selected on the form**. This is usually needed when there are already records for the selected day and more detailed information is required (for example, distribution by tasks).

What to do:

1. Open the time entry list shown by the system.
2. Check which work/tasks already have records.
3. If needed, adjust hours or the type/project of the record.

## Employee timesheet

Open **Projects → Processes → Employee timesheet**.

### Purpose

The form is intended for employees and helps to:

- enter hours for tasks daily;
- see which tasks have time entered and on which days;
- control timesheet completeness for the month.

### What is displayed

The employee timesheet shows a task list and an hours table:

- rows — **tasks**;
- columns — **days of the selected period**;
- values — **hours by task**.

Task details may also be shown (name, author, assignee, status, type). If no project is selected, the task project may also be shown.

### Employee selection

Usually, the current user is selected by default. In some configurations, if you have permissions, you can switch the employee (for example, to help fill in the timesheet or for control).

### Task selection

The timesheet shows tasks that:

- belong to the selected project (if a project is selected);
- are assigned to the employee for the period or have entered hours;
- match filters by state and ownership.

Typically available filters:

- **Opened / Closed** — by task state;
- **My tasks** — where the employee is the author;
- **Assigned to me** — where the employee is the assignee.

### Entering hours

When you edit a cell (day/task), the system creates or updates a time entry.

Recommendations:

- select the project first (if time tracking is strictly project-based);
- then work with tasks of that project;
- enter time as close as possible to the actual work date.

## Permissions and restrictions

Timesheet availability depends on permissions:

- an employee usually sees only their own timesheet;
- a supervisor/manager may see the timesheet for employees of the project;
- “all projects” access expands the data set available for viewing and (in some cases) editing.

If you do not see the required project, employees, or tasks, check:

- the selected period;
- the selected project;
- the assignment to the project and whether the participation period is valid;
- filters on the form;
- access permissions.