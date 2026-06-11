// Comment feature — two CUSTOM web components:
//   comments()      — renders the read-only comment list (CUSTOM 'comments')
//   commentEditor() — the Quill + @mention editor in the edit dialog (CUSTOM 'commentEditor')

function comments() {

    // deterministic hue from a string, matching the calendar avatars
    function hueOf(str) {
        let h = 0;
        str = str || "?";
        for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360;
        return h;
    }

    // up to two initials from the author name
    function initialsOf(str) {
        let parts = (str || "").trim().split(/\s+/).filter(Boolean);
        if (!parts.length) return "?";
        let s = parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "");
        return s.toUpperCase();
    }

    // paint the author's base64 photo (server-provided) as the avatar background, sniffing the image
    // format from the base64 magic prefix; returns false when there's no photo so we fall back to initials
    function applyPhoto(el, b64, fallback) {
        let url = b64 || null; // photoBase64 already provides a complete data: URL
        el.classList.remove("has-photo");
        el.style.backgroundImage = "";
        el.style.backgroundColor = "";
        el.__avUrl = url; // token: a stale onload from an earlier render must not paint over the current avatar
        fallback();
        if (!url) return;
        let img = new Image();
        img.onload = function () {
            if (el.__avUrl !== url) return; // superseded by a newer render
            el.textContent = "";
            el.classList.add("has-photo");
            el.style.backgroundImage = "url('" + url + "')";
            el.style.backgroundSize = "cover";
            el.style.backgroundPosition = "center";
            el.style.backgroundColor = "transparent";
        };
        img.src = url; // on error the placeholder initials are kept
    }

    // Allowlist sanitizer for the stored rich-text body (header + text + footer HTML). Renders the
    // Quill formatting while dropping scripts, event handlers, inline styles and unsafe URLs so
    // stored markup can't execute. Parsing happens in a detached <template> whose content is inert
    // (no scripts run, no images load) and we rebuild from scratch keeping only allowed tags.
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

    function iconButton(cls, icon, title, onClick) {
        let btn = document.createElement("button");
        btn.type = "button";
        btn.className = "cmt-btn " + cls;
        btn.title = title;
        let i = document.createElement("i");
        i.className = icon;
        btn.appendChild(i);
        btn.addEventListener("click", onClick);
        return btn;
    }

    return {
        render: function (element, controller) {
            let comments = document.createElement("div");
            comments.classList.add("comments");
            element.appendChild(comments);
            element.comments = comments;
        },
        update: function (element, controller, list, options) {
            let root = element.comments;
            // localized labels via OPTIONS i18n (English fallback); plain English relies on
            // lsFusion reverse-translation, which only covers server-side literals, not JS ones
            const i18n = (options && options.i18n) || {};
            const txt = (key, fallback) => (i18n[key] != null ? i18n[key] : fallback);
            while (root.lastElementChild) root.removeChild(root.lastElementChild);

            if (!list || !list.length) {
                let empty = document.createElement("div");
                empty.className = "cmt-empty";
                let emptyIcon = document.createElement("i");
                emptyIcon.className = "bi bi-chat-left-text";
                let emptyText = document.createElement("span");
                emptyText.textContent = txt("noComments", "No comments yet");
                empty.appendChild(emptyIcon);
                empty.appendChild(emptyText);
                root.appendChild(empty);
                return;
            }

            for (const comment of list) {
                let item = document.createElement("div");
                item.className = "cmt";

                let avatar = document.createElement("div");
                avatar.className = "cmt-avatar";
                applyPhoto(avatar, comment.avatar, function () {
                    avatar.style.setProperty("--ahue", hueOf(comment.nameUser));
                    avatar.textContent = initialsOf(comment.nameUser);
                });
                item.appendChild(avatar);

                let main = document.createElement("div");
                main.className = "cmt-main";
                item.appendChild(main);

                let head = document.createElement("div");
                head.className = "cmt-head";
                main.appendChild(head);

                let author = document.createElement("span");
                author.className = "cmt-author";
                author.textContent = comment.nameUser || "";
                head.appendChild(author);

                let time = document.createElement("span");
                time.className = "cmt-time";
                time.textContent = comment.textTimeDuration || "";
                time.setAttribute("title", comment.dateTime || "");
                head.appendChild(time);

                let actions = document.createElement("div");
                actions.className = "cmt-actions";
                head.appendChild(actions);

                actions.appendChild(iconButton("cmt-edit", "bi bi-pencil", txt("editLabel", "Edit"), function () {
                    controller.changeProperty("edit", comment);
                }));
                actions.appendChild(iconButton("cmt-delete", "bi bi-trash", txt("deleteLabel", "Delete"), function () {
                    // the form exposes the action aliased as `delete = DELETE`, so the client-facing
                    // property name is lowercase "delete" (calling "DELETE" was a silent no-op)
                    controller.changeProperty("delete", comment);
                }));

                let message = document.createElement("div");
                message.className = "cmt-message ql-editor ql-bubble";
                message.innerHTML = sanitizeHtml(comment.text);
                main.appendChild(message);

                root.appendChild(item);
            }
        },
        clear: function (element) {
        }
    }
}

