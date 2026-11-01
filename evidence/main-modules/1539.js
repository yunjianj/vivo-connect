// analysis/pretty/main.js:117238; webpack module 1539
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.queueSingleInstance = void 0;
    const r = n(0);
    t.queueSingleInstance = new class {
        constructor() {
            this.queueArr = [], this.index = 0, this.running = !1, this.timer = null;
        }
        run(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.queueArr.push({
                    funcTask: e,
                    params: t,
                    funcCallback: n
                }), !this.running) {
                    this.running = !0;
                    for (let e = 0; e < this.queueArr.length; e++) {
                        const {funcTask: t, params: n, funcCallback: r} = this.queueArr[e];
                        try {
                            r(yield t(n));
                        } catch (e) {
                            window._log.error("[Calendar][asyncExecQueue] analysisLocalFile error."), r([]);
                        }
                    }
                    this.queueArr = [], this.running = !1;
                }
            });
        }
    };
}
