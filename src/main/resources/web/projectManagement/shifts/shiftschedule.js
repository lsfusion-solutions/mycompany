let dragShift = null;
let dragTemplate = null;

function shiftSchedule() {
    return {
        render: function (element, controller) {
            let schedule = document.createElement("div")
            schedule.classList.add("shift-schedule");

            element.appendChild(schedule);

            let templates = document.createElement("div")
            templates.classList.add("shift-schedule-templates");
            schedule.appendChild(templates);

            element.templates = templates;

            let scheduleTable = document.createElement("table")
            scheduleTable.classList.add("table");
            scheduleTable.classList.add("shift-schedule-table");

            schedule.appendChild(scheduleTable);

            element.scheduleTable = scheduleTable;
        },
        update: function (element, controller, list, options) {
            while (element.scheduleTable.lastElementChild) {
                element.scheduleTable.removeChild(element.scheduleTable.lastElementChild);
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
                            let date = moment(a.date).toISOString(true).substring(0, 10);
                            r[date] = r[date] || {};
                            r[date][a.assignedTo || "0"] = r[date][a.assignedTo || "0"] || [];
                            r[date][a.assignedTo || "0"].push(a);
                            return r;
                        }, dates);

            if (options && options.templates) {
                // templates

                for (let template of options.templates) {
                    let templateElement = document.createElement("button");
                    templateElement.classList.add("shift-schedule-template");
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
            header.classList.add("shift-schedule-header");
            header.classList.add("table-light");
            element.scheduleTable.appendChild(header);

            let headerRow = document.createElement("tr");
            header.appendChild(headerRow);

            let employeeHeader = document.createElement("th");
            employeeHeader.classList.add("shift-schedule-header-employee");
            headerRow.appendChild(employeeHeader);

            for (const date in dates) {
                let dateHeader = document.createElement("th")
                dateHeader.classList.add("shift-schedule-header-cell");
                dateHeader.innerHTML = new Date(date).getDate() + ".<br>" + new Date(date).toLocaleString("en-us", { weekday : "short" });
                headerRow.appendChild(dateHeader);
            }

            let body = document.createElement("tbody")
            body.classList.add("table-group-divider");
            element.scheduleTable.appendChild(body);

            for (const employee of employees) {
                if (!employee) {
                    continue;
                }
                let row = document.createElement("tr");
                row.classList.add("shift-schedule-row");

                let employeeCell = document.createElement("td");
                employeeCell.classList.add("shift-schedule-row-employee");
                employeeCell.innerHTML = employee.name;
                row.appendChild(employeeCell);

                for (const date in dates) {
                    let shiftCell = document.createElement("td");
                    if (new Date(date).getDay() == 0)
                        shiftCell.classList.add("shift-schedule-row-sunday");
                    row.appendChild(shiftCell);

                    let shiftCellDiv = document.createElement("div");
                    shiftCellDiv.classList.add("shift-schedule-row-cell");
                    shiftCell.appendChild(shiftCellDiv);

                    if (dates[date][employee.id])
                        for (const shift of dates[date][employee.id]) {
                            let shiftElement = document.createElement("button");
                            shiftElement.classList.add("shift-schedule-cell-shift");
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
                        this.classList.add('shift-schedule-drag-over');
                    });
                    shiftCell.addEventListener("dragleave", function(e) {
                        this.classList.remove('shift-schedule-drag-over');
                    });
                    shiftCell.addEventListener("drop", function(e) {
                          e.stopPropagation();

                          if (dragShift) {
                              controller.changeProperty("assignedTo", dragShift, employee.id == "0" ? null : employee.id);
                              const dt = new Date(date);
                              controller.changeProperty("date", dragShift, dt);
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