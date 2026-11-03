// analysis/pretty/main.js:132156; webpack module 1723
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.init = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = n(2), a = n(1724), s = r.__importDefault(n(1));
    function l(e, t) {
        global.__log.info("[backup]handleOpenDir: " + JSON.stringify(t));
        const n = s.default.resolve(t.backupDir, t.deviceName);
        i.default.existsSync(n) || i.default.mkdirSync(n, {
            recursive: !0
        }), o.shell.openPath(n).then(e => {
            global.__log.info("[backup]handleOpenDir err: " + e);
        });
    }
    t.init = function() {
        o.ipcMain.on(a.BACKUP_MAIN_EVENT.OPEN_BACKUP_DIR, l);
    };
}
