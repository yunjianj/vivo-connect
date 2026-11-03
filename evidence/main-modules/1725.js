// analysis/pretty/main.js:132181; webpack module 1725
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(356)), a = r.__importStar(n(722)), s = r.__importStar(n(240)), l = n(139), c = n(11), u = n(138), d = n(140), h = n(164);
    t.init = function() {
        i.ipcMain.on(l.DOWNLOAD_WIN_MAIN.TASK_EVENT, (e, t) => {
            d.send2Main(u.FM_RENDERER_ENUM.DOWNLOAD_WINDOW_TASK, t);
        }), i.ipcMain.on(l.DOWNLOAD_WIN_MAIN.HIDE_WINDOW, () => {
            o.default.hide();
        }), i.ipcMain.on(l.DOWNLOAD_WIN_MAIN.SHOW_WINDOW, () => {
            o.default.show();
        }), i.ipcMain.on(l.DOWNLOAD_WIN_MAIN.MINMIZE, () => {
            o.default.handleMinmize();
        }), i.ipcMain.on(c.APP_MESSAGE_ENUM.APP_LANG_SCHEME_CHANGE, (e, {lang: t, isRtl: n}) => {
            o.default.send(l.DOWNLOAD_WIN_RENDER.DOWNLOAD_LANG_CHANGE, {
                lang: t,
                isRtl: n
            });
        }), i.ipcMain.on(c.APP_MESSAGE_ENUM.APP_THEME_SCHEME_CHANGE, (e, t) => {
            o.default.send(l.DOWNLOAD_WIN_RENDER.THEME_CHANGE, t);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG.ADD_NOTICE, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            o.default.send(l.IPC_NOTICE_WIN_MSG.ADD_NOTICE, t);
        })), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG.UPDATE_NOTICE, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            o.default.send(l.IPC_NOTICE_WIN_MSG.UPDATE_NOTICE, t);
        })), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG.DELETE_NOTICE, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
            o.default.send(l.IPC_NOTICE_WIN_MSG.DELETE_NOTICE, t);
        })), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.ABORT, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.ABORT, t), 
            h.TaskManager.cancelTask(t.id);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.RECEIVE, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.RECEIVE, t);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.BACKENDTRANSFER, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.BACKENDTRANSFER, t);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.REACCEPT, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.REACCEPT, t), 
            h.TaskManager.resumeTask(t.id);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.LOOK, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.LOOK, t), 
            h.TaskManager.view(t.id);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.GOTIT, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.GOTIT, t), 
            h.TaskManager.rogerTask(t.id);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.BACKENDRECEIVE, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.BACKENDRECEIVE, t), 
            h.TaskManager.backendTransfer(t.id);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.SWITCH_NOW, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.SWITCH_NOW, t);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.CONNECT_YOUR_PHONE, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.CONNECT_YOUR_PHONE, t);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.RETRY, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.RETRY, t);
        }), i.ipcMain.on(l.IPC_NOTICE_WIN_MSG_HANDLE.WIN_CLOSE, (e, t) => {
            var n;
            null === (n = global.__mainWindow) || void 0 === n || n.webContents.send(l.IPC_NOTICE_WIN_MSG_HANDLE.WIN_CLOSE, t), 
            h.TaskManager.cancelTaskInNotification();
        }), i.ipcMain.on(l.IPC_COMMON_LOOK_ENUM.LOOK_FILES, (e, t) => {
            const {dirPath: n, fileNames: r} = t;
            d.revealAndSelectFiles(n, r);
        }), i.ipcMain.on(c.NOTIFICATION_MESSAGE_ENUM.RESET_BOUNDS, () => r.__awaiter(this, void 0, void 0, function*() {
            global.__log.info("[DownloadWindow] RESET_BOUNDS"), yield d.sleep(2e3), o.default.reSetBounds();
        })), a.init(), s.init(), i.app.whenReady().then(() => {
            o.default.init();
        });
    };
}
