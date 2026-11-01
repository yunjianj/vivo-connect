// analysis/pretty/main.js:61708; webpack module 687
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SYNC_HTTP_MESSAGE = t.SYNC_CONNECT_STATUS = t.BLACK_LOG_LIST = t.REPAIR_SERVER_LIMIT = t.ERROR_TASK_QUEUE_MAX = t.WS_URL = t.WS_PORT = void 0;
    const r = n(234);
    t.WS_PORT = 9996, t.WS_URL = "ws://127.0.0.1", t.ERROR_TASK_QUEUE_MAX = 10, t.REPAIR_SERVER_LIMIT = 3, 
    t.BLACK_LOG_LIST = [ r.AlbumMsg.HAS_NEW_DATA, r.AlbumMsg.SYNC_PROCESS_NOTIFY, r.AlbumMsg.QUERY_SYNC_PROCESS, r.AlbumMsg.HAS_ALBUM_DATA, r.InfoMsg.START_SYNC, r.InfoMsg.END_SYNC, r.CommonMsg.TOKEN_EXPIRE, r.CommonMsg.TOKEN_EXPIRE_CHECK, r.NoteMsg.NOTE_DATA_CHANGE, r.NoteMsg.DOCUMENT_SYNC_PROGRESS, r.NoteMsg.DOWNLOAD_DOCUMENT_RECYCLE_BIN_PROGRESS ], 
    function(e) {
        e[e.CONNECT_READ = 0] = "CONNECT_READ", e[e.CONNECT_SUCCESS = 1] = "CONNECT_SUCCESS", 
        e[e.CONNECT_CLOSE = 2] = "CONNECT_CLOSE", e[e.CONNECT_ERROR = 3] = "CONNECT_ERROR";
    }(t.SYNC_CONNECT_STATUS || (t.SYNC_CONNECT_STATUS = {})), function(e) {
        e.USER_APPDATA_CHANGE = "USER_APPDATA_CHANGE", e.UPDATE_PORT_SUCC = "UPDATE_PORT_SUCC", 
        e.UPDATE_PORT_FAILED = "UPDATE_PORT_FAILED";
    }(t.SYNC_HTTP_MESSAGE || (t.SYNC_HTTP_MESSAGE = {}));
}
