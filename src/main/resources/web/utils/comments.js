function comments() {
    return {
        render: function (element, controller) {
            let comments = document.createElement("div")
            comments.classList.add("comments");

            element.appendChild(comments);

            element.comments = comments;
        },
        update: function (element, controller, list, options) {
            while (element.comments.lastElementChild) {
                element.comments.removeChild(element.comments.lastElementChild);
            }

            for (const comment of list) {
                let statusHeader = document.createElement("div");
                statusHeader.classList.add("comments-header");
                element.comments.appendChild(statusHeader);

                let author = document.createElement("div")
                author.classList.add("comments-author");
                author.innerHTML = comment.nameUser;
                statusHeader.appendChild(author);

                let time = document.createElement("div")
                time.classList.add("comments-time");
                time.innerHTML = comment.textTimeDuration;
                time.setAttribute("title", comment.dateTime);
                statusHeader.appendChild(time);

                let editButton = document.createElement("button");
                editButton.classList.add("btn");
                editButton.classList.add("comments-edit");
                statusHeader.appendChild(editButton);

                let editIcon = document.createElement("i");
                editIcon.classList.add("bi");
                editIcon.classList.add("bi-pencil-square");
                editButton.appendChild(editIcon);

                editButton.addEventListener("click", function() {
                    controller.changeProperty("edit", comment);
                });

                let deleteButton = document.createElement("button");
                deleteButton.classList.add("btn");
                deleteButton.classList.add("comments-delete");
                statusHeader.appendChild(deleteButton);

                let deleteIcon = document.createElement("i");
                deleteIcon.classList.add("fa");
                deleteIcon.classList.add("fa-minus");
                deleteButton.appendChild(deleteIcon);

                deleteButton.addEventListener("click", function() {
                    controller.changeProperty("delete", comment);
                });

                let message = document.createElement("div");
                message.classList.add("comments-message");
                message.classList.add("ql-editor");
                message.classList.add("ql-bubble"); // to remove
                message.innerHTML = comment.text;
                element.comments.appendChild(message);
            }
        },
        clear: function (element) {
        }
    }
}
