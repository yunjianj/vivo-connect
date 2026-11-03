// analysis/pretty/main.js:101781; webpack module 1362
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ElectronAppAdapter = void 0;
    const r = n(1), i = n(1363);
    t.ElectronAppAdapter = class {
        constructor(e = n(2).app) {
            this.app = e;
        }
        whenReady() {
            return this.app.whenReady();
        }
        get version() {
            return this.app.getVersion();
        }
        get name() {
            return this.app.getName();
        }
        get isPackaged() {
            return !0 === this.app.isPackaged;
        }
        get appUpdateConfigPath() {
            return this.isPackaged ? r.join(process.resourcesPath, "app-update.yml") : r.join(this.app.getAppPath(), "dev-app-update.yml");
        }
        get userDataPath() {
            return this.app.getPath("userData");
        }
        get baseCachePath() {
            return (0, i.getAppCacheDir)();
        }
        quit() {
            this.app.quit();
        }
        relaunch() {
            this.app.relaunch();
        }
        onQuit(e) {
            this.app.once("quit", (t, n) => e(n));
        }
    };
}
