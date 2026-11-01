// analysis/pretty/main.js:66913; webpack module 744
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SESSION_TIME_OUT = t.CHAT_CATEGORY = t.DEFAULT_CHATID = t.TASK_STATUS = t.VCLAW_MESSAGE_ENUM = t.SocketStatus = void 0, 
    function(e) {
        e[e.SocketStatusConnecting = 0] = "SocketStatusConnecting", e[e.SocketStatusConnected = 1] = "SocketStatusConnected", 
        e[e.SocketStatusFailed = 2] = "SocketStatusFailed", e[e.SocketStatusClosed = 3] = "SocketStatusClosed";
    }(t.SocketStatus || (t.SocketStatus = {})), function(e) {
        e.VCLAW_TASK_STATE_SYNC = "VCLAW_TASK_STATE_SYNC", e.VCLAW_WS_UPDATE = "VCLAW_WS_UPDATE";
    }(t.VCLAW_MESSAGE_ENUM || (t.VCLAW_MESSAGE_ENUM = {})), function(e) {
        e[e.TASK_NULL = 0] = "TASK_NULL", e[e.TASK_RUNNING = 1] = "TASK_RUNNING", e[e.TASK_STOPPED = 2] = "TASK_STOPPED", 
        e[e.TASK_FINISHED = 3] = "TASK_FINISHED", e[e.TASK_EXCEPTION = 4] = "TASK_EXCEPTION";
    }(t.TASK_STATUS || (t.TASK_STATUS = {})), t.DEFAULT_CHATID = "10000", t.CHAT_CATEGORY = {
        ASK: "ask",
        RESPONSE_NORMAL: "response_normal",
        RESPONSE_NOTE: "response_note",
        RESPONSE_ERROR: "response_error"
    }, t.SESSION_TIME_OUT = 864e5;
}
