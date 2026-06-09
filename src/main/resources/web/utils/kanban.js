// Shared rendering for the task and lead kanban boards (CUSTOM components).
// taskkanban.js / leadkanban.js call kanban(config) with entity-specific field accessors;
// everything common — board/column/card scaffold, avatars, localized dates, drag-and-drop,
// scroll preservation, drop-jitter suppression, and the click-to-open preview popup (the only
// Edit/Delete affordance; double-click also edits) — lives here.

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

// group-separated money figure for the given locale (e.g. 1380000 -> "1 380 000"),
// trimming insignificant decimals; used for both the card amount and the column total
function kanbanFormatAmount(value, locale) {
    const n = Number(value);
    if (!isFinite(n)) return "";
    try {
        return new Intl.NumberFormat(locale || undefined, { maximumFractionDigits: 2 }).format(n);
    } catch (e) {
        return String(n);
    }
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

// Allowlist sanitizer for the stored rich-text description (RICHTEXT/HTML), shown in the hover popup.
// Renders the Quill formatting while dropping scripts, event handlers, inline styles and unsafe URLs
// so stored markup can't execute. Parsing happens in a detached <template> whose content is inert (no
// scripts run, no images load); we rebuild from scratch keeping only allowed tags. Same sanitizer as
// the comments / activities components.
function kanbanSanitizeHtml(html) {
    const ALLOWED = { A: 1, B: 1, STRONG: 1, I: 1, EM: 1, U: 1, S: 1, P: 1, BR: 1, OL: 1, UL: 1, LI: 1, SPAN: 1, BLOCKQUOTE: 1, PRE: 1, CODE: 1, H1: 1, H2: 1, H3: 1, H4: 1 };
    const SAFE_HREF = /^(https?:|mailto:|tel:|#|\/)/i;
    const tpl = document.createElement("template");
    tpl.innerHTML = String(html == null ? "" : html);
    const clean = (src, dst) => {
        for (const node of Array.from(src.childNodes)) {
            if (node.nodeType === 3) {
                dst.appendChild(document.createTextNode(node.nodeValue));
            } else if (node.nodeType === 1 && ALLOWED[node.tagName]) {
                const el = document.createElement(node.tagName);
                if (node.getAttribute("class")) el.setAttribute("class", node.getAttribute("class"));
                if (node.tagName === "A") {
                    const href = (node.getAttribute("href") || "").trim();
                    if (SAFE_HREF.test(href)) {
                        el.setAttribute("href", href);
                        el.setAttribute("target", "_blank");
                        el.setAttribute("rel", "noopener noreferrer");
                    }
                }
                clean(node, el);
                dst.appendChild(el);
            } else if (node.nodeType === 1) {
                clean(node, dst); // disallowed tag: keep its sanitized children, drop the wrapper
            }
        }
    };
    const out = document.createElement("div");
    clean(tpl.content, out);
    return out.innerHTML;
}

// config = {
//   key,            // "task" | "lead" — the field stored on the card element, used by drop/reorder
//   createStatus,   // action alias to create a new item in a status column
//   header(item)   -> string,             // card header (type : name); falsy = no header
//   subtitle(item) -> string,             // muted title line (author / customer)
//   text(item)     -> string,             // main line (name); falsy/absent = no line
//   amount(item)   -> number|null,        // money figure: shown formatted on the card and summed
//                                         //   into a per-column total in the header; absent = no money
//   created(item)  -> {date,text}|null,   // creation date at the top, never highlighted
//   assignee(item) -> string,             // assignee name (avatar + name); falsy = no block
//   due(item)      -> {date,text}|null,   // due date footer, red once it has passed
//   status(item)   -> string,             // popup only: status-name pill
//   priority(item) -> string,             // popup only: priority name (coloured via item.idColorPriority)
//   description(item) -> string|null,     // popup only: rich-text (HTML), sanitized before render
//   assignProp,     // popup only: form-property alias for in-card reassignment —
//                   //   changeProperty(alias, item, employeeId); needs OPTIONS.employees [{id,name}]
//                   //   plus an ON CHANGE (INPUT LONG) handler on that property
// }
function kanban(config) {
    const key = config.key;

    // ---- click popup ("красивая форма-подсказка", mirroring the activity calendar's .acal-pop) ----
    // One popup element is reused for every card. Clicking a card opens it; it previews the card and
    // exposes only the two quick actions the user asked for — Edit and Delete. It stays open until the
    // user clicks outside it, scrolls the board, drags a card, or runs an action.
    function cancelHide(st) { if (st.hideTimer) { clearTimeout(st.hideTimer); st.hideTimer = null; } }
    function hidePopup(st) { cancelHide(st); st.pop.style.display = "none"; st.popItem = null; }

    // Bootstrap theme colour for a priority, matching the card's left-accent mapping in kanban.css,
    // used here for the popup's top border so it reads as the same card.
    const PRIO_VAR = { danger: "--bs-danger", warning: "--bs-warning", success: "--bs-success",
                       info: "--bs-info", primary: "--bs-primary", secondary: "--bs-secondary" };

    function popButton(cls, icon, label, title, onClick) {
        let b = document.createElement("button");
        b.type = "button";
        b.className = "kanban-pop-btn " + cls;
        if (title) b.title = title;
        let i = document.createElement("i");
        i.className = icon;
        b.appendChild(i);
        if (label) { let s = document.createElement("span"); s.textContent = label; b.appendChild(s); }
        b.addEventListener("click", onClick);
        return b;
    }

    function showPopup(st, item, anchor, locale, i18n, employees) {
        cancelHide(st);
        const pop = st.pop;
        pop.className = "kanban-pop";
        pop.style.borderTopColor = (item.idColorPriority && PRIO_VAR[item.idColorPriority])
            ? "var(" + PRIO_VAR[item.idColorPriority] + ")" : "var(--bs-primary, #2563eb)";
        pop.innerHTML = "";

        // header (type : project / type : name) as a quiet uppercase label
        let header = config.header(item);
        if (header) {
            let h = document.createElement("div");
            h.className = "kanban-pop-type";
            h.textContent = header;
            pop.appendChild(h);
        }

        // status + priority badges (status is a neutral pill; priority is tinted with its colour)
        let statusName = config.status ? config.status(item) : null;
        let priorityName = config.priority ? config.priority(item) : null;
        if (statusName || priorityName) {
            let badges = document.createElement("div");
            badges.className = "kanban-pop-badges";
            if (statusName) {
                let b = document.createElement("span");
                b.className = "kanban-pop-status";
                b.textContent = statusName;
                badges.appendChild(b);
            }
            if (priorityName) {
                let b = document.createElement("span");
                b.className = "kanban-pop-prio badge rounded-pill text-bg-" + (item.idColorPriority ? item.idColorPriority : "secondary");
                b.textContent = priorityName;
                badges.appendChild(b);
            }
            pop.appendChild(badges);
        }

        // subtitle (author / customer)
        let subtitle = config.subtitle(item);
        if (subtitle) {
            let s = document.createElement("div");
            s.className = "kanban-pop-subtitle";
            s.textContent = subtitle;
            pop.appendChild(s);
        }

        // main text (task name) — leads carry the name in the header instead
        let text = config.text ? config.text(item) : null;
        if (text != null && text !== "") {
            let t = document.createElement("div");
            t.className = "kanban-pop-title";
            t.textContent = text;
            pop.appendChild(t);
        }

        // money figure (lead expected revenue)
        let amount = config.amount ? config.amount(item) : null;
        if (amount != null && amount !== "") {
            let a = document.createElement("div");
            a.className = "kanban-pop-amount";
            a.textContent = kanbanFormatAmount(amount, locale);
            pop.appendChild(a);
        }

        // created / due dates (due turns red once it has passed)
        let meta = document.createElement("div");
        meta.className = "kanban-pop-meta";
        let created = config.created(item);
        if (created && created.date)
            meta.appendChild(kanbanDateRow("kanban-pop-row", created.date, created.text, locale, false));
        let due = config.due(item);
        if (due && due.date) {
            let overdue = moment(due.date).isBefore(moment(), "day");
            meta.appendChild(kanbanDateRow("kanban-pop-row", due.date, due.text, locale, overdue));
        }
        if (meta.childElementCount) pop.appendChild(meta);

        // assignee — when the board provides an assign handler + an employee list, show a picker so
        // you can reassign straight from the card (like activities); the label shows who's assigned
        // now and clicking an avatar reassigns. Otherwise just show the current assignee.
        let assignee = config.assignee ? config.assignee(item) : null;
        if (config.assignProp && employees && employees.length) {
            let asg = document.createElement("div");
            asg.className = "kanban-pop-assign";
            let lab = document.createElement("div");
            lab.className = "kanban-pop-assign-label";
            let licon = document.createElement("i");
            licon.className = "bi bi-person";
            lab.appendChild(licon);
            let who = document.createElement("span");
            who.textContent = assignee || (i18n && i18n.unassigned) || "Unassigned";
            lab.appendChild(who);
            asg.appendChild(lab);
            let avs = document.createElement("div");
            avs.className = "kanban-pop-assign-avs";
            for (const emp of employees) {
                let ab = document.createElement("button");
                ab.type = "button";
                ab.className = "kanban-pop-asg-av" + (emp.name === assignee ? " current" : "");
                ab.textContent = kanbanInitialsOf(emp.name);
                ab.title = emp.name;
                ab.style.setProperty("--ahue", kanbanHueOf(emp.name));
                ab.addEventListener("click", function () {
                    st.controller.changeProperty(config.assignProp, item, emp.id);
                    hidePopup(st);
                });
                avs.appendChild(ab);
            }
            asg.appendChild(avs);
            pop.appendChild(asg);
        } else if (assignee) {
            let row = document.createElement("div");
            row.className = "kanban-pop-assignee";
            let avatar = document.createElement("span");
            avatar.className = "kanban-card-avatar";
            avatar.style.setProperty("--ahue", kanbanHueOf(assignee));
            avatar.textContent = kanbanInitialsOf(assignee);
            row.appendChild(avatar);
            let name = document.createElement("span");
            name.className = "kanban-pop-assignee-name";
            name.textContent = assignee;
            row.appendChild(name);
            pop.appendChild(row);
        }

        // tags
        if (item.tags && item.tags.length) {
            let tags = document.createElement("div");
            tags.className = "kanban-pop-tags";
            for (const tag of item.tags) {
                let badge = document.createElement("span");
                badge.className = "kanban-card-tag badge rounded-pill text-bg-" + (tag.idColor ? tag.idColor : "secondary");
                badge.textContent = tag.name;
                tags.appendChild(badge);
            }
            pop.appendChild(tags);
        }

        // description (RICHTEXT/HTML) — sanitized; skipped when it's empty rich-text (e.g. "<p><br></p>")
        let description = config.description ? config.description(item) : null;
        if (description) {
            let clean = kanbanSanitizeHtml(description);
            let probe = document.createElement("div");
            probe.innerHTML = clean;
            if (probe.textContent.trim()) {
                let d = document.createElement("div");
                d.className = "kanban-pop-desc ql-editor ql-bubble";
                d.innerHTML = clean;
                pop.appendChild(d);
            }
        }

        // actions — only Edit and Delete (labels localized server-side via OPTIONS i18n)
        let editLabel = (i18n && i18n.edit) || "Edit";
        let deleteLabel = (i18n && i18n.delete) || "Delete";
        let actions = document.createElement("div");
        actions.className = "kanban-pop-actions";
        actions.appendChild(popButton("kanban-pop-edit", "bi bi-pencil", editLabel, editLabel, function () {
            hidePopup(st);
            st.controller.changeProperty("edit", item);
        }));
        actions.appendChild(popButton("kanban-pop-delete", "bi bi-trash", "", deleteLabel, function () {
            hidePopup(st);
            st.controller.changeProperty("delete", item);
        }));
        pop.appendChild(actions);

        // position next to the card (fixed → not clipped by the board/column overflow), flipping to
        // the card's left and clamping vertically so it always stays on-screen
        pop.style.display = "block";
        const ar = anchor.getBoundingClientRect();
        const pw = pop.offsetWidth, ph = pop.offsetHeight;
        const vw = window.innerWidth, vh = window.innerHeight;
        let left = ar.right + 8;
        if (left + pw > vw - 6) left = ar.left - pw - 8;
        if (left < 6) left = Math.max(6, (vw - pw) / 2);
        let top = ar.top - 2;
        if (top + ph > vh - 6) top = Math.max(6, vh - ph - 6);
        if (top < 6) top = 6;
        pop.style.left = Math.round(left) + "px";
        pop.style.top = Math.round(top) + "px";
        st.popItem = item;
    }

    return {
        render: function (element, controller) {
            let board = document.createElement("div");
            board.classList.add("kanban");
            board.classList.add(key + "-kanban"); // entity hook for any board-specific css
            element.appendChild(board);
            element.kanban = board;

            // single hover popup, reused for every card. Appended to <body> (not `element`) so it
            // escapes the form's stacking contexts and panel/column overflow — otherwise the form's
            // own panels and filter fields paint over it. Fixed-positioned next to the hovered card.
            if (element.kanbanPop && element.kanbanPop.pop && element.kanbanPop.pop.parentNode)
                element.kanbanPop.pop.parentNode.removeChild(element.kanbanPop.pop); // guard a re-render
            let pop = document.createElement("div");
            pop.className = "kanban-pop";
            pop.style.display = "none";
            document.body.appendChild(pop);
            const st = { pop: pop, hideTimer: null, popItem: null, dragging: false, controller: controller };
            // any scroll inside the board (capture also catches the column bodies) dismisses the popup,
            // since it's fixed-positioned and would otherwise float away from its card
            board.addEventListener("scroll", function () { hidePopup(st); }, true);
            // the popup opens on a card click now, so a click anywhere outside it closes it. A click on
            // a card is skipped here (that card's own handler reopens the popup for it).
            const onDocClick = function (e) {
                if (st.pop.style.display === "none") return;
                if (st.pop.contains(e.target)) return;
                if (e.target.closest && e.target.closest(".kanban-card")) return;
                hidePopup(st);
            };
            document.addEventListener("click", onDocClick);
            element.kanbanDocClick = onDocClick;
            element.kanbanPop = st;
        },

        update: function (element, controller, list, options) {
            const board = element.kanban;
            const locale = options && options.locale;
            const i18n = (options && options.i18n) || {};
            const employees = (options && options.employees) || [];
            const st = element.kanbanPop;
            st.controller = controller;
            // the cards this popup was anchored to are about to be torn down and rebuilt
            hidePopup(st);

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
                statusName.textContent = status.name;
                statusHeader.appendChild(statusName);

                // count badge (how many cards are in this column)
                let statusCount = document.createElement("span");
                statusCount.classList.add("kanban-status-count");
                statusCount.classList.add("badge");
                statusCount.classList.add("rounded-pill");
                statusHeader.appendChild(statusCount);

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

                let count = 0, total = 0;
                for (const item of list)
                    if (item.status === status.id.toString()) {
                        count++;
                        if (config.amount) total += Number(config.amount(item)) || 0;
                        statusBody.appendChild(buildCard(item));
                    }

                statusCount.textContent = count;

                // aggregate money for the column, right under the header ("at the top")
                if (config.amount) {
                    let totalBar = document.createElement("div");
                    totalBar.classList.add("kanban-status-total");
                    let icon = document.createElement("i");
                    icon.className = "bi bi-cash-stack";
                    totalBar.appendChild(icon);
                    let amount = document.createElement("span");
                    amount.classList.add("kanban-status-total-amount");
                    amount.textContent = kanbanFormatAmount(total, locale);
                    totalBar.appendChild(amount);
                    statusDiv.appendChild(totalBar);
                }

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

            // suppress the hover popup while dragging (and hide any that's open), so it can't pop up
            // under the dragged card or over a drop target
            element.drake.on("drag", function () { st.dragging = true; hidePopup(st); });
            element.drake.on("dragend", function () { st.dragging = false; });

            function buildCard(item) {
                let card = document.createElement("div");
                card.classList.add("kanban-card");
                card.classList.add("card");
                if (item.idColorPriority) card.classList.add("text-bg-" + item.idColorPriority);
                // a click selects the card and opens its popup (no standard edit dialog); the popup
                // and double-click are the edit/delete affordances
                card.addEventListener("click", function () {
                    controller.changeObject(item, true, card);
                    showPopup(st, item, card, locale, i18n, employees);
                });
                card.addEventListener("dblclick", function () { hidePopup(st); controller.changeProperty("edit", item); });

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

                let text = config.text ? config.text(item) : null;
                if (text != null && text !== "") {
                    let t = document.createElement("div");
                    t.classList.add("kanban-card-text");
                    t.classList.add("card-text");
                    t.textContent = text;
                    body.appendChild(t);
                }

                // money figure (e.g. lead expected revenue) — formatted with group separators
                let amount = config.amount ? config.amount(item) : null;
                if (amount != null && amount !== "") {
                    let a = document.createElement("div");
                    a.classList.add("kanban-card-amount");
                    a.textContent = kanbanFormatAmount(amount, locale);
                    body.appendChild(a);
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
                        badge.textContent = tag.name;
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
            if (element.kanbanDocClick) document.removeEventListener("click", element.kanbanDocClick);
            if (element.kanbanPop) {
                hidePopup(element.kanbanPop);
                // the popup lives on <body>; remove it so it doesn't outlive the board
                let p = element.kanbanPop.pop;
                if (p && p.parentNode) p.parentNode.removeChild(p);
            }
        }
    };
}
