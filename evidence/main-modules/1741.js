// analysis/pretty/main.js:133311; webpack module 1741
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = r.__importDefault(n(1742)), a = n(11), s = n(803), l = r.__importDefault(n(6)), c = r.__importDefault(n(1744)), u = r.__importDefault(n(50));
    let d = null;
    t.default = {
        init: function() {
            d || (d = new o.default({
                storage: {
                    get: e => Promise.resolve(l.default.getItem(e)),
                    set: (e, t) => (l.default.setItem(e, t), Promise.resolve())
                }
            }), i.ipcMain.handle(a.APP_MESSAGE_ENUM.VCLAW_CHECK_INSTALLATION, () => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = yield null == d ? void 0 : d.isInstalled();
                    let t = "", n = 0, r = "";
                    if (e) {
                        const e = yield null == d ? void 0 : d.getInstallInfo();
                        t = (null == e ? void 0 : e.version) || "";
                    } else {
                        const {config: e} = yield s.getVClawInstallPaths(), i = yield s.fetchVersionInfo(e.feedUrl);
                        t = i.version || "";
                        const o = s.selectTargetFile(i.files);
                        o && (n = o.size, r = o.url), null == d || d.setVersionInfo(i);
                    }
                    return {
                        installed: e,
                        version: t,
                        size: n,
                        downloadUrl: r
                    };
                } catch (e) {
                    return console.error("[VClawInstaller] checkInstallation failed:", e), {
                        installed: !1,
                        version: "",
                        size: 0,
                        downloadUrl: ""
                    };
                }
            })), i.ipcMain.handle(a.APP_MESSAGE_ENUM.VCLAW_INSTALL, () => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield null == d ? void 0 : d.install(), {
                        success: !0
                    };
                } catch (e) {
                    return console.error("[VClawInstaller] install failed:", e), {
                        success: !1,
                        error: String(e)
                    };
                }
            })), c.default.init(), u.default.$on("vclaw:cancelInstall", () => {
                null == d || d.cancel();
            }), u.default.$on("vclaw:isInstalled", () => r.__awaiter(this, void 0, void 0, function*() {
                return yield s.getAppIsInstalled();
            })));
        }
    };
}
