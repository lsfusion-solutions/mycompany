function activities() {
    return {
        render: function (element, controller) {
            let activities = document.createElement("div")
            activities.classList.add("activities");

            element.appendChild(activities);

            element.activities = activities;
        },
        update: function (element, controller, list, options) {
            while (element.activities.lastElementChild) {
                element.activities.removeChild(element.activities.lastElementChild);
            }

            for (const activity of list) {
                let activityCard = document.createElement("div");
                activityCard.classList.add("activity");
                activityCard.classList.add("card");
                element.activities.appendChild(activityCard);

                let activityHeader = document.createElement("div");
                activityHeader.classList.add("activity-header");
                activityHeader.classList.add("card-header");
                activityHeader.classList.add(activity.daysLeft < 0 ? "text-bg-danger" : "text-bg-success");
                activityCard.appendChild(activityHeader);

                let assignedTo = document.createElement("div")
                assignedTo.classList.add("activity-assigned-to");
                assignedTo.innerHTML = activity.nameAssignedTo;
                activityHeader.appendChild(assignedTo);

                let dueDate = document.createElement("div")
                dueDate.classList.add("activity-due-date");
                dueDate.setAttribute("title", activity.dueDate);
                dueDate.innerHTML = activity.textDateDuration;
                activityHeader.appendChild(dueDate);

                let type = document.createElement("div")
                type.classList.add("activity-type");
                type.innerHTML = activity.nameType;
                activityHeader.appendChild(type);

                if (!activity.done) {
                    let actions = document.createElement("div");
                    actions.classList.add("activity-actions");
                    activityHeader.appendChild(actions);

                    let doneButton = document.createElement("button");
                    doneButton.classList.add("btn");
                    doneButton.classList.add("activity-done");
                    actions.appendChild(doneButton);

                    let doneIcon = document.createElement("i");
                    doneIcon.classList.add("bi");
                    doneIcon.classList.add("bi-check-circle");
                    doneButton.appendChild(doneIcon);

                    doneButton.addEventListener("click", function () {
                        controller.changeProperty("setDone", activity);
                    });

                    let editButton = document.createElement("button");
                    editButton.classList.add("btn");
                    editButton.classList.add("activity-edit");
                    actions.appendChild(editButton);

                    let editIcon = document.createElement("i");
                    editIcon.classList.add("bi");
                    editIcon.classList.add("bi-pencil-square");
                    editButton.appendChild(editIcon);

                    editButton.addEventListener("click", function () {
                        controller.changeProperty("editAct", activity);
                    });

                    let deleteButton = document.createElement("button");
                    deleteButton.classList.add("btn");
                    deleteButton.classList.add("activity-delete");
                    actions.appendChild(deleteButton);

                    let deleteIcon = document.createElement("i");
                    deleteIcon.classList.add("fa");
                    deleteIcon.classList.add("fa-minus");
                    deleteButton.appendChild(deleteIcon);

                    deleteButton.addEventListener("click", function () {
                        controller.changeProperty("deleteAct", activity);
                    });
                }

                let activityBody = document.createElement("div");
                activityBody.classList.add("activity-header");
                activityBody.classList.add("card-body");
                activityCard.appendChild(activityBody);

                if (activity.name) {
                    let name = document.createElement("h5")
                    name.classList.add("activity-name");
                    name.innerHTML = activity.name;
                    activityBody.appendChild(name);
                }

                if (activity.description) {
                    let description = document.createElement("div");
                    description.classList.add("activity-description");
                    description.classList.add("ql-editor");
                    description.classList.add("ql-bubble"); // to remove
                    description.innerHTML = activity.description;
                    activityBody.appendChild(description);
                }
            }
        },
        clear: function (element) {
        }
    }
}
