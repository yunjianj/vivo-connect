// analysis/pretty/main.js:14537; webpack module 76
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(201);
    class i {
        constructor(e) {
            this.levels = {
                error: 0,
                warn: 1,
                info: 2,
                http: 3,
                verbose: 4,
                debug: 5,
                silly: 6
            }, this.moduleNameOrFileName = e;
        }
        get logger() {
            return "browser" === process.type ? global.__log || r.initMainLog({}) : window._log || r.initRenderLog({});
        }
        getExpandLog() {
            return this.initModuleLog(this.logger, this.moduleNameOrFileName);
        }
        initModuleLog(e, t) {
            const n = {};
            return Object.keys(this.levels).forEach(r => {
                n[r] = (...n) => {
                    let i = `${this.getLogPrefix(t)}${n.join("")}`;
                    return e[r].call(e, i);
                };
            }), n;
        }
        getLogPrefix(e) {
            return Array.isArray(e) ? e.map(e => `【${e}】`).join("") : `[${e}]`;
        }
    }
    t.default = i, e.exports && (e.exports = i);
}
