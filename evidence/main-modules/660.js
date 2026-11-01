// analysis/pretty/main.js:60265; webpack module 660
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(209)), a = n(11);
    class s extends o.default {
        constructor() {
            super(), this.listenerCbList = new Map;
        }
        static getInstance() {
            return this.instance || (this.instance = new s), this.instance;
        }
        registerIpcEvent() {
            this.setVTalkDb();
        }
        registerAiTalkShow(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_SHOW, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_SHOW, e);
        }
        registerAiTalkHide(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_HIDE, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_HIDE, e);
        }
        setVTalkDb() {
            i.ipcMain.handle(a.AI_TALK_MESSAGE_ENUM.AI_TALK_DB_SETUP, () => r.__awaiter(this, void 0, void 0, function*() {
                const e = n(64);
                yield e.initTables(), yield e.checkAndUpdateCols();
            }));
        }
        registerAiTalkMinimize(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MINIMIZE, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MINIMIZE, e);
        }
        registerAiTalkSetting(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_SETTING, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_SETTING, e);
        }
        registerAiTalkWinStateSwitch(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_STATE_SWITCH, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_STATE_SWITCH, e);
        }
        registerTalkBegin(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_BEGIN_TALK, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_BEGIN_TALK, e);
        }
        registerVTalkMoveStart(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MOVE_START, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MOVE_START, e);
        }
        registerVTalkMoveIng(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MOVE_ING, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MOVE_ING, e);
        }
        registerVTalkMoveEnd(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MOVE_END, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_WINDOW_MOVE_END, e);
        }
        registerLogoutHandler(e) {
            i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_LOGOUT_HANDLER, e), this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_LOGOUT_HANDLER, e);
        }
        registerLoginHandler(e) {
            global.__log.info("registerLoginHandler", Date.now()), i.ipcMain.addListener(a.AI_TALK_MESSAGE_ENUM.AI_TALK_LOGIN_HANDLE, e), 
            this.listenerCbList.set(a.AI_TALK_MESSAGE_ENUM.AI_TALK_LOGIN_HANDLE, e);
        }
        registerThemeColorHandler(e) {
            global.__log.info("registerthemeHandler", Date.now()), i.ipcMain.addListener(a.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, e), 
            this.listenerCbList.set(a.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, e);
        }
        registerRtlChangeHandler(e) {
            global.__log.info("registerthemeHandler", Date.now()), i.ipcMain.addListener(a.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, e), 
            this.listenerCbList.set(a.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, e);
        }
        removeAllIpcListener() {
            this.listenerCbList.forEach((e, t) => {
                i.ipcMain.removeListener(t, e);
            }), this.listenerCbList.clear();
        }
    }
    t.default = s;
}
