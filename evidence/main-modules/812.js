// analysis/pretty/main.js:74374; webpack module 812
function(e, t, n) {
    "use strict";
    (function(e) {
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.initialize = t.isInitialized = t.enable = t.isRemoteModuleEnabled = void 0;
        const i = n(12), o = r(n(813)), a = n(383), s = n(2), l = n(249), {Promise: c} = global, u = l.getElectronBinding("v8_util"), d = (() => {
            var e, t;
            const n = Number(null === (t = null === (e = process.versions.electron) || void 0 === e ? void 0 : e.split(".")) || void 0 === t ? void 0 : t[0]);
            return Number.isNaN(n) || n < 14;
        })(), h = [ "length", "name", "arguments", "caller", "prototype" ], p = new Map, f = new FinalizationRegistry(e => {
            const t = e.id[0] + "~" + e.id[1], n = p.get(t);
            if (void 0 !== n && void 0 === n.deref() && (p.delete(t), !e.webContents.isDestroyed())) try {
                e.webContents.sendToFrame(e.frameId, "REMOTE_RENDERER_RELEASE_CALLBACK", e.id[0], e.id[1]);
            } catch (e) {
                console.warn("sendToFrame() failed: " + e);
            }
        });
        function _(e) {
            const t = e[0] + "~" + e[1], n = p.get(t);
            if (void 0 !== n) {
                const e = n.deref();
                if (void 0 !== e) return e;
            }
        }
        const m = new WeakMap, g = function(e) {
            let t = Object.getOwnPropertyNames(e);
            return "function" == typeof e && (t = t.filter(e => !h.includes(e))), t.map(t => {
                const n = Object.getOwnPropertyDescriptor(e, t);
                let r, i = !1;
                return void 0 === n.get && "function" == typeof e[t] ? r = "method" : ((n.set || n.writable) && (i = !0), 
                r = "get"), {
                    name: t,
                    enumerable: n.enumerable,
                    writable: i,
                    type: r
                };
            });
        }, v = function(e) {
            const t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype ? null : {
                members: g(t),
                proto: v(t)
            };
        }, y = function(e, t, n, r = !1) {
            let i;
            switch (typeof n) {
              case "object":
                i = n instanceof Buffer ? "buffer" : n && n.constructor && "NativeImage" === n.constructor.name ? "nativeimage" : Array.isArray(n) ? "array" : n instanceof Error ? "error" : a.isSerializableObject(n) ? "value" : a.isPromise(n) ? "promise" : Object.prototype.hasOwnProperty.call(n, "callee") && null != n.length ? "array" : r && u.getHiddenValue(n, "simple") ? "value" : "object";
                break;

              case "function":
                i = "function";
                break;

              default:
                i = "value";
            }
            return "array" === i ? {
                type: i,
                members: n.map(n => y(e, t, n, r))
            } : "nativeimage" === i ? {
                type: i,
                value: a.serialize(n)
            } : "object" === i || "function" === i ? {
                type: i,
                name: n.constructor ? n.constructor.name : "",
                id: o.default.add(e, t, n),
                members: g(n),
                proto: v(n)
            } : "buffer" === i ? {
                type: i,
                value: n
            } : "promise" === i ? (n.then(function() {}, function() {}), {
                type: i,
                then: y(e, t, function(e, t) {
                    n.then(e, t);
                })
            }) : "error" === i ? {
                type: i,
                value: n,
                members: Object.keys(n).map(r => ({
                    name: r,
                    value: y(e, t, n[r])
                }))
            } : {
                type: "value",
                value: n
            };
        }, E = function(e) {
            const t = new Error(e);
            throw t.code = "EBADRPC", t.errno = -72, t;
        }, b = (e, t) => {
            let n = "Attempting to call a function in a renderer window that has been closed or released.\nFunction provided here: " + m.get(t);
            if (e instanceof i.EventEmitter) {
                const r = e.eventNames().filter(n => e.listeners(n).includes(t));
                r.length > 0 && (n += "\nRemote event names: " + r.join(", "), r.forEach(n => {
                    e.removeListener(n, t);
                }));
            }
            console.warn(n);
        }, w = function(e, t, n, r) {
            const i = function(r) {
                switch (r.type) {
                  case "nativeimage":
                    return a.deserialize(r.value);

                  case "value":
                    return r.value;

                  case "remote-object":
                    return o.default.get(r.id);

                  case "array":
                    return w(e, t, n, r.value);

                  case "buffer":
                    return Buffer.from(r.value.buffer, r.value.byteOffset, r.value.byteLength);

                  case "promise":
                    return c.resolve({
                        then: i(r.then)
                    });

                  case "object":
                    {
                        const e = "Object" !== r.name ? Object.create({
                            constructor: (s = r.name, new Proxy(Object, {
                                get: (e, t, n) => "name" === t ? s : Reflect.get(e, t, n)
                            }))
                        }) : {};
                        for (const {name: t, value: n} of r.members) e[t] = i(n);
                        return e;
                    }

                  case "function-with-return-value":
                    {
                        const e = i(r.value);
                        return function() {
                            return e;
                        };
                    }

                  case "function":
                    {
                        const i = [ n, r.id ], o = _(i);
                        if (void 0 !== o) return o;
                        const a = function(...i) {
                            let o = !1;
                            if (!e.isDestroyed()) try {
                                o = !1 !== e.sendToFrame(t, "REMOTE_RENDERER_CALLBACK", n, r.id, y(e, n, i));
                            } catch (e) {
                                console.warn("sendToFrame() failed: " + e);
                            }
                            o || b(this, a);
                        };
                        return m.set(a, r.location), Object.defineProperty(a, "length", {
                            value: r.length
                        }), function(e, t, n, r) {
                            const i = new WeakRef(r), o = e[0] + "~" + e[1];
                            p.set(o, i), f.register(r, {
                                id: e,
                                webContents: t,
                                frameId: n
                            });
                        }(i, e, t, a), a;
                    }

                  default:
                    throw new TypeError("Unknown type: " + r.type);
                }
                var s;
            };
            return r.map(i);
        }, S = new WeakMap;
        t.isRemoteModuleEnabled = function(e) {
            return d && !S.has(e) && S.set(e, function(e) {
                const t = e.getLastWebPreferences() || {};
                return null != t.enableRemoteModule && !!t.enableRemoteModule;
            }(e)), S.get(e);
        }, t.enable = function(e) {
            S.set(e, !0);
        };
        const T = function(e, n) {
            s.ipcMain.on(e, (e, r, ...i) => {
                let o;
                if (t.isRemoteModuleEnabled(e.sender)) {
                    try {
                        o = n(e, r, ...i);
                    } catch (t) {
                        o = {
                            type: "exception",
                            value: y(e.sender, r, t)
                        };
                    }
                    void 0 !== o && (e.returnValue = o);
                } else e.returnValue = {
                    type: "exception",
                    value: y(e.sender, r, new Error('@electron/remote is disabled for this WebContents. Call require("@electron/remote/main").enable(webContents) to enable it.'))
                };
            });
        }, A = function(e, t, ...n) {
            const r = {
                sender: e,
                returnValue: void 0,
                defaultPrevented: !1
            };
            return s.app.emit(t, r, e, ...n), e.emit(t, r, ...n), r;
        }, O = function(e, t, n) {
            n && console.warn(`WebContents (${e.id}): ${t}`, n);
        };
        let C = !1;
        t.isInitialized = function() {
            return C;
        }, t.initialize = function() {
            if (C) throw new Error("@electron/remote has already been initialized");
            C = !0, T("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", function(e, t, n, r) {
                const i = _([ n, r ]);
                void 0 !== i && b(e.sender, i);
            }), T("REMOTE_BROWSER_REQUIRE", function(t, n, r, i) {
                O(t.sender, `remote.require('${r}')`, i);
                const o = A(t.sender, "remote-require", r);
                if (void 0 === o.returnValue) {
                    if (o.defaultPrevented) throw new Error(`Blocked remote.require('${r}')`);
                    if (process.mainModule) o.returnValue = process.mainModule.require(r); else {
                        let t = e;
                        for (;t.parent; ) t = t.parent;
                        o.returnValue = t.require(r);
                    }
                }
                return y(t.sender, n, o.returnValue);
            }), T("REMOTE_BROWSER_GET_BUILTIN", function(e, t, r, i) {
                O(e.sender, `remote.getBuiltin('${r}')`, i);
                const o = A(e.sender, "remote-get-builtin", r);
                if (void 0 === o.returnValue) {
                    if (o.defaultPrevented) throw new Error(`Blocked remote.getBuiltin('${r}')`);
                    o.returnValue = n(2)[r];
                }
                return y(e.sender, t, o.returnValue);
            }), T("REMOTE_BROWSER_GET_GLOBAL", function(e, t, n, r) {
                O(e.sender, `remote.getGlobal('${n}')`, r);
                const i = A(e.sender, "remote-get-global", n);
                if (void 0 === i.returnValue) {
                    if (i.defaultPrevented) throw new Error(`Blocked remote.getGlobal('${n}')`);
                    i.returnValue = global[n];
                }
                return y(e.sender, t, i.returnValue);
            }), T("REMOTE_BROWSER_GET_CURRENT_WINDOW", function(e, t, n) {
                O(e.sender, "remote.getCurrentWindow()", n);
                const r = A(e.sender, "remote-get-current-window");
                if (void 0 === r.returnValue) {
                    if (r.defaultPrevented) throw new Error("Blocked remote.getCurrentWindow()");
                    r.returnValue = e.sender.getOwnerBrowserWindow();
                }
                return y(e.sender, t, r.returnValue);
            }), T("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", function(e, t, n) {
                O(e.sender, "remote.getCurrentWebContents()", n);
                const r = A(e.sender, "remote-get-current-web-contents");
                if (void 0 === r.returnValue) {
                    if (r.defaultPrevented) throw new Error("Blocked remote.getCurrentWebContents()");
                    r.returnValue = e.sender;
                }
                return y(e.sender, t, r.returnValue);
            }), T("REMOTE_BROWSER_CONSTRUCTOR", function(e, t, n, r) {
                r = w(e.sender, e.frameId, t, r);
                const i = o.default.get(n);
                return null == i && E("Cannot call constructor on missing remote object " + n), 
                y(e.sender, t, new i(...r));
            }), T("REMOTE_BROWSER_FUNCTION_CALL", function(e, t, n, r) {
                r = w(e.sender, e.frameId, t, r);
                const i = o.default.get(n);
                null == i && E("Cannot call function on missing remote object " + n);
                try {
                    return y(e.sender, t, i(...r), !0);
                } catch (e) {
                    const t = new Error(`Could not call remote function '${i.name || "anonymous"}'. Check that the function signature is correct. Underlying error: ${e}\n` + (e instanceof Error ? `Underlying stack: ${e.stack}\n` : ""));
                    throw t.cause = e, t;
                }
            }), T("REMOTE_BROWSER_MEMBER_CONSTRUCTOR", function(e, t, n, r, i) {
                i = w(e.sender, e.frameId, t, i);
                const a = o.default.get(n);
                return null == a && E(`Cannot call constructor '${r}' on missing remote object ${n}`), 
                y(e.sender, t, new a[r](...i));
            }), T("REMOTE_BROWSER_MEMBER_CALL", function(e, t, n, r, i) {
                i = w(e.sender, e.frameId, t, i);
                const a = o.default.get(n);
                null == a && E(`Cannot call method '${r}' on missing remote object ${n}`);
                try {
                    return y(e.sender, t, a[r](...i), !0);
                } catch (e) {
                    const t = new Error(`Could not call remote method '${r}'. Check that the method signature is correct. Underlying error: ${e}` + (e instanceof Error ? `Underlying stack: ${e.stack}\n` : ""));
                    throw t.cause = e, t;
                }
            }), T("REMOTE_BROWSER_MEMBER_SET", function(e, t, n, r, i) {
                i = w(e.sender, e.frameId, t, i);
                const a = o.default.get(n);
                return null == a && E(`Cannot set property '${r}' on missing remote object ${n}`), 
                a[r] = i[0], null;
            }), T("REMOTE_BROWSER_MEMBER_GET", function(e, t, n, r) {
                const i = o.default.get(n);
                return null == i && E(`Cannot get property '${r}' on missing remote object ${n}`), 
                y(e.sender, t, i[r]);
            }), T("REMOTE_BROWSER_DEREFERENCE", function(e, t, n) {
                o.default.remove(e.sender, t, n);
            }), T("REMOTE_BROWSER_CONTEXT_RELEASE", (e, t) => (o.default.clear(e.sender, t), 
            null));
        };
    }).call(this, n(40)(e));
}
