function playRecord() {
    return {
        render: function (element) {
        },
        update: function (element, controller, value) {
            var audio = document.createElement("audio");
            audio.src = value;
            audio.setAttribute("controls", "");

            audio.style.setProperty("flex-grow", "1")

            element.style.setProperty("display", "flex")
            element.appendChild(audio);

            audio.play();
        }
    }
}