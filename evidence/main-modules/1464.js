// analysis/pretty/main.js:108560; webpack module 1464
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = n(2), s = r.__importStar(n(8)), l = n(32), c = r.__importDefault(n(52)), u = r.__importDefault(n(12)), d = r.__importDefault(n(90)), h = r.__importStar(n(127)), p = r.__importDefault(n(89)), f = n(56), _ = n(236), m = r.__importDefault(n(113)), g = n(119), v = r.__importDefault(n(95));
    let y = h.default;
    class E extends c.default {
        constructor() {
            super(), this.isConnectServerLaunch = !1;
        }
        get executePath() {
            return "darwin" === s.platform() ? o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", `Resources/vivoExtScreen/${g.processNameManager.vivoExtScreen}.app/Contents/MacOS/${g.processNameManager.vivoExtScreen}`) : o.default.resolve(o.default.dirname(a.app.getPath("exe")), `./vivoExtScreen/${g.processNameManager.vivoExtScreen}.exe`);
        }
        static getInstance() {
            return this.instance || (this.instance = new E), this.instance;
        }
        launchWorkerProcess_old(e, t) {
            const {ip: n, port: r, sidebarHor: o, sidebarVer: a, direction: s, isClone: c, appMobileDeviceId: u, deviceType: d, token: h, deviceName: m, extend_start_time: g, connection_type: y, pc_if_support_5g: E, phone_if_support_5g: b, pc_net_type: w, phone_net_type: S, extend_id: T} = t, A = "" + l.PathUtil.getExtScreenLogPath(), O = "/extendedScreen?hashId=" + e, C = v.default.serverPort || 9199;
            global.__log.info("[connectionModule][ExtendedScreenProcessMain] launchWorkerProcess_old: executePath " + this.executePath), 
            global.__log.info(`[connectionModule][ExtendedScreenProcessMain] launchWorkerProcess_old: --ipcUrl ${O} --ipcPort ${C} --phoneIp ${n} --phonePort ${r} --sidebarHor ${o} --sidebarVer ${a} --logPath ${A} --appMobileDeviceId ${u} --token ${h} --deviceName "${m}" --direction ${s} --isClone ${c}`);
            const N = i.default.spawn(this.executePath, [ "--ipcUrl", O, "--ipcPort", "" + C, "--phoneIp", n, "--phonePort", r, "--sidebarHor", o, "--sidebarVer", a, "--logPath", A, "--appMobileDeviceId", u, "--token", h, "--deviceName", "" + m, "--direction", s, "--isClone", c ], {
                stdio: "ignore"
            });
            return N.on("error", e => {
                var t, n;
                global.__log.info("[connectionModule][ExtendedScreenProcessMain] launchWorkerProcess_old: Failed to start worker process " + e);
                const r = [ {
                    type: 1,
                    eventId: _.CONNECT_DATA_ANALYTICS_SINGLE_EVENT.EXT_SCREEN_OPEN_RESULT,
                    params: {
                        result: "0",
                        fail_code: "201",
                        fail_reason: "pc端扩展屏进程启动失败",
                        duration: (Date.now() - Number(g)).toString(),
                        connection_type: y,
                        pc_if_support_5g: E,
                        phone_if_support_5g: b,
                        pc_net_type: w,
                        phone_net_type: S,
                        extend_id: T,
                        screen_type: c ? "2" : "1",
                        click_time: g,
                        process_start: "",
                        video_start: "",
                        screen_off_status: ""
                    }
                } ];
                null === (t = p.default.getInstance().getWebContent()) || void 0 === t || t.send(f.ConnectionRendererEvent.APP_BURY_POINT, r), 
                null === (n = p.default.getInstance().getWebContent()) || void 0 === n || n.send(f.ConnectionRendererEvent.EXT_SCREEN_CLOSE_MOBILE, {
                    deviceType: d,
                    appMobileDeviceId: u
                });
            }), N.on("exit", e => {
                0 === e ? console.log("Worker process exited successfully") : console.error("Worker process exited with code " + e);
            }), N.on("close", (e, t) => {
                t ? console.error("Worker process was terminated by signal " + t) : 0 === e ? console.log("Worker process closed successfully") : console.error("Worker process closed with exit code " + e);
            }), N;
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("darwin" === s.platform()) return this.launchWorkerProcess_old(e, t);
                const {ip: n, port: r, sidebarHor: o, sidebarVer: a, direction: c, isClone: u, appMobileDeviceId: d, deviceType: h, token: m, deviceName: g, extend_start_time: E, connection_type: w, pc_if_support_5g: S, phone_if_support_5g: T, pc_net_type: A, phone_net_type: O, extend_id: C} = t;
                let N = g.replace(/ /g, "%20");
                const I = "" + l.PathUtil.getExtScreenLogPath(), R = "/extendedScreen?hashId=" + e, D = v.default.serverPort || 9199, L = `"${this.executePath}" --ipcUrl ${R} --ipcPort ${D} --phoneIp ${n} --phonePort ${r} --sidebarHor ${o} --sidebarVer ${a} --logPath ${I} --appMobileDeviceId ${d} --token ${m} --deviceName ${N} --direction ${c} --isClone ${u}`;
                global.__log.info("[connectionModule][extendedScreenProcessMain] launchWorkerProcess: " + L);
                let k = new b(e);
                try {
                    yield k.startExtendedScreen(L), this.isConnectServerLaunch = !0;
                } catch (e) {
                    global.__log.info("[connectionModule][extendedScreenProcessMain] launchWorkerProcess first error: " + e);
                    try {
                        k.kill(), yield y.delay(1e3), yield k.startExtendedScreen(L), this.isConnectServerLaunch = !0;
                    } catch (e) {
                        global.__log.info("[connectionModule][extendedScreenProcessMain] launchWorkerProcess second error: " + e), 
                        k.kill(), yield y.delay(1e3), this.isAdmin();
                        {
                            global.__log.info("[connectionModule][extendedScreenProcessMain] child_process.exec start");
                            let e = !0;
                            k = i.default.exec("" + L, {
                                shell: "cmd.exe",
                                windowsHide: !0
                            }, t => {
                                var n, r;
                                if (global.__log.info("[connectionModule][extendedScreenProcessMain] exec result: " + t), 
                                t) {
                                    if (global.__log.info("[connectionModule][extendedScreenProcessMain] exec error: " + t), 
                                    e) {
                                        e = !1;
                                        const t = [ {
                                            type: 1,
                                            eventId: _.CONNECT_DATA_ANALYTICS_SINGLE_EVENT.EXT_SCREEN_OPEN_RESULT,
                                            params: {
                                                result: "0",
                                                fail_code: "201",
                                                fail_reason: "pc端扩展屏进程启动失败",
                                                duration: (Date.now() - Number(E)).toString(),
                                                connection_type: w,
                                                pc_if_support_5g: S,
                                                phone_if_support_5g: T,
                                                pc_net_type: A,
                                                phone_net_type: O,
                                                extend_id: C,
                                                screen_type: u ? "2" : "1",
                                                click_time: E,
                                                process_start: "",
                                                video_start: "",
                                                screen_off_status: ""
                                            }
                                        } ];
                                        null === (n = p.default.getInstance().getWebContent()) || void 0 === n || n.send(f.ConnectionRendererEvent.APP_BURY_POINT, t), 
                                        null === (r = p.default.getInstance().getWebContent()) || void 0 === r || r.send(f.ConnectionRendererEvent.EXT_SCREEN_CLOSE_MOBILE, {
                                            deviceType: h,
                                            appMobileDeviceId: d
                                        });
                                    }
                                } else e = !1, global.__log.info("[connectionModule][extendedScreenProcessMain] exec succ");
                            }), setTimeout(() => {
                                e = !1;
                            }, 5e3);
                        }
                        this.isConnectServerLaunch = !1;
                    }
                }
                return k;
            });
        }
        isAdmin() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return "win32" !== s.platform();
            });
        }
        onExtScreenClose(...e) {
            this.isConnectServerLaunch && this.getPrpcessById().forEach(e => {
                null == e || e.emit("close", 0, 0);
            });
        }
    }
    class b extends u.default {
        constructor(e) {
            super(), this.hashId = e;
        }
        startExtendedScreen(...e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.httpRequest("startExtendedScreen", ...e);
                global.__log.info("[extScreenProcessManagerByConnectServer][startExtendedScreen] res: " + JSON.stringify(t));
                const n = t;
                if (!n || 0 != n.error) throw new Error("startExtendedScreen: " + n.error);
            });
        }
        kill() {
            return r.__awaiter(this, void 0, void 0, function*() {
                console.log("kill掉extendedScreen的c++进程", this.hashId);
                try {
                    yield this.httpRequest("stopExtendedScreen", this.hashId);
                } catch (e) {
                    global.__log.info("[extScreenProcessManagerByConnectServer][kill] error: " + e);
                }
            });
        }
        httpRequest(e, ...t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = JSON.stringify({
                    event: e,
                    app: "pcsuite",
                    args: [ ...t ]
                });
                return global.__log.info("[extScreenProcessManagerByConnectServer][httpRequest] params: " + n), 
                new Promise((n, i) => {
                    m.default.post({
                        url: d.default.VIVOES_SERVER_URL,
                        json: {
                            event: e,
                            app: "pcsuite",
                            args: [ ...t ]
                        },
                        headers: {
                            responseType: "text"
                        },
                        timeout: 1e4
                    }, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                        if (e) return global.__log.info("[extScreenProcessManagerByConnectServer][httpRequest] err: " + JSON.stringify(e)), 
                        void i({
                            error: e.errno,
                            error_message: e.code
                        });
                        global.__log.info("[extScreenProcessManagerByConnectServer][httpRequest] res: " + t.body);
                        const r = t.body;
                        if ("string" != typeof r) {
                            const e = new Error("wrong data type");
                            return void i(e);
                        }
                        let o = r.indexOf("#", 0);
                        if (-1 == o) {
                            const e = new Error("Bad data: " + r);
                            return void i(e);
                        }
                        let a = r.substr(0, o), s = parseInt(a, 10), l = r.substr(o + 1, s);
                        if ("" !== l) n(JSON.parse(l)); else {
                            const e = new Error("Bad data: " + r);
                            i(e);
                        }
                    }));
                });
            });
        }
    }
    t.default = E;
}
