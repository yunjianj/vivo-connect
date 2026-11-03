// analysis/pretty/main.js:112244; webpack module 1500
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(41), o = n(11), a = r.__importDefault(n(76)), s = r.__importDefault(n(26)), l = n(12), c = Object.keys(o.INTERVAL_EVENT_ENUM).filter(e => isNaN(Number(e)));
    class u extends l {
        constructor() {
            super(), this.intervalCount = {}, this.limitSec = 60, this.log = new a.default([ i.LogModule.FRAMEWORK, "IntervalEventManager" ]).getExpandLog(), 
            c.forEach(e => {
                this.intervalCount[e] = 0;
            });
        }
        static getInstance() {
            return this.instance || (this.instance = new u), this.instance;
        }
        getKeyByValue(e, t) {
            return Object.keys(t).filter(n => t[n] === e)[0];
        }
        start() {
            this.interval = setInterval(() => {
                c.forEach(e => {
                    var t;
                    this.intervalCount[e] += this.limitSec, this.intervalCount[e] === o.INTERVAL_EVENT_ENUM[e] && (this.log.info("emit: ", e), 
                    this.emit(e), this.intervalCount[e] = 0, null === (t = s.default.mainWindow) || void 0 === t || t.webContents.send(e));
                });
            }, 1e3 * this.limitSec);
        }
        stop() {
            this.interval && (clearInterval(this.interval), this.interval = null);
        }
        addEventListener(e, t) {
            const n = this.getKeyByValue(e, o.INTERVAL_EVENT_ENUM);
            return this.on(n, t);
        }
        removeEventListener(e, t) {
            const n = this.getKeyByValue(e, o.INTERVAL_EVENT_ENUM);
            return this.off(n, t);
        }
    }
    t.default = u;
}
