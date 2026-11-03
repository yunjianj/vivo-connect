// analysis/pretty/main.js:27456; webpack module 220
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SESSION_TIME_OUT = t.CHAT_CATEGORY = t.DEFAULT_CHATID = t.SocketStatus = t.newFileColsConf = t.newContentColsConf = t.vTalkTables = void 0, 
    t.vTalkTables = [ 'CREATE TABLE IF NOT EXISTS "chat_content" (\n      "id"\tINTEGER NOT NULL UNIQUE,\n      "open_id"\ttext NOT NULL DEFAULT \' \',\n      "chat_id"\ttext DEFAULT \' \',\n      "session_id"\ttext DEFAULT \' \',\n      "trace_id"\ttext DEFAULT \' \',\n      "request_id"\ttext DEFAULT \' \',\n      "category"\ttext NOT NULL DEFAULT \' \',\n      "data"\ttext DEFAULT \' \',\n      "status"\tinteger NOT NULL DEFAULT 1,\n      "extra" TEXT,\n      "external_type"\tTEXT,\n      "external_id"\ttext DEFAULT \' \',\n      "external_content"\ttext DEFAULT \' \',\n      "deleted"\tinteger NOT NULL DEFAULT 1,\n      "create_time"\tDATETIME,\n      PRIMARY KEY("id" AUTOINCREMENT)\n    ); ', 'CREATE TABLE IF NOT EXISTS "chat_content_file" (\n      "id"\tINTEGER NOT NULL UNIQUE,\n      "open_id"\ttext NOT NULL DEFAULT \' \',\n      "category"\tTEXT,\n      "request_id"\ttext NOT NULL DEFAULT \' \',\n      "file_type"\ttext NOT NULL DEFAULT \' \',\n      "file_url"\ttext NOT NULL DEFAULT \' \',\n      "file_path"\tTEXT NOT NULL DEFAULT \' \',\n      "raw_file_url"\ttext DEFAULT \' \',\n      "raw_local_path"\ttext DEFAULT \' \',\n      "deleted"\tinteger NOT NULL DEFAULT 1,\n      "create_time"\tDATETIME,\n      PRIMARY KEY("id" AUTOINCREMENT)\n    );' ], 
    t.newContentColsConf = {
        tableName: "chat_content",
        newColsInfo: []
    }, t.newFileColsConf = {
        tableName: "chat_content_file",
        newColsInfo: []
    }, function(e) {
        e[e.SocketStatusConnecting = 0] = "SocketStatusConnecting", e[e.SocketStatusConnected = 1] = "SocketStatusConnected", 
        e[e.SocketStatusFailed = 2] = "SocketStatusFailed", e[e.SocketStatusClosed = 3] = "SocketStatusClosed";
    }(t.SocketStatus || (t.SocketStatus = {})), t.DEFAULT_CHATID = "10000", t.CHAT_CATEGORY = {
        ASK: "ask",
        RESPONSE_NORMAL: "response_normal",
        RESPONSE_NOTE: "response_note",
        RESPONSE_ERROR: "response_error"
    }, t.SESSION_TIME_OUT = 864e5;
}
