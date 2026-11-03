// analysis/pretty/main.js:131390; webpack module 1707
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DOWNLOAD_END_STATUS = t.OPEN_MODE = void 0, function(e) {
        e[e.CANCEL_PLAYER = 0] = "CANCEL_PLAYER", e[e.CANCEL_PLAYER_START_NEW = 1] = "CANCEL_PLAYER_START_NEW", 
        e[e.CANCEL_PLAYER_START_FM = 2] = "CANCEL_PLAYER_START_FM", e[e.START_PLAYER = 3] = "START_PLAYER", 
        e[e.START_FM = 4] = "START_FM", e[e.FM_QUEUE = 5] = "FM_QUEUE", e[e.PLAYER_QUEUE_ONLY = 6] = "PLAYER_QUEUE_ONLY", 
        e[e.UNSET = 99] = "UNSET";
    }(t.OPEN_MODE || (t.OPEN_MODE = {})), function(e) {
        e[e.FM_DOWNLOAD_FINISH = 0] = "FM_DOWNLOAD_FINISH", e[e.PLAYER_DOWNLOAD_SUCCESS = 1] = "PLAYER_DOWNLOAD_SUCCESS", 
        e[e.PLAYER_DOWNLOAD_FAIL = 2] = "PLAYER_DOWNLOAD_FAIL";
    }(t.DOWNLOAD_END_STATUS || (t.DOWNLOAD_END_STATUS = {}));
}
