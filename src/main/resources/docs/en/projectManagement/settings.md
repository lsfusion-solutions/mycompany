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

Project statuses reflect the project lifecycle. Typically, at minimum they include:

- active statuses (for example, “in progress”);
- a closing status.

Recommendation: agree on when a project is moved to a closed status and formalize the rule in your internal routine.

#### Task types

A task type helps separate tasks by purpose (for example, development, approval, control). Often, the type affects available statuses and transition rules.

#### Task statuses

Task statuses reflect execution stages (for example, “new”, “in progress”, “done”). The set of statuses is selected based on the team’s workflow.

#### Workflow

The workflow defines:

- which transitions between statuses are allowed;
- in what order a task goes through stages;
- who can perform a specific transition.

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

If the system uses automatic project numbering and/or task code generation, numbering setup is usually done in this section.

Recommendation: do not change numbering rules without necessity to preserve continuity and keep the history understandable.

## Check after changing settings

After changing directories and rules, it is recommended to:

1. Create a test project and a test task.
2. Check that statuses and transitions work as expected.
3. Ensure that the required actions are available to users with different roles.