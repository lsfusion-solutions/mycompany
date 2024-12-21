var loadLib = document.createElement("script");
loadLib.src = "https://my.zadarma.com/webphoneWebRTCWidget/v9/js/loader-phone-lib.js?sub_v=1";
document.head.appendChild(loadLib);

var loadFn = document.createElement("script");
loadFn.src = "https://my.zadarma.com/webphoneWebRTCWidget/v9/js/loader-phone-fn.js?sub_v=1";
document.head.appendChild(loadFn);

function zadarmaLoadWebRTC (key, sip) {
    zadarmaWidgetFn(
        key,
        sip,
        'square', /*square|rounded*/
        'ru', /*ru, en, es, fr, de, pl, ua*/
        true,
        {left:'10px',bottom:'5px'}
    );
}