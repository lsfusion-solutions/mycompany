function shiftSchedule() {

    // drag state, scoped to this component instance (a template chip or an existing shift card).
    // Only one HTML drag gesture can be active per document at a time, but keeping this in the
    // instance closure (instead of a module global) avoids cross-instance leakage if two
    // schedules are ever mounted at once.
    let shiftDrag = null; // { type: 'template'|'shift', template?, shift? }

    // deterministic hue from a string - same hashing the activity calendar uses for avatars,
    // so the same person keeps the same colour across the app
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

    // "YYYY-MM-DD" -> Date at LOCAL midnight, so getDay()/toLocaleDateString never drift by a
    // timezone when the key was produced as a plain calendar date
    function parseKey(k) {
        let p = (k || "").split("-").map(Number);
        return new Date(p[0], (p[1] || 1) - 1, p[2] || 1);
    }

    // Normalize an lsFusion DATE to a "YYYY-MM-DD" calendar key with zero timezone drift.
    // lsFusion serializes DATE as a plain "YYYY-MM-DD" string, so we take it verbatim; only
    // a non-string (defensive) falls back to moment's local formatting.
    function dateKey(v) {
        if (typeof v === "string" && v.length >= 10 && v.charAt(4) === "-") return v.substring(0, 10);
        return moment(v).format("YYYY-MM-DD");
    }

    // ----- user-resizable employee column -----
    const EMP_MIN = 160, EMP_MAX = 700, EMP_DEFAULT = 280, EMP_LS_KEY = "shsched-emp-width";

    function loadEmpWidth() {
        try {
            const v = parseInt(localStorage.getItem(EMP_LS_KEY), 10);
            if (v >= EMP_MIN && v <= EMP_MAX) return v;
        } catch (e) { /* localStorage may be unavailable */ }
        return EMP_DEFAULT;
    }
    function saveEmpWidth(w) {
        try { localStorage.setItem(EMP_LS_KEY, String(w)); } catch (e) { /* ignore */ }
    }
    // first track = (user-resizable) employee column, then N equal day columns
    function applyTemplate(element) {
        const n = element.shDays || 1;
        const w = element.shEmpWidth || EMP_DEFAULT;
        element.grid.style.gridTemplateColumns = w + "px repeat(" + n + ", minmax(0, 1fr))";
    }

    // ---- click popup (shift quick actions, mirroring the kanban / activity-calendar popup) ----
    // One popup, reused for every shift card and appended to <body> so it isn't clipped by the
    // scroll container or its sticky cells. Clicking a shift opens it; it previews the shift and
    // exposes the working actions — reassign (avatar picker), Edit and Delete. It stays open until
    // the user clicks outside it, scrolls the grid, drags a card, or runs an action.
    function shHidePopup(st) { st.pop.style.display = "none"; st.popShift = null; }

    function shPopFormatDate(v, locale) {
        try { return parseKey(dateKey(v)).toLocaleDateString(locale || undefined, { weekday: "short", day: "numeric", month: "long", year: "numeric" }); }
        catch (e) { return dateKey(v); }
    }

    function shPopButton(cls, icon, label, title, onClick) {
        let b = document.createElement("button");
        b.type = "button";
        b.className = "shsched-pop-btn " + cls;
        if (title) b.title = title;
        let i = document.createElement("i");
        i.className = icon;
        b.appendChild(i);
        if (label) { let s = document.createElement("span"); s.textContent = label; b.appendChild(s); }
        b.addEventListener("click", onClick);
        return b;
    }

    function shShowPopup(st, shift, anchor, employees, i18n, locale) {
        const pop = st.pop;
        pop.innerHTML = "";

        // time interval — the headline
        let head = document.createElement("div");
        head.className = "shsched-pop-time";
        let hicon = document.createElement("i");
        hicon.className = "bi bi-clock";
        head.appendChild(hicon);
        let htext = document.createElement("span");
        htext.textContent = shift.intervalS || "";
        head.appendChild(htext);
        pop.appendChild(head);

        // meta: date + project
        let meta = document.createElement("div");
        meta.className = "shsched-pop-meta";
        const metaRow = (icon, text) => {
            if (!text) return;
            let row = document.createElement("div");
            row.className = "shsched-pop-row";
            let ic = document.createElement("i");
            ic.className = icon;
            row.appendChild(ic);
            let sp = document.createElement("span");
            sp.textContent = text;
            row.appendChild(sp);
            meta.appendChild(row);
        };
        if (shift.date) metaRow("bi bi-calendar-event", shPopFormatDate(shift.date, locale));
        metaRow("bi bi-briefcase", shift.nameProject);
        if (meta.childElementCount) pop.appendChild(meta);

        // note
        if (shift.note) {
            let note = document.createElement("div");
            note.className = "shsched-pop-note";
            note.textContent = shift.note;
            pop.appendChild(note);
        }

        // assignee picker — reassign the shift straight from the card
        const currentName = shift.nameAssignedTo || null;        // for the label
        const currentId = shift.assignedTo;                      // employee id — for the highlight
        if (employees && employees.length) {
            let asg = document.createElement("div");
            asg.className = "shsched-pop-assign";
            let lab = document.createElement("div");
            lab.className = "shsched-pop-assign-label";
            let li = document.createElement("i");
            li.className = "bi bi-person";
            lab.appendChild(li);
            let who = document.createElement("span");
            who.textContent = currentName || (i18n && i18n.unassigned) || "Unassigned";
            lab.appendChild(who);
            asg.appendChild(lab);
            let avs = document.createElement("div");
            avs.className = "shsched-pop-assign-avs";
            for (const emp of employees) {
                let ab = document.createElement("button");
                ab.type = "button";
                ab.className = "shsched-pop-asg-av" + (currentId != null && String(emp.id) === String(currentId) ? " current" : "");
                ab.textContent = initialsOf(emp.name);
                ab.title = emp.name;
                ab.style.setProperty("--ahue", hueOf(emp.name));
                ab.addEventListener("click", function () {
                    st.controller.changeProperty("assignedTo", shift, emp.id);
                    shHidePopup(st);
                });
                avs.appendChild(ab);
            }
            asg.appendChild(avs);
            pop.appendChild(asg);
        }

        // actions: Edit + Delete
        let actions = document.createElement("div");
        actions.className = "shsched-pop-actions";
        let editLabel = (i18n && i18n.edit) || "Edit";
        let deleteLabel = (i18n && i18n.delete) || "Delete";
        actions.appendChild(shPopButton("shsched-pop-edit", "bi bi-pencil", editLabel, editLabel, function () {
            shHidePopup(st);
            st.controller.changeProperty("edit", shift);
        }));
        actions.appendChild(shPopButton("shsched-pop-delete", "bi bi-trash", "", deleteLabel, function () {
            shHidePopup(st);
            st.controller.changeProperty("delete", shift);
        }));
        pop.appendChild(actions);

        // position next to the card (fixed → not clipped), flip to the left / clamp to stay on-screen
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
        st.popShift = shift;
    }

    return {
        render: function (element, controller) {
            let root = document.createElement("div");
            root.className = "shsched";

            // template palette
            let palette = document.createElement("div");
            palette.className = "shsched-palette";
            root.appendChild(palette);
            element.palette = palette;

            // scrollable grid
            let scroll = document.createElement("div");
            scroll.className = "shsched-scroll";
            root.appendChild(scroll);

            // CSS-grid body: one fixed employee column + N equal day columns. minmax(0,1fr) keeps the
            // day columns exactly equal regardless of content, and its zero min-content keeps the grid
            // box from ballooning, so the filter panel stays beside the grid.
            let grid = document.createElement("div");
            grid.className = "shsched-grid";
            scroll.appendChild(grid);
            element.grid = grid;

            // remembered (user-set) employee column width
            element.shEmpWidth = loadEmpWidth();

            element.appendChild(root);

            // click popup, reused for every shift card. On <body> so it escapes the scroll
            // container / sticky-cell stacking. Opened by clicking a shift; closed by an outside
            // click, a grid scroll, a drag, or an action.
            if (element.shPop && element.shPop.pop && element.shPop.pop.parentNode)
                element.shPop.pop.parentNode.removeChild(element.shPop.pop); // guard a re-render
            if (element.shDocClick) document.removeEventListener("click", element.shDocClick); // drop the old listener too
            let pop = document.createElement("div");
            pop.className = "shsched-pop";
            pop.style.display = "none";
            document.body.appendChild(pop);
            const st = { pop: pop, popShift: null, controller: controller };
            const onDocClick = function (e) {
                if (st.pop.style.display === "none") return;
                if (st.pop.contains(e.target)) return;
                if (e.target.closest && e.target.closest(".shsched-shift")) return; // its handler reopens
                shHidePopup(st);
            };
            document.addEventListener("click", onDocClick);
            element.shDocClick = onDocClick;
            scroll.addEventListener("scroll", function () { shHidePopup(st); }, true);
            element.shPop = st;
        },

        update: function (element, controller, list, options) {
            const t = (options && options.i18n) || {};
            const locale = (options && options.locale) || undefined;
            const txt = (key, fallback) => (t[key] != null ? t[key] : fallback);

            const grid = element.grid;

            // popup state: keep the controller current and dismiss any open popup before the rebuild;
            // the picker lists the real employees (the grid's "Unassigned" pseudo-row is excluded)
            const st = element.shPop;
            st.controller = controller;
            shHidePopup(st);
            const popEmployees = (options && options.employees) || [];

            // if a column resize is somehow still in progress, end it before we rebuild the grid
            if (element.endResize) element.endResize();

            // remove any lingering drop highlights (e.g. when a drag is cancelled or dropped
            // outside the grid, where no cell-level "drop"/"dragleave" fires)
            const clearDragOver = () => {
                grid.querySelectorAll(".shsched-cell.drag-over").forEach((c) => c.classList.remove("drag-over"));
            };

            // ---- template palette ------------------------------------------------
            const palette = element.palette;
            while (palette.firstChild) palette.removeChild(palette.firstChild);

            const templates = (options && options.templates) || [];

            let palTitle = document.createElement("div");
            palTitle.className = "shsched-palette-title";
            palTitle.innerHTML = '<i class="bi bi-clock-history"></i>';
            let palLabel = document.createElement("span");
            palLabel.textContent = txt("templates", "Shift templates");
            palTitle.appendChild(palLabel);
            palette.appendChild(palTitle);

            let palList = document.createElement("div");
            palList.className = "shsched-palette-list";
            palette.appendChild(palList);

            for (const template of templates) {
                let chip = document.createElement("button");
                chip.type = "button";
                chip.className = "shsched-tpl";
                chip.innerHTML = '<i class="bi bi-grip-vertical"></i>';
                let lbl = document.createElement("span");
                lbl.textContent = template.intervalS;
                chip.appendChild(lbl);
                chip.setAttribute("draggable", "true");
                chip.addEventListener("dragstart", function (e) {
                    e.dataTransfer.effectAllowed = "copy";
                    shiftDrag = { type: "template", template: template };
                    chip.classList.add("dragging");
                });
                chip.addEventListener("dragend", function () {
                    chip.classList.remove("dragging");
                    shiftDrag = null;
                    clearDragOver();
                });
                palList.appendChild(chip);
            }

            if (!templates.length) {
                let hint = document.createElement("span");
                hint.className = "shsched-palette-hint";
                hint.textContent = txt("dragHint", "Drag a template onto a cell to add a shift");
                palList.appendChild(hint);
            }

            // ---- columns (days) --------------------------------------------------
            let dateKeys = [];
            if (options && options.from && options.to) {
                // parse the range as date-only keys so the column set never drifts by a day in
                // clients behind UTC (moment(key, "YYYY-MM-DD") is parsed in local time)
                for (let cur = moment(dateKey(options.from), "YYYY-MM-DD"), end = moment(dateKey(options.to), "YYYY-MM-DD");
                     cur.isSameOrBefore(end, "day"); cur.add(1, "day")) {
                    dateKeys.push(cur.format("YYYY-MM-DD"));
                }
            }
            // drive the grid template explicitly from JS: one (resizable) employee column + N equal
            // day columns. Building the full string (instead of repeat(var(--n), ...)) avoids the
            // unreliable cross-browser support for a custom-property count inside repeat().
            element.shDays = dateKeys.length || 1;
            applyTemplate(element);
            const todayKey = moment().format("YYYY-MM-DD");

            // ---- group shifts by date -> employee --------------------------------
            const byDate = {};
            for (const shift of list) {
                const dk = dateKey(shift.date);
                const emp = shift.assignedTo || "0";
                (byDate[dk] = byDate[dk] || {});
                (byDate[dk][emp] = byDate[dk][emp] || []).push(shift);
            }

            // ---- employee rows (unassigned pool first) ---------------------------
            let employees = [{ id: "0", name: txt("unassigned", "Unassigned"), unassigned: true }];
            if (options && options.employees) employees = employees.concat(options.employees);

            // ---- rebuild the grid -----------------------------------------------
            while (grid.firstChild) grid.removeChild(grid.firstChild);

            // header row: corner + day headers
            let corner = document.createElement("div");
            corner.className = "shsched-corner";
            corner.textContent = txt("employee", "Employee");
            // drag handle on the column's right edge to let the user resize the employee column;
            // the day columns (1fr) reflow to share whatever width is left
            let resizer = document.createElement("div");
            resizer.className = "shsched-resizer";
            resizer.addEventListener("pointerdown", function (e) {
                e.preventDefault();
                // tear down any previous drag that didn't end cleanly before starting a new one
                if (element.endResize) element.endResize();
                const pointerId = e.pointerId, startX = e.clientX, startW = element.shEmpWidth;
                resizer.classList.add("active");
                const move = function (ev) {
                    if (ev.pointerId !== pointerId) return; // ignore other (e.g. multi-touch) pointers
                    // keep at least ~210px total for the day columns so they never collapse to nothing
                    const maxW = Math.max(EMP_MIN, Math.min(EMP_MAX, grid.clientWidth - 210));
                    let w = startW + (ev.clientX - startX);
                    w = Math.max(EMP_MIN, Math.min(maxW, w));
                    element.shEmpWidth = w;
                    applyTemplate(element);
                };
                // single idempotent teardown used for pointerup/pointercancel AND for an update()/
                // clear() that happens mid-drag. Listeners live on window (not the resizer) so the
                // drag keeps working outside the 9px handle and survives a grid rebuild.
                const cleanup = function () {
                    if (element.endResize !== cleanup) return;
                    element.endResize = null;
                    window.removeEventListener("pointermove", move);
                    window.removeEventListener("pointerup", finish);
                    window.removeEventListener("pointercancel", finish);
                    resizer.classList.remove("active");
                    saveEmpWidth(element.shEmpWidth);
                };
                // only the pointer that started the drag may end it
                const finish = function (ev) {
                    if (ev && ev.pointerId !== pointerId) return;
                    cleanup();
                };
                element.endResize = cleanup;
                window.addEventListener("pointermove", move);
                window.addEventListener("pointerup", finish);
                window.addEventListener("pointercancel", finish);
            });
            corner.appendChild(resizer);
            grid.appendChild(corner);

            for (const dk of dateKeys) {
                const d = parseKey(dk);
                const dow = d.getDay();
                let h = document.createElement("div");
                h.className = "shsched-daycol";
                if (dow === 0 || dow === 6) h.classList.add("weekend");
                if (dk === todayKey) h.classList.add("today");
                let num = document.createElement("div");
                num.className = "shsched-daynum";
                num.textContent = d.getDate();
                let nm = document.createElement("div");
                nm.className = "shsched-dow";
                nm.textContent = d.toLocaleDateString(locale, { weekday: "short" });
                h.appendChild(num);
                h.appendChild(nm);
                grid.appendChild(h);
            }

            // body rows
            let firstRow = true;
            for (const employee of employees) {
                if (!employee) continue;

                let empCell = document.createElement("div");
                empCell.className = "shsched-emp";
                if (employee.unassigned) empCell.classList.add("unassigned");
                if (firstRow) empCell.classList.add("first-row");

                let avatar = document.createElement("span");
                avatar.className = "shsched-emp-avatar";
                if (employee.unassigned) {
                    avatar.classList.add("none");
                    avatar.innerHTML = '<i class="bi bi-person-dash"></i>';
                } else {
                    avatar.style.setProperty("--ahue", hueOf(employee.name));
                    avatar.textContent = initialsOf(employee.name);
                }
                let empName = document.createElement("span");
                empName.className = "shsched-emp-name";
                empName.textContent = employee.name;
                empName.title = employee.name;
                empCell.appendChild(avatar);
                empCell.appendChild(empName);
                grid.appendChild(empCell);

                for (const dk of dateKeys) {
                    const d = parseKey(dk);
                    const dow = d.getDay();
                    let cell = document.createElement("div");
                    cell.className = "shsched-cell";
                    if (dow === 0 || dow === 6) cell.classList.add("weekend");
                    if (dk === todayKey) cell.classList.add("today");
                    if (firstRow) cell.classList.add("first-row");

                    const shifts = (byDate[dk] && byDate[dk][employee.id]) || [];
                    for (const shift of shifts) {
                        let card = document.createElement("button");
                        card.type = "button";
                        card.className = "shsched-shift";
                        card.innerHTML = '<i class="bi bi-clock"></i>';
                        let time = document.createElement("span");
                        time.className = "shsched-shift-time";
                        time.textContent = shift.intervalS;
                        card.appendChild(time);

                        card.addEventListener("click", function () {
                            controller.changeObject(shift, true, card);
                            shShowPopup(st, shift, card, popEmployees, t, locale);
                        });
                        card.addEventListener("dblclick", function () {
                            shHidePopup(st);
                            controller.changeProperty("edit", shift);
                        });
                        card.setAttribute("draggable", "true");
                        card.addEventListener("dragstart", function (e) {
                            e.dataTransfer.effectAllowed = "move";
                            shiftDrag = { type: "shift", shift: shift };
                            card.classList.add("dragging");
                            shHidePopup(st);
                        });
                        card.addEventListener("dragend", function () {
                            card.classList.remove("dragging");
                            shiftDrag = null;
                            clearDragOver();
                        });
                        cell.appendChild(card);
                    }

                    // drop target: move an existing shift here, or instantiate a template. Only react
                    // to our own drags (a template chip / shift card) so unrelated external drags
                    // don't get a misleading drop highlight or have their default action blocked.
                    cell.addEventListener("dragover", function (e) { if (shiftDrag) e.preventDefault(); });
                    cell.addEventListener("dragenter", function () { if (shiftDrag) cell.classList.add("drag-over"); });
                    cell.addEventListener("dragleave", function (e) {
                        if (!cell.contains(e.relatedTarget)) cell.classList.remove("drag-over");
                    });
                    cell.addEventListener("drop", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        cell.classList.remove("drag-over");
                        const empId = employee.id === "0" ? null : employee.id;
                        if (shiftDrag && shiftDrag.type === "shift") {
                            controller.changeProperty("assignedTo", shiftDrag.shift, empId);
                            controller.changeProperty("date", shiftDrag.shift, parseKey(dk));
                        } else if (shiftDrag && shiftDrag.type === "template") {
                            controller.form.exec("createShift", shiftDrag.template.id, dk, empId);
                        }
                        shiftDrag = null;
                        return false;
                    });

                    grid.appendChild(cell);
                }

                firstRow = false;
            }
        },

        clear: function (element) {
            if (element.endResize) element.endResize();
            if (element.grid) while (element.grid.firstChild) element.grid.removeChild(element.grid.firstChild);
            if (element.palette) while (element.palette.firstChild) element.palette.removeChild(element.palette.firstChild);
            if (element.shDocClick) document.removeEventListener("click", element.shDocClick);
            if (element.shPop) {
                shHidePopup(element.shPop);
                let p = element.shPop.pop;
                if (p && p.parentNode) p.parentNode.removeChild(p); // the popup lives on <body>
            }
        }
    };
}
