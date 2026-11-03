// analysis/pretty/main.js:100685; webpack module 1329
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MemoLazy = void 0;
    t.MemoLazy = class {
        constructor(e, t) {
            this.selector = e, this.creator = t, this.selected = void 0, this._value = void 0;
        }
        get hasValue() {
            return void 0 !== this._value;
        }
        get value() {
            const e = this.selector();
            if (void 0 !== this._value && function e(t, n) {
                const r = "object" == typeof n && null !== n;
                if ("object" == typeof t && null !== t && r) {
                    const r = Object.keys(t), i = Object.keys(n);
                    return r.length === i.length && r.every(r => e(t[r], n[r]));
                }
                return t === n;
            }(this.selected, e)) return this._value;
            this.selected = e;
            const t = this.creator(e);
            return this.value = t, t;
        }
        set value(e) {
            this._value = e;
        }
    };
}