// ----------------------------------------------------------------------------
// Quill-based comment editor with @-mentions.
//
// Renders the comment RICHTEXT as a Quill editor (so the old rich-text
// functionality keeps working) and adds the quill-mention module so typing '@'
// suggests users. The HTML is written back via controller.changeValue(html)
// (the server reads it with `INPUT newText = TEXT`).
//
// lsFusion already bundles and exposes Quill as window.Quill (2.0.3). We REUSE that
// instance (so we don't override lsFusion's own rich-text fields) and add only
// quill-mention (v6, Quill-2 compatible), vendored under web/utils and registered
// globally via onWebClientInit in Comments.lsf — no runtime CDN dependency.
// ----------------------------------------------------------------------------
function commentEditor() {
    // We deliberately do NOT register Quill's own CSS — lsFusion already bundles quill.snow.css
    // globally, and re-adding it would override lsFusion's quillRichText.css for EVERY .ql-editor
    // on the page. Only quill.mention.min.css is added (via onWebClientInit); it styles just the
    // .ql-mention-* dropdown, so it can't clobber lsFusion's editor styling.
    function waitForQuill() {
        return new Promise(function (resolve, reject) {
            var tries = 0;
            (function poll() {
                if (window.Quill) { resolve(); return; }
                if (++tries > 120) { reject(new Error('lsFusion window.Quill not found')); return; }
                setTimeout(poll, 50);
            })();
        });
    }

    // quill-mention is vendored under web/utils and registered globally via onWebClientInit in
    // Comments.lsf — no runtime CDN dependency. Its UMD build self-registers 'modules/mention' onto
    // lsFusion's bundled Quill when it loads; wait for that registration before building the editor.
    function waitForMention() {
        return new Promise(function (resolve, reject) {
            var tries = 0;
            (function poll() {
                var Quill = window.Quill;
                if (Quill && Quill.imports && Quill.imports['modules/mention']) { resolve(); return; }
                if (++tries > 120) { reject(new Error('quill-mention not registered (check onWebClientInit in Comments.lsf)')); return; }
                setTimeout(poll, 50);
            })();
        });
    }

    var libsPromise = null;
    function ensureLibs() {
        if (!libsPromise) libsPromise = waitForQuill().then(function () { return waitForMention(); });
        return libsPromise;
    }

    function currentHtml(quill) {
        return quill.getText().trim().length ? quill.root.innerHTML : '';
    }

    function flush(element) {
        if (element.flushTimer) { clearTimeout(element.flushTimer); element.flushTimer = null; }
        if (!element.quill) return;
        var ctrl = element.updController;            // the write-capable controller (from update())
        if (!ctrl || typeof ctrl.changeValue !== 'function') return;
        var html = currentHtml(element.quill);
        if (html === element.lastSent) return;
        element.lastSent = html;
        ctrl.changeValue(html);              // plain TEXT — server reads it via INPUT newText = TEXT
    }

    function applyValue(element, value) {
        if (!value) return;
        // A single-field `JSON FROM value = name(...)` flattens to a plain array of
        // names (strings). quill-mention needs { id, value } per item, so use the name
        // as both — id becomes the chip's data-id, which the `mentioned` property matches.
        element.users = (Array.isArray(value.users) ? value.users : [])
            .map(function (name) { return { id: name, value: name }; });
        var q = element.quill;
        if (!q) return;
        // Apply the initial content ONCE. Never re-apply server echoes afterwards:
        // re-pasting the value on each round-trip resets the caret to the start
        // (the "Enter glitch"). The dialog edits a single comment, so there are no
        // legitimate live external updates to reflect mid-edit.
        if (!element.contentInit) {
            element.contentInit = true;
            var incoming = value.text || '';
            if (incoming) q.clipboard.dangerouslyPasteHTML(incoming);
            element.lastSent = incoming;
        }
    }

    function initEditor(element, controller) {
        var Quill = window.Quill;
        if (!Quill) throw new Error('Quill not available');
        // localized labels arrive with the editor's value (textData JSON); English is the fallback
        var i18n = (element.pending && element.pending.i18n) || {};

        var editorDiv = document.createElement('div');
        element.host.appendChild(editorDiv);

        var quill = new Quill(editorDiv, {
            theme: 'snow',
            placeholder: i18n.placeholder || 'Add a comment…  (type @ to mention)',
            // Confine the link tooltip to the editor. Without this, Quill's bounds
            // default to document.body, so a tooltip centered on a selection near the
            // left edge gets a negative left and drifts outside the editor (it's only
            // clamped to the page, not the editor). bounds clamps its left/right and
            // flips it vertically to stay within the editor box.
            bounds: editorDiv,
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['link'],
                    ['clean']
                ],
                mention: {
                    allowedChars: /^[0-9A-Za-zÀ-ɏЀ-ӿ\s.,'\-]*$/,
                    mentionDenotationChars: ['@'],
                    spaceAfterInsert: true,
                    source: function (searchTerm, renderList) {
                        var users = element.users || [];
                        var term = (searchTerm || '').toLowerCase();
                        var matches = term
                            ? users.filter(function (u) { return (u.value || '').toLowerCase().indexOf(term) !== -1; })
                            : users;
                        renderList(matches.slice(0, 20), searchTerm);
                    }
                }
            }
        });
        element.quill = quill;

        // Persist the draft: debounced while typing (safe now — applyValue ignores
        // the echo, so no caret reset) and immediately on blur, so the text is saved
        // before the OK button's post action runs.
        quill.on('text-change', function (delta, oldDelta, source) {
            if (source !== 'user') return;
            if (element.flushTimer) clearTimeout(element.flushTimer);
            element.flushTimer = setTimeout(function () { flush(element); }, 400);
        });
        // NOTE: lsFusion's devmode property-info tooltip (Tippy) is hidden while this
        // editor is open purely in CSS — `body:has(.comment-editor) .tippy-box {display:none}`.
        // It's tied to this editor's presence in the DOM, so it auto-restores when the
        // dialog closes (no JS class to clean up — lsFusion removes the editor's DOM but
        // doesn't reliably call clear()). Flush the draft on blur so the typed text is
        // saved before the dialog's OK action runs.
        quill.root.addEventListener('blur', function () { flush(element); });

        // Block lsFusion's form navigation from hijacking Enter (which can move
        // focus off the editor). Quill handles Enter natively (newline / mention
        // select) because its own keydown handler runs before this bubbles up.
        quill.root.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') e.stopPropagation();
        });

        // Let native double-click word-selection work: stop lsFusion's mouse
        // handling from intercepting the click inside the editor. (Quill's own
        // cursor handling runs at the target before this bubbles up.)
        quill.root.addEventListener('mousedown', function (e) { e.stopPropagation(); });
        quill.root.addEventListener('dblclick', function (e) { e.stopPropagation(); });

        element.ready = true;
        if (element.pending) applyValue(element, element.pending);
        // Focus the editor so the user can start typing immediately when the dialog opens.
        setTimeout(function () { try { quill.focus(); } catch (e) {} }, 60);
    }

    return {
        render: function (element, controller) {
            var host = document.createElement('div');
            host.className = 'comment-editor';
            element.appendChild(host);
            element.host = host;
            element.ready = false;
            element.lastSent = '';
            ensureLibs()
                .then(function () { initEditor(element, controller); })
                .catch(function (err) {
                    var i18n = (element.pending && element.pending.i18n) || {};
                    host.textContent = '';
                    var box = document.createElement('div');
                    box.className = 'comment-editor-error';
                    box.textContent = (i18n.loadError || 'Comment editor failed to load') + ': ' + err.message;
                    host.appendChild(box);
                });
        },
        update: function (element, controller, value) {
            element.updController = controller; // the write-capable controller
            element.pending = value;
            if (element.ready) applyValue(element, value);
        },
        clear: function (element) {
            if (element.flushTimer) clearTimeout(element.flushTimer);
            element.quill = null;
            element.contentInit = false;
            if (element.host) element.host.innerHTML = '';
        }
    };
}
