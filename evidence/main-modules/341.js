// analysis/pretty/main.js:36855; webpack module 341
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    class r {
        constructor() {
            this.listeners = new Map;
        }
        static getInstance() {
            return null == this.instance && (this.instance = new r), this.instance;
        }
        on(e, t) {
            const n = this.listeners.get(e) || [];
            return n.push(t), this.listeners.set(e, n), () => {
                this.off(e, t);
            };
        }
        once(e, t) {
            const n = this.on(e, e => {
                t(e), null == n || n();
            });
            return () => {
                n();
            };
        }
        off(e, t) {
            const n = this.listeners.get(e) || [];
            if (n) {
                const r = n.indexOf(t);
                r > -1 && n.splice(r, 1), this.listeners.set(e, n);
            }
        }
        clear() {
            this.listeners = new Map;
        }
        dispatch(e, ...t) {
            const n = this.listeners.get(e) || [];
            n.length ? n.forEach(e => {
                e.apply(this, t);
            }) : global.__log.info(`[forwardMessage.ts][dispatch] event: ${e}, msg misses`);
        }
    }
    t.default = r;
}
