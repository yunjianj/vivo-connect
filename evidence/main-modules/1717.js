// analysis/pretty/main.js:131906; webpack module 1717
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SdkChildManager = void 0;
    const r = n(0), i = n(2), o = n(63), a = n(10), s = r.__importStar(n(1)), l = i.app.isPackaged ? s.join(process.resourcesPath, "app.asar", "dist/electron", "record-player-sdk.js") : s.join(__dirname, "record-sdk.js");
    console.log("childEntry", l);
    const c = {
        childEntry: l,
        timeoutMs: 3e4,
        autoRestart: !0,
        channelName: "record-player",
        eventChannelName: "record-player:event"
    };
    class u {
        constructor(e) {
            var t, n, r, i;
            this.pending = new Map, this.ipcRegistered = !1, this.childEntry = e.childEntry, 
            this.timeoutMs = null !== (t = e.timeoutMs) && void 0 !== t ? t : 3e4, this.autoRestart = null === (n = e.autoRestart) || void 0 === n || n, 
            this.channelName = null !== (r = e.channelName) && void 0 !== r ? r : "sdk", this.eventChannelName = null !== (i = e.eventChannelName) && void 0 !== i ? i : "sdk:event";
        }
        static getInstance() {
            return this.instance || (this.instance = new u(c)), this.instance;
        }
        start() {
            this.child && !this.child.killed || (global.__log && global.__log.info("" + this.childEntry), 
            this.child = a.fork(this.childEntry, [], {
                stdio: [ "pipe", "pipe", "pipe", "ipc" ],
                env: Object.assign(Object.assign({}, process.env), {
                    RESOURCES_PATH: process.resourcesPath,
                    SDK_CHILD_LOG_DIR: s.join(i.app.getPath("userData"), "log", "record-sdk")
                })
            }), this.child.stdout.on("data", e => {
                console.log("[child stdout]", String(e).trim()), global.__log && global.__log.info("[Record][sdk] [child stdout] " + String(e).trim());
            }), this.child.stderr.on("data", e => {
                console.error("[child stderr]", String(e).trim()), global.__log && global.__log.error("[Record][sdk] [child stderr] " + String(e).trim());
            }), this.child.on("message", e => this.onChildMessage(e)), this.child.on("exit", (e, t) => {
                global.__log && global.__log.info(`[Record][sdk] child exit with code=${e}, signal=${t}`);
                for (const [n, r] of this.pending) clearTimeout(r.timer), r.resolve({
                    ok: !1,
                    error: `sdk child exited: code=${e} signal=${t}`
                }), r.sender.send(this.eventChannelName, {
                    channel: this.channelName,
                    type: "event",
                    requestId: n,
                    event: "error",
                    data: `sdk child exited: code=${e} signal=${t}`
                });
                this.pending.clear(), this.autoRestart && this.start();
            }), this.child.on("close", (e, t) => {
                global.__log && global.__log.info(`[Record][sdk] child close with code=${e}, signal=${t}`);
            }), this.child.on("error", e => {
                global.__log && global.__log.info("[Record][sdk] child error: " + (e.message ? e.message : e));
            }), global.__log && global.__log.info("[Record][sdk] before registerIpc"), this.ipcRegistered || (this.registerIpc(), 
            this.ipcRegistered = !0));
        }
        stop() {
            if (this.ipcRegistered) {
                try {
                    i.ipcMain.removeHandler(this.channelName);
                } catch (e) {}
                this.ipcRegistered = !1;
            }
            if (this.child && !this.child.killed) try {
                this.child.kill();
            } catch (e) {}
            this.child = void 0;
        }
        onWindowClosed(e) {
            const t = e.webContents;
            for (const [e, n] of Array.from(this.pending.entries())) n.sender === t && (clearTimeout(n.timer), 
            n.resolve({
                ok: !1,
                error: "window closed"
            }), this.pending.delete(e));
        }
        registerIpc() {
            i.ipcMain.handle(this.channelName, (e, t) => this.invoke(e, t));
        }
        invoke(e, t) {
            const {method: n, args: r, requestId: i} = t || {};
            return global.__log && global.__log.info("[Record][sdk] invoke method: " + n), !this.child || this.child.killed ? (global.__log && global.__log.info("[Record][sdk]: sdk child not running"), 
            Promise.resolve({
                ok: !1,
                error: "sdk child not running"
            })) : new Promise(t => {
                const o = setTimeout(() => {
                    var e;
                    const r = this.pending.get(i);
                    if (r) {
                        this.pending.delete(i), t({
                            ok: !1,
                            error: "sdk child timeout"
                        }), r.sender.send(this.eventChannelName, {
                            channel: this.channelName,
                            type: "event",
                            requestId: i,
                            event: "error",
                            data: "timeout"
                        }), global.__log && global.__log.warn(`[Record][sdk] child timeout, killing stuck child process, method: ${n}, requestId: ${i}`);
                        try {
                            null === (e = this.child) || void 0 === e || e.kill("SIGKILL");
                        } catch (e) {
                            global.__log && global.__log.error("[Record][sdk] kill stuck child failed: " + ((null == e ? void 0 : e.message) || e));
                        }
                    }
                }, this.timeoutMs);
                this.pending.set(i, {
                    resolve: t,
                    sender: e.sender,
                    timer: o,
                    method: n
                }), this.child.send({
                    method: n,
                    args: r,
                    requestId: i
                });
            });
        }
        onChildMessage(e) {
            var t;
            if (e) {
                if ("event" === e.type) return console.log("onChildMessage", e), void (null === o.mainWindow || void 0 === o.mainWindow || o.mainWindow.webContents.send(this.eventChannelName, {
                    channel: this.channelName,
                    type: "event",
                    requestId: e.requestId,
                    event: e.event,
                    data: e.data
                }));
                if ("reply" !== e.type) {
                    if ("fatal" === e.type) {
                        for (const [n, r] of this.pending) clearTimeout(r.timer), r.resolve({
                            ok: !1,
                            error: e.error
                        }), null === (t = r.sender) || void 0 === t || t.send(this.eventChannelName, {
                            channel: this.channelName,
                            type: "event",
                            requestId: n,
                            event: "error",
                            data: e.error
                        });
                        this.pending.clear();
                    }
                } else {
                    const t = this.pending.get(e.requestId);
                    if (!t) return;
                    this.pending.delete(e.requestId), clearTimeout(t.timer), global.__log && global.__log.info(`[Record][sdk]: reply ${t.method} ${JSON.stringify(e)}`);
                    const n = e.ok ? {
                        ok: !0,
                        data: e.data
                    } : {
                        ok: !1,
                        error: e.error
                    };
                    t.resolve(n);
                }
            }
        }
    }
    t.SdkChildManager = u, t.default = u.getInstance();
}
