// Key-figure cards of the dashboard (CUSTOM view of the DashboardKpi object group, see
// dashboard/Dashboard.lsf). Each row is one figure: caption, its group (caption, icon class, order),
// the number (value - as of now, or periodValue - for the selected period), prevValue for the trend
// and the decimals to show. A click runs the row's `open` action (drawn on the form), which the
// contributing module implements to open the matching list form.

// group-separated number for the user's locale with a fixed number of decimals
function dkpiFormat(value, scale, locale) {
    const n = Number(value);
    if (!isFinite(n)) return "";
    const digits = scale == null ? 0 : Number(scale);
    try {
        return new Intl.NumberFormat(locale || undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
    } catch (e) {
        return n.toFixed(digits);
    }
}

// one accent colour per group, assigned by the group's position so neighbouring groups differ
const DKPI_ACCENTS = ["#2563eb", "#059669", "#d97706", "#7c3aed", "#db2777", "#0891b2", "#ea580c", "#4f46e5", "#65a30d"];

function dashboardKpis() {
    return {
        render: function (element, controller) {
            const cards = document.createElement("div");
            cards.className = "dkpi";
            element.appendChild(cards);
            element.dkpi = cards;
        },

        update: function (element, controller, list, options) {
            const cards = element.dkpi;
            const locale = options && options.locale;
            const i18n = (options && options.i18n) || {};
            while (cards.lastElementChild) cards.removeChild(cards.lastElementChild);

            // groups in their declared order, figures inside a group in declaration (object id) order
            const rows = list.slice().sort(function (a, b) {
                const ga = a.orderGroup == null ? 1e9 : a.orderGroup, gb = b.orderGroup == null ? 1e9 : b.orderGroup;
                if (ga !== gb) return ga - gb;
                return (Number(a.key) || 0) - (Number(b.key) || 0);
            });
            const accentByGroup = {};
            let nextAccent = 0;

            for (const item of rows) {
                const groupKey = String(item.group); // FK ids arrive as numbers on 7.0 - key by string
                if (accentByGroup[groupKey] == null) accentByGroup[groupKey] = DKPI_ACCENTS[nextAccent++ % DKPI_ACCENTS.length];
                const accent = accentByGroup[groupKey];

                const card = document.createElement("div");
                card.className = "dkpi-card";
                card.style.setProperty("--dkpi-accent", accent);
                if (controller.isCurrent(item)) card.classList.add("dkpi-card-current");

                const head = document.createElement("div");
                head.className = "dkpi-head";
                const icon = document.createElement("span");
                icon.className = "dkpi-icon";
                const i = document.createElement("i");
                i.className = item.iconGroup || "bi bi-graph-up";
                icon.appendChild(i);
                head.appendChild(icon);
                const group = document.createElement("span");
                group.className = "dkpi-group";
                group.textContent = item.nameGroup || "";
                head.appendChild(group);
                card.appendChild(head);

                const caption = document.createElement("div");
                caption.className = "dkpi-caption";
                caption.textContent = item.caption || "";
                caption.title = item.caption || "";
                card.appendChild(caption);

                const hasPeriod = item.periodValue != null;
                const v = hasPeriod ? item.periodValue : item.value;
                const valueEl = document.createElement("div");
                valueEl.className = "dkpi-value";
                if (v == null) {
                    valueEl.textContent = i18n.noData || "No data";
                    valueEl.classList.add("dkpi-value-empty");
                } else {
                    valueEl.textContent = dkpiFormat(v, item.scale, locale);
                    valueEl.title = valueEl.textContent;
                }
                card.appendChild(valueEl);

                // trend badge: only for period figures that have a comparable previous period
                if (hasPeriod && item.prevValue != null) {
                    const prev = Number(item.prevValue), cur = Number(v);
                    const trend = document.createElement("div");
                    trend.className = "dkpi-trend";
                    let text, cls;
                    if (prev === 0 && cur === 0) { text = "0%"; cls = "dkpi-trend-flat"; }
                    else if (prev === 0) { text = "+∞"; cls = "dkpi-trend-up"; }
                    else {
                        const pct = (cur - prev) / Math.abs(prev) * 100;
                        const rounded = Math.round(pct * 10) / 10;
                        cls = rounded > 0 ? "dkpi-trend-up" : rounded < 0 ? "dkpi-trend-down" : "dkpi-trend-flat";
                        text = (rounded > 0 ? "+" : "") + dkpiFormat(rounded, 1, locale) + "%";
                    }
                    trend.classList.add(cls);
                    const arrow = document.createElement("span");
                    arrow.className = "dkpi-trend-arrow";
                    arrow.textContent = cls === "dkpi-trend-up" ? "▲" : cls === "dkpi-trend-down" ? "▼" : "•";
                    trend.appendChild(arrow);
                    trend.appendChild(document.createTextNode(" " + text));
                    const hint = document.createElement("span");
                    hint.className = "dkpi-trend-hint";
                    hint.textContent = i18n.prev || "vs previous period";
                    trend.appendChild(hint);
                    card.appendChild(trend);
                }

                card.addEventListener("click", function () {
                    if (!controller.isCurrent(item)) controller.changeObject(item, true);
                    controller.changeProperty("open", item);
                });

                cards.appendChild(card);
            }
        },

        clear: function (element) {
            if (element.dkpi && element.dkpi.parentNode) element.dkpi.parentNode.removeChild(element.dkpi);
            element.dkpi = null;
        }
    };
}
