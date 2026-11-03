// analysis/pretty/main.js:10052; webpack module 52
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(10), o = r.__importDefault(n(1)), a = n(2), s = r.__importStar(n(8));
    let l = r.__importStar(n(127)).default;
    t.default = class {
        constructor() {
            this.processInstanceMap = new Map;
        }
        get executePath() {
            return "darwin" === s.platform() ? "" : o.default.resolve(o.default.dirname(a.app.getPath("exe")), "./example/win-ia32-unpacked/example.exe");
        }
        launchProcess(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    global.__log.info(`[connectionModule][ApplicationProcess] launchProcess appHashId = ${e} params: ${JSON.stringify(t)}`);
                    const r = this.processInstanceMap.get(e);
                    r && (global.__log.info(`[connectionModule][ApplicationProcess] launchProcess appHashId = ${e}, Process already exists.`), 
                    r.removeAllListeners(), r.kill(), this.processInstanceMap.delete(e), "extendedScreen" !== e && "keyboardMouseCoordination" !== e || (yield l.delay(1e3)));
                    const i = yield this.launchWorkerProcess(e, t);
                    i ? (i.on("error", t => (global.__log.info(`[ApplicationProcess] (appHashId=${e}) onerror`), 
                    global.__log.info(t), n(!1, {
                        message: t.message,
                        name: t.name
                    }), !1)), i.on("message", t => (global.__log.info(`[ApplicationProcess] (appHashId=${e}) onmessage`), 
                    global.__log.info(t), !1)), i.on("exit", (t, r) => (this.processInstanceMap.delete(e), 
                    n(!1, {
                        code: t,
                        signal: r
                    }), global.__log.info(`[ApplicationProcess] (appHashId=${e}) onexit: code=${t},signal=${r}`), 
                    !1)), i.on("close", (t, r) => (this.processInstanceMap.delete(e), n(!1, {
                        code: t,
                        signal: r
                    }), global.__log.info(`[ApplicationProcess] (appHashId=${e}) onclose: code=${t},signal=${r}`), 
                    !1)), i.on("disconnect", () => (global.__log.info(`[ApplicationProcess] (appHashId=${e}) ondisconnect`), 
                    !1)), this.processInstanceMap.set(e, i), n(!0)) : n(!1);
                } catch (e) {
                    throw n(!1, e), e;
                }
            });
        }
        launchWorkerProcess(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                throw "method is undefined";
            });
        }
        killProcess(e) {
            return new Promise(t => {
                if (global.__log.info("[connectionModule][ApplicationProcess] killProcess appHashId = " + (e || "")), 
                e) {
                    const t = this.processInstanceMap.get(e);
                    null == t || t.kill(), this.processInstanceMap.delete(e);
                } else {
                    const e = this.processInstanceMap.values();
                    for (const t of e) t.kill();
                    this.processInstanceMap.clear();
                }
                t();
            });
        }
        commandKill(e) {
            var t;
            return global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[applicationProcess.ts][commandKill] start, processName: " + e)), 
            new Promise((t, n) => {
                if (e) if ("darwin" === s.platform()) {
                    const r = `pgrep ${e} | xargs kill -9`;
                    i.exec(r, (e, i, o) => {
                        var a, s;
                        if (e) return global && (null === (a = null === global || void 0 === global ? void 0 : global.__log) || void 0 === a || a.info(`[applicationProcess.ts][commandKill]command: ${r} error: ${null == e ? void 0 : e.toString()}`)), 
                        void n(e);
                        global && (null === (s = null === global || void 0 === global ? void 0 : global.__log) || void 0 === s || s.info(`[applicationProcess.ts][commandKill]command: ${r}, succ`)), 
                        t(!0);
                    });
                } else {
                    const r = `taskkill /F /IM "${e}"`;
                    i.exec(r, (e, i, o) => {
                        var a, s;
                        if (e) return global && (null === (a = null === global || void 0 === global ? void 0 : global.__log) || void 0 === a || a.info(`[applicationProcess.ts][commandKill]command: ${r} error: ${null == e ? void 0 : e.toString()}`)), 
                        void n(e);
                        global && (null === (s = null === global || void 0 === global ? void 0 : global.__log) || void 0 === s || s.info(`[applicationProcess.ts][commandKill]command: ${r}, succ`)), 
                        t(!0);
                    });
                } else n("processName is null");
            });
        }
        isAlive(e) {
            return !!this.processInstanceMap.get(e);
        }
        getPrpcessById(e) {
            if (e) {
                const t = this.processInstanceMap.get(e);
                return t ? [ t ] : [];
            }
            return Array.from(this.processInstanceMap.values());
        }
    };
}
