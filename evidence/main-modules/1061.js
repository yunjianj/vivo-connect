// analysis/pretty/main.js:84902; webpack module 1061
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CallbacksRegistry = void 0;
    t.CallbacksRegistry = class {
        constructor() {
            this.nextId = 0, this.callbacks = {}, this.callbackIds = new WeakMap, this.locationInfo = new WeakMap;
        }
        add(e) {
            let t = this.callbackIds.get(e);
            if (null != t) return t;
            t = this.nextId += 1, this.callbacks[t] = e, this.callbackIds.set(e, t);
            const n = /at (.*)/gi, r = (new Error).stack;
            if (!r) return t;
            let i, o;
            for (;null !== (o = n.exec(r)); ) {
                const e = o[1];
                if (e.includes("(native)")) continue;
                if (e.includes("(<anonymous>)")) continue;
                if (e.includes("callbacks-registry.js")) continue;
                if (e.includes("remote.js")) continue;
                if (e.includes("@electron/remote/dist")) continue;
                const t = /([^/^)]*)\)?$/gi.exec(e);
                t && (i = t[1]);
                break;
            }
            return this.locationInfo.set(e, i), t;
        }
        get(e) {
            return this.callbacks[e] || function() {};
        }
        getLocation(e) {
            return this.locationInfo.get(e);
        }
        apply(e, ...t) {
            return this.get(e).apply(global, ...t);
        }
        remove(e) {
            const t = this.callbacks[e];
            t && (this.callbackIds.delete(t), delete this.callbacks[e]);
        }
    };
}
