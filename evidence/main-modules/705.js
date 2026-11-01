// analysis/pretty/main.js:62999; webpack module 705
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.WinServicesManager = void 0;
    const r = n(0), i = n(10), o = r.__importDefault(n(8)), a = n(32), s = r.__importDefault(n(6));
    let l = class {
        constructor(e) {}
    };
    var c;
    "win32" === o.default.platform() && (l = n(1447).Service), function(e) {
        e.NOT_INSTALLED = "NOT_INSTALLED", e.NOT_STARTED = "NOT_STARTED", e.STARTED = "STARTED", 
        e.UNKNOW = "UNKNOW";
    }(c || (c = {}));
    class u {
        constructor() {
            this.isSupportSystem = !1;
            const e = String(s.default.getItem("systemVersion") || o.default.release());
            this.isSupportSystem = "win32" === o.default.platform() && parseInt(e) >= 7, global.__log.info("[WindowsServicesManager] isSupportSystem: " + this.isSupportSystem + "systemVersion:" + e);
        }
        static getInstance() {
            return this.instance || (this.instance = new u), this.instance;
        }
        static execute(e, t, n) {
            n = n || {};
            e = `"${a.PathUtil.getElevatePath()}" ${e}`;
            global.__log.info("[WindowsServicesManager] cmd: " + e), i.exec(e, n, t);
        }
        static list(e) {
            i.exec("tasklist /FO CSV", (t, n, r) => {
                if (t) return void e([]);
                const i = n.split("\r\n"), o = [];
                let a = null;
                for (;i.length > 1; ) {
                    const e = (i.shift() || "").replace(/\"\,/gi, '";').replace(/\"|\'/gi, "").split(";");
                    if (null == a) {
                        a = e;
                        for (let e = 0; e < a.length; e++) switch (e) {
                          case 0:
                            a[e] = "serviceName";
                            break;

                          case 2:
                            a[e] = "sessionName";
                            break;

                          case 3:
                            a[e] = "session";
                            break;

                          case 4:
                            a[e] = "memory";
                            break;

                          default:
                            a[e] = a[e].replace(/ /gi, "");
                        }
                    } else {
                        const t = {};
                        for (let n = 0; n < e.length; n++) t[a[n]] = e[n].replace(/\"|\'/gi, "");
                        o.push(t);
                    }
                }
                e(o);
            });
        }
        isSupport() {
            return this.isSupportSystem;
        }
        PathUtil() {
            return a.PathUtil;
        }
        queryProcList() {
            return this.isSupportSystem ? new Promise((e, t) => {
                try {
                    u.list(t => {
                        e(t);
                    });
                } catch (e) {
                    t(e);
                }
            }) : Promise.reject("not support");
        }
        checkProcessStatus(e) {
            var t, n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.isSupportSystem) return global.__log.info("[WindowsServicesManager] checkProcessStatus isSupportSystem: false"), 
                !1;
                if (global.__log.info("[WindowsServicesManager] checkProcessStatus procName: " + JSON.stringify(e)), 
                !e || !e.length) return global.__log.info("[WindowsServicesManager] checkProcessStatus procName: false"), 
                !1;
                try {
                    const r = yield this.queryProcList();
                    let o;
                    Array.isArray(e) && (e = e.join(",")), e = `,${e.toLowerCase()},`;
                    for (let a = 0; a < r.length; a++) {
                        const s = (null === (i = null === (n = null === (t = r[a]) || void 0 === t ? void 0 : t.serviceName) || void 0 === n ? void 0 : n.toLowerCase) || void 0 === i ? void 0 : i.call(n)) || "";
                        if (o = new RegExp(`,(${s})+,`), o.test(e)) return global.__log.info("[WindowsServicesManager] checkProcessStatus res: " + !0), 
                        !0;
                    }
                } catch (e) {
                    global.__log.info("[WindowsServicesManager] checkProcessStatus err: " + e);
                }
                return global.__log.info("[WindowsServicesManager] checkProcessStatus res: " + !1), 
                !1;
            });
        }
        openService(e) {
            if (!this.isSupportSystem) return console.log(this.enableService), !1;
            if (global.__log.info("[WindowsServicesManager] startService options: " + JSON.stringify(e)), 
            !(null == e ? void 0 : e.name) || !(null == e ? void 0 : e.script)) return !1;
            const t = new l(e);
            return this.getServiceStatus(e.name).then(e => {
                e == c.NOT_STARTED ? (global.__log.info("[WindowsServicesManager][openService] delete service start"), 
                this.deleteService(t).then(() => {
                    t.on("install", () => {
                        global.__log.info("[WindowsServicesManager] startService install succ"), this.failureService(t).finally(() => {
                            this.startService(t);
                        });
                    }), this.installService(t);
                }).catch(e => {
                    global.__log.info("[WindowsServicesManager][deleteService] err: " + e.toString());
                })) : e == c.NOT_INSTALLED && (t.on("install", () => {
                    global.__log.info("[WindowsServicesManager] startService install succ"), this.failureService(t).finally(() => {
                        this.startService(t);
                    });
                }), this.installService(t));
            }), t.on("error", e => {
                var n, r, i, o;
                if (2 == e.code) {
                    if (e.message.indexOf("already been started") >= 0 && e.message.indexOf("service name is invalid") < 0) return void global.__log.info(`[WindowsServicesManager][error] ${t._name} is already running`);
                    if (e.message.indexOf("service name is invalid") > 0) return void global.__log.info("[WindowsServicesManager][error] service name is invalid");
                    global.__log.info("[WindowsServicesManager][error] " + e.toString());
                } else (null === (r = null === (n = e.message) || void 0 === n ? void 0 : n.indexOf) || void 0 === r ? void 0 : r.call(n, "Administrator access")) >= 0 || (null === (o = null === (i = e.message) || void 0 === i ? void 0 : i.indexOf) || void 0 === o ? void 0 : o.call(i, "Access is denied")) >= 0 ? global.__log.info("[WindowsServicesManager][error] Permission Denied. Requires administrative privileges.") : global.__log.info("[WindowsServicesManager][error] " + e.toString());
            }), t;
        }
        getServiceStatus(e) {
            return this.isSupportSystem ? new Promise(t => {
                i.exec("sc query " + e, (n, r, i) => {
                    if (n) return void (1060 == n.code ? t(c.NOT_INSTALLED) : t(c.UNKNOW));
                    const o = r.replace(/\r\n/g, ";");
                    global.__log.info(`[WindowsServicesManager][getServiceStatus] ${e}: ${o}`);
                    const a = /;[\s]*STATE[\s]*:[^;]*RUNNING[\s]*;/.test(o) ? c.STARTED : c.NOT_STARTED;
                    t(a);
                });
            }) : Promise.reject("not support");
        }
        enableService(e) {
            return new Promise((t, n) => {
                try {
                    e.elevateExec = u.execute, e.elevateExec(`sc config ${e._name} start=auto`, r => {
                        if (r) return e.emit("error", r), void n(r);
                        global.__log.info("[WindowsServicesManager][enableService] cmd succ"), t(!0);
                    });
                } catch (e) {
                    global.__log.info("[WindowsServicesManager][enableService] error: " + e.toString()), 
                    t(e);
                }
            });
        }
        startService(e) {
            e.elevateExec = u.execute, e.elevateExec('NET START "' + e._name + '"', t => {
                t ? e.emit("error", t) : (global.__log.info("[WindowsServicesManager][startService] cmd succ"), 
                e.emit("start"));
            });
        }
        installService(e) {
            e.elevateExec = u.execute, e.elevateExec(`sc create ${e._name} binpath= "${e.script}" type= own start= auto displayname= ${e._name}`, t => {
                t ? (global.__log.info("[WindowsServicesManager][installService] err: " + t.toString()), 
                e.emit("error", t)) : (global.__log.info("[WindowsServicesManager][installService] cmd succ"), 
                e.emit("install"));
            });
        }
        failureService(e) {
            return new Promise(t => {
                try {
                    e.elevateExec = u.execute, e.elevateExec(`sc failure ${e._name} reset=86400 actions=restart/1000/restart/1000/restart/1000`, e => {
                        e ? (global.__log.info("[WindowsServicesManager][failureService] err: " + e), t(e)) : (global.__log.info("[WindowsServicesManager][failureService] cmd succ"), 
                        t(!0));
                    });
                } catch (e) {
                    global.__log.info("[WindowsServicesManager][failureService] error: " + e), t(e);
                }
            });
        }
        deleteService(e) {
            return new Promise((t, n) => {
                try {
                    e.elevateExec = u.execute, e.elevateExec("sc delete " + e._name, r => {
                        if (r) return e.emit("error", r), void n(r);
                        global.__log.info("[WindowsServicesManager][deleteService] cmd succ"), t(!0);
                    });
                } catch (e) {
                    global.__log.info("[WindowsServicesManager][deleteService] error: " + e.toString()), 
                    t(e);
                }
            });
        }
    }
    t.WinServicesManager = u, t.default = u;
}
