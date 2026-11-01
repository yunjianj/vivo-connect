// analysis/pretty/main.js:74687; webpack module 813
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = (e, t) => `${e.id}-${t}`;
    t.default = new class {
        constructor() {
            this.nextId = 0, this.storage = {}, this.owners = {}, this.electronIds = new WeakMap;
        }
        add(e, t, n) {
            const i = this.saveToStorage(n), o = r(e, t);
            let a = this.owners[o];
            return a || (a = this.owners[o] = new Map, this.registerDeleteListener(e, t)), a.has(i) || (a.set(i, 0), 
            this.storage[i].count++), a.set(i, a.get(i) + 1), i;
        }
        get(e) {
            const t = this.storage[e];
            if (null != t) return t.object;
        }
        remove(e, t, n) {
            const i = r(e, t), o = this.owners[i];
            if (o && o.has(n)) {
                const e = o.get(n) - 1;
                e <= 0 ? (o.delete(n), this.dereference(n)) : o.set(n, e);
            }
        }
        clear(e, t) {
            const n = r(e, t), i = this.owners[n];
            if (i) {
                for (const e of i.keys()) this.dereference(e);
                delete this.owners[n];
            }
        }
        saveToStorage(e) {
            let t = this.electronIds.get(e);
            return t || (t = ++this.nextId, this.storage[t] = {
                count: 0,
                object: e
            }, this.electronIds.set(e, t)), t;
        }
        dereference(e) {
            const t = this.storage[e];
            null != t && (t.count -= 1, 0 === t.count && (this.electronIds.delete(t.object), 
            delete this.storage[e]));
        }
        registerDeleteListener(e, t) {
            const n = t.split("-")[0], r = (i, o) => {
                o && o.toString() === n && (e.removeListener("render-view-deleted", r), this.clear(e, t));
            };
            e.on("render-view-deleted", r);
        }
    };
}
