var initializedMarked;
var initializedGfmHeadingId;

function splitHref(href = "") {
    const i = href.indexOf("#");
    if (i < 0) return { path: href, hash: "" };
    return { path: href.slice(0, i), hash: href.slice(i) };
}

function scrollToHash(container, hash) {
    if (!container) return false;
    if (!hash) return false;

    // "#" или пустой id — наверх
    if (hash === "#") {
        container.scrollTop = 0;
        return true;
    }

    let id;
    try {
        id = decodeURIComponent(hash.startsWith("#") ? hash.slice(1) : hash);
    } catch (e) {
        id = hash.startsWith("#") ? hash.slice(1) : hash;
    }

    if (!id) {
        container.scrollTop = 0;
        return true;
    }

    // Поиск по id внутри контейнера
    let target = null;
    if (window.CSS && CSS.escape) {
        target = container.querySelector("#" + CSS.escape(id));
    } else {
        // fallback без CSS.escape (ограниченно, но лучше чем ничего)
        target = container.querySelector("#" + id.replace(/[^a-zA-Z0-9_\-]/g, "\\$&"));
    }

    // fallback: старые якоря <a name="...">
    if (!target) {
        const named = container.querySelectorAll("a[name]");
        for (const a of named) {
            if (a.getAttribute("name") === id) {
                target = a;
                break;
            }
        }
    }

    if (!target) return false;

    // scrollIntoView должен прокрутить ближайший scroll-container (наш markdown-viewer)
    try {
        target.scrollIntoView({ block: "start" });
    } catch (e) {
        target.scrollIntoView(true);
    }
    return true;
}

function setupMarked() {
    if (!initializedMarked) {
        initializedMarked = true;

        const escapeAttr = (s = "") =>
            String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

        const isInternalHref = (href = "") => {
            if (!href) return false;
            if (href.startsWith("#")) return true; // якорь — внутренний
            if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("data:")) return false;
            if (href.startsWith("//")) return false;
            if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return false; // http:, https:, etc.
            return true; // относительный ./../ или /root-relative
        };

        const renderer = new window.marked.Renderer();
        const defaultLink = renderer.link;

        renderer.link = function (token) {
            const html = defaultLink.call(this, token); // дефолтный <a ...>...</a>
            const href = token.href || "";
            const internal = isInternalHref(href);

            let extra = `data-md-link="1" data-md-internal="${internal ? "1" : "0"}" data-md-href="${escapeAttr(href)}" `;
            if (!internal) {
                extra += 'target="_blank" rel="noopener noreferrer" ';
            }

            // добавим маркеры в начало тега <a ...>
            return html.replace(
                /^<a\s/i,
                `<a ${extra}`
            );
        };

        window.marked.use({renderer});

        const gfmHeadingId =
            (window.markedGfmHeadingId && window.markedGfmHeadingId.gfmHeadingId) ||
            window.gfmHeadingId;
        if (typeof gfmHeadingId === "function") {
            window.marked.use(gfmHeadingId());
        }
    }
}

function resolveMdPath(fromFile, link) {
    // dirname(fromFile)
    const i = fromFile.lastIndexOf("/");
    const baseDir = i >= 0 ? fromFile.slice(0, i) : "";

    // join(baseDir, link)
    const joined =
        baseDir ? (baseDir.endsWith("/") ? baseDir + link : baseDir + "/" + link) : link;

    // normalize: handle "." and ".."
    const parts = joined.split("/");
    const stack = [];

    for (const p of parts) {
        if (!p || p === ".") continue;
        if (p === "..") {
            // pop only if possible; if you want to keep leading "..", adjust here
            if (stack.length) stack.pop();
            continue;
        }
        stack.push(p);
    }

    return stack.join("/");
}

function markdownViewer() {
    return {
        render: function (element, controller) {
            const container = document.createElement('div');
            container.className = 'markdown-viewer';
            container.style.setProperty('width', '100%');
            container.style.setProperty('height', '100%');
            container.style.setProperty('overflow', 'auto');

            element.markdownViewer = container;
            element.appendChild(container);
        },

        update: function (element, controller, value) {
            if (!value || !value.markdown) {
                return;
            }

            setupMarked();

            element.valueUrl = value.url;

            if (!element.initialized) {
                element.initialized = true;

                element.markdownViewer.addEventListener("click", (e) => {
                    // не ломаем “открыть в новой вкладке” и т.п.
                    if (e.defaultPrevented) return;
                    if (e.button !== 0) return; // только левый клик
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

                    const a = e.target.closest('a[data-md-link="1"]');
                    if (!a || !element.markdownViewer.contains(a)) return;

                    // уважим target (например, target="_blank")
                    if (a.target && a.target !== "_self") return;

                    const internal = a.dataset.mdInternal === "1";
                    if (!internal) return; // внешние пусть работают как обычно

                    e.preventDefault(); // отменяем стандартную навигацию :contentReference[oaicite:3]{index=3}

                    const rawHref = a.dataset.mdHref || a.getAttribute("href") || "";

                    const parts = splitHref(rawHref);

                    // якорь внутри текущего документа (#section)
                    if (!parts.path && parts.hash && parts.hash.startsWith("#")) {
                        // делаем после текущего стека, чтобы DOM был стабильным
                        requestAnimationFrame(() => scrollToHash(element.markdownViewer, parts.hash));
                        return;
                    }

                    // переход на другой markdown (+ возможно, якорь)
                    if (parts.hash && parts.hash.startsWith("#"))
                        element.pendingAnchor = parts.hash;

                    controller.changeValue({ path : resolveMdPath(element.valueUrl, parts.path || rawHref) });
                })

            }

            element.markdownViewer.innerHTML = window.marked.parse(value.markdown || '', { } );

            if (element.pendingAnchor) {
                scrollToHash(element.markdownViewer, element.pendingAnchor);
                element.pendingAnchor = null;
            } else {
                if (element.lastMarkdown !== value.markdown) {
                    element.markdownViewer.scrollTop = 0;
                    element.lastMarkdown = value.markdown;
                }
            }
        }
    }
}
