---
title: Projects
---

This page describes how to work with projects: how to create a project, what information to fill in, how to manage the project state, and how to keep discussions.

A project combines related **[tasks](tasks.md)**, the **[team and roles](team-and-roles.md)**, and effort tracked via **[time entries](time-entries.md)**. It is recommended to use a project as a “work container”: record dates, the responsible person, and key decisions.

## Project list

Open **Projects → Operations → Projects**.

The list typically shows:

- number;
- status;
- start and end dates;
- type and name;
- company;
- partner (if used);
- manager.

#### Why the list is useful

The project list helps you:

- quickly find a project by number or name;
- separate active projects from closed ones;
- see the responsible person (manager) and dates;
- open the project card and related sections.

Available actions depend on the user’s permissions:

- create a project;
- open/edit the card;
- delete a project (usually available if there is no related data or if it is allowed by settings).

### Filters

Most commonly available filters:

- **Opened** / **Closed** — depending on status;
- **Assigned to me** — projects where the current user is specified as the manager.

Use filters to quickly switch between current work and completed projects.

If there are many projects in the list, also use field search in the list (for example, by number, name, or partner).

## Project card

The project card contains the main fields:

- type;
- number;
- name;
- company;
- partner;
- start and end dates;
- status;
- manager;
- description.

#### Recommended filling order

1. Select the project **type**.
2. Specify the **name** so that participants can easily distinguish projects.
3. Check the **company**.
4. Specify the **manager** (responsible person).
5. Fill in the **start date** and, if needed, the **end date**.
6. Set the **status** (for example, “in progress”).
7. If the project is external, select the **partner**.
8. In the **description**, briefly record goals, scope, constraints, and important links.

> In some organizations, the number is generated automatically. If the number is filled in by the system, do not change it manually.

#### Project description

The description field is convenient to use as a “project passport”:

- project goal;
- key results;
- important agreements;
- completion criteria;
- links to external documents (if this is accepted in the organization).

### Project status

The status reflects the current project state. Typically, it affects which actions are available (for example, changes may be restricted for a closed project).

Recommended approach:

- use the status to clearly understand whether the project is active or completed;
- move the project to a closed status only after completing the main work and recording the results.

### Completion and inactivity

A project may be considered:

- **closed** — if a closing status is set;
- **inactive** — if the end date is already in the past.

This affects selections in lists and makes it easier to work with current projects.

If the project is actually finished but its tasks are still being changed, check:

- whether the project status is selected correctly;
- whether the end date needs to be extended;
- whether there are restrictions on changes for closed projects.

## Project related sections

The project card typically provides related data (the set depends on configuration):

- **[project tasks](tasks.md)**;
- **[participants (team) and roles](team-and-roles.md)**;
- **[time entries](time-entries.md)**;
- related documents and operations (if the project is used to track costs/income).

Use the project as a single “accounting dimension”: this simplifies reporting and control.

## Comments

You can keep a discussion in a project using **comments**:

- you can see who left a record and when;
- the text can be detailed;
- the discussion is stored in the project context.

It is recommended to use comments as a log of decisions and agreements.

#### Recommendations for comments

- be concise and specific: what was decided, who does what, and by when;
- when changing due dates or priorities, record the reason;
- if the discussion relates to a specific task, duplicate key information in the task comments.

## Typical situations and solutions

#### The project is not visible in the active list

Check:

- whether the project is closed by status;
- whether the end date became earlier than the current date;
- whether a filter is enabled that restricts the list (for example, “Assigned to me”).

#### Cannot change the project

The reason is usually one of the following:

- there is no permission to edit;
- the project is in a closed status and changes are prohibited by rules;
- there are restrictions related to linked data (for example, documents/operations).

## Practical example

Scenario “create a project and start work”:

1. Create a project.
2. Fill in the name, dates, company, and manager.
3. Add project participants: either form the list manually, or assign a team to the project (if your organization uses teams).
4. Create several top-level tasks and assign executors.
5. Agree on status rules.
6. Start recording time for tasks.

Next: see [Tasks](tasks.md) and [Time entries](time-entries.md).