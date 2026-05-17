---
title: Settings
---

This page describes typical settings for the **Projects** section. The exact set of directories and parameters depends on configuration and user permissions.

Open **Projects → Configuration → Settings**.

## What is usually configured

#### Project types

A project type is used to classify projects and may affect:

- numbering rules;
- available statuses;
- the set of required fields.

Recommendation: keep the list of project types short and clear for users.

#### Project statuses

Project statuses reflect the project lifecycle. Each status has a **Closed** flag that marks it as a closing status; a project in such a status is considered closed.

Typically, the list at minimum includes:

- active statuses (for example, “in progress”);
- a closing status (with the **Closed** flag set).

Recommendation: agree on when a project is moved to a closed status and formalize the rule in your internal routine.

#### Task types

A task type helps separate tasks by purpose (for example, development, approval, control). Often, the type affects available statuses and transition rules.

#### Task statuses

Task statuses reflect execution stages (for example, “new”, “in progress”, “done”). Each status has:

- a **sorting order** that controls how statuses are ordered in the UI (in particular, this defines the order of columns in the **[Kanban](tasks.md#kanban)** view);
- a **Closed** flag — tasks in a status with this flag are considered closed.

The set of statuses is selected based on the team’s workflow.

#### Workflow

The workflow is configured per **task type** and **task status** combination, and defines who is allowed to move a task into that status:

- **allow** — any employee with the specified project role;
- **allow author** — only the author of the task;
- **allow assignee** — only the employee assigned to the task.

Workflow rules answer:

- which transitions between statuses are allowed for a given task type;
- in what order a task goes through stages;
- who can perform a specific transition.

The system prevents saving a task in a status that is not allowed for its type (it shows the message “Status is not allowed for the selected type”), and when the type is changed, the status may be reset to the first allowed status of the new type.

Recommendations:

- avoid excessive statuses;
- make sure each status has a clear next step;
- restrict “sharp” transitions (for example, from “new” directly to “done”) if this is important for control.

#### Priorities and tags

Priorities help plan workload, and tags help conveniently group tasks by topics.

Recommendations:

- use 3–5 priority levels so users do not get confused;
- introduce tags only for real needs (otherwise they stop being useful).

#### Numbering

Project numbering uses a numerator tied to a project type — change the numerator on the type to switch the format or the counter. Task IDs are generated automatically when a task is created.

Recommendation: do not change numbering rules without necessity to preserve continuity and keep the history understandable.

#### Timesheet behaviour

The settings form also contains parameters that affect **[timesheets](timesheets.md)** — in particular, **autosave hours**. When this option is enabled, changes in a day cell of the supervisor timesheet are saved immediately; copy/clear actions in this case ask for confirmation.

#### Shift templates

A **shift template** is a predefined time interval used to quickly create shifts on the **Schedule** view (see **[Shifts](shifts.md)**). On the **“Shift templates”** tab, add the intervals your organization uses (for example, a morning and an evening shift).

## Check after changing settings

After changing directories and rules, it is recommended to:

1. Create a test project and a test task.
2. Check that statuses and transitions work as expected.
3. Ensure that the required actions are available to users with different roles.