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

            for (const status of options.statuses) {
                let statusDiv = document.createElement("div")
                statusDiv.classList.add("task-kanban-status");

                let statusHeader = document.createElement("h5");
                statusHeader.classList.add("task-kanban-status-header");
                statusHeader.innerHTML = status.name;
                statusDiv.appendChild(statusHeader);

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

                        if (task.nameProject) {
                            let taskHeader = document.createElement("h5");
                            taskHeader.classList.add("task-kanban-card-header");
                            taskHeader.classList.add("card-header");
                            taskHeader.innerHTML = task.nameProject;
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

                        let taskAssignedTo = document.createElement("li");
                        taskAssignedTo.classList.add("task-kanban-card-assigned-to");
                        taskAssignedTo.classList.add("list-group-item");
                        taskAssignedTo.innerHTML = task.nameAssignedTo;
                        taskContent.appendChild(taskAssignedTo);

                        if (task.deadline) {
                            let taskDeadline = document.createElement("div");
                            taskDeadline.classList.add("task-kanban-card-deadline");
                            taskDeadline.classList.add("card-footer");
                            taskDeadline.innerHTML = task.deadline;
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
