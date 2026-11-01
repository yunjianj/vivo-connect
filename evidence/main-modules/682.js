// analysis/pretty/main.js:61555; webpack module 682
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PictureRelayType = t.PhoneCallState = t.PhoneCallMessage = t.ImageOperation = t.DownloadStatus = void 0, 
    function(e) {
        e[e.SUCCESS = 0] = "SUCCESS", e[e.NO_NETWORK = 1] = "NO_NETWORK", e[e.TIMEOUT = 2] = "TIMEOUT", 
        e[e.NO_EXIST = 3] = "NO_EXIST", e[e.OTHER_ERR = 4] = "OTHER_ERR";
    }(t.DownloadStatus || (t.DownloadStatus = {})), function(e) {
        e.BROWSE = "BROWSE", e.COPY = "COPY", e.SAVE = "SAVE";
    }(t.ImageOperation || (t.ImageOperation = {})), function(e) {
        e.THEME_CHANGE = "theme_change", e.UI_WINDOW = "phone_call_uiwindow", e.SWITCH_CHANGE = "phone_call_switch", 
        e.DEVICE_DISCONNECT = "on_mobile_device_disconnected", e.DISPLAY_CHANGE = "screen_change";
    }(t.PhoneCallMessage || (t.PhoneCallMessage = {})), function(e) {
        e[e.PHONE_CALL_MIN = 10] = "PHONE_CALL_MIN", e[e.PHONE_CALL_SHOW = 11] = "PHONE_CALL_SHOW", 
        e[e.PHONE_CALL_CLOSE = 12] = "PHONE_CALL_CLOSE", e[e.PHONE_CALL_KILL = 13] = "PHONE_CALL_KILL", 
        e[e.PHONE_CALL_NEED_MICROPHONE_PERMISSION = 14] = "PHONE_CALL_NEED_MICROPHONE_PERMISSION", 
        e[e.PHONE_CALL_SWITCH = 15] = "PHONE_CALL_SWITCH", e[e.PHONE_CALL_DISCONNECT = -1] = "PHONE_CALL_DISCONNECT";
    }(t.PhoneCallState || (t.PhoneCallState = {})), function(e) {
        e[e.PHOTO = 0] = "PHOTO", e[e.SCREENSHOT = 1] = "SCREENSHOT";
    }(t.PictureRelayType || (t.PictureRelayType = {}));
}
