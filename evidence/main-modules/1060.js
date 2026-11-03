// analysis/pretty/main.js:84689; webpack module 1060
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createFunctionWithReturnValue = t.getGlobal = t.getCurrentWebContents = t.getCurrentWindow = t.getBuiltin = void 0;
    const r = n(1061), i = n(383), o = n(2), a = n(1062), s = n(249), {Promise: l} = global, c = new r.CallbacksRegistry, u = new Map, d = new FinalizationRegistry(e => {
        const t = u.get(e);
        void 0 !== t && void 0 === t.deref() && (u.delete(e), o.ipcRenderer.send("REMOTE_BROWSER_DEREFERENCE", f, e, 0));
    }), h = new WeakMap, p = new WeakSet;
    const f = process.contextId || function() {
        const e = s.getElectronBinding("v8_util");
        if (e) return e.getHiddenValue(global, "contextId");
        throw new Error("Electron >=v13.0.0-beta.6 required to support sandboxed renderers");
    }();
    process.on("exit", () => {
        o.ipcRenderer.send("REMOTE_BROWSER_CONTEXT_RELEASE", f);
    });
    const _ = Symbol("is-remote-proxy");
    function m(e, t = new Set) {
        const n = e => {
            if (t.has(e)) return {
                type: "value",
                value: null
            };
            if (e && e.constructor && "NativeImage" === e.constructor.name) return {
                type: "nativeimage",
                value: i.serialize(e)
            };
            if (Array.isArray(e)) {
                t.add(e);
                const n = {
                    type: "array",
                    value: m(e, t)
                };
                return t.delete(e), n;
            }
            if (e instanceof Buffer) return {
                type: "buffer",
                value: e
            };
            if (i.isSerializableObject(e)) return {
                type: "value",
                value: e
            };
            if ("object" == typeof e) {
                if (i.isPromise(e)) return {
                    type: "promise",
                    then: n(function(t, n) {
                        e.then(t, n);
                    })
                };
                if (h.has(e)) return {
                    type: "remote-object",
                    id: h.get(e)
                };
                const r = {
                    type: "object",
                    name: e.constructor ? e.constructor.name : "",
                    members: []
                };
                t.add(e);
                for (const t in e) r.members.push({
                    name: t,
                    value: n(e[t])
                });
                return t.delete(e), r;
            }
            return "function" == typeof e && p.has(e) ? {
                type: "function-with-return-value",
                value: n(e())
            } : "function" == typeof e ? {
                type: "function",
                id: c.add(e),
                location: c.getLocation(e),
                length: e.length
            } : {
                type: "value",
                value: e
            };
        };
        return e.map(n);
    }
    function g(e, t, n, r) {
        if (Array.isArray(r)) for (const i of r) {
            if (Object.prototype.hasOwnProperty.call(t, i.name)) continue;
            const r = {
                enumerable: i.enumerable
            };
            if ("method" === i.type) {
                const t = function(...e) {
                    let r;
                    r = this && this.constructor === t ? "REMOTE_BROWSER_MEMBER_CONSTRUCTOR" : "REMOTE_BROWSER_MEMBER_CALL";
                    return y(o.ipcRenderer.sendSync(r, f, n, i.name, m(e)));
                };
                let a = v(t, n, i.name);
                r.get = () => (a.ref = e, a), r.set = e => (a = e, e), r.configurable = !0;
            } else "get" === i.type && (r.get = () => y(o.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", f, n, i.name)), 
            i.writable && (r.set = e => {
                const t = m([ e ]), r = o.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_SET", f, n, i.name, t);
                return null != r && y(r), e;
            }));
            Object.defineProperty(t, i.name, r);
        }
    }
    function v(e, t, n) {
        let r = !1;
        const i = () => {
            if (r) return;
            r = !0;
            const i = o.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", f, t, n);
            g(e, e, i.id, i.members);
        };
        return new Proxy(e, {
            set: (e, t, n) => ("ref" !== t && i(), e[t] = n, !0),
            get: (e, t) => {
                if (t === _) return !0;
                Object.prototype.hasOwnProperty.call(e, t) || i();
                const n = e[t];
                return "toString" === t && "function" == typeof n ? n.bind(e) : n;
            },
            ownKeys: e => (i(), Object.getOwnPropertyNames(e)),
            getOwnPropertyDescriptor: (e, t) => {
                const n = Object.getOwnPropertyDescriptor(e, t);
                return n || (i(), Object.getOwnPropertyDescriptor(e, t));
            }
        });
    }
    function y(e) {
        if (!e) return {};
        if ("value" === e.type) return e.value;
        if ("array" === e.type) return e.members.map(e => y(e));
        if ("nativeimage" === e.type) return i.deserialize(e.value);
        if ("buffer" === e.type) return Buffer.from(e.value.buffer, e.value.byteOffset, e.value.byteLength);
        if ("promise" === e.type) return l.resolve({
            then: y(e.then)
        });
        if ("error" === e.type) return E(e);
        if ("exception" === e.type) throw "error" === e.value.type ? E(e.value) : new Error("Unexpected value type in exception: " + e.value.type);
        {
            let t;
            if ("id" in e) {
                const t = function(e) {
                    const t = u.get(e);
                    if (void 0 !== t) {
                        const e = t.deref();
                        if (void 0 !== e) return e;
                    }
                }(e.id);
                if (void 0 !== t) return t;
            }
            if ("function" === e.type) {
                const n = function(...t) {
                    let r;
                    r = this && this.constructor === n ? "REMOTE_BROWSER_CONSTRUCTOR" : "REMOTE_BROWSER_FUNCTION_CALL";
                    return y(o.ipcRenderer.sendSync(r, f, e.id, m(t)));
                };
                t = n;
            } else t = {};
            return g(t, t, e.id, e.members), function e(t, n, r, i) {
                if (null === i) return;
                const o = {};
                g(t, o, r, i.members), e(t, o, r, i.proto), Object.setPrototypeOf(n, o);
            }(t, t, e.id, e.proto), t.constructor && t.constructor[_] && Object.defineProperty(t.constructor, "name", {
                value: e.name
            }), h.set(t, e.id), function(e, t) {
                const n = new WeakRef(t);
                u.set(e, n), d.register(t, e);
            }(e.id, t), t;
        }
    }
    function E(e) {
        const t = e.value;
        for (const {name: n, value: r} of e.members) t[n] = y(r);
        return t;
    }
    function b(e, t) {
        o.ipcRenderer.on(e, (n, r, i, ...a) => {
            "number" != typeof n.senderId || 0 === n.senderId || void 0 === n.senderId ? r === f ? t(i, ...a) : o.ipcRenderer.send("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", f, r, i) : console.error(`Message ${e} sent by unexpected WebContents (${n.senderId})`);
        });
    }
    const w = process.argv.includes("--enable-api-filtering-logging");
    function S() {
        const e = {
            stack: void 0
        };
        return w && Error.captureStackTrace(e, S), e.stack;
    }
    b("REMOTE_RENDERER_CALLBACK", (e, t) => {
        c.apply(e, y(t));
    }), b("REMOTE_RENDERER_RELEASE_CALLBACK", e => {
        c.remove(e);
    }), t.require = e => y(o.ipcRenderer.sendSync("REMOTE_BROWSER_REQUIRE", f, e, S())), 
    t.getBuiltin = function(e) {
        return y(o.ipcRenderer.sendSync("REMOTE_BROWSER_GET_BUILTIN", f, e, S()));
    }, t.getCurrentWindow = function() {
        return y(o.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WINDOW", f, S()));
    }, t.getCurrentWebContents = function() {
        return y(o.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", f, S()));
    }, t.getGlobal = function(e) {
        return y(o.ipcRenderer.sendSync("REMOTE_BROWSER_GET_GLOBAL", f, e, S()));
    }, Object.defineProperty(t, "process", {
        enumerable: !0,
        get: () => t.getGlobal("process")
    }), t.createFunctionWithReturnValue = function(e) {
        const t = () => e;
        return p.add(t), t;
    };
    a.browserModuleNames.forEach(e => {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: () => t.getBuiltin(e)
        });
    });
}
