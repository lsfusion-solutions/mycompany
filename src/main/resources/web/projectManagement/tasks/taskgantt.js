// Hand-made Gantt chart for the tasks form (CUSTOM 'taskGantt'), replacing the bundled
// frappe-gantt component. One CSS grid: a sticky (resizable) task-name column + N fixed-width
// day columns; bars are grid items spanning their day range, dependency arrows are an SVG
// overlay whose coordinates follow from the fixed column/row sizes.
// Zoom scales (day / week / month) only change the per-day column width and the header cells —
// the underlying grid stays one-column-per-day, so bar geometry and drag snapping are shared.
function taskGantt() {

    const ROW_H = 36, MONTH_H = 26, DAYS_H = 40;

    // per-day column width for each zoom scale; the header second row shows the matching unit
    const SCALES = { day: 34, week: 10, month: 4 };
    const SCALE_LS_KEY = "tgantt-scale";

    // one drag gesture (bar move / edge resize) per document; kept in the instance closure
    // like the shift schedule's drag state
    let barDrag = null;

    // ----- date helpers: lsFusion DATE is a plain "YYYY-MM-DD" string ------------------
    // "YYYY-MM-DD" -> Date at LOCAL midnight, so weekday/format logic never drifts by a timezone
    function parseKey(k) {
        let p = (k || "").split("-").map(Number);
        return new Date(p[0], (p[1] || 1) - 1, p[2] || 1);
    }
    function dateKey(v) {
        if (typeof v === "string" && v.length >= 10 && v.charAt(4) === "-") return v.substring(0, 10);
        return moment(v).format("YYYY-MM-DD");
    }
    function addDays(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
    // both arguments at local midnight; rounding absorbs DST hour shifts
    function diffDays(a, b) { return Math.round((a.getTime() - b.getTime()) / 86400000); }
    function startOfWeek(d) { return addDays(d, -((d.getDay() + 6) % 7)); } // Monday-based
    function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
    function endOfMonth(d) { return new Date(d.getFullYear(), d.getMonth() + 1, 0); }

    function formatDate(d, locale) {
        try { return d.toLocaleDateString(locale || undefined, { weekday: "short", day: "numeric", month: "long", year: "numeric" }); }
        catch (e) { return dateKey(d); }
    }

    function loadScale() {
        try {
            const s = localStorage.getItem(SCALE_LS_KEY);
            if (SCALES[s]) return s;
        } catch (e) { /* localStorage may be unavailable */ }
        return "day";
    }
    function saveScale(s) {
        try { localStorage.setItem(SCALE_LS_KEY, s); } catch (e) { /* ignore */ }
    }

    // ----- user-resizable task-name column (same pattern as the shift schedule) --------
    const NAME_MIN = 140, NAME_MAX = 600, NAME_DEFAULT = 240, NAME_LS_KEY = "tgantt-name-width";

    function loadNameWidth() {
        try {
            const v = parseInt(localStorage.getItem(NAME_LS_KEY), 10);
            if (v >= NAME_MIN && v <= NAME_MAX) return v;
        } catch (e) { /* localStorage may be unavailable */ }
        return NAME_DEFAULT;
    }
    function saveNameWidth(w) {
        try { localStorage.setItem(NAME_LS_KEY, String(w)); } catch (e) { /* ignore */ }
    }
    function applyTemplate(element) {
        const w = element.tgNameW || NAME_DEFAULT;
        const dayW = element.tgDayW || SCALES.day;
        element.grid.style.gridTemplateColumns = w + "px repeat(" + (element.tgDays || 1) + ", " + dayW + "px)";
        element.grid.style.setProperty("--tg-name-w", w + "px");   // sticky month labels offset
        // day/grid separator step for the row background (a week per line on the week scale)
        element.grid.style.setProperty("--tg-grid-step", (element.tgScale === "week" ? dayW * 7 : dayW) + "px");
    }

    // ----- scroll preservation across a full grid rebuild (see shiftschedule.js) -------
    function snapshotScrolls(fromEl) {
        const snaps = [];
        for (let el = fromEl; el && el.nodeType === 1; el = el.parentElement) {
            if (el.scrollTop || el.scrollLeft) snaps.push([el, el.scrollTop, el.scrollLeft]);
        }
        const se = document.scrollingElement;
        if (se && (se.scrollTop || se.scrollLeft) && !snaps.some((s) => s[0] === se))
            snaps.push([se, se.scrollTop, se.scrollLeft]);
        return snaps;
    }
    function restoreScrolls(snaps) {
        for (const s of snaps) { s[0].scrollTop = s[1]; s[0].scrollLeft = s[2]; }
    }

    // ----- geometry ---------------------------------------------------------------------
    function applyBarGeometry(row) {
        row.bar.style.gridColumn = (2 + row.startIdx) + " / span " + row.span;
    }

    // scrollLeft that puts the given day index in the middle of the visible timeline
    // (the part of the viewport not covered by the sticky name column)
    function scrollLeftFor(element, dayIdx) {
        const s = element.tgScroll;
        return Math.max(0, dayIdx * element.tgDayW - (s.clientWidth - element.tgNameW) / 2);
    }
    function scrollToToday(element) {
        if (element.tgScroll && element.tgTodayIdx != null)
            element.tgScroll.scrollLeft = scrollLeftFor(element, element.tgTodayIdx);
    }

    // ----- dependency arrows ------------------------------------------------------------
    // Coordinates are derived arithmetically from the fixed column/row sizes: the SVG overlay's
    // origin is the top-left of day column 0 / task row 0 (it spans grid area 2/-1 x 3/-1).
    function drawLinks(element) {
        const svg = element.tgLinks;
        if (!svg) return;
        const dayW = element.tgDayW;
        const rows = element.tgRows || [];
        const byId = {};
        rows.forEach((r, i) => { byId[String(r.task.id)] = i; });
        const gap = 8;
        let d = [];
        rows.forEach((child, ci) => {
            if (!child.task.depends) return;
            for (const pid of String(child.task.depends).split(",")) {
                const pi = byId[pid.trim()];
                if (pi == null || pi === ci) continue;
                const parent = rows[pi];
                const x1 = (parent.startIdx + parent.span) * dayW;
                const y1 = pi * ROW_H + ROW_H / 2;
                const x2 = child.startIdx * dayW;
                const y2 = ci * ROW_H + ROW_H / 2;
                if (x2 - x1 >= 2 * gap) {
                    // enough room: right, down/up, right into the child's start
                    d.push("M" + x1 + " " + y1 + " H" + (x2 - gap) + " V" + y2 + " H" + x2);
                } else {
                    // child starts before the parent ends: S-shape around the row boundary
                    const yMid = ci > pi ? ci * ROW_H : (ci + 1) * ROW_H;
                    d.push("M" + x1 + " " + y1 + " H" + (x1 + gap) + " V" + yMid +
                           " H" + (x2 - gap) + " V" + y2 + " H" + x2);
                }
            }
        });
        const marker = "M0 0 L6 3 L0 6 Z";
        svg.innerHTML =
            '<defs><marker id="' + element.tgUid + '-arrow" viewBox="0 0 6 6" refX="5" refY="3" ' +
            'markerWidth="6" markerHeight="6" orient="auto"><path d="' + marker + '"/></marker></defs>' +
            d.map((p) => '<path d="' + p + '" marker-end="url(#' + element.tgUid + '-arrow)"/>').join("");
    }

    // ----- click popup (task preview + progress + edit / delete) ------------------------
    function hidePopup(st) { st.pop.style.display = "none"; st.popRow = null; }

    // (re)position the popup next to its anchor bar, clamped to the viewport; false = anchor
    // is gone (detached or zero-sized), so the caller should hide the popup instead
    function positionPopup(pop, anchor) {
        const ar = anchor.getBoundingClientRect();
        if (!ar.width && !ar.height) return false;
        const pw = pop.offsetWidth, ph = pop.offsetHeight;
        const vw = window.innerWidth, vh = window.innerHeight;
        // a long bar can start far left of the viewport (negative ar.left), so clamp both ways
        let left = ar.left + Math.min(ar.width / 2, 40);
        if (left + pw > vw - 6) left = Math.max(6, vw - pw - 6);
        if (left < 6) left = 6;
        let top = ar.bottom + 8;
        if (top + ph > vh - 6) top = Math.max(6, ar.top - ph - 8);
        if (top < 6) top = 6;
        pop.style.left = Math.round(left) + "px";
        pop.style.top = Math.round(top) + "px";
        return true;
    }

    function popButton(cls, icon, label, title, onClick) {
        let b = document.createElement("button");
        b.type = "button";
        b.className = "tg-pop-btn " + cls;
        if (title) b.title = title;
        let i = document.createElement("i");
        i.className = icon;
        b.appendChild(i);
        if (label) { let s = document.createElement("span"); s.textContent = label; b.appendChild(s); }
        b.addEventListener("click", onClick);
        return b;
    }

    function showPopup(element, st, row, anchor, i18n, locale) {
        const pop = st.pop;
        const task = row.task;
        pop.innerHTML = "";

        let head = document.createElement("div");
        head.className = "tg-pop-title";
        head.textContent = task.name || "";
        pop.appendChild(head);

        let meta = document.createElement("div");
        meta.className = "tg-pop-meta";
        const metaRow = (icon, text, title) => {
            if (!text) return;
            let r = document.createElement("div");
            r.className = "tg-pop-row";
            if (title) r.title = title;
            let ic = document.createElement("i");
            ic.className = icon;
            r.appendChild(ic);
            let sp = document.createElement("span");
            sp.textContent = text;
            r.appendChild(sp);
            meta.appendChild(r);
        };
        metaRow("bi bi-calendar-event", formatDate(parseKey(dateKey(task.start)), locale), i18n.start || "Start date");
        metaRow("bi bi-flag", formatDate(parseKey(dateKey(task.deadline)), locale), i18n.deadline || "Deadline");
        pop.appendChild(meta);

        // dependencies: one removable chip per parent (resolved from the rows on screen —
        // filtered-out parents are skipped); NEW links are drawn on the chart itself, by
        // dragging the connector dot at a bar's right edge onto another bar
        if (task.depends) {
            const byId = {};
            (element.tgRows || []).forEach((r) => { byId[String(r.task.id)] = r.task; });
            const parents = String(task.depends).split(",").map((id) => byId[id.trim()]).filter(Boolean);
            if (parents.length) {
                let deps = document.createElement("div");
                deps.className = "tg-pop-deps";
                let lab = document.createElement("div");
                lab.className = "tg-pop-deps-label";
                lab.innerHTML = '<i class="bi bi-link-45deg"></i>';
                let labText = document.createElement("span");
                labText.textContent = i18n.dependsOn || "Depends on";
                lab.appendChild(labText);
                deps.appendChild(lab);
                let list = document.createElement("div");
                list.className = "tg-pop-deps-list";
                for (const parent of parents) {
                    let chip = document.createElement("span");
                    chip.className = "tg-pop-dep";
                    let nm = document.createElement("span");
                    nm.className = "tg-pop-dep-name";
                    nm.textContent = parent.name || "";
                    nm.title = parent.name || "";
                    chip.appendChild(nm);
                    let x = document.createElement("button");
                    x.type = "button";
                    x.className = "tg-pop-dep-x";
                    x.title = i18n.delete || "Delete";
                    x.innerHTML = '<i class="bi bi-x"></i>';
                    x.addEventListener("click", (function (pid) {
                        return function () {
                            hidePopup(st);
                            st.controller.form.exec("dropDepends", pid, task.id);
                        };
                    })(parent.id));
                    chip.appendChild(x);
                    list.appendChild(chip);
                }
                deps.appendChild(list);
                pop.appendChild(deps);
            }
        }

        // progress editor: label + slider, committed on release
        let prog = document.createElement("div");
        prog.className = "tg-pop-progress";
        let plab = document.createElement("div");
        plab.className = "tg-pop-progress-label";
        let pname = document.createElement("span");
        pname.textContent = i18n.done || "Done";
        let pval = document.createElement("span");
        pval.className = "tg-pop-progress-val";
        const pct = Math.max(0, Math.min(100, task.progress || 0));
        pval.textContent = pct + "%";
        plab.appendChild(pname);
        plab.appendChild(pval);
        let slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "100";
        slider.step = "5";
        slider.value = String(pct);
        slider.addEventListener("input", function () { pval.textContent = slider.value + "%"; });
        slider.addEventListener("change", function () {
            st.controller.changeProperty("progress", task, Number(slider.value));
        });
        prog.appendChild(plab);
        prog.appendChild(slider);
        pop.appendChild(prog);

        let actions = document.createElement("div");
        actions.className = "tg-pop-actions";
        const editLabel = i18n.edit || "Edit";
        const deleteLabel = i18n.delete || "Delete";
        actions.appendChild(popButton("tg-pop-edit", "bi bi-pencil", editLabel, editLabel, function () {
            hidePopup(st);
            st.controller.changeProperty("edit", task);
        }));
        actions.appendChild(popButton("tg-pop-delete", "bi bi-trash", "", deleteLabel, function () {
            hidePopup(st);
            st.controller.changeProperty("delete", task);
        }));
        pop.appendChild(actions);

        // fixed positioning next to the bar, flipped / clamped to stay on-screen
        pop.style.display = "block";
        positionPopup(pop, anchor);
        st.popRow = row;
    }

    // ----- bar drag: move the whole bar or resize an edge, snapped to whole days --------
    function startBarDrag(e, element, controller, row, mode, rangeStart) {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        if (element.endDrag) element.endDrag();
        hidePopup(element.tgPop);

        const pointerId = e.pointerId, startX = e.clientX;
        const dayW = element.tgDayW;
        const orig = { start: row.startIdx, span: row.span };
        const days = element.tgDays || 1;
        barDrag = { row: row, moved: false };
        row.bar.classList.add("dragging");

        const move = function (ev) {
            if (ev.pointerId !== pointerId) return;
            const dx = ev.clientX - startX;
            if (Math.abs(dx) > 3) barDrag.moved = true;
            const dd = Math.round(dx / dayW);
            let s = orig.start, sp = orig.span;
            if (mode === "move") {
                s = Math.max(0, Math.min(days - orig.span, orig.start + dd));
            } else if (mode === "l") {
                s = Math.max(0, Math.min(orig.start + orig.span - 1, orig.start + dd));
                sp = orig.span + (orig.start - s);
            } else { // "r"
                sp = Math.max(1, Math.min(days - orig.start, orig.span + dd));
            }
            if (s !== row.startIdx || sp !== row.span) {
                row.startIdx = s;
                row.span = sp;
                applyBarGeometry(row);
                drawLinks(element);
            }
        };
        const cleanup = function () {
            if (element.endDrag !== cleanup) return;
            element.endDrag = null;
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", finish);
            window.removeEventListener("pointercancel", finish);
            row.bar.classList.remove("dragging");
        };
        const finish = function (ev) {
            if (ev && ev.pointerId !== pointerId) return;
            cleanup();
            const dragged = barDrag && barDrag.moved;
            barDrag = null;
            if (!dragged) {
                // a plain click: make the task current and open the preview popup
                controller.changeObject(row.task, true, row.bar);
                showPopup(element, element.tgPop, row, row.bar, element.tgI18n, element.tgLocale);
                return;
            }
            if (row.startIdx === orig.start && row.span === orig.span) return;
            const start = addDays(rangeStart, row.startIdx);
            const deadline = addDays(rangeStart, row.startIdx + row.span - 1);
            if (mode === "move")
                controller.changeProperties(["start", "deadline"], [row.task, row.task], [start, deadline], true);
            else if (mode === "l")
                controller.changeProperty("start", row.task, start);
            else
                controller.changeProperty("deadline", row.task, deadline);
        };
        element.endDrag = cleanup;
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", finish);
        window.addEventListener("pointercancel", finish);
    }

    // ----- row drag: reorder tasks by dragging a name cell vertically -------------------
    // On drop the new 1-based positions go out in ONE changeProperties batch (kanban-style:
    // a 0 would reach the server as NULL, and separate calls would each cost a round-trip).
    function startRowDrag(e, element, controller, row) {
        if (e.button !== 0) return;
        // no preventDefault here: an ordinary click on the cell must keep selecting the task
        if (element.endDrag) element.endDrag();
        const pointerId = e.pointerId, startY = e.clientY;
        const rows = element.tgRows || [];
        const srcIdx = row.ri;
        let started = false, dropIdx = srcIdx, indicator = null;

        const idxFromY = function (y) {
            const top = rows.length ? rows[0].nameEl.getBoundingClientRect().top : 0;
            return Math.max(0, Math.min(rows.length, Math.round((y - top) / ROW_H)));
        };
        const move = function (ev) {
            if (ev.pointerId !== pointerId) return;
            if (!started) {
                if (Math.abs(ev.clientY - startY) <= 4) return; // not a drag yet
                started = true;
                hidePopup(element.tgPop);
                row.nameEl.classList.add("row-dragging");
                row.bar.classList.add("dragging");
                indicator = document.createElement("div");
                indicator.className = "tg-rowdrop";
                element.grid.appendChild(indicator);
            }
            ev.preventDefault();
            dropIdx = idxFromY(ev.clientY);
            indicator.style.top = (MONTH_H + DAYS_H + dropIdx * ROW_H - 1) + "px";
        };
        const cleanup = function () {
            if (element.endDrag !== cleanup) return;
            element.endDrag = null;
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", finish);
            window.removeEventListener("pointercancel", finish);
            row.nameEl.classList.remove("row-dragging");
            row.bar.classList.remove("dragging");
            if (indicator && indicator.parentNode) indicator.parentNode.removeChild(indicator);
        };
        const finish = function (ev) {
            if (ev && ev.pointerId !== pointerId) return;
            cleanup();
            if (!started) return; // a plain click — its own handler does the usual work
            // swallow the click event that follows this pointerup (cleared async in case the
            // pointer was released outside the cell and no click arrives at all)
            element.tgRowDragged = true;
            setTimeout(function () { element.tgRowDragged = false; }, 0);
            // dropIdx is an insertion boundary; either side of the row itself is a no-op
            if (dropIdx === srcIdx || dropIdx === srcIdx + 1) return;
            const arr = rows.slice();
            arr.splice(srcIdx, 1);
            arr.splice(dropIdx > srcIdx ? dropIdx - 1 : dropIdx, 0, row);
            const props = [], objs = [], vals = [];
            for (let i = 0; i < arr.length; i++)
                if (arr[i].task.order !== i + 1) {
                    props.push("order");
                    objs.push(arr[i].task);
                    vals.push(i + 1);
                }
            if (props.length) controller.changeProperties(props, objs, vals);
        };
        element.endDrag = cleanup;
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", finish);
        window.addEventListener("pointercancel", finish);
    }

    // ----- link drag: draw a new dependency from a bar's connector onto another bar -----
    function startLinkDrag(e, element, controller, srcRow) {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        if (element.endDrag) element.endDrag();
        hidePopup(element.tgPop);

        const svg = element.tgLinks;
        if (!svg) return;
        const pointerId = e.pointerId;
        const x1 = (srcRow.startIdx + srcRow.span) * element.tgDayW;
        const y1 = srcRow.ri * ROW_H + ROW_H / 2;
        let temp = document.createElementNS("http://www.w3.org/2000/svg", "path");
        temp.setAttribute("class", "tg-templink");
        svg.appendChild(temp);
        srcRow.bar.classList.add("link-source");
        let target = null;

        const setTarget = function (row) {
            if (target === row) return;
            if (target) target.bar.classList.remove("link-target");
            target = row;
            if (target) target.bar.classList.add("link-target");
        };
        const move = function (ev) {
            if (ev.pointerId !== pointerId) return;
            const rect = svg.getBoundingClientRect();
            temp.setAttribute("d", "M" + x1 + " " + y1 +
                " L" + (ev.clientX - rect.left) + " " + (ev.clientY - rect.top));
            const el = document.elementFromPoint(ev.clientX, ev.clientY);
            const barEl = el && el.closest ? el.closest(".tg-bar") : null;
            const row = barEl ? (element.tgRows || []).find((r) => r.bar === barEl) : null;
            setTarget(row && row !== srcRow ? row : null);
        };
        const cleanup = function () {
            if (element.endDrag !== cleanup) return;
            element.endDrag = null;
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", finish);
            window.removeEventListener("pointercancel", finish);
            if (temp.parentNode) temp.parentNode.removeChild(temp);
            srcRow.bar.classList.remove("link-source");
            setTarget(null);
        };
        const finish = function (ev) {
            if (ev && ev.pointerId !== pointerId) return;
            const t = target;
            cleanup();
            // the server side guards against self-links and cycles; the APPLY refresh redraws
            if (t) controller.form.exec("setDepends", srcRow.task.id, t.task.id);
        };
        element.endDrag = cleanup;
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", finish);
        window.addEventListener("pointercancel", finish);
    }

    // ----- full grid rebuild from the last known list/options ---------------------------
    // Shared by update() (fresh data from the server) and the zoom switcher (same data,
    // different scale). preserveScroll=false lets the caller position the scroll itself.
    function rebuild(element, preserveScroll) {
        const data = element.tgData;
        if (!data) return;
        const controller = data.controller, list = data.list, options = data.options;

        const i18n = (options && options.i18n) || {};
        const locale = (options && options.locale) || undefined;
        element.tgI18n = i18n;
        element.tgLocale = locale;
        element.tgTodayLbl.textContent = i18n.today || "Today";
        for (const s in element.tgScaleBtns) {
            element.tgScaleBtns[s].textContent = i18n[s] || (s.charAt(0).toUpperCase() + s.slice(1));
            element.tgScaleBtns[s].classList.toggle("active", element.tgScale === s);
        }

        const st = element.tgPop;
        st.controller = controller;
        // a rebuild arrives right after any changeObject/changeProperty round-trip, so an open
        // popup would be closed by its own click; remember the task and re-show it afterwards
        // (which also refreshes the popup's dates / progress / dependency chips)
        const openTaskId = st.popRow ? String(st.popRow.task.id) : null;
        hidePopup(st);
        if (element.endDrag) element.endDrag();
        if (element.endResize) element.endResize();

        const scale = element.tgScale;
        const dayW = SCALES[scale] || SCALES.day;
        element.tgDayW = dayW;

        // ---- date range: all bars plus today, padded and snapped to whole units -------
        const today = parseKey(moment().format("YYYY-MM-DD"));
        let min = today, max = today;
        for (const task of list) {
            const s = parseKey(dateKey(task.start)), d = parseKey(dateKey(task.deadline));
            if (s < min) min = s;
            if (d > max) max = d;
        }
        let rangeStart, rangeEnd;
        if (scale === "week") {
            rangeStart = startOfWeek(addDays(min, -7));
            rangeEnd = addDays(startOfWeek(addDays(max, 14)), 6);
        } else if (scale === "month") {
            rangeStart = startOfMonth(min);
            rangeEnd = endOfMonth(addDays(max, 30));
        } else {
            rangeStart = addDays(min, -3);
            rangeEnd = addDays(max, 7);
        }
        const days = diffDays(rangeEnd, rangeStart) + 1;
        element.tgDays = days;
        element.tgTodayIdx = diffDays(today, rangeStart);
        element.tgRangeStart = rangeStart;

        // ---- rows in form order (ORDERS maxParentLevel keeps parents above children) --
        const rows = list.map(function (task) {
            const s = parseKey(dateKey(task.start));
            const idx = diffDays(s, rangeStart);
            const span = Math.max(1, diffDays(parseKey(dateKey(task.deadline)), s) + 1);
            return { task: task, startIdx: idx, span: Math.min(span, days - idx) };
        });
        element.tgRows = rows;

        // ---- rebuild the grid ----------------------------------------------------------
        const grid = element.grid;
        const scrollSnaps = preserveScroll ? snapshotScrolls(grid) : [];
        while (grid.firstChild) grid.removeChild(grid.firstChild);

        grid.className = "tg-grid tg-scale-" + scale;
        applyTemplate(element);
        grid.style.gridTemplateRows = MONTH_H + "px " + DAYS_H + "px" +
            (rows.length ? " repeat(" + rows.length + ", " + ROW_H + "px)" : "");

        // corner (spans both header rows) with the name-column resizer
        let corner = document.createElement("div");
        corner.className = "tg-corner";
        corner.style.gridColumn = "1";
        corner.style.gridRow = "1 / 3";
        corner.textContent = i18n.tasks || "Tasks";
        let resizer = document.createElement("div");
        resizer.className = "tg-resizer";
        resizer.addEventListener("pointerdown", function (e) {
            e.preventDefault();
            if (element.endResize) element.endResize();
            const pointerId = e.pointerId, startX = e.clientX, startW = element.tgNameW;
            resizer.classList.add("active");
            const move = function (ev) {
                if (ev.pointerId !== pointerId) return;
                let w = startW + (ev.clientX - startX);
                element.tgNameW = Math.max(NAME_MIN, Math.min(NAME_MAX, w));
                applyTemplate(element);
            };
            const cleanup = function () {
                if (element.endResize !== cleanup) return;
                element.endResize = null;
                window.removeEventListener("pointermove", move);
                window.removeEventListener("pointerup", finish);
                window.removeEventListener("pointercancel", finish);
                resizer.classList.remove("active");
                saveNameWidth(element.tgNameW);
            };
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

        const todayIdx = element.tgTodayIdx;

        // top header row: month groups (day/week scales) or year groups (month scale)
        const groupKey = scale === "month"
            ? (d) => d.getFullYear()
            : (d) => d.getFullYear() + "-" + d.getMonth();
        const groupLabel = scale === "month"
            ? (d) => String(d.getFullYear())
            : (d) => d.toLocaleDateString(locale, { month: "long", year: "numeric" });
        let groupStart = 0;
        for (let i = 1; i <= days; i++) {
            const boundary = i === days ||
                groupKey(addDays(rangeStart, i)) !== groupKey(addDays(rangeStart, i - 1));
            if (!boundary) continue;
            const d0 = addDays(rangeStart, groupStart);
            let m = document.createElement("div");
            m.className = "tg-month";
            m.style.gridColumn = (2 + groupStart) + " / span " + (i - groupStart);
            m.style.gridRow = "1";
            let lbl = document.createElement("span");
            lbl.textContent = groupLabel(d0);
            m.appendChild(lbl);
            grid.appendChild(m);
            groupStart = i;
        }

        // second header row: one cell per day / week / month
        if (scale === "day") {
            for (let i = 0; i < days; i++) {
                const d = addDays(rangeStart, i);
                const dow = d.getDay();
                let h = document.createElement("div");
                h.className = "tg-day";
                h.style.gridColumn = String(2 + i);
                h.style.gridRow = "2";
                if (dow === 0 || dow === 6) h.classList.add("weekend");
                if (i === todayIdx) h.classList.add("today");
                let num = document.createElement("div");
                num.className = "tg-daynum";
                num.textContent = d.getDate();
                let nm = document.createElement("div");
                nm.className = "tg-dow";
                nm.textContent = d.toLocaleDateString(locale, { weekday: "short" });
                h.appendChild(num);
                h.appendChild(nm);
                grid.appendChild(h);
            }
        } else {
            // range is snapped to whole units, so unit boundaries are also group boundaries
            const unitKey = scale === "week"
                ? (d) => startOfWeek(d).getTime()
                : (d) => d.getFullYear() + "-" + d.getMonth();
            const unitLabel = scale === "week"
                ? (d) => d.toLocaleDateString(locale, { day: "numeric", month: "short" })
                : (d) => d.toLocaleDateString(locale, { month: "short" });
            let unitStart = 0;
            for (let i = 1; i <= days; i++) {
                const boundary = i === days ||
                    unitKey(addDays(rangeStart, i)) !== unitKey(addDays(rangeStart, i - 1));
                if (!boundary) continue;
                const d0 = addDays(rangeStart, unitStart);
                let h = document.createElement("div");
                h.className = "tg-day tg-unit";
                h.style.gridColumn = (2 + unitStart) + " / span " + (i - unitStart);
                h.style.gridRow = "2";
                if (todayIdx >= unitStart && todayIdx < i) h.classList.add("today");
                let lbl = document.createElement("span");
                lbl.textContent = unitLabel(d0);
                h.appendChild(lbl);
                grid.appendChild(h);
                unitStart = i;
            }
        }

        if (rows.length) {
            // full-height column shades: weekends (day scale only) and today (all scales)
            for (let i = 0; i < days; i++) {
                const dow = addDays(rangeStart, i).getDay();
                const isToday = i === todayIdx;
                const isWeekend = scale === "day" && (dow === 0 || dow === 6);
                if (!isToday && !isWeekend) continue;
                let shade = document.createElement("div");
                shade.className = "tg-colshade" + (isToday ? " today" : "") + (isWeekend ? " weekend" : "");
                shade.style.gridColumn = String(2 + i);
                shade.style.gridRow = "3 / -1";
                grid.appendChild(shade);
            }
            // month scale: months have uneven lengths, so the repeating row gradient cannot
            // draw the separators — use explicit boundary lines at each month start instead
            if (scale === "month") {
                for (let i = 1; i < days; i++) {
                    if (addDays(rangeStart, i).getDate() !== 1) continue;
                    let line = document.createElement("div");
                    line.className = "tg-colline";
                    line.style.gridColumn = String(2 + i);
                    line.style.gridRow = "3 / -1";
                    grid.appendChild(line);
                }
            }

            // dependency arrows overlay (drawn once the bar geometry is known)
            let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("class", "tg-links");
            svg.setAttribute("width", days * dayW);
            svg.setAttribute("height", rows.length * ROW_H);
            svg.style.gridColumn = "2 / -1";
            svg.style.gridRow = "3 / -1";
            grid.appendChild(svg);
            element.tgLinks = svg;
        } else
            element.tgLinks = null;

        rows.forEach(function (row, ri) {
            const task = row.task;
            const gridRow = 3 + ri;
            row.ri = ri; // used by the link drag for the connector's SVG coordinates
            const current = controller.isCurrent(task);

            // row separator / hover stripe across the timeline
            let bg = document.createElement("div");
            bg.className = "tg-rowbg" + (current ? " current" : "");
            bg.style.gridColumn = "2 / -1";
            bg.style.gridRow = String(gridRow);
            grid.appendChild(bg);

            // sticky name cell (drag it vertically to reorder the rows)
            let name = document.createElement("div");
            name.className = "tg-name" + (current ? " current" : "");
            name.style.gridColumn = "1";
            name.style.gridRow = String(gridRow);
            let grip = document.createElement("i");
            grip.className = "bi bi-grip-vertical tg-name-grip";
            name.appendChild(grip);
            let nameText = document.createElement("span");
            nameText.className = "tg-name-text";
            nameText.textContent = task.name || "";
            nameText.title = task.name || "";
            name.appendChild(nameText);
            const pct = Math.max(0, Math.min(100, task.progress || 0));
            if (pct) {
                let badge = document.createElement("span");
                badge.className = "tg-name-pct" + (pct >= 100 ? " full" : "");
                badge.textContent = pct + "%";
                name.appendChild(badge);
            }
            name.addEventListener("pointerdown", function (e) {
                startRowDrag(e, element, controller, row);
            });
            name.addEventListener("click", function () {
                if (element.tgRowDragged) return; // that "click" was the end of a row drag
                controller.changeObject(task, true, name);
            });
            name.addEventListener("dblclick", function () {
                hidePopup(st);
                controller.changeProperty("edit", task);
            });
            row.nameEl = name;
            grid.appendChild(name);

            // the bar
            let bar = document.createElement("div");
            bar.className = "tg-bar" + (current ? " current" : "");
            bar.style.gridRow = String(gridRow);
            let fill = document.createElement("div");
            fill.className = "tg-bar-fill";
            fill.style.width = pct + "%";
            bar.appendChild(fill);
            let label = document.createElement("span");
            label.className = "tg-bar-label";
            label.textContent = task.name || "";
            bar.appendChild(label);
            let hl = document.createElement("div");
            hl.className = "tg-handle tg-handle-l";
            let hr = document.createElement("div");
            hr.className = "tg-handle tg-handle-r";
            bar.appendChild(hl);
            bar.appendChild(hr);
            // connector dot outside the right edge: drag it onto another bar to add a dependency
            let conn = document.createElement("div");
            conn.className = "tg-connector";
            conn.title = i18n.dependsOn || "Depends on";
            conn.addEventListener("pointerdown", function (e) {
                startLinkDrag(e, element, controller, row);
            });
            bar.appendChild(conn);
            bar.title = task.name || "";

            bar.addEventListener("pointerdown", function (e) {
                startBarDrag(e, element, controller, row, "move", rangeStart);
            });
            hl.addEventListener("pointerdown", function (e) {
                startBarDrag(e, element, controller, row, "l", rangeStart);
            });
            hr.addEventListener("pointerdown", function (e) {
                startBarDrag(e, element, controller, row, "r", rangeStart);
            });
            bar.addEventListener("dblclick", function () {
                hidePopup(st);
                controller.changeProperty("edit", task);
            });

            row.bar = bar;
            applyBarGeometry(row);
            grid.appendChild(bar);
        });

        drawLinks(element);

        // keep the user's scroll position across the rebuild; on the very first fill
        // of the chart center the view on today instead
        if (preserveScroll) {
            restoreScrolls(scrollSnaps);
            if (!element.tgAutoScrolled && rows.length) {
                element.tgAutoScrolled = true;
                requestAnimationFrame(function () { scrollToToday(element); });
            } else if (typeof requestAnimationFrame === "function")
                requestAnimationFrame(function () { restoreScrolls(scrollSnaps); });
        }

        if (openTaskId) {
            const openRow = rows.find((r) => String(r.task.id) === openTaskId);
            if (openRow) showPopup(element, st, openRow, openRow.bar, i18n, locale);
        }
    }

    // switch the zoom scale, keeping the date at the middle of the viewport in place
    function setScale(element, scale) {
        if (!SCALES[scale] || element.tgScale === scale) return;
        hidePopup(element.tgPop); // the scroll is repositioned below, the anchor would be stale
        const s = element.tgScroll;
        let center = null;
        if (element.tgRangeStart) {
            const idx = (s.scrollLeft + (s.clientWidth - element.tgNameW) / 2) / element.tgDayW;
            center = addDays(element.tgRangeStart, Math.round(idx));
        }
        element.tgScale = scale;
        saveScale(scale);
        rebuild(element, false);
        if (center) {
            const target = scrollLeftFor(element, diffDays(center, element.tgRangeStart));
            s.scrollLeft = target;
            requestAnimationFrame(function () { s.scrollLeft = target; });
        }
    }

    let uidCounter = 0;

    return {
        render: function (element, controller) {
            element.tgUid = "tgantt" + (++uidCounter);
            element.tgScale = loadScale();
            let root = document.createElement("div");
            root.className = "tgantt";

            // toolbar: "Today" plus the day / week / month zoom switcher
            let toolbar = document.createElement("div");
            toolbar.className = "tg-toolbar";
            let todayBtn = document.createElement("button");
            todayBtn.type = "button";
            todayBtn.className = "tg-today-btn";
            todayBtn.innerHTML = '<i class="bi bi-calendar-event"></i>';
            let todayLbl = document.createElement("span");
            todayLbl.textContent = "Today";
            todayBtn.appendChild(todayLbl);
            todayBtn.addEventListener("click", function () { scrollToToday(element); });
            toolbar.appendChild(todayBtn);
            element.tgTodayLbl = todayLbl;

            let scaleBox = document.createElement("div");
            scaleBox.className = "tg-scale";
            element.tgScaleBtns = {};
            for (const s of ["day", "week", "month"]) {
                let b = document.createElement("button");
                b.type = "button";
                b.className = "tg-scale-btn";
                b.textContent = s;
                b.addEventListener("click", function () { setScale(element, s); });
                scaleBox.appendChild(b);
                element.tgScaleBtns[s] = b;
            }
            toolbar.appendChild(scaleBox);
            root.appendChild(toolbar);

            let scroll = document.createElement("div");
            scroll.className = "tg-scroll";
            root.appendChild(scroll);
            element.tgScroll = scroll;

            let grid = document.createElement("div");
            grid.className = "tg-grid";
            scroll.appendChild(grid);
            element.grid = grid;

            element.tgNameW = loadNameWidth();
            element.appendChild(root);

            // click popup on <body> (escapes the scroll container / sticky cells); guard a re-render
            if (element.tgPop && element.tgPop.pop && element.tgPop.pop.parentNode)
                element.tgPop.pop.parentNode.removeChild(element.tgPop.pop);
            if (element.tgDocClick) document.removeEventListener("click", element.tgDocClick);
            let pop = document.createElement("div");
            pop.className = "tg-pop";
            pop.style.display = "none";
            document.body.appendChild(pop);
            const st = { pop: pop, popRow: null, controller: controller };
            const onDocClick = function (e) {
                if (st.pop.style.display === "none") return;
                if (st.pop.contains(e.target)) return;
                if (e.target.closest && e.target.closest(".tg-bar")) return; // its own handler reopens
                hidePopup(st);
            };
            document.addEventListener("click", onDocClick);
            element.tgDocClick = onDocClick;
            // on scroll the popup follows its bar instead of closing: rebuilds collapse the
            // scroll box and queue async scroll events that would otherwise close the popup
            // the moment it is re-shown after a server refresh
            scroll.addEventListener("scroll", function () {
                if (st.pop.style.display === "none" || !st.popRow) return;
                if (!positionPopup(st.pop, st.popRow.bar)) hidePopup(st);
            }, true);
            element.tgPop = st;
        },

        update: function (element, controller, list, options) {
            element.tgData = { controller: controller, list: list, options: options };
            rebuild(element, true);
        },

        clear: function (element) {
            if (element.endDrag) element.endDrag();
            if (element.endResize) element.endResize();
            if (element.grid) while (element.grid.firstChild) element.grid.removeChild(element.grid.firstChild);
            if (element.tgDocClick) document.removeEventListener("click", element.tgDocClick);
            if (element.tgPop) {
                hidePopup(element.tgPop);
                let p = element.tgPop.pop;
                if (p && p.parentNode) p.parentNode.removeChild(p); // the popup lives on <body>
            }
            element.tgRows = [];
            element.tgLinks = null;
            element.tgData = null;
        }
    };
}
