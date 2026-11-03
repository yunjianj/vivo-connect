// analysis/pretty/main.js:132690; webpack module 1732
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = n(2), o = n(11), a = r.__importDefault(n(1733)), s = n(1734), l = n(41);
    let c = null;
    t.init = function() {
        i.ipcMain.on(o.PERMISSION_MESSAGE_ENUM.SHOW_DIALOG, (e, t) => {
            c = e.sender, a.default.showAuthDialog(t);
        }), i.ipcMain.on(o.PERMISSION_MESSAGE_ENUM.HIDE_DIALOG, (e, t) => {
            null == c || c.send(o.PERMISSION_MESSAGE_ENUM.HIDE_DIALOG, t), c = null, a.default.hide();
        }), i.ipcMain.on(o.PERMISSION_MESSAGE_ENUM.MESSAGE_BOX_BUTTON_CLICK, (e, t) => {
            null == c || c.send(o.PERMISSION_MESSAGE_ENUM.MESSAGE_BOX_BUTTON_CLICK, t);
        }), i.ipcMain.on(o.PERMISSION_MESSAGE_ENUM.CONTENT_READY, e => {
            a.default.onContentReady();
        }), i.ipcMain.on(o.PERMISSION_MESSAGE_ENUM.UPDATE_WINDOW, (e, t) => {
            var n;
            global.__log.info(o.PERMISSION_MESSAGE_ENUM.UPDATE_WINDOW + ", agr: " + JSON.stringify(t));
            let {width: r, height: i} = t;
            const [s, l] = (null === (n = a.default.getBrowserWindow()) || void 0 === n ? void 0 : n.getSize()) || [];
            r = "number" != typeof r || isNaN(r) ? s : r, i = "number" != typeof i || isNaN(i) ? l : i, 
            a.default.updateDialog({
                width: r,
                height: i
            });
        }), i.ipcMain.on(o.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, (e, t) => {
            if (a.default.send(o.PERMISSION_MESSAGE_ENUM.THEME_CHANGE, t), "win32" === process.platform) {
                const e = t === l.ThemeScheme.DARK || t === l.ThemeScheme.SYSTEM && n(2).nativeTheme.shouldUseDarkColors, r = a.default.getBrowserWindow();
                r && !r.isDestroyed() && r.setBackgroundColor(e ? "#242424" : "#F2F4F6");
            }
        }), i.ipcMain.on(o.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, (e, t) => {
            a.default.send(o.PERMISSION_MESSAGE_ENUM.LANG_CHANGE, t);
        }), i.ipcMain.on(o.PERMISSION_MESSAGE_ENUM.VDFS_GO_AUTHORIZE, (e, t) => {
            a.default.sendToMainWin(o.PERMISSION_MESSAGE_ENUM.VDFS_GO_AUTHORIZE, t);
        }), i.ipcMain.handle(o.PERMISSION_MESSAGE_ENUM.QUERY_PERMISSION, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            if ("full-disk-access" === t) return yield s.checkDiskAccess(0);
            throw new Error("Function not implemented.");
        })), i.ipcMain.handle(o.PERMISSION_MESSAGE_ENUM.REQUEST_PERMISSION, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            return console.log("[permission window] REQUEST_PERMISSION", t), s.requestPermission(t);
        }));
    };
}
