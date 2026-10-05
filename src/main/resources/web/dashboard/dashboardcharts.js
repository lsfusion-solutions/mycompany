// Dashboard charts: dashboardBarChart() over categories and dashboardLineChart() over days.
// Both are CUSTOM views of object groups on the dashboard form (dashboard/Dashboard.lsf). The rows
// arrive with the properties drawn on the form; the OPTIONS (Dashboard.dashboardChartOptions) say
// which row field is the label and which the value, plus the title, the accent colour, the decimals
// of the values, the locale and the i18n texts. Plain SVG, no library; the chart redraws on resize.

let dchartSeq = 0;

function dchartNode(tag, attrs, parent) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
}

// "axis": compact (12.5M) from ten thousand up, otherwise at most one decimal; "full": the fixed
// number of decimals the chart was given (the tooltip)
function dchartFormat(value, scale, locale, mode) {
    const n = Number(value);
    if (!isFinite(n)) return "";
    const digits = scale == null ? 0 : Number(scale);
    try {
        if (mode === "axis") {
            if (Math.abs(n) >= 10000)
                return new Intl.NumberFormat(locale || undefined, { notation: "compact", maximumFractionDigits: 1 }).format(n);
            return new Intl.NumberFormat(locale || undefined, { maximumFractionDigits: 1 }).format(n);
        }
        return new Intl.NumberFormat(locale || undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
    } catch (e) {
        return n.toFixed(digits);
    }
}

function dchartDate(d, locale, long) {
    if (!(d instanceof Date)) return String(d == null ? "" : d);
    try {
        const opts = long ? { day: "numeric", month: "long", year: "numeric" } : { day: "2-digit", month: "2-digit" };
        return new Intl.DateTimeFormat(locale || undefined, opts).format(d);
    } catch (e) {
        return d.toISOString().slice(0, 10);
    }
}

// axis ticks from 0 to a "nice" top in steps of 1, 2, 2.5 or 5 times a power of ten
function dchartTicks(max, count) {
    if (!(max > 0)) return { top: 1, ticks: [0, 1] };
    const rough = max / count;
    const pow = Math.pow(10, Math.floor(Math.log10(rough)));
    const f = rough / pow;
    const step = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * pow;
    const top = Math.ceil(max / step - 1e-9) * step;
    const ticks = [];
    for (let v = 0; v <= top + step / 2; v += step) ticks.push(Math.round(v * 1e6) / 1e6);
    return { top: top, ticks: ticks };
}

function dchartTruncate(text, maxChars) {
    text = String(text == null ? "" : text);
    return text.length > maxChars ? text.slice(0, Math.max(1, maxChars - 1)) + "…" : text;
}

// monotone cubic interpolation (Fritsch-Carlson): a smooth path that never overshoots the points
function dchartSmoothPath(pts) {
    const n = pts.length;
    if (n === 0) return "";
    if (n === 1) return "M" + pts[0].x + "," + pts[0].y;
    const dx = [], delta = [];
    for (let i = 0; i < n - 1; i++) {
        dx.push(pts[i + 1].x - pts[i].x);
        delta.push(dx[i] ? (pts[i + 1].y - pts[i].y) / dx[i] : 0);
    }
    const m = [delta[0]];
    for (let i = 1; i < n - 1; i++) m.push(delta[i - 1] * delta[i] <= 0 ? 0 : (delta[i - 1] + delta[i]) / 2);
    m.push(delta[n - 2]);
    for (let i = 0; i < n - 1; i++) {
        if (delta[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
        const a = m[i] / delta[i], b = m[i + 1] / delta[i], s = a * a + b * b;
        if (s > 9) { const tau = 3 / Math.sqrt(s); m[i] = tau * a * delta[i]; m[i + 1] = tau * b * delta[i]; }
    }
    let d = "M" + pts[0].x + "," + pts[0].y;
    for (let i = 0; i < n - 1; i++) {
        const h = dx[i] / 3;
        d += "C" + (pts[i].x + h) + "," + (pts[i].y + h * m[i]) + " " + (pts[i + 1].x - h) + "," + (pts[i + 1].y - h * m[i + 1]) + " " + pts[i + 1].x + "," + pts[i + 1].y;
    }
    return d;
}

function dchartTip(st, x, y, head, value) {
    const tip = st.tip;
    while (tip.lastChild) tip.removeChild(tip.lastChild);
    const h = document.createElement("div");
    h.className = "dchart-tip-head";
    h.textContent = head == null ? "" : String(head);
    const v = document.createElement("div");
    v.className = "dchart-tip-value";
    v.textContent = value;
    tip.appendChild(h);
    tip.appendChild(v);
    tip.style.display = "";
    const W = st.body.clientWidth, tw = tip.offsetWidth, th = tip.offsetHeight;
    const left = Math.max(2, Math.min(W - tw - 2, x - tw / 2));
    let top = y - th - 10;
    if (top < 0) top = y + 12;
    tip.style.left = left + "px";
    tip.style.top = top + "px";
}

function dchartDrawBars(st, rows, g) {
    const n = rows.length, slot = g.plotW / n, barW = Math.min(slot * 0.62, 72);
    const maxChars = Math.max(3, Math.floor(slot / 6.5));
    const scale = st.options.scale;
    rows.forEach(function (r, i) {
        const v = r.value || 0;
        const x = g.left + i * slot + (slot - barW) / 2;
        const yTop = g.y(v), h = g.baseY - yTop, rad = Math.min(6, barW / 2, h);
        const d = h <= 0 ? "" :
            "M" + x + "," + g.baseY + " V" + (yTop + rad) + " Q" + x + "," + yTop + " " + (x + rad) + "," + yTop +
            " H" + (x + barW - rad) + " Q" + (x + barW) + "," + yTop + " " + (x + barW) + "," + (yTop + rad) + " V" + g.baseY + " Z";
        const bar = dchartNode("path", { d: d, "class": "dchart-bar", fill: "url(#" + g.gid + ")" }, st.svg);
        const val = dchartNode("text", { x: x + barW / 2, y: yTop - 6, "class": "dchart-value", "text-anchor": "middle" }, st.svg);
        val.textContent = dchartFormat(v, scale, g.locale, "axis");
        const lab = dchartNode("text", { x: x + barW / 2, y: g.baseY + 16, "class": "dchart-label", "text-anchor": "middle" }, st.svg);
        lab.textContent = dchartTruncate(r.label, maxChars);
        dchartNode("title", null, lab).textContent = String(r.label == null ? "" : r.label);
        const hit = dchartNode("rect", { x: g.left + i * slot, y: g.top, width: slot, height: g.plotH, "class": "dchart-hit" }, st.svg);
        hit.addEventListener("mouseenter", function () {
            bar.classList.add("is-hover");
            dchartTip(st, x + barW / 2, yTop, r.label, dchartFormat(v, scale, g.locale, "full"));
        });
        hit.addEventListener("mouseleave", function () {
            bar.classList.remove("is-hover");
            st.tip.style.display = "none";
        });
    });
}

function dchartDrawLine(st, rows, g) {
    const n = rows.length, scale = st.options.scale;
    const pts = rows.map(function (r, i) {
        return { x: n === 1 ? g.left + g.plotW / 2 : g.left + (i / (n - 1)) * g.plotW, y: g.y(r.value || 0), r: r };
    });
    const line = dchartSmoothPath(pts);
    if (n > 1)
        dchartNode("path", { d: line + " L" + pts[n - 1].x + "," + g.baseY + " L" + pts[0].x + "," + g.baseY + " Z", "class": "dchart-area", fill: "url(#" + g.gid + ")" }, st.svg);
    dchartNode("path", { d: line, "class": "dchart-line", stroke: g.accent }, st.svg);
    const step = Math.max(1, Math.ceil(n / 6));
    pts.forEach(function (p, i) {
        if (i % step !== 0 && i !== n - 1) return;
        if (i === n - 1 && n > 1 && (n - 1) % step !== 0 && (n - 1) % step < step / 2) return; // too close to the previous label
        const t = dchartNode("text", { x: p.x, y: g.baseY + 16, "class": "dchart-label", "text-anchor": i === 0 ? "start" : i === n - 1 ? "end" : "middle" }, st.svg);
        t.textContent = dchartDate(p.r.label, g.locale, false);
    });
    if (n <= 40) pts.forEach(function (p) { dchartNode("circle", { cx: p.x, cy: p.y, r: 3, "class": "dchart-dot", stroke: g.accent }, st.svg); });
    const guide = dchartNode("line", { y1: g.top, y2: g.baseY, "class": "dchart-guide" }, st.svg);
    guide.style.display = "none";
    const focus = dchartNode("circle", { r: 5, "class": "dchart-focus", stroke: g.accent }, st.svg);
    focus.style.display = "none";
    const hit = dchartNode("rect", { x: g.left, y: g.top, width: g.plotW, height: g.plotH, "class": "dchart-hit" }, st.svg);
    hit.addEventListener("mousemove", function (e) {
        const rect = st.svg.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        let best = 0, bd = Infinity;
        pts.forEach(function (p, i) { const d = Math.abs(p.x - mx); if (d < bd) { bd = d; best = i; } });
        const p = pts[best];
        guide.setAttribute("x1", p.x); guide.setAttribute("x2", p.x); guide.style.display = "";
        focus.setAttribute("cx", p.x); focus.setAttribute("cy", p.y); focus.style.display = "";
        dchartTip(st, p.x, p.y, dchartDate(p.r.label, g.locale, true), dchartFormat(p.r.value || 0, scale, g.locale, "full"));
    });
    hit.addEventListener("mouseleave", function () {
        guide.style.display = "none";
        focus.style.display = "none";
        st.tip.style.display = "none";
    });
}

function dchartDraw(kind, st) {
    const svg = st.svg, opt = st.options || {}, locale = opt.locale, i18n = opt.i18n || {};
    const accent = opt.color || "#2563eb";
    const W = Math.floor(st.body.clientWidth), H = Math.floor(st.body.clientHeight);
    while (svg.lastChild) svg.removeChild(svg.lastChild);
    st.tip.style.display = "none";
    if (W < 40 || H < 40) return;
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("width", W);
    svg.setAttribute("height", H);

    const rows = (st.list || []).map(function (r) {
        const v = r[opt.value];
        return { label: r[opt.label], value: v == null ? null : Number(v), row: r };
    });
    if (!rows.length || !rows.some(function (r) { return r.value != null; })) {
        dchartNode("text", { x: W / 2, y: H / 2, "class": "dchart-empty", "text-anchor": "middle" }, svg).textContent = i18n.noData || "No data";
        return;
    }
    const max = rows.reduce(function (m, r) { return Math.max(m, r.value || 0); }, 0);
    const ticks = dchartTicks(max, 4);
    const tickLabels = ticks.ticks.map(function (v) { return dchartFormat(v, 0, locale, "axis"); });
    const left = tickLabels.reduce(function (m, s) { return Math.max(m, s.length); }, 1) * 7 + 14;
    const top = 18, right = 14, bottom = 26;
    const plotW = W - left - right, plotH = H - top - bottom, baseY = top + plotH;
    if (plotW < 20 || plotH < 20) return;
    const g = {
        left: left, right: right, top: top, bottom: bottom, W: W, H: H, plotW: plotW, plotH: plotH, baseY: baseY,
        y: function (v) { return baseY - (v / ticks.top) * plotH; },
        accent: accent, gid: "dchart-grad-" + st.id, locale: locale
    };

    const defs = dchartNode("defs", null, svg);
    const grad = dchartNode("linearGradient", { id: g.gid, x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
    dchartNode("stop", { offset: "0%", "stop-color": accent, "stop-opacity": kind === "bar" ? 0.95 : 0.35 }, grad);
    dchartNode("stop", { offset: "100%", "stop-color": accent, "stop-opacity": kind === "bar" ? 0.55 : 0.02 }, grad);

    ticks.ticks.forEach(function (v, i) {
        const yy = g.y(v);
        dchartNode("line", { x1: left, x2: W - right, y1: yy, y2: yy, "class": "dchart-grid" + (v === 0 ? " dchart-grid-base" : "") }, svg);
        dchartNode("text", { x: left - 8, y: yy + 4, "class": "dchart-tick", "text-anchor": "end" }, svg).textContent = tickLabels[i];
    });

    if (kind === "bar") dchartDrawBars(st, rows, g);
    else dchartDrawLine(st, rows, g);
}

function dchartComponent(kind) {
    function schedule(st) {
        if (st.raf) return;
        st.raf = requestAnimationFrame(function () { st.raf = null; dchartDraw(kind, st); });
    }
    return {
        render: function (element, controller) {
            // the host element the platform hands over has no height of its own: size it to the
            // container the design gives the view (height / fill) - otherwise the SVG, measured
            // from a body that is itself sized by its content, grows the host past the container
            // and the container shows scrollbars
            element.style.height = "100%";
            element.style.minHeight = "0";
            element.style.overflow = "hidden";
            const root = document.createElement("div");
            root.className = "dchart dchart-" + kind;
            const title = document.createElement("div");
            title.className = "dchart-title";
            const body = document.createElement("div");
            body.className = "dchart-body";
            const svg = dchartNode("svg", { "class": "dchart-svg" }, body);
            const tip = document.createElement("div");
            tip.className = "dchart-tip";
            tip.style.display = "none";
            body.appendChild(tip);
            root.appendChild(title);
            root.appendChild(body);
            element.appendChild(root);
            const st = { root: root, title: title, body: body, svg: svg, tip: tip, list: [], options: {}, raf: null, id: ++dchartSeq };
            element.dchart = st;
            if (window.ResizeObserver) {
                st.ro = new ResizeObserver(function () { schedule(st); });
                st.ro.observe(body);
            }
        },

        update: function (element, controller, list, options) {
            const st = element.dchart;
            st.list = list || [];
            st.options = options || {};
            st.title.textContent = st.options.title || "";
            dchartDraw(kind, st);
        },

        clear: function (element) {
            const st = element.dchart;
            if (!st) return;
            if (st.ro) st.ro.disconnect();
            if (st.raf) cancelAnimationFrame(st.raf);
            if (st.root.parentNode) st.root.parentNode.removeChild(st.root);
            element.dchart = null;
        }
    };
}

function dashboardBarChart() { return dchartComponent("bar"); }
function dashboardLineChart() { return dchartComponent("line"); }
