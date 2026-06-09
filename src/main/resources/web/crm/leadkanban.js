// Lead board — thin config over the shared kanban() renderer (see web/kanban.js).
function leadKanban() {
    return kanban({
        key: "lead",
        createStatus: "createLeadStatus",
        header: function (l) { return kanbanHeader(l.nameType, l.name); },
        subtitle: function (l) { return l.nameCustomer; },
        status: function (l) { return l.nameStatus; },
        priority: function (l) { return l.namePriority; },
        assignProp: "salesPerson",
        amount: function (l) { return l.expectedRevenue; },
        created: function (l) { return { date: l.date, text: l.textDateDuration }; },
        assignee: function (l) { return l.nameSalesPerson; },
        due: function (l) { return { date: l.expectedClosing, text: l.textExpectedClosingDuration }; },
        description: function (l) { return l.description; }
    });
}
