// analysis/pretty/main.js:30381; webpack module 252
function(e, t, n) {
    "use strict";
    const r = n(1), {app: i, ipcMain: o, ipcRenderer: a, shell: s} = n(2), l = n(845);
    let c = !1;
    const u = () => {
        if (!o || !i) throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
        const e = {
            defaultCwd: i.getPath("userData"),
            appVersion: i.getVersion()
        };
        return c || (o.on("electron-store-get-data", t => {
            t.returnValue = e;
        }), c = !0), e;
    };
    e.exports = class extends l {
        constructor(e) {
            let t, n;
            if (a) {
                const e = a.sendSync("electron-store-get-data");
                if (!e) throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
                ({defaultCwd: t, appVersion: n} = e);
            } else o && i && ({defaultCwd: t, appVersion: n} = u());
            (e = {
                name: "config",
                ...e
            }).projectVersion || (e.projectVersion = n), e.cwd ? e.cwd = r.isAbsolute(e.cwd) ? e.cwd : r.join(t, e.cwd) : e.cwd = t, 
            e.configName = e.name, delete e.name, super(e);
        }
        static initRenderer() {
            u();
        }
        openInEditor() {
            s.openPath(this.path);
        }
    };
}
