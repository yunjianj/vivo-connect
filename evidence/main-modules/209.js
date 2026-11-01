// analysis/pretty/main.js:26789; webpack module 209
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(76)), a = n(41), s = n(12);
    t.default = class extends s {
        constructor() {
            super(), this.log = new o.default([ a.LogModule.FRAMEWORK, this.constructor.name ]).getExpandLog();
        }
        get mainWindow() {
            return global.__mainWindow || null;
        }
        isObject(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
        }
        printLog(e, t) {
            t && this.isObject(t) ? this.log.info(`broadcast event:${e},data:${JSON.stringify(t)}`) : this.log.info(`broadcast event:${e},data:${t || "null"}`);
        }
        broadcastEvent(e, t) {
            var n, r, i;
            try {
                if (null === (n = this.mainWindow) || void 0 === n ? void 0 : n.isDestroyed()) return void this.log.error(`broadcastEvent:${e}  error, window is isDestroyed`);
                if (!e) return void this.log.error(`broadcastEvent:${e}  error, event is not found`);
                null === (i = null === (r = this.mainWindow) || void 0 === r ? void 0 : r.webContents) || void 0 === i || i.send(e, t), 
                this.printLog(e, t);
            } catch (t) {
                this.log.error(`catch broadcastEvent: ${e} error`);
            }
        }
        broadcastTargetEvent(e, t, n) {
            var r;
            const i = e;
            (null == i ? void 0 : i.isDestroyed()) ? this.log.error(`broadcastTargetEvent:${t}  error, targetWindowWindow is isDestroyed`) : t ? (null === (r = null == i ? void 0 : i.webContents) || void 0 === r || r.send(t, n), 
            this.printLog(t, n)) : this.log.error(`broadcastTargetEvent:${t}  error, event is not found`);
        }
        listen(e, t, n = !1) {
            this.log.info("listen:" + e), n ? (this.once(e, e => {
                t(e);
            }), i.ipcMain.once(e, t => {
                this.emit(e, t);
            })) : (this.on(e, n => {
                this.log.info("listen222:" + e), t(n);
            }), i.ipcMain.on(e, t => {
                this.emit(e, t);
            }));
        }
    };
}
