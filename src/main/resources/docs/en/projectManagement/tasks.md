---
title: Tasks
---

This page describes how to work with project tasks: creating and assigning tasks, controlling statuses, using change history, and using views for monitoring.

A task is the main work unit within a project. It is recommended to keep tasks in a way that the task card clearly answers: what needs to be done, who is responsible, by when, and at what stage the work is.

## Main task data

A task typically contains:

- code (generated automatically);
- name;
- status;
- priority;
- tags;
- assignee;
- due date;
- description and comments.

The set of fields may depend on the task type and settings.

#### Recommendations for creating tasks

- Formulate the **name** as a verifiable result (for example, “Prepare an estimate”, “Approve the layout”, “Fix an error in the report”).
- Set the **due date** right away so the task is included in due date control.
- There should be a single **assignee** (if several are required, create subtasks or separate tasks).
- Use the **description** for details: context, constraints, and definition of done.

## Statuses and workflow

A task goes through states defined by **[task statuses](settings.md#task-statuses)**. Transitions between statuses are controlled by the **[workflow](settings.md#workflow)**.

The workflow helps prevent chaotic changes: for example, you may not be able to move a task directly to completed until it has been taken into work (exact rules depend on configuration).

If the system does not allow changing a status, the reason is usually one of the following:

- the transition is prohibited by workflow rules;
- the user does not have permission to change the status;
- for the task type, the selected transition is not configured.

#### What to do if the status does not change

1. Check the current status and the status you are trying to select.
2. Try an intermediate transition (if it exists).
3. Ask the project manager or administrator which transitions are allowed and for whom.

## Comments and change history

For collaboration, use:

- comments — to record decisions, agreements, and clarifications;
- change history — to see when and by whom key task data was changed.

#### When change history is useful

- when investigating “who moved the due date and why”;
- in disputed responsibility situations;
- when preparing a progress report.

## Views for monitoring progress

In addition to the task list, special views can be used to monitor progress. Their set depends on configuration.

### Kanban

Kanban helps control the workflow by statuses. Use it for the team’s daily work: it quickly shows what is in the queue, what is in progress, and what is completed.

Recommendations:

- update statuses immediately after the work state changes;
- do not move a task “to the future” if the work has not actually started;
- use comments when blocked (what prevents progress and who should help).

### Gantt chart

The Gantt chart is used for date-based planning and visual due date control. It is useful when it is important to agree on the project calendar plan and evaluate overlaps between tasks.

Use the Gantt chart when:

- the project depends on the calendar plan (due dates are fixed);
- there are many parallel tasks and you need to see overlaps;
- there are dependencies between tasks.

## Task dependencies

If needed, set dependencies between tasks (for example, when one work item cannot start until another is completed). This helps build an execution sequence and reduces the risk of blocks.

#### Practical example

If the task “Approve the layout” depends on the task “Prepare the layout”, then:

- preparation is completed first;
- approval starts afterwards;
- when moving the due date of the first task, also check the due date of the second.

## Typical situations and solutions

#### The task is not visible to the assignee

Check:

- whether an assignee is set;
- whether the task is in the correct project;
- whether filters are enabled (for example, “Assigned to me” or a status filter).

#### Cannot assign an assignee

The reason is usually one of the following:

- the user does not have permission to edit the task;
- the assignee is not included in the project team (if your organization controls assignments by project team);
- a restriction by task type or assignment settings.