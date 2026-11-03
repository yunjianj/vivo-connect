// analysis/pretty/main.js:18153; webpack module 126
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.APP_STORAGE_FOLDERS = t.MIN_SIZE = t.DEFAULT_SIZE = t.MAX_LIFTBAR_WIDTH = t.MIN_LIFTBAR_WIDTH = t.LEFTBAR_CHANGE_WIDTH = t.EXPAND_WIDTH = t.NOTE_URL_MAP = t.MODULE_URL_MAP = t.UPDATE_DEVICE_LIST = t.DEFAULT_PORT = void 0, 
    t.DEFAULT_PORT = 10280, t.UPDATE_DEVICE_LIST = "UPDATE_DEVICE_LIST";
    const r = `file://${__dirname}/index.html#`;
    t.MODULE_URL_MAP = {
        note: r + "/note",
        calendar: r + "/calendar",
        album: r + "/album",
        welcome: r + "/welcome",
        search: r + "/global-search",
        home: r + "/home",
        record: r + "/record"
    };
    const i = `file://${__dirname}/sub-note/index.html#`;
    t.NOTE_URL_MAP = {
        note: i
    }, t.EXPAND_WIDTH = 68, t.LEFTBAR_CHANGE_WIDTH = 37, t.MIN_LIFTBAR_WIDTH = 80, t.MAX_LIFTBAR_WIDTH = 148, 
    t.DEFAULT_SIZE = {
        WIDTH: 1360,
        HEIGHT: 800,
        SUB_WIDTH: 1280
    }, t.MIN_SIZE = {
        WIDTH: 872 + t.EXPAND_WIDTH,
        HEIGHT: 720
    }, t.APP_STORAGE_FOLDERS = {
        AVATAR: [ "storage_files", "/" ],
        FM_TEMP: [ "storage_files", "fm_file_temp" ],
        FM_THUMB_CACHE: [ "storage_files", "fm_thumb_cache" ],
        VTALK: [ "storage_files", "vtalk" ]
    };
}
