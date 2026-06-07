// Shared rendering for the task and lead kanban boards (CUSTOM components).
// taskkanban.js / leadkanban.js call kanban(config) with entity-specific field accessors;
// everything common — board/column/card scaffold, avatars, localized dates, drag-and-drop,
// scroll preservation and drop-jitter suppression — lives here.

// deterministic hue from a string — same hashing the shift schedule / activity calendar use for
// avatars, so a person keeps the same colour across the app
function kanbanHueOf(str) {
    let h = 0;
    str = str || "?";
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
    return h;
}

function kanbanInitialsOf(str) {
    let parts = (str || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "?";
    let s = parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "");
    return s.toUpperCase();
}

// localized short weekday (Mon-first) and full month names for the given locale, mirroring the
// activity calendar so kanban dates read the same as in Activities
function kanbanDateNames(locale) {
    try {
        const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
        const wd = [], mo = [];
        const fw = new Intl.DateTimeFormat(locale || undefined, { weekday: "short" });
        for (let i = 0; i < 7; i++) wd.push(cap(fw.format(new Date(2024, 0, 1 + i)))); // 2024-01-01 is a Monday
        const fm = new Intl.DateTimeFormat(locale || undefined, { month: "long" });
        for (let i = 0; i < 12; i++) mo.push(cap(fm.format(new Date(2024, i, 1))));
        return { wd, mo };
    } catch (e) {
        return null;
    }
}

// "Чт, 18 Июнь 2026 · Через 12d" — full localized date built from the locale plus the
// server-localized relative duration, exactly like the activity calendar's date row
function kanbanFormatDate(dateVal, duration, locale) {
    const m = moment(dateVal);
    const names = kanbanDateNames(locale);
    let ds = names
        ? names.wd[(m.day() + 6) % 7] + ", " + m.date() + " " + names.mo[m.month()] + " " + m.year()
        : m.format("YYYY-MM-DD");
    return ds + (duration ? "  ·  " + duration : "");
}

// "type : name" header text, omitting either side / the separator when absent
function kanbanHeader(type, name) {
    return (type ? type : "") + (name && type ? " : " : "") + (name ? name : "");
}

// a calendar-icon + localized-date row; `overdue` paints it red (used for a passed due date)
function kanbanDateRow(cls, dateVal, duration, locale, overdue) {
    let row = document.createElement("div");
    row.className = cls;
    if (overdue) row.classList.add("overdue");
    let icon = document.createElement("i");
    icon.className = "bi bi-calendar-event";
    row.appendChild(icon);
    let text = document.createElement("span");
    text.textContent = kanbanFormatDate(dateVal, duration, locale);
    row.appendChild(text);
    return row;
}

// after a drag, persist the new order of the cards in a column
function kanbanReorder(controller, elements, key) {
    for (let i = 0; i < elements.length; i++)
        if (elements[i][key] && elements[i][key].currentOrder !== i)
            controller.changeProperty("currentOrder", elements[i][key], i);
}

