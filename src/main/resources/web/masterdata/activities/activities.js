// Allowlist sanitizer for the stored rich-text activity description (RICHTEXT/HTML). Renders the
// Quill formatting while dropping scripts, event handlers, inline styles and unsafe URLs so stored
// markup can't execute. Parsing happens in a detached <template> whose content is inert (no scripts
// run, no images load); we rebuild from scratch keeping only allowed tags. Shared by the activities()
// list and the activityCalendar() popup below.
function sanitizeHtml(html) {
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

function activities() {

    // deterministic hue from a string, matching the calendar avatars
    function hueOf(str) {
        let h = 0;
        str = str || "?";
        for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
        return h;
    }

    function initialsOf(str) {
        let parts = (str || "").trim().split(/\s+/).filter(Boolean);
        if (!parts.length) return "?";
        let s = parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "");
        return s.toUpperCase();
    }

    function iconButton(cls, icon, title, onClick) {
        let btn = document.createElement("button");
        btn.type = "button";
        btn.className = "act-btn " + cls;
        btn.title = title;
        let i = document.createElement("i");
        i.className = icon;
        btn.appendChild(i);
        btn.addEventListener("click", onClick);
        return btn;
    }

    return {
        render: function (element, controller) {
            let activities = document.createElement("div");
            activities.classList.add("activities");
            element.appendChild(activities);
            element.activities = activities;
        },
        update: function (element, controller, list, options) {
            let root = element.activities;
            while (root.lastElementChild) root.removeChild(root.lastElementChild);

            // all UI labels come from the server (OPTIONS) so they follow the user's language;
            // the English values are only fallbacks when an option is missing
            let t = (options && options.i18n) || {};
            let noActivities = t.noActivities || "No activities";
            let doneLabel = t.done || "Done";
            let editLabel = t.edit || "Edit";
            let deleteLabel = t.delete || "Delete";

            if (!list || !list.length) {
                let empty = document.createElement("div");
                empty.className = "act-empty";
                let emptyIcon = document.createElement("i");
                emptyIcon.className = "bi bi-calendar-check";
                let emptyText = document.createElement("span");
                emptyText.textContent = noActivities;
                empty.appendChild(emptyIcon);
                empty.appendChild(emptyText);
                root.appendChild(empty);
                return;
            }

            for (const activity of list) {
                let status = activity.done ? "done" : (activity.daysLeft < 0 ? "overdue" : "upcoming");

                let card = document.createElement("div");
                card.className = "act status-" + status;
                card.style.setProperty("--hue", hueOf(activity.nameType));
                root.appendChild(card);

                let bar = document.createElement("div");
                bar.className = "act-bar";
                card.appendChild(bar);

                let main = document.createElement("div");
                main.className = "act-main";
                card.appendChild(main);

                // ---- head: type pill, due date, actions ----
                let head = document.createElement("div");
                head.className = "act-head";
                main.appendChild(head);

                if (activity.nameType) {
                    let type = document.createElement("span");
                    type.className = "act-type";
                    type.textContent = activity.nameType;
                    head.appendChild(type);
                }

                let due = document.createElement("span");
                due.className = "act-due";
                due.setAttribute("title", activity.dueDate || "");
                let dueIcon = document.createElement("i");
                dueIcon.className = activity.done ? "bi bi-check-circle" : "bi bi-clock";
                due.appendChild(dueIcon);
                let dueText = document.createElement("span");
                dueText.textContent = activity.textDateDuration || "";
                due.appendChild(dueText);
                head.appendChild(due);

                if (!activity.done) {
                    let actions = document.createElement("div");
                    actions.className = "act-actions";
                    head.appendChild(actions);

                    actions.appendChild(iconButton("act-done", "bi bi-check-lg", doneLabel, function () {
                        controller.changeProperty("setDone", activity);
                    }));
                    actions.appendChild(iconButton("act-edit", "bi bi-pencil", editLabel, function () {
                        controller.changeProperty("editAct", activity);
                    }));
                    actions.appendChild(iconButton("act-delete", "bi bi-trash", deleteLabel, function () {
                        controller.changeProperty("deleteAct", activity);
                    }));
                }

                // ---- title ----
                if (activity.name) {
                    let name = document.createElement("div");
                    name.className = "act-title";
                    name.textContent = activity.name;
                    main.appendChild(name);
                }

                // ---- description ----
                if (activity.description) {
                    let description = document.createElement("div");
                    description.className = "act-desc ql-editor ql-bubble";
                    description.innerHTML = sanitizeHtml(activity.description);
                    main.appendChild(description);
                }

                // ---- footer: assignee ----
                if (activity.nameAssignedTo) {
                    let foot = document.createElement("div");
                    foot.className = "act-foot";
                    main.appendChild(foot);

                    let avatar = document.createElement("span");
                    avatar.className = "act-avatar";
                    avatar.style.setProperty("--ahue", hueOf(activity.nameAssignedTo));
                    avatar.textContent = initialsOf(activity.nameAssignedTo);
                    foot.appendChild(avatar);

                    let who = document.createElement("span");
                    who.className = "act-assigned";
                    who.textContent = activity.nameAssignedTo;
                    foot.appendChild(who);
                }
            }
        },
        clear: function (element) {
        }
    }
}


