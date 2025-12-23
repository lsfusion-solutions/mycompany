# Project Management — user documentation

This documentation describes how to work in the **Projects** section (Project Management): creating and managing projects, creating and controlling tasks, working with the team and roles, tracking effort via time entries, and using basic views to monitor progress.

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
5. While working, record effort using **time entries**.
6. Monitor progress by task statuses and, if needed, use Kanban and the Gantt chart.

## Typical scenarios

#### “Start a project from scratch”

1. Create a project and fill in key fields (type, name, dates, company, manager).
2. Prepare the team: add participants and roles, or assign a team to the project (if your organization uses teams).
3. Create tasks and assign assignees and due dates.
4. Agree on status rules (who changes statuses, when, and by which criteria).
5. Establish time tracking discipline: record time entries daily or when work is completed.

Details: see [Projects](projects.md), [Tasks](tasks.md), [Team and roles on a project](team-and-roles.md), [Time entries](time-entries.md).

#### “Manage project communication”

1. Record agreements and decisions in project and task comments.
2. When changing due dates and priorities, leave an explanation so participants understand the reason.
3. For disputed cases, use the task change history.

## Navigation

The **Projects** section typically includes groups:

- **Operations** — day-to-day work (projects, tasks, assignments, time entries).
- **Processes** — control views (for example, Kanban, Gantt chart).
- **Reporting** — reports for projects, tasks, and effort.
- **Configuration** — directories and rules (types, statuses, priorities, tags, workflow).

The exact menu set and action availability depend on configuration and user permissions.

## User roles and permissions

The exact set of permissions depends on your organization’s configuration. A typical responsibility split:

- **Project manager** — responsible for project dates and status, team composition, and task progress control.
- **Assignee** — works with tasks: changes statuses within available transitions, leaves comments, and records time entries.
- **Observer/approver** (if used) — views the project and tasks, participates in discussions, and may confirm completion according to internal rules.

If some actions are not available (for example, changing a status or creating a time entry), it is usually due to permission restrictions or workflow rules.

## Terms

#### Project

A planning unit: contains dates, status, the responsible person (manager), and combines related tasks, team, and effort.

#### Task

A work unit within a project: what needs to be done, by what due date, and what the current execution status is.

#### Assignment

Linking an employee to a project and/or a task with a role and participation terms (for example, responsibility and period).

#### Time entry

A record of actual time spent on work (usually by task/project) for effort control and reporting.

#### Status

The state of a project or a task. Statuses are used to control the lifecycle and may restrict available actions.

#### Workflow

Rules for task status transitions: what changes are allowed, in what order, and by whom.