// config = {
//   key,            // "task" | "lead" — the field stored on the card element, used by drop/reorder
//   createStatus,   // action alias to create a new item in a status column
//   header(item)   -> string,             // card header (type : name); falsy = no header
//   subtitle(item) -> string,             // muted title line (author / customer)
//   text(item)     -> string,             // main line (name / revenue)
//   created(item)  -> {date,text}|null,   // creation date at the top, never highlighted
//   assignee(item) -> string,             // assignee name (avatar + name); falsy = no block
//   due(item)      -> {date,text}|null,   // due date footer, red once it has passed
// }
function kanban(config) {
    const key = config.key;

    return {
        render: function (element, controller) {
            let board = document.createElement("div");
            board.classList.add("kanban");
            board.classList.add(key + "-kanban"); // entity hook for any board-specific css
            element.appendChild(board);
            element.kanban = board;
        },

        update: function (element, controller, list, options) {
            const board = element.kanban;
            const locale = options && options.locale;

            // A drop calls changeProperty, which makes lsFusion re-run update() and rebuild the
            // whole board. Capture each column's scroll (and the board's horizontal scroll) so the
            // rebuild doesn't jump a scrolled column back to the top.
            const prevScrollLeft = board.scrollLeft;
            const prevScrollTop = {};
            board.querySelectorAll(".kanban-status-body").forEach(function (b) {
                if (b.status) prevScrollTop[b.status.id] = b.scrollTop;
            });

            // Suppress card transitions across the rebuild so the just-dropped card (under the
            // cursor) can't animate its hover lift/shadow on its own ("jitter"). The browser
            // re-evaluates :hover on the new node a frame or two after the rebuild, so we keep
            // transitions off until the user actually moves the pointer — by then the hover state
            // has settled and nothing animates; normal hover animations resume from that move on.
            board.classList.add("no-anim");
            if (element.kanbanResume)
                board.removeEventListener("pointermove", element.kanbanResume);
            element.kanbanResume = function () { board.classList.remove("no-anim"); };
            board.addEventListener("pointermove", element.kanbanResume, { once: true });

            if (element.drake) element.drake.destroy();
            element.drake = dragula();

            while (board.lastElementChild) board.removeChild(board.lastElementChild);

            if (options == null || !options.statuses) return;

            for (const status of options.statuses) {
                let statusDiv = document.createElement("div");
                statusDiv.classList.add("kanban-status");
                if (status !== options.statuses[0]) statusDiv.classList.add("border-start");

                let statusHeader = document.createElement("div");
                statusHeader.classList.add("kanban-status-header");
                statusDiv.appendChild(statusHeader);

                let statusName = document.createElement("div");
                statusName.classList.add("kanban-status-name");
                statusName.classList.add("h5");
                statusName.innerHTML = status.name;
                statusHeader.appendChild(statusName);

                let statusNew = document.createElement("button");
                statusNew.classList.add("kanban-status-new");
                statusNew.classList.add("btn");
                statusNew.classList.add("btn-light");
                statusNew.innerHTML = "<i class=\"bi bi-plus\"></i>";
                statusHeader.appendChild(statusNew);
                statusNew.addEventListener("click", function () {
                    controller.changeProperty(config.createStatus, null, status.id);
                });

                let statusBody = document.createElement("div");
                statusBody.classList.add("kanban-status-body");

                for (const item of list)
                    if (item.status === status.id.toString())
                        statusBody.appendChild(buildCard(item));

                statusDiv.appendChild(statusBody);
                statusBody.status = status;
                element.drake.containers.push(statusBody);
                board.appendChild(statusDiv);

                // restore this column's scroll now that its cards are in the DOM
                if (prevScrollTop[status.id] != null) statusBody.scrollTop = prevScrollTop[status.id];
            }

            board.scrollLeft = prevScrollLeft;

            element.drake.on("drop", function (el, target, source, sibling) {
                if (el[key].status !== target.status.id.toString())
                    controller.changeProperty("status", el[key], target.status.id);
                kanbanReorder(controller, target.children, key);
            });

            function buildCard(item) {
                let card = document.createElement("div");
                card.classList.add("kanban-card");
                card.classList.add("card");
                if (item.idColorPriority) card.classList.add("text-bg-" + item.idColorPriority);
                card.addEventListener("click", function () { controller.changeObject(item, true, card); });

                let header = config.header(item);
                if (header) {
                    let h = document.createElement("h5");
                    h.classList.add("kanban-card-header");
                    h.classList.add("card-header");
                    h.textContent = header;
                    card.appendChild(h);
                }

                let content = document.createElement("ul");
                content.classList.add("kanban-card-content");
                content.classList.add("list-group");
                content.classList.add("list-group-flush");
                card.appendChild(content);

                let body = document.createElement("li");
                body.classList.add("kanban-card-body");
                body.classList.add("list-group-item");
                content.appendChild(body);

                // creation date at the top — same format as the due date, never highlighted
                let created = config.created(item);
                if (created && created.date)
                    body.appendChild(kanbanDateRow("kanban-card-created", created.date, created.text, locale, false));

                let subtitle = config.subtitle(item);
                if (subtitle) {
                    let s = document.createElement("h6");
                    s.classList.add("kanban-card-subtitle");
                    s.classList.add("card-title");
                    s.classList.add("text-body-secondary");
                    s.textContent = subtitle;
                    body.appendChild(s);
                }

                let text = config.text(item);
                if (text != null && text !== "") {
                    let t = document.createElement("div");
                    t.classList.add("kanban-card-text");
                    t.classList.add("card-text");
                    t.textContent = text;
                    body.appendChild(t);
                }

                if (item.tags) {
                    let tags = document.createElement("li");
                    tags.classList.add("kanban-card-tags");
                    tags.classList.add("list-group-item");
                    for (const tag of item.tags) {
                        let badge = document.createElement("span");
                        badge.classList.add("kanban-card-tag");
                        badge.classList.add("badge");
                        badge.classList.add("rounded-pill");
                        badge.classList.add("text-bg-" + (tag.idColor ? tag.idColor : "secondary"));
                        badge.innerHTML = tag.name;
                        tags.appendChild(badge);
                    }
                    content.appendChild(tags);
                }

                // assignee block: only when someone is assigned, shown with an avatar
                let assignee = config.assignee(item);
                if (assignee) {
                    let li = document.createElement("li");
                    li.classList.add("kanban-card-assigned");
                    li.classList.add("list-group-item");
                    let avatar = document.createElement("span");
                    avatar.classList.add("kanban-card-avatar");
                    avatar.style.setProperty("--ahue", kanbanHueOf(assignee));
                    avatar.textContent = kanbanInitialsOf(assignee);
                    li.appendChild(avatar);
                    let name = document.createElement("span");
                    name.classList.add("kanban-card-assigned-name");
                    name.textContent = assignee;
                    li.appendChild(name);
                    content.appendChild(li);
                }

                let due = config.due(item);
                if (due && due.date) {
                    let overdue = moment(due.date).isBefore(moment(), "day");
                    let footer = kanbanDateRow("kanban-card-due", due.date, due.text, locale, overdue);
                    footer.classList.add("card-footer");
                    card.appendChild(footer);
                }

                card[key] = item;
                return card;
            }
        },

        clear: function (element) {
            if (element.drake) element.drake.destroy();
        }
    };
}
