// analysis/pretty/main.js:60341; webpack module 662
function(e, t, n) {
    "use strict";
    var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var i = Object.getOwnPropertyDescriptor(t, n);
        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
            enumerable: !0,
            get: function() {
                return t[n];
            }
        }), Object.defineProperty(e, r, i);
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
    }), i = this && this.__exportStar || function(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NsisUpdater = t.MacUpdater = t.RpmUpdater = t.PacmanUpdater = t.DebUpdater = t.AppImageUpdater = t.Provider = t.NoOpLogger = t.AppUpdater = t.BaseUpdater = void 0;
    const o = n(93), a = n(1);
    var s = n(223);
    Object.defineProperty(t, "BaseUpdater", {
        enumerable: !0,
        get: function() {
            return s.BaseUpdater;
        }
    });
    var l = n(324);
    Object.defineProperty(t, "AppUpdater", {
        enumerable: !0,
        get: function() {
            return l.AppUpdater;
        }
    }), Object.defineProperty(t, "NoOpLogger", {
        enumerable: !0,
        get: function() {
            return l.NoOpLogger;
        }
    });
    var c = n(54);
    Object.defineProperty(t, "Provider", {
        enumerable: !0,
        get: function() {
            return c.Provider;
        }
    });
    var u = n(675);
    Object.defineProperty(t, "AppImageUpdater", {
        enumerable: !0,
        get: function() {
            return u.AppImageUpdater;
        }
    });
    var d = n(677);
    Object.defineProperty(t, "DebUpdater", {
        enumerable: !0,
        get: function() {
            return d.DebUpdater;
        }
    });
    var h = n(678);
    Object.defineProperty(t, "PacmanUpdater", {
        enumerable: !0,
        get: function() {
            return h.PacmanUpdater;
        }
    });
    var p = n(679);
    Object.defineProperty(t, "RpmUpdater", {
        enumerable: !0,
        get: function() {
            return p.RpmUpdater;
        }
    });
    var f = n(680);
    Object.defineProperty(t, "MacUpdater", {
        enumerable: !0,
        get: function() {
            return f.MacUpdater;
        }
    });
    var _ = n(681);
    let m;
    Object.defineProperty(t, "NsisUpdater", {
        enumerable: !0,
        get: function() {
            return _.NsisUpdater;
        }
    }), i(n(107), t), Object.defineProperty(t, "autoUpdater", {
        enumerable: !0,
        get: () => m || function() {
            if ("win32" === process.platform) m = new (n(681).NsisUpdater); else if ("darwin" === process.platform) m = new (n(680).MacUpdater); else {
                m = new (n(675).AppImageUpdater);
                try {
                    const e = a.join(process.resourcesPath, "package-type");
                    if (!(0, o.existsSync)(e)) return m;
                    switch ((0, o.readFileSync)(e).toString().trim()) {
                      case "deb":
                        m = new (n(677).DebUpdater);
                        break;

                      case "rpm":
                        m = new (n(679).RpmUpdater);
                        break;

                      case "pacman":
                        m = new (n(678).PacmanUpdater);
                    }
                } catch (e) {
                    console.warn("Unable to detect 'package-type' for autoUpdater (rpm/deb/pacman support). If you'd like to expand support, please consider contributing to electron-builder", e.message);
                }
            }
            return m;
        }()
    });
}
