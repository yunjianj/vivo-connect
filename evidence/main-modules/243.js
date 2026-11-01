// analysis/pretty/main.js:30045; webpack module 243
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MicroEventClass = void 0;
    t.MicroEventClass = class {
        constructor() {
            this._events = {};
        }
        on(e, t) {
            const n = this._events[e];
            n ? n.push(t) : this._events[e] = [ t ];
        }
        once(e, t) {
            const n = (...r) => {
                this.off(e, n), t(...r);
            };
            this.on(e, n);
        }
        off(e, t) {
            const n = this._events[e];
            if (!n) return;
            const r = n.indexOf(t);
            -1 !== r && n.splice(r, 1);
        }
        offAndOn(e, t) {
            this.off(e, t), this.on(e, t);
        }
        emit(e, ...t) {
            const n = this._events[e];
            n && n.slice().forEach(e => e(...t));
        }
    };
}
