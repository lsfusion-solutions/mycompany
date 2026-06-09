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
        due: function (t) { return { date: t.deadline, text: t.textDeadlineDuration }; },
        description: function (t) { return t.description; }
    });
}
