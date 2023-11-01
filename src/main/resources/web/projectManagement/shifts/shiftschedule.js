let dragShift = null;
let dragTemplate = null;

function shiftSchedule() {
    return {
        render: function (element, controller) {
            let dashboard = document.createElement("div")
            dashboard.classList.add("shift-dashboard");

            element.appendChild(dashboard);

            let templates = document.createElement("div")
            templates.classList.add("shift-dashboard-templates");
            dashboard.appendChild(templates);

            element.templates = templates;

            let dashboardTable = document.createElement("table")
            dashboardTable.classList.add("table");
            dashboardTable.classList.add("shift-dashboard-table");

            dashboard.appendChild(dashboardTable);

            element.dashboardTable = dashboardTable;
        },
        update: function (element, controller, list, options) {
            while (element.dashboardTable.lastElementChild) {
                element.dashboardTable.removeChild(element.dashboardTable.lastElementChild);
            }

            while (element.templates.lastElementChild) {
                element.templates.removeChild(element.templates.lastElementChild);
            }

            let dates = {};
            let employees = [{id : "0", name : ""}];

            if (options) {
                for (let d = new Date(options.from); d <= new Date(options.to); d.setDate(d.getDate() + 1)) {
                    dates[d.toISOString().substring(0, 10)] = {};
                }
                employees = employees.concat(options.employees);
            }

            dates = list.reduce(function (r, a) {
                            r[a.date] = r[a.date] || {};
                            r[a.date][a.assignedTo || "0"] = r[a.date][a.assignedTo || "0"] || [];
                            r[a.date][a.assignedTo || "0"].push(a);
                            return r;
                        }, dates);

            if (options && options.shiftTemplates) {
                // templates

                for (let template of options.shiftTemplates) {
                    let templateElement = document.createElement("button");
                    templateElement.classList.add("shift-dashboard-template");
                    templateElement.classList.add("btn");
                    templateElement.classList.add("btn-info");
                    templateElement.innerHTML = template.intervalS;

                    // drag/drop
                    templateElement.setAttribute("draggable", "true");
                    templateElement.addEventListener("dragstart", function(e) {
                        e.dataTransfer.effectAllowed = 'move';
                        dragTemplate = template;
                        dragShift = null;
                    });

                    element.templates.appendChild(templateElement);
                }
            }


            // header
            let header = document.createElement("thead")
            header.classList.add("shift-dashboard-header");
            header.classList.add("table-light");
            element.dashboardTable.appendChild(header);

            let headerRow = document.createElement("tr");
            header.appendChild(headerRow);

            let employeeHeader = document.createElement("th");
            employeeHeader.classList.add("shift-dashboard-header-employee");
            headerRow.appendChild(employeeHeader);

            for (const date in dates) {
                let dateHeader = document.createElement("th")
                dateHeader.classList.add("shift-dashboard-header-cell");
                dateHeader.innerHTML = new Date(date).getDate() + ".<br>" + new Date(date).toLocaleString("en-us", { weekday : "short" });
                headerRow.appendChild(dateHeader);
            }

            let body = document.createElement("tbody")
            body.classList.add("table-group-divider");
            element.dashboardTable.appendChild(body);

            for (const employee of employees) {
                let row = document.createElement("tr");
                row.classList.add("shift-dashboard-row");

                let employeeCell = document.createElement("td");
                employeeCell.classList.add("shift-dashboard-row-employee");
                employeeCell.innerHTML = employee.name;
                row.appendChild(employeeCell);

                for (const date in dates) {
                    let shiftCell = document.createElement("td");
                    if (new Date(date).getDay() == 0)
                        shiftCell.classList.add("shift-dashboard-row-sunday");
                    row.appendChild(shiftCell);

                    let shiftCellDiv = document.createElement("div");
                    shiftCellDiv.classList.add("shift-dashboard-row-cell");
                    shiftCell.appendChild(shiftCellDiv);

                    if (dates[date][employee.id])
                        for (const shift of dates[date][employee.id]) {
                            let shiftElement = document.createElement("button");
                            shiftElement.classList.add("shift-dashboard-cell-shift");
                            shiftElement.classList.add("btn");
                            shiftElement.classList.add("btn-info");
                            shiftElement.innerHTML = shift.intervalS;
                            shiftElement.addEventListener("click", function() {
                                controller.changeObject(shift, true, shiftElement);
                            });

                            // drag/drop
                            shiftElement.setAttribute("draggable", "true");
                            shiftElement.addEventListener("dragstart", function(e) {
                                e.dataTransfer.effectAllowed = 'move';
                                dragTemplate = null;
                                dragShift = shift;
                            });

                            shiftCellDiv.appendChild(shiftElement);
                        }

                    shiftCell.addEventListener("dragover", function(e) {
                          e.preventDefault();
                    });
                    shiftCell.addEventListener("dragenter", function(e) {
                        this.classList.add('shift-dashboard-drag-over');
                    });
                    shiftCell.addEventListener("dragleave", function(e) {
                        this.classList.remove('shift-dashboard-drag-over');
                    });
                    shiftCell.addEventListener("drop", function(e) {
                          e.stopPropagation();

                          if (dragShift) {
                              controller.changeProperty("assignedTo", dragShift, employee.id == "0" ? null : employee.id);
                              const dt = new Date(date);
                              controller.changeDateProperty("date", dragShift, dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
                              dragShift = null;
                          }
                          if (dragTemplate) {
                              controller.changeProperty("createShift", null, { templateId: dragTemplate.id,
                                                                               date: date,
                                                                               employeeId : employee.id == "0" ? null : employee.id} );
                              dragTemplate = null;
                          }
                          return false;
                    });
                }

                body.appendChild(row);
            }
        }
    }
}