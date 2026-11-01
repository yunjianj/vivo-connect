// analysis/pretty/main.js:23709; webpack module 166
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(12));
    class o extends i.default {
        constructor() {
            super(), this.queueArr = [], this.running = !1;
        }
        run(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.queueArr.push({
                    func: e,
                    callback: t
                }), !this.running) {
                    this.running = !0;
                    for (let e = 0; e < this.queueArr.length; e++) {
                        const t = yield this.queueArr[e].func();
                        null === (n = this.queueArr[e]) || void 0 === n || n.callback(t);
                    }
                    this.queueArr = [], this.running = !1, this.emit("queue-all-finished", {});
                }
            });
        }
    }
    t.default = o;
}
