// Task board — thin config over the shared kanban() renderer (see web/kanban.js).
function taskKanban() {
    return kanban({
        key: "task",
        createStatus: "createTaskStatus",
        header: function (t) { return kanbanHeader(t.nameType, t.nameProject); },
        subtitle: function (t) { return t.nameAuthor; },
        text: function (t) { return t.name; },
        status: function (t) { return t.nameStatus; },
        priority: function (t) { return t.namePriority; },
        assignProp: "assignedTo",
        hours: function (t) { return t.hoursTimeEntry; },
        logTimeProp: "logTime",
        created: function (t) { return { date: t.start, text: t.textStartDuration }; },
        assignee: function (t) { return t.nameAssignedTo; },
        // assignedTo is the SCALAR assignee id — Task.lsf declares `assignedTo = DATA Assignee (Task)`
        // (a single value; Employee IS-A Assignee). The 2-arg `assignedTo(Task, Employee)` in TaskKanban
        // is a separate derived membership predicate, not this field. photoById is keyed by employee id,
        // so an employee assignee matches and shows their photo; a non-employee assignee (team/group)
        // isn't in photoById and correctly falls back to initials.
        assigneeId: function (t) { return t.assignedTo; },
        due: function (t) { return { date: t.deadline, text: t.textDeadlineDuration }; },
        description: function (t) { return t.description; }
    });
}
