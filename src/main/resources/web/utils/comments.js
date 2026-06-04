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
            while (root.lastElementChild) root.removeChild(root.lastElementChild);

            if (!list || !list.length) {
                let empty = document.createElement("div");
                empty.className = "cmt-empty";
                empty.innerHTML = '<i class="bi bi-chat-left-text"></i><span>No comments yet</span>';
                root.appendChild(empty);
                return;
            }

            for (const comment of list) {
                let item = document.createElement("div");
                item.className = "cmt";

                let avatar = document.createElement("div");
                avatar.className = "cmt-avatar";
                avatar.style.setProperty("--ahue", hueOf(comment.nameUser));
                avatar.textContent = initialsOf(comment.nameUser);
                item.appendChild(avatar);

                let main = document.createElement("div");
                main.className = "cmt-main";
                item.appendChild(main);

                let head = document.createElement("div");
                head.className = "cmt-head";
                main.appendChild(head);

                let author = document.createElement("span");
                author.className = "cmt-author";
                author.innerHTML = comment.nameUser || "";
                head.appendChild(author);

                let time = document.createElement("span");
                time.className = "cmt-time";
                time.innerHTML = comment.textTimeDuration || "";
                time.setAttribute("title", comment.dateTime || "");
                head.appendChild(time);

                let actions = document.createElement("div");
                actions.className = "cmt-actions";
                head.appendChild(actions);

                actions.appendChild(iconButton("cmt-edit", "bi bi-pencil", "Edit", function () {
                    controller.changeProperty("edit", comment);
                }));
                actions.appendChild(iconButton("cmt-delete", "bi bi-trash", "Delete", function () {
                    controller.changeProperty("DELETE", comment);
                }));

                let message = document.createElement("div");
                message.className = "cmt-message ql-editor ql-bubble";
                message.innerHTML = comment.text;
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
// lsFusion already bundles and exposes Quill as window.Quill (2.0.3). We REUSE
// that instance (so we don't override lsFusion's own rich-text fields) and only
// load quill-mention (v6, Quill-2 compatible) from a CDN.
// ----------------------------------------------------------------------------
function commentEditor() {
    // lsFusion already bundles quill.snow.css globally, so we do NOT load Quill CSS
    // from a CDN — doing so appends a <link> at the end of <head> that would override
    // lsFusion's quillRichText.css for EVERY .ql-editor on the page. Only quill-mention
    // (which lsFusion does not bundle) is loaded.
    var CDN = {
        mentionCss: 'https://cdn.jsdelivr.net/npm/quill-mention@6.1.1/dist/quill.mention.min.css',
        mentionJs:  'https://cdn.jsdelivr.net/npm/quill-mention@6.1.1/dist/quill.mention.min.js'
    };

    function addCss(href) {
        if (document.querySelector('link[data-cmt="' + href + '"]')) return;
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = href;
        l.setAttribute('data-cmt', href);
        document.head.appendChild(l);
    }

    function addScript(src) {
        return new Promise(function (resolve, reject) {
            var ex = document.querySelector('script[data-cmt="' + src + '"]');
            if (ex) {
                if (ex.getAttribute('data-loaded')) resolve();
                else {
                    ex.addEventListener('load', function () { resolve(); });
                    ex.addEventListener('error', function () { reject(new Error('load failed: ' + src)); });
                }
                return;
            }
            var s = document.createElement('script');
            s.src = src;
            s.setAttribute('data-cmt', src);
            s.onload = function () { s.setAttribute('data-loaded', '1'); resolve(); };
            s.onerror = function () { reject(new Error('load failed: ' + src)); };
            document.head.appendChild(s);
        });
    }

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

    var libsPromise = null;
    function ensureLibs() {
        if (!libsPromise) {
            addCss(CDN.mentionCss);
            // reuse lsFusion's bundled Quill (snow theme is already global), then add mention
            libsPromise = waitForQuill().then(function () { return addScript(CDN.mentionJs); });
        }
        return libsPromise;
    }

    function registerMention() {
        var Quill = window.Quill;
        try {
            if (Quill.imports && Quill.imports['modules/mention']) return true; // already (auto-)registered
            var cand = window.QuillMention || window.quillMention || window.Mention;
            var mod = cand && (cand.default || cand.Mention || cand);
            if (mod) { Quill.register('modules/mention', mod); return true; }
        } catch (e) { /* ignore */ }
        return !!(Quill.imports && Quill.imports['modules/mention']);
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
        registerMention();

        var editorDiv = document.createElement('div');
        element.host.appendChild(editorDiv);

        var quill = new Quill(editorDiv, {
            theme: 'snow',
            placeholder: 'Add a comment…  (type @ to mention)',
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
                    host.innerHTML = '<div class="comment-editor-error">Comment editor failed to load: ' + err.message + '</div>';
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
