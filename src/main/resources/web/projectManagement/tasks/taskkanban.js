function taskKanbanReorder(controller, elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].task.currentOrder !== i) {
            controller.changeProperty("currentOrder", elements[i].task, i);
        }
    }
}
function taskKanban() {
    return {
        render: function (element, controller) {
            let kanban = document.createElement("div")
            kanban.classList.add("task-kanban");

            element.appendChild(kanban);

            element.kanban = kanban;
        },
        update: function (element, controller, list, options) {
            if (element.drake)
                element.drake.destroy();
            element.drake = dragula();

            while (element.kanban.lastElementChild) {
                element.kanban.removeChild(element.kanban.lastElementChild);
            }

            if (options == null || !options.statuses) return;

            for (const status of options.statuses) {
                let statusDiv = document.createElement("div")
                statusDiv.classList.add("task-kanban-status");
                if (status !== options.statuses[0])
                    statusDiv.classList.add("border-start");

                let statusHeader = document.createElement("div");
                statusHeader.classList.add("task-kanban-status-header");
                statusDiv.appendChild(statusHeader);

                let statusName = document.createElement("div");
                statusName.classList.add("task-kanban-status-name");
                statusName.classList.add("h5");
                statusName.innerHTML = status.name;
                statusHeader.appendChild(statusName);

                let statusNew = document.createElement("button");
                statusNew.classList.add("task-kanban-status-new");
                statusNew.classList.add("btn");
                statusNew.classList.add("btn-light");
                statusNew.innerHTML = "<i class=\"bi bi-plus\"></i>";
                statusHeader.appendChild(statusNew);

                statusNew.addEventListener("click", function() {
                    controller.changeProperty("createTaskStatus", null, status.id);
                });

                let statusBody = document.createElement("div");
                statusBody.classList.add("task-kanban-status-body");

                for (const task of list)
                    if (task.status === status.id.toString()) {
                        let taskCard = document.createElement("div");
                        taskCard.classList.add("task-kanban-card");
                        taskCard.classList.add("card");
                        if (task.idColorPriority)
                            taskCard.classList.add("text-bg-" + task.idColorPriority);

                        taskCard.addEventListener("click", function() {
                            controller.changeObject(task, true, taskCard);
                        });

                        if (task.nameProject || task.nameType) {
                            let taskHeader = document.createElement("h5");
                            taskHeader.classList.add("task-kanban-card-header");
                            taskHeader.classList.add("card-header");
                            taskHeader.innerHTML = (task.nameType ? task.nameType : "") +
                                                   (task.nameProject && task.nameType ? " : " : "") +
                                                   (task.nameProject ? task.nameProject : "");
                            taskCard.appendChild(taskHeader);
                        }

                        let taskContent = document.createElement("ul");
                        taskContent.classList.add("task-kanban-card-content");
                        taskContent.classList.add("list-group");
                        taskContent.classList.add("list-group-flush");
                        taskCard.appendChild(taskContent);

                        let taskBody = document.createElement("il");
                        taskBody.classList.add("task-kanban-card-body");
                        taskBody.classList.add("list-group-item");
                        taskContent.appendChild(taskBody);

                        let taskAuthor = document.createElement("h6");
                        taskAuthor.classList.add("task-kanban-card-author");
                        taskAuthor.classList.add("card-title");
                        taskAuthor.classList.add("text-body-secondary");
                        taskAuthor.innerHTML = task.nameAuthor;
                        taskBody.appendChild(taskAuthor);

                        let taskName = document.createElement("div");
                        taskName.classList.add("task-kanban-card-name");
                        taskName.classList.add("card-text");
                        taskName.innerHTML = task.name;
                        taskBody.appendChild(taskName);

                        if (task.tags) {
                            let taskTags = document.createElement("li");
                            taskTags.classList.add("task-kanban-card-tags");
                            taskTags.classList.add("list-group-item");
                            for (const tag of task.tags) {
                                let taskTag = document.createElement("span");
                                taskTag.classList.add("task-kanban-card-tag");
                                taskTag.classList.add("badge");
                                taskTag.classList.add("rounded-pill");
                                taskTag.classList.add("text-bg-" + (tag.idColor ? tag.idColor : "secondary"));
                                taskTag.innerHTML = tag.name;
                                taskTags.appendChild(taskTag);
                            }
                            taskContent.appendChild(taskTags);
                        }

                        let taskAssignedTo = document.createElement("li");
                        taskAssignedTo.classList.add("task-kanban-card-assigned-to");
                        taskAssignedTo.classList.add("list-group-item");
                        taskAssignedTo.innerHTML = task.nameAssignedTo;
                        taskContent.appendChild(taskAssignedTo);

                        if (task.deadline) {
                            let taskDeadline = document.createElement("div");
                            taskDeadline.classList.add("task-kanban-card-deadline");
                            taskDeadline.classList.add("card-footer");
                            taskDeadline.innerHTML = moment(task.deadline).toISOString(true).substring(0, 10);
                            taskCard.appendChild(taskDeadline);
                        }

                        taskCard.task = task;
                        statusBody.appendChild(taskCard);
                    }

                statusDiv.appendChild(statusBody);

                statusBody.status = status;
                element.drake.containers.push(statusBody);

                element.kanban.appendChild(statusDiv);
            }

            element.drake.on("drop", function(el, target, source, sibling) {
                if (el.task.status !== target.status.id.toString())
                    controller.changeProperty("status", el.task, target.status.id);
                taskKanbanReorder(controller, target.children);
            });

        },
        clear: function (element) {
            if (element.drake)
                element.drake.destroy();
        }
    }
}