// ======================================================================
// Calendar custom view ('activityCalendar') — merged from activityCalendar.js
// ======================================================================

// Custom calendar for the `activities` form. lsFusion contract: render() once,
// then update(element, controller, list, options) on every data change.
// Features: Month / Week / Agenda views, type & assignee filters (legend),
// header stats, drag-to-reschedule, per-day quick-add, rich hover popup.
//
// list items expose the form properties added to the CUSTOM object group:
//   iso, tperiod, time, till, nameType, gname, name(HTML), nameObject,
//   nameAssignedTo, done, daysLeft, description.
// Actions via controller.changeProperty(alias, item[, value]); current object
// via controller.changeObject(item).

let acalDrag = null; // dragged activity, shared across closures (cf. shiftschedule.js)

// English fallbacks - the real text comes from the server through OPTIONS (options.i18n),
// and weekday / month names are derived from the user's locale (options.locale) at runtime.
const ACAL_DEFAULT_WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const ACAL_DEFAULT_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const ACAL_DEFAULT_I18N = {
    noActivities: 'No activities', done: 'Done', edit: 'Edit', delete: 'Delete',
    open: 'Open', openObject: 'Open', overdue: 'Overdue', all: 'All', today: 'Today', agenda: 'Agenda',
    month: 'Month', week: 'Week', unassigned: 'Unassigned', noName: '(no name)',
    allDay: 'all day', markAsDone: 'Mark as done', newActivity: 'New activity on this day',
    more: 'more', activitiesWord: 'activities', overdueWord: 'overdue'
};

// localized short weekday (Mon-first) and full month names for the given locale code
function acalDateNames(locale) {
    try {
        const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
        const wd = [], mo = [];
        const fw = new Intl.DateTimeFormat(locale || undefined, { weekday: 'short' });
        for (let i = 0; i < 7; i++) wd.push(cap(fw.format(new Date(2024, 0, 1 + i)))); // 2024-01-01 is a Monday
        const fm = new Intl.DateTimeFormat(locale || undefined, { month: 'long' });
        for (let i = 0; i < 12; i++) mo.push(cap(fm.format(new Date(2024, i, 1))));
        return { wd, mo };
    } catch (e) {
        return { wd: ACAL_DEFAULT_WEEKDAYS.slice(), mo: ACAL_DEFAULT_MONTHS.slice() };
    }
}

