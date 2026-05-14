---
title: Project Management — user documentation
---

This documentation describes how to work in the **Projects** section (Project Management): creating and managing projects, creating and controlling tasks, working with the **[team and roles](team-and-roles.md)**, tracking effort via **[time entries](time-entries.md)**, and using basic views to monitor progress.

## Contents

- [Quick start](#quick-start)
- [Navigation](#navigation)
- [Terms](#terms)

Sections:

- [Projects](projects.md)
- [Tasks](tasks.md)
- [Time entries](time-entries.md)
- [Timesheets](timesheets.md)
- [Team and roles on a project](team-and-roles.md)
- [Reporting](reports.md)
- [Settings](settings.md)

Related integrations:

- [Autodesk](../masterdata/autodesk/autodesk.md) — link Autodesk Platform Services (APS) 3D models to projects.

## Quick start

A typical scenario “create a project → create tasks → assign assignees → track time”:

1. Open **Projects → Operations → Projects**.
2. Create a project and fill in the main fields:
   - type;
   - name;
   - start and end dates (if known);
   - status;
   - company and manager.
3. Go to the project tasks and create tasks for the team.
4. Assign assignees and due dates.
5. While working, record effort using **[time entries](time-entries.md)** (either directly or via **[timesheets](timesheets.md)**).
6. Monitor progress by task statuses and, if needed, use **[Kanban](tasks.md#kanban)** and the **[Gantt chart](tasks.md#gantt-chart)** views available within the task list.

## Typical scenarios

#### “Start a project from scratch”

1. Create a project and fill in key fields (type, name, dates, company, manager).
2. Prepare the team: add participants and roles, or assign a team to the project (if your organization uses teams).
3. Create tasks and assign assignees and due dates.
4. Agree on status rules (who changes statuses, when, and by which criteria).
5. Establish time tracking discipline: record **[time entries](time-entries.md)** daily or when work is completed.

Details: see [Projects](projects.md), [Tasks](tasks.md), [Team and roles on a project](team-and-roles.md), [Time entries](time-entries.md).

#### “Manage project communication”

1. Record agreements and decisions in project and task comments.
2. When changing due dates and priorities, leave an explanation so participants understand the reason.
3. For disputed cases, use the task change history.

## Navigation

The **Projects** section typically includes groups:

- **Operations** — day-to-day work (**[projects](projects.md)**, **[tasks](tasks.md)**, **[time entries](time-entries.md)**, shifts). **[Kanban](tasks.md#kanban)** and the **[Gantt chart](tasks.md#gantt-chart)** are views available within the task list, not separate menu items. **[Assignments](team-and-roles.md#assignments)** are managed on the project card.
- **Processes** — **[employee and supervisor timesheets](timesheets.md)** for entering and controlling effort by days.
- **Reporting** — entry point for project-related reports. In the base configuration this folder is typically populated by integrations with neighbouring modules (Sales, Manufacturing) rather than by stand-alone PM reports.
- **Configuration** — directories and rules: project and task **[types](settings.md#project-types)**, **[statuses](settings.md#project-statuses)**, **[priorities](settings.md#priorities-and-tags)**, **[tags](settings.md#priorities-and-tags)**, **[workflow](settings.md#workflow)**, project roles, and teams.

The exact menu set and action availability depend on configuration and user permissions.

## User roles and permissions

The exact set of permissions depends on your organization’s configuration. A typical responsibility split:

- **Project manager** — responsible for project dates and status, team composition, and task progress control.
- **Assignee** — works with tasks: changes statuses within available transitions, leaves comments, and records **[time entries](time-entries.md)**.
- **Observer/approver** (if used) — views the project and tasks, participates in discussions, and may confirm completion according to internal rules.

If some actions are not available (for example, changing a status or creating a **[time entry](time-entries.md)**), it is usually due to permission restrictions or workflow rules.

## Terms

#### Project

A **[project](projects.md)** is a planning unit: contains dates, status, the responsible person (manager), and combines related tasks, team, and effort.

#### Task

A **[task](tasks.md)** is a work unit within a project: what needs to be done, by what due date, and what the current execution status is.

#### Assignment

An **[assignment](team-and-roles.md#assignments)** links a participant (employee or team) to a project with a project role and a participation period. A task does not have a separate assignment record — it references one assignee directly via its assignee field.

#### Time entry

A **[time entry](time-entries.md)** is a record of actual time spent on work (usually by task/project) for effort control and reporting.

#### Status

A status is the state of a project or a task. See **[project statuses](settings.md#project-statuses)** and **[task statuses](settings.md#task-statuses)**.

#### Workflow

The **[workflow](settings.md#workflow)** defines rules for task status transitions: what changes are allowed, in what order, and by whom.