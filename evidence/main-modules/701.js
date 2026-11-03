// analysis/pretty/main.js:62648; webpack module 701
function(e, t, n) {
    const r = n(4), i = n(5), o = n(10), a = n(1), s = n(149)("regedit"), l = n(1436), c = n(1437), u = n(1438), d = n(1444), h = n(704)(), p = n(1445);
    let f;
    function _(e, t, n) {
        p.init(function(r) {
            if (r) return n(r);
            s(e);
            const i = h(p.path(), e, {
                encoding: "utf8"
            });
            !function(e, t) {
                let n;
                e.once("error", function(e) {
                    s("process error %s", e), n = e;
                }), e.once("close", function(e) {
                    return s("process exit with code %d", e), n ? n.code in l ? t(l[n.code]) : t(n) : 0 !== e ? t(e in l ? l[e] : new Error("vbscript process reported unknown error code " + e)) : void t();
                });
            }(i, n), d.writeArrayToStream(t, i.stdin);
        });
    }
    function m(e, t) {
        switch (t = t.toUpperCase()) {
          case "REG_NONE":
            return "" === e ? "\0" : e;

          case "REG_BINARY":
            if (!i.isArray(e)) throw new Error("invalid value type " + typeof e + " for registry type REG_BINARY, please use an array of numbers");
            return e.join(",");

          case "REG_MULTI_SZ":
            if (!i.isArray(e)) throw new Error("invalid value type " + typeof e + " for registry type REG_BINARY, please use an array of strings");
            return e.join(",");

          case "REG_SZ":
            return "" === e ? "\0" : e;

          default:
            return e;
        }
    }
    function g(e, t) {
        let n;
        return n = f && "string" == typeof f ? f : a.join(__dirname, "vbs"), [ "//Nologo", a.join(n, e), t ];
    }
    e.exports.setExternalVBSLocation = function(e) {
        return r.existsSync(e) ? (f = e, "Folder found and set") : "Folder not found";
    }, e.exports.list = function(e, t, n) {
        if (void 0 === t ? (n = void 0, t = "A") : "function" == typeof t && (n = t, t = "A"), 
        "string" == typeof e && (e = [ e ]), "function" != typeof n) {
            const n = u.obj(d.vbsOutputTransform);
            return p.init(function(r) {
                if (r) return n.emit("error", r);
                const i = g("regListStream.wsf", t), o = h(p.path(), i, {
                    encoding: "utf8"
                }, function(e) {
                    e && n.emit("error", e);
                });
                o.stderr.pipe(process.stderr);
                const a = new c({
                    sliceBy: d.WIN_EOL
                });
                o.stdout.pipe(a).pipe(n), d.writeArrayToStream(e, o.stdin);
            }), n;
        }
        !function(e, t) {
            if ("function" != typeof t) throw new Error("missing callback");
            s(e), p.init(function(n) {
                if (n) return t(n);
                o.execFile(p.path(), e, function(e, n, r) {
                    if (e) return n && console.log(n), r && console.error(r), e.code in l ? t(l[e.code]) : t(e);
                    if (r) return t(new Error(r));
                    if (!n) return t();
                    let i;
                    s(n), e = null;
                    try {
                        i = JSON.parse(n);
                    } catch (t) {
                        t.stdout = n, e = t;
                    }
                    t(e, i);
                });
            });
        }(function(e, t, n) {
            let r = g(e, t);
            return "string" == typeof n ? r.push(n) : i.isArray(n) ? r = r.concat(n) : s("creating command without using keys %s", n || ""), 
            r;
        }("regList.wsf", t, e), n);
    }, e.exports.createKey = function(e, t, n) {
        "function" == typeof t && (n = t, t = "A"), "string" == typeof e && (e = [ e ]);
        _(g("regCreateKey.wsf", t), e, n);
    }, e.exports.deleteKey = function(e, t, n) {
        "function" == typeof t && (n = t, t = "A"), "string" == typeof e && (e = [ e ]);
        _(g("regDeleteKey.wsf", t), e, n);
    }, e.exports.deleteValue = function(e, t, n) {
        "function" == typeof t && (n = t, t = "A"), "string" == typeof e && (e = [ e ]), 
        _(g("regDeleteValue.wsf", t), e, n);
    }, e.exports.putValue = function(e, t, n) {
        "function" == typeof t && (n = t, t = "A");
        const r = g("regPutValue.wsf", t);
        let i = [];
        for (const t in e) if (e.hasOwnProperty(t)) {
            const n = e[t];
            for (const e in n) if (n.hasOwnProperty(e)) {
                const r = n[e];
                i.push(r.type), i.push(m(r.value, r.type)), i.push(e), i.push(t);
            }
        }
        _(r, i, n);
    }, e.exports.promisified = {
        list: function(t, n = "A") {
            return new Promise(function(r, i) {
                e.exports.list(t, n, function(e, t) {
                    return e ? i(e) : r(t);
                });
            });
        },
        createKey: function(t, n = "A") {
            return new Promise(function(r, i) {
                e.exports.createKey(t, n, function(e) {
                    return e ? i(e) : r();
                });
            });
        },
        deleteKey: function(t, n = "A") {
            return new Promise(function(r, i) {
                e.exports.deleteKey(t, n, function(e) {
                    return e ? i(e) : r();
                });
            });
        },
        deleteValue: function(t, n = "A") {
            return new Promise(function(r, i) {
                e.exports.deleteValue(t, n, function(e) {
                    return e ? i(e) : r();
                });
            });
        },
        putValue: function(t, n = "A") {
            return new Promise(function(r, i) {
                e.exports.putValue(t, n, function(e) {
                    return e ? i(e) : r();
                });
            });
        }
    }, e.exports.arch = {}, e.exports.arch.list = function(t, n) {
        return e.exports.list(t, "S", n);
    }, e.exports.arch.list32 = function(t, n) {
        return e.exports.list(t, "32", n);
    }, e.exports.arch.list64 = function(t, n) {
        return e.exports.list(t, "64", n);
    }, e.exports.arch.createKey = function(t, n) {
        return e.exports.createKey(t, "S", n);
    }, e.exports.arch.createKey32 = function(t, n) {
        return e.exports.createKey(t, "32", n);
    }, e.exports.arch.createKey64 = function(t, n) {
        return e.exports.createKey(t, "64", n);
    }, e.exports.arch.deleteKey = function(t, n) {
        return e.exports.deleteKey(t, "S", n);
    }, e.exports.arch.deleteKey32 = function(t, n) {
        return e.exports.deleteKey(t, "32", n);
    }, e.exports.arch.deleteKey64 = function(t, n) {
        return e.exports.deleteKey(t, "64", n);
    }, e.exports.arch.deleteValue = function(t, n) {
        return e.exports.deleteValue(t, "S", n);
    }, e.exports.arch.deleteValue32 = function(t, n) {
        return e.exports.deleteValue(t, "32", n);
    }, e.exports.arch.deleteValue64 = function(t, n) {
        return e.exports.deleteValue(t, "64", n);
    }, e.exports.arch.putValue = function(t, n) {
        return e.exports.putValue(t, "S", n);
    }, e.exports.arch.putValue32 = function(t, n) {
        return e.exports.putValue(t, "32", n);
    }, e.exports.arch.putValue64 = function(t, n) {
        return e.exports.putValue(t, "64", n);
    }, e.exports.arch.promisified = {
        list: function(t) {
            return e.exports.promisified.list(t, "S");
        },
        list32: function(t) {
            return e.exports.promisified.list(t, "32");
        },
        list64: function(t) {
            return e.exports.promisified.list(t, "64");
        },
        createKey: function(t) {
            return e.exports.promisified.createKey(t, "S");
        },
        createKey32: function(t) {
            return e.exports.promisified.createKey(t, "32");
        },
        createKey64: function(t) {
            return e.exports.promisified.createKey(t, "64");
        },
        deleteKey: function(t) {
            return e.exports.promisified.deleteKey(t, "S");
        },
        deleteKey32: function(t) {
            return e.exports.promisified.deleteKey(t, "32");
        },
        deleteKey64: function(t) {
            return e.exports.promisified.deleteKey(t, "64");
        },
        deleteValue: function(t) {
            return e.exports.promisified.deleteValue(t, "S");
        },
        deleteValue32: function(t) {
            return e.exports.promisified.deleteValue(t, "32");
        },
        deleteValue64: function(t) {
            return e.exports.promisified.deleteValue(t, "64");
        },
        putValue: function(t) {
            return e.exports.promisified.putValue(t, "S");
        },
        putValue32: function(t) {
            return e.exports.promisified.putValue(t, "32");
        },
        putValue64: function(t) {
            return e.exports.promisified.putValue(t, "64");
        }
    };
}
