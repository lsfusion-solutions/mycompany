function wazzupChat() {
    return {
        render: function (element) {
            var frame = document.createElement("iframe");
            frame.allow = 'allow="microphone *; clipboard-write *"';
            frame.style.setProperty("width", "100%");
            frame.style.setProperty("height", "100%");

            element.frame = frame;
            element.appendChild(frame);
        },
        update: function (element, controller, value) {
            if (value)
                element.frame.src = value.url;
        }
    }
}