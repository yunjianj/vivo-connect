// analysis/pretty/main.js:9951; webpack module 50
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(71)), o = r.__importDefault(n(12)), a = n(2);
    class s {
        constructor() {
            this.eventBus = null, this.callbackList = [];
        }
        static getInstance() {
            return s.instance || (s.instance = new s, this.instance.init()), s.instance;
        }
        init() {
            this.eventBus = new o.default, this.eventBus.setMaxListeners(1 / 0), a.ipcMain.handle("__eventPipe", (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                return new Promise(n => {
                    const {eventName: r, args: o} = t;
                    if (!this.eventBus.eventNames().some(e => e == r)) return void n(null);
                    const a = i.default();
                    this.eventBus.once("" + a, e => {
                        n(e);
                    }), this.eventBus.emit(r, {
                        id: a,
                        e: e,
                        args: o
                    });
                });
            })), a.ipcMain.handle("__eventPipeWindow", (e, t) => {
                const {eventName: n, args: r} = t;
                return a.BrowserWindow.getAllWindows().forEach(t => {
                    t.id !== e.sender.id && t.webContents.send("__eventPipe", {
                        eventName: n,
                        args: r
                    });
                }), null;
            });
        }
        $emit(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = {};
                if (null == n || n.forEach(e => {
                    r[e] = !0;
                }), (!n || r.current || r.all) && this.eventBus.emit(e, t), !n || r.ipc || r.otherWindow || r.all) {
                    a.BrowserWindow.getAllWindows().forEach(n => {
                        n.webContents.send("__eventPipe", {
                            eventName: e,
                            args: t
                        });
                    });
                }
                return null;
            });
        }
        $on(e, t) {
            const n = e => r.__awaiter(this, void 0, void 0, function*() {
                if ((null == e ? void 0 : e.id) && (null == e ? void 0 : e.e)) {
                    const n = yield t(null == e ? void 0 : e.args, null == e ? void 0 : e.e);
                    this.eventBus.emit("" + (null == e ? void 0 : e.id), n);
                } else t(e);
            });
            this.callbackList.push({
                key: t,
                val: n
            }), this.eventBus.on(e, n);
        }
        $off(e, t) {
            if (!t) return void this.eventBus.removeAllListeners(e);
            const n = this.callbackList.findIndex(e => e.key == t);
            if (-1 !== n) {
                const t = this.callbackList[n].val;
                this.eventBus.off(e, t), this.callbackList.splice(n, 1);
            } else this.eventBus.off(e, t);
        }
        $once(e, t) {
            this.eventBus.once(e, e => r.__awaiter(this, void 0, void 0, function*() {
                if ((null == e ? void 0 : e.id) && (null == e ? void 0 : e.e)) {
                    const n = yield t(null == e ? void 0 : e.args, null == e ? void 0 : e.e);
                    this.eventBus.emit("" + (null == e ? void 0 : e.id), n);
                } else t(e);
            }));
        }
    }
    t.default = s.getInstance();
}