function activityCalendar() {
    // populated from OPTIONS on every update(); start with the English / default-locale fallbacks
    let WEEKDAYS = ACAL_DEFAULT_WEEKDAYS.slice();
    let MONTHS = ACAL_DEFAULT_MONTHS.slice();
    let I18N = ACAL_DEFAULT_I18N;
    // curated, evenly-pleasant hues; type name -> stable hue
    const PALETTE = [212, 150, 268, 28, 338, 190, 48, 300, 128, 8];

    // lsFusion serializes a DATE as a plain "YYYY-MM-DD" string. Parse it as a LOCAL date (split the
    // parts) so the bucket/title never drift a day for clients west of UTC — new Date("YYYY-MM-DD")
    // parses as UTC midnight, which reads back as the previous local day there. Non date-only values
    // fall back to the native parser. (Same approach as the shift schedule's parseKey/dateKey.)
    const dateOf = (a) => {
        if (!a.date) return null;
        const s = String(a.date);
        let dt;
        if (/^\d{4}-\d{2}-\d{2}/.test(s)) { const p = s.slice(0, 10).split("-").map(Number); dt = new Date(p[0], p[1] - 1, p[2]); }
        else dt = new Date(s);
        return isNaN(dt.getTime()) ? null : dt;
    };
    const keyOf = (dt) => dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
    const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    const addDays = (dt, n) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + n);
    const startOfWeek = (dt) => addDays(dt, -((dt.getDay() + 6) % 7)); // Monday
    const today = () => { const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); };

    function typeHue(name) {
        let h = 0;
        for (let i = 0; i < (name || '').length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
        return PALETTE[h % PALETTE.length];
    }
    // Activity-type colour: assigned per distinct type by sorted order (st.typeColors),
    // so different types always get different palette hues. Hashing the name (typeHue)
    // is kept only for person avatars - for the few real type names it collided them
    // all onto the palette's two greens.
    function typeColor(st, name) {
        return (st.typeColors && st.typeColors[name || '']) || PALETTE[0];
    }
    function initials(name) {
        if (!name) return '';
        return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
    }
    function statusOf(a) {
        if (a.done) return { key: 'done', label: I18N.done };
        if (typeof a.daysLeft === 'number' && a.daysLeft < 0) return { key: 'overdue', label: I18N.overdue };
        return { key: 'open', label: I18N.open };
    }
    function btn(html, cls, title) {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'acal-btn ' + (cls || ''); b.innerHTML = html;
        if (title) b.title = title; return b;
    }
    // status + type filters, but NOT the assignee selection (used to build the
    // assignee list itself, so selecting people doesn't shrink the list)
    function passStatusType(st, a) {
        if (st.statusFilter === 'open' && a.done) return false;
        if (st.statusFilter === 'done' && !a.done) return false;
        if (st.hiddenTypes.has(a.nameType || '')) return false;
        return true;
    }
    function visible(st, a) {
        if (!passStatusType(st, a)) return false;
        // assignee filter is inclusive: no one selected = show all; otherwise only the picked people
        if (st.selectedAssignees.size && !st.selectedAssignees.has(a.nameAssignedTo)) return false;
        return true;
    }
    function bucket(list) {
        const m = {};
        for (const a of list) { const dt = dateOf(a); if (!dt) continue; (m[keyOf(dt)] = m[keyOf(dt)] || []).push(a); }
        for (const k in m) m[k].sort((x, y) => (x.tperiod || '~').localeCompare(y.tperiod || '~'));
        return m;
    }

    // ---------------- popup ----------------
    function cancelHide(st) { if (st.hideTimer) { clearTimeout(st.hideTimer); st.hideTimer = null; } }
    function hidePopup(st) { cancelHide(st); st.pop.style.display = 'none'; st.popFor = null; }
    function scheduleHide(st) { cancelHide(st); st.hideTimer = setTimeout(() => hidePopup(st), 180); }
    function showPopup(st, a, anchor) {
        cancelHide(st);
        const pop = st.pop, status = statusOf(a), hue = typeColor(st, a.nameType);
        pop.className = 'acal-pop status-' + status.key;
        pop.style.setProperty('--hue', hue);
        pop.innerHTML = '';
        const head = document.createElement('div'); head.className = 'acal-pop-head';
        const badge = document.createElement('span'); badge.className = 'acal-pop-type'; badge.textContent = a.nameType || '';
        const pill = document.createElement('span'); pill.className = 'acal-pop-status'; pill.textContent = status.label;
        head.append(badge, pill); pop.appendChild(head);
        const title = document.createElement('div'); title.className = 'acal-pop-title';
        title.textContent = a.gname || a.nameType || I18N.noName; pop.appendChild(title);
        const meta = document.createElement('div'); meta.className = 'acal-pop-meta';
        const row = (icon, text) => {
            if (!text) return;
            const r = document.createElement('div'); r.className = 'acal-pop-row';
            r.innerHTML = '<i class="bi ' + icon + '"></i><span></span>';
            r.querySelector('span').textContent = text; meta.appendChild(r);
        };
        const d = dateOf(a);
        let ds = '';
        if (d) ds = WEEKDAYS[(d.getDay() + 6) % 7] + ', ' + d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
        const dur = a.textDateDuration || ''; // server-side, already localized
        row('bi-calendar-event', ds + (dur ? '  ·  ' + dur : ''));
        row('bi-clock', a.tperiod);
        if (a.nameObject) {
            const r = document.createElement('div'); r.className = 'acal-pop-row acal-pop-link';
            r.innerHTML = '<i class="bi bi-briefcase"></i><span></span><i class="bi bi-box-arrow-up-right acal-pop-go"></i>';
            r.querySelector('span').textContent = a.nameObject;
            r.title = I18N.openObject + ' ' + a.nameObject;
            r.onclick = () => { hidePopup(st); st.controller.changeProperty('editObject', a); };
            meta.appendChild(r);
        }
        pop.appendChild(meta);

        // assignee picker - reassign without opening the card
        const asg = document.createElement('div'); asg.className = 'acal-pop-assign';
        const lab = document.createElement('div'); lab.className = 'acal-pop-assign-label';
        lab.innerHTML = '<i class="bi bi-person"></i> '; lab.appendChild(document.createTextNode(a.nameAssignedTo || I18N.unassigned));
        asg.appendChild(lab);
        // any employee with an open assignment on some activity (server-provided list),
        // so you can reassign to anyone in play regardless of the current interval
        if ((st.employees || []).length) {
            const avs = document.createElement('div'); avs.className = 'acal-pop-assign-avs';
            for (const emp of st.employees) {
                const ab = document.createElement('button'); ab.type = 'button';
                ab.className = 'acal-asg-av' + (emp.name === a.nameAssignedTo ? ' current' : '');
                ab.textContent = initials(emp.name); ab.title = emp.name;
                ab.style.setProperty('--ahue', typeHue(emp.name));
                ab.onclick = () => { st.controller.changeProperty('assignedTo', a, emp.id); hidePopup(st); };
                avs.appendChild(ab);
            }
            asg.appendChild(avs);
        }
        pop.appendChild(asg);
        if (a.description) {
            const desc = document.createElement('div'); desc.className = 'acal-pop-desc';
            desc.innerHTML = sanitizeHtml(a.description); pop.appendChild(desc);
        }
        const foot = document.createElement('div'); foot.className = 'acal-pop-actions';
        if (!a.done) {
            const done = btn('<i class="bi bi-check-lg"></i> ' + I18N.done, 'acal-done', I18N.markAsDone);
            done.onclick = () => { hidePopup(st); st.controller.changeProperty('setDone', a); };
            foot.appendChild(done);
        }
        const edit = btn('<i class="bi bi-pencil"></i> ' + I18N.edit, '', I18N.edit);
        edit.onclick = () => { hidePopup(st); st.controller.changeProperty('edit', a); };
        const del = btn('<i class="bi bi-trash"></i>', 'acal-del', I18N.delete);
        del.onclick = () => { hidePopup(st); st.controller.changeProperty('delete', a); };
        foot.append(edit, del); pop.appendChild(foot);

        pop.style.display = 'block';
        const rr = st.root.getBoundingClientRect(), ar = anchor.getBoundingClientRect();
        const pw = pop.offsetWidth, ph = pop.offsetHeight;
        let left = ar.right - rr.left + 8;
        if (left + pw > rr.width - 4) left = ar.left - rr.left - pw - 8;
        if (left < 4) left = Math.max(4, (rr.width - pw) / 2);
        let top = ar.top - rr.top - 4;
        if (top + ph > rr.height - 4) top = Math.max(4, rr.height - ph - 4);
        if (top < 4) top = 4;
        pop.style.left = Math.round(left) + 'px';
        pop.style.top = Math.round(top) + 'px';
    }

    function wireCommon(st, el, a) {
        el.onclick = () => { if (!st.controller.isCurrent(a)) st.controller.changeObject(a); };
        el.ondblclick = () => { hidePopup(st); st.controller.changeProperty('edit', a); };
        el.addEventListener('mouseenter', () => showPopup(st, a, el));
        el.addEventListener('mouseleave', () => scheduleHide(st));
        el.setAttribute('draggable', 'true');
        el.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            try { e.dataTransfer.setData('text/plain', a.gname || ''); } catch (_) {}
            acalDrag = a; hidePopup(st); el.classList.add('dragging');
        });
        el.addEventListener('dragend', () => { el.classList.remove('dragging'); acalDrag = null; });
    }

    // ---------------- card (month / week) ----------------
    function makeCard(st, a, opts) {
        opts = opts || {};
        const card = document.createElement('div');
        card.className = 'acal-card status-' + statusOf(a).key;
        if (st.controller.isCurrent(a)) card.classList.add('current');
        if (opts.block) card.classList.add('block');
        card.style.setProperty('--hue', typeColor(st, a.nameType));
        if (a.tperiod) {
            const t = document.createElement('span'); t.className = 'acal-card-time';
            t.textContent = opts.block ? a.tperiod : (a.tperiod.split('-')[0] || a.tperiod);
            card.appendChild(t);
        } else { const dot = document.createElement('span'); dot.className = 'acal-card-dot'; card.appendChild(dot); }
        const title = document.createElement('span'); title.className = 'acal-card-title';
        title.textContent = a.gname || a.nameType || I18N.noName; card.appendChild(title);
        if (a.nameAssignedTo) {
            const av = document.createElement('span'); av.className = 'acal-card-avatar';
            av.textContent = initials(a.nameAssignedTo); av.style.setProperty('--ahue', typeHue(a.nameAssignedTo));
            av.title = a.nameAssignedTo; card.appendChild(av);
        }
        wireCommon(st, card, a);
        return card;
    }

    function dropCell(st, cell, dt) {
        cell.addEventListener('dragover', (e) => { e.preventDefault(); cell.classList.add('drag-over'); });
        cell.addEventListener('dragleave', () => cell.classList.remove('drag-over'));
        cell.addEventListener('drop', (e) => {
            e.preventDefault(); cell.classList.remove('drag-over');
            if (acalDrag) {
                // change dueDate directly; the web client expects a JS Date for a DATE property
                st.controller.changeProperty('date', acalDrag, new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
                acalDrag = null;
            }
        });
    }
    function addBtn(st, dt) {
        const a = btn('<i class="bi bi-plus-lg"></i>', 'acal-add', I18N.newActivity);
        a.classList.remove('acal-btn');
        // pass a JS Date to the DATE input of addActivityOnDate
        a.addEventListener('click', (e) => { e.stopPropagation(); st.controller.changeProperty('addActivityOnDate', null, new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())); });
        return a;
    }

    // ---------------- month ----------------
    function renderMonth(st, host, list) {
        const by = bucket(list);
        const wd = document.createElement('div'); wd.className = 'acal-weekdays';
        for (const w of WEEKDAYS) { const c = document.createElement('div'); c.className = 'acal-weekday'; c.textContent = w; wd.appendChild(c); }
        host.appendChild(wd);
        const grid = document.createElement('div'); grid.className = 'acal-grid';
        const m = st.cursor.getMonth(), tdy = today();
        const first = new Date(st.cursor.getFullYear(), m, 1);
        const start = addDays(first, -((first.getDay() + 6) % 7));
        for (let i = 0; i < 42; i++) {
            const cur = addDays(start, i);
            const cell = document.createElement('div'); cell.className = 'acal-day';
            if (cur.getMonth() !== m) cell.classList.add('other-month');
            if (sameDay(cur, tdy)) cell.classList.add('today');
            if ((cur.getDay() + 6) % 7 >= 5) cell.classList.add('weekend');
            const num = document.createElement('div'); num.className = 'acal-daynum';
            const span = document.createElement('span'); span.className = 'acal-daynum-v'; span.textContent = cur.getDate();
            num.appendChild(span); cell.appendChild(num);
            cell.appendChild(addBtn(st, cur));
            const evs = document.createElement('div'); evs.className = 'acal-events';
            const items = by[keyOf(cur)] || [];
            const CAP = 4;
            items.slice(0, CAP).forEach(a => evs.appendChild(makeCard(st, a)));
            if (items.length > CAP) {
                const more = document.createElement('button');
                more.type = 'button'; more.className = 'acal-more';
                more.textContent = '+' + (items.length - CAP) + ' ' + I18N.more;
                more.onclick = (e) => { e.stopPropagation(); st.cursor = new Date(cur); st.mode = 'week'; redraw(st); };
                evs.appendChild(more);
            }
            cell.appendChild(evs);
            dropCell(st, cell, cur);
            grid.appendChild(cell);
        }
        host.appendChild(grid);
    }

    // ---------------- week ----------------
    function renderWeek(st, host, list) {
        const by = bucket(list);
        const wk = document.createElement('div'); wk.className = 'acal-week';
        const monday = startOfWeek(st.cursor), tdy = today();
        for (let i = 0; i < 7; i++) {
            const cur = addDays(monday, i);
            const col = document.createElement('div'); col.className = 'acal-wcol';
            if ((cur.getDay() + 6) % 7 >= 5) col.classList.add('weekend');
            if (sameDay(cur, tdy)) col.classList.add('today');
            const head = document.createElement('div'); head.className = 'acal-wcol-head';
            head.innerHTML = '<span class="acal-wcol-dow">' + WEEKDAYS[i] + '</span>' +
                '<span class="acal-wcol-date">' + cur.getDate() + '</span>';
            head.appendChild(addBtn(st, cur));
            col.appendChild(head);
            const body = document.createElement('div'); body.className = 'acal-wcol-body';
            (by[keyOf(cur)] || []).forEach(a => body.appendChild(makeCard(st, a, { block: true })));
            col.appendChild(body);
            dropCell(st, col, cur);
            wk.appendChild(col);
        }
        host.appendChild(wk);
    }

    // ---------------- agenda ----------------
    function renderAgenda(st, host, list) {
        const items = list.slice().filter(dateOf).sort((x, y) => {
            const dx = dateOf(x), dy = dateOf(y);
            if (+dx !== +dy) return dx - dy;
            return (x.tperiod || '~').localeCompare(y.tperiod || '~');
        });
        const wrap = document.createElement('div'); wrap.className = 'acal-agenda';
        if (!items.length) {
            const empty = document.createElement('div'); empty.className = 'acal-agenda-empty';
            empty.textContent = I18N.noActivities; wrap.appendChild(empty); host.appendChild(wrap); return;
        }
        const tdy = today(); let lastKey = null;
        for (const a of items) {
            const dt = dateOf(a), k = keyOf(dt);
            if (k !== lastKey) {
                lastKey = k;
                const h = document.createElement('div'); h.className = 'acal-agenda-day';
                if (sameDay(dt, tdy)) h.classList.add('today');
                h.innerHTML = '<span class="acal-agenda-dow">' + WEEKDAYS[(dt.getDay() + 6) % 7] + '</span>' +
                    '<span class="acal-agenda-num">' + dt.getDate() + '</span>' +
                    '<span class="acal-agenda-mon">' + MONTHS[dt.getMonth()] + ' ' + dt.getFullYear() + '</span>';
                wrap.appendChild(h);
            }
            const row = document.createElement('div');
            row.className = 'acal-arow status-' + statusOf(a).key;
            if (st.controller.isCurrent(a)) row.classList.add('current');
            row.style.setProperty('--hue', typeColor(st, a.nameType));
            const time = document.createElement('span'); time.className = 'acal-arow-time';
            time.textContent = a.tperiod || I18N.allDay;
            const tp = document.createElement('span'); tp.className = 'acal-arow-type'; tp.textContent = a.nameType || '';
            const nm = document.createElement('span'); nm.className = 'acal-arow-name'; nm.textContent = a.gname || '';
            const meta = document.createElement('span'); meta.className = 'acal-arow-meta';
            meta.textContent = [a.nameAssignedTo, a.nameObject].filter(Boolean).join(' · ');
            row.append(time, tp, nm, meta);
            if (a.nameAssignedTo) {
                const av = document.createElement('span'); av.className = 'acal-card-avatar';
                av.textContent = initials(a.nameAssignedTo); av.style.setProperty('--ahue', typeHue(a.nameAssignedTo));
                row.appendChild(av);
            }
            wireCommon(st, row, a);
            wrap.appendChild(row);
        }
        host.appendChild(wrap);
    }

    // ---------------- legend / filters ----------------
    function renderLegend(st, full) {
        const bar = document.createElement('div'); bar.className = 'acal-legend';
        // status (Open / Done / All) - the former top "Opened" filter, now inline
        const seg = document.createElement('div'); seg.className = 'acal-legend-status';
        for (const [val, label] of [['open', I18N.open], ['done', I18N.done], ['all', I18N.all]]) {
            const b = document.createElement('button'); b.type = 'button';
            b.className = 'acal-seg' + (st.statusFilter === val ? ' active' : '');
            b.textContent = label;
            b.onclick = () => { st.statusFilter = val; redraw(st); };
            seg.appendChild(b);
        }
        bar.appendChild(seg);
        const types = [...new Set(full.map(a => a.nameType || ''))].filter(Boolean).sort();
        const tg = document.createElement('div'); tg.className = 'acal-legend-group';
        for (const t of types) {
            const chip = document.createElement('button'); chip.type = 'button';
            chip.className = 'acal-chip' + (st.hiddenTypes.has(t) ? ' off' : '');
            chip.style.setProperty('--hue', typeColor(st, t));
            const sw = document.createElement('span'); sw.className = 'acal-chip-sw';
            chip.appendChild(sw); chip.appendChild(document.createTextNode(t));
            chip.onclick = () => { st.hiddenTypes.has(t) ? st.hiddenTypes.delete(t) : st.hiddenTypes.add(t); redraw(st); };
            tg.appendChild(chip);
        }
        bar.appendChild(tg);
        // only people with an activity in the current interval (+ any selected, so they
        // stay deselectable); inclusive filter: none selected = all shown, selecting narrows
        const sel = st.selectedAssignees;
        const assignees = [...new Set([...(st.scopeAssignees || []), ...sel])].sort();
        if (assignees.length) {
            const ag = document.createElement('div'); ag.className = 'acal-legend-group';
            for (const p of assignees) {
                const chip = document.createElement('button'); chip.type = 'button';
                chip.className = 'acal-chip person' + (sel.has(p) ? ' on' : (sel.size ? ' off' : ''));
                chip.style.setProperty('--ahue', typeHue(p));
                const av = document.createElement('span'); av.className = 'acal-chip-av'; av.textContent = initials(p);
                chip.appendChild(av); chip.appendChild(document.createTextNode(p));
                chip.onclick = () => { sel.has(p) ? sel.delete(p) : sel.add(p); redraw(st); };
                ag.appendChild(chip);
            }
            bar.appendChild(ag);
        }
        return bar;
    }

    function inScope(st, a) {
        const dt = dateOf(a); if (!dt) return false;
        if (st.mode === 'month') return dt.getFullYear() === st.cursor.getFullYear() && dt.getMonth() === st.cursor.getMonth();
        if (st.mode === 'week') { const s = startOfWeek(st.cursor), e = addDays(s, 7); return dt >= s && dt < e; }
        return true; // agenda
    }

    function redraw(st) {
        const { root } = st;
        [...root.children].forEach(c => { if (c !== st.pop) c.remove(); });
        hidePopup(st);

        // give each distinct activity type its own palette colour (by sorted order)
        const typeNames = [...new Set((st.lastList || []).map(a => a.nameType || ''))].filter(Boolean).sort();
        st.typeColors = {};
        typeNames.forEach((t, i) => { st.typeColors[t] = PALETTE[i % PALETTE.length]; });

        const full = (st.lastList || []).filter(a => visible(st, a));
        const scoped = full.filter(a => inScope(st, a));
        // assignees that have an activity within the current interval (Agenda = all dates),
        // ignoring the assignee selection so toggling people keeps the list stable
        st.scopeAssignees = new Set((st.lastList || [])
            .filter(a => passStatusType(st, a) && inScope(st, a))
            .map(a => a.nameAssignedTo).filter(Boolean));
        const overdue = scoped.filter(a => !a.done && typeof a.daysLeft === 'number' && a.daysLeft < 0).length;

        // toolbar
        const bar = document.createElement('div'); bar.className = 'acal-toolbar';
        const left = document.createElement('div'); left.className = 'acal-tb-left';
        if (st.mode !== 'agenda') {
            const nav = document.createElement('div'); nav.className = 'acal-nav';
            const prev = btn('<i class="bi bi-chevron-left"></i>'), tBtn = btn(I18N.today, 'acal-today'), next = btn('<i class="bi bi-chevron-right"></i>');
            const step = st.mode === 'week' ? 7 : null;
            prev.onclick = () => { st.cursor = step ? addDays(st.cursor, -7) : new Date(st.cursor.getFullYear(), st.cursor.getMonth() - 1, 1); redraw(st); };
            next.onclick = () => { st.cursor = step ? addDays(st.cursor, 7) : new Date(st.cursor.getFullYear(), st.cursor.getMonth() + 1, 1); redraw(st); };
            tBtn.onclick = () => { st.cursor = today(); redraw(st); };
            nav.append(prev, tBtn, next); left.appendChild(nav);
        }
        const title = document.createElement('div'); title.className = 'acal-title';
        if (st.mode === 'month') title.textContent = MONTHS[st.cursor.getMonth()] + ' ' + st.cursor.getFullYear();
        else if (st.mode === 'week') {
            const s = startOfWeek(st.cursor), e = addDays(s, 6);
            const sameM = s.getMonth() === e.getMonth();
            title.textContent = s.getDate() + (sameM ? '' : ' ' + MONTHS[s.getMonth()]) + ' – ' + e.getDate() + ' ' + MONTHS[e.getMonth()] + ' ' + e.getFullYear();
        } else title.textContent = I18N.agenda;
        left.appendChild(title);
        bar.appendChild(left);

        const sw = document.createElement('div'); sw.className = 'acal-switch';
        const modeLabels = { month: I18N.month, week: I18N.week, agenda: I18N.agenda };
        for (const mode of ['month', 'week', 'agenda']) {
            const b = document.createElement('button'); b.type = 'button';
            b.className = 'acal-switch-btn' + (st.mode === mode ? ' active' : '');
            b.textContent = modeLabels[mode];
            b.onclick = () => { st.mode = mode; redraw(st); };
            sw.appendChild(b);
        }
        bar.appendChild(sw);

        const stats = document.createElement('div'); stats.className = 'acal-stats';
        const totalStat = document.createElement('span'); totalStat.className = 'acal-stat';
        totalStat.textContent = scoped.length + ' ' + I18N.activitiesWord;
        stats.appendChild(totalStat);
        if (overdue) {
            const overdueStat = document.createElement('span'); overdueStat.className = 'acal-stat overdue';
            overdueStat.textContent = overdue + ' ' + I18N.overdueWord;
            stats.appendChild(overdueStat);
        }
        bar.appendChild(stats);
        root.appendChild(bar);

        root.appendChild(renderLegend(st, st.lastList || []));

        const host = document.createElement('div'); host.className = 'acal-body';
        root.appendChild(host);
        if (st.mode === 'month') renderMonth(st, host, full);
        else if (st.mode === 'week') renderWeek(st, host, full);
        else renderAgenda(st, host, full);
    }

    function pickDefaultCursor(list) {
        const t = today();
        if (list.some(a => { const d = dateOf(a); return d && d.getFullYear() === t.getFullYear() && d.getMonth() === t.getMonth(); })) return t;
        let latest = null;
        for (const a of list) { const d = dateOf(a); if (d && (!latest || d > latest)) latest = d; }
        return latest ? new Date(latest.getFullYear(), latest.getMonth(), 1) : t;
    }

    return {
        render: function (element, controller) {
            const root = document.createElement('div'); root.className = 'acal';
            const pop = document.createElement('div'); pop.className = 'acal-pop'; pop.style.display = 'none';
            const st = {
                root, pop, controller, lastList: [], mode: 'month', cursor: null,
                statusFilter: 'open', employees: [],
                hiddenTypes: new Set(), selectedAssignees: new Set(), hideTimer: null, popFor: null
            };
            pop.addEventListener('mouseenter', () => cancelHide(st));
            pop.addEventListener('mouseleave', () => scheduleHide(st));
            root.appendChild(pop); element.appendChild(root);
            element.acalState = st;
        },
        update: function (element, controller, list, options) {
            const st = element.acalState;
            st.controller = controller;
            st.lastList = list || [];
            const opts = options || {};
            if (opts.employees) st.employees = opts.employees;
            // labels and date names come from the server (OPTIONS) so the calendar is localized
            I18N = Object.assign({}, ACAL_DEFAULT_I18N, opts.i18n || {});
            const names = acalDateNames(opts.locale);
            WEEKDAYS = names.wd; MONTHS = names.mo;
            if (!st.cursor) st.cursor = pickDefaultCursor(st.lastList);
            redraw(st);
        },
        clear: function (element) { if (element.acalState) hidePopup(element.acalState); }
    };
}
