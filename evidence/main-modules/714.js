// analysis/pretty/main.js:63627; webpack module 714
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(10)), o = r.__importDefault(n(1)), a = n(2), s = r.__importStar(n(8)), l = n(32), c = r.__importDefault(n(52)), u = r.__importDefault(n(12)), d = r.__importDefault(n(55)), h = r.__importDefault(n(90)), p = r.__importStar(n(127)), f = n(119), _ = r.__importDefault(n(95));
    let m = p.default;
    class g extends c.default {
        constructor() {
            super(), this.isConnectServerLaunch = !1;
        }
        get executePath() {
            return "darwin" === s.platform() ? o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", `Resources/vivoRelay/${f.processNameManager.vivoRelay}.app/Contents/MacOS/${f.processNameManager.vivoRelay}`) : o.default.resolve(o.default.dirname(a.app.getPath("exe")), `./vivorelay/${f.processNameManager.vivoRelay}.exe`);
        }
        static getInstance() {
            return this.instance || (this.instance = new g), this.instance;
        }
        launchWorkerProcess(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("darwin" === s.platform()) return this.launchWorkerProcess_old(e);
                const t = "" + l.PathUtil.getRelayLogPath(), n = "/keyboardMouseCoordination?hashId=" + e, r = _.default.serverPort || 9199, i = `"${this.executePath}" --url "${n}" --port ${r} --log "${t}"`;
                global.__log.info("[connectionModule][KeyboardMouseCoordinationMain] launchWorkerProcess: " + i);
                let o = new v(e);
                try {
                    yield o.startVivoRelay(i), this.isConnectServerLaunch = !0;
                } catch (t) {
                    global.__log.info("[connectionModule][KeyboardMouseCoordinationMain] launchWorkerProcess error: " + t), 
                    o.kill(), yield m.delay(300), o = this.launchWorkerProcess_old(e), this.isConnectServerLaunch = !1;
                }
                return o;
            });
        }
        onRelayClose(...e) {
            this.isConnectServerLaunch && this.getPrpcessById().forEach(e => {
                null == e || e.emit("close", 0, 0);
            });
        }
        launchWorkerProcess_old(e) {
            const t = `"${l.PathUtil.getRelayLogPath()}"`, n = "/keyboardMouseCoordination?hashId=" + e, r = _.default.serverPort || 9199;
            global.__log.info(`[connectionModule][KeyboardMouseCoordinationMain] launchWorkerProcess_old: --url ${n}, --log ${t}, --port ${r}`);
            const o = i.default.spawn(this.executePath, [ "--url", n, "--port", "" + r, "--log", t ], {
                stdio: "ignore"
            });
            return global.__log.info("[connectionModule][KeyboardMouseCoordinationMain] launchWorkerProcess: " + this.executePath), 
            o;
        }
    }
    class v extends u.default {
        constructor(e) {
            super(), this.hashId = e;
        }
        startVivoRelay(...e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = yield this.httpRequest("startVivoRelay", ...e);
                if (!t || 0 != t.error) throw new Error("startVivoRelay: " + t.error);
            });
        }
        kill() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.httpRequest("stopVivoRelay", this.hashId);
                } catch (e) {
                    global.__log.info("[RelayProcessManagerByConnectServer][kill] error: " + e);
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
                global.__log.info("[RelayProcessManagerByConnectServer][httpRequest] params: " + n);
                const r = yield d.default.post(h.default.VIVOES_SERVER_URL, `${n.length}#${n}`, {
                    responseType: "text",
                    timeout: 1e4
                });
                global.__log.info("[RelayProcessManagerByConnectServer][httpRequest] res: " + r.data);
                const i = r.data;
                if ("string" != typeof i) throw new Error("wrong data type");
                let o = i.indexOf("#", 0);
                if (-1 == o) throw new Error("Bad data: " + i);
                let a = i.substr(0, o), s = parseInt(a, 10), l = i.substr(o + 1, s);
                if ("" === l) throw new Error("Bad data: " + i);
                return JSON.parse(l);
            });
        }
    }
    t.default = g;
}
