function barcodeReader() {
    return {
        render: function (element, controller) {
            let barcodeReader = document.createElement("div")
            barcodeReader.id = 'div-' + crypto.randomUUID();
            barcodeReader.style.setProperty("height", "100%");
            barcodeReader.style.setProperty("width", "100%");

            element.appendChild(barcodeReader);

            element.barcodeReader = barcodeReader;

            element.canvas = document.createElement("canvas");
        },
        update: function (element, controller, options) {
            if (!element.html5QrcodeScanner) {
                document.body.appendChild(element.barcodeReader);
                element.html5QrcodeScanner = new Html5QrcodeScanner(
                    element.barcodeReader.id,
                    options,
                    /* verbose= */ false);
                element.html5QrcodeScanner.render(function (decodedText, decodedResult) {
                    controller.changeValue({ decodedText : decodedText, encodedPhoto : options.photo ? getBarcodeReaderPhoto(element) : null });
                }, function (error) {
                    // console.warn(`Code scan error = ${error}`);
                });
                element.appendChild(element.barcodeReader);
            }
        }
    }
}

function getBarcodeReaderPhoto(element) {
    const video = element.querySelector("video");

    const context = element.canvas.getContext('2d');

    element.canvas.width = video.videoWidth;
    element.canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    const data = element.canvas.toDataURL('image/jpeg');
    let encoded = data.toString().replace(/^data:(.*,)?/, '');
    if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
    }

    return encoded;
}
