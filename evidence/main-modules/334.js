// analysis/pretty/main.js:36154; webpack module 334
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LinuxUpdater = void 0;
    const r = n(223);
    class i extends r.BaseUpdater {
        constructor(e, t) {
            super(e, t);
        }
        isRunningAsRoot() {
            var e;
            return 0 === (null === (e = process.getuid) || void 0 === e ? void 0 : e.call(process));
        }
        get installerPath() {
            var e, t;
            return null !== (t = null === (e = super.installerPath) || void 0 === e ? void 0 : e.replace(/\\/g, "\\\\").replace(/ /g, "\\ ")) && void 0 !== t ? t : null;
        }
        runCommandWithSudoIfNeeded(e) {
            if (this.isRunningAsRoot()) return this._logger.info("Running as root, no need to use sudo"), 
            this.spawnSyncLog(e[0], e.slice(1));
            const {name: t} = this.app, n = `"${t} would like to update"`, r = this.sudoWithArgs(n);
            this._logger.info("Running as non-root user, using sudo to install: " + r);
            let i = '"';
            return (/pkexec/i.test(r[0]) || "sudo" === r[0]) && (i = ""), this.spawnSyncLog(r[0], [ ...r.length > 1 ? r.slice(1) : [], i + "/bin/bash", "-c", `'${e.join(" ")}'${i}` ]);
        }
        sudoWithArgs(e) {
            const t = this.determineSudoCommand(), n = [ t ];
            return /kdesudo/i.test(t) ? (n.push("--comment", e), n.push("-c")) : /gksudo/i.test(t) ? n.push("--message", e) : /pkexec/i.test(t) && n.push("--disable-internal-agent"), 
            n;
        }
        hasCommand(e) {
            try {
                return this.spawnSyncLog("command", [ "-v", e ]), !0;
            } catch {
                return !1;
            }
        }
        determineSudoCommand() {
            const e = [ "gksudo", "kdesudo", "pkexec", "beesu" ];
            for (const t of e) if (this.hasCommand(t)) return t;
            return "sudo";
        }
        detectPackageManager(e) {
            var t;
            const n = null === (t = process.env.ELECTRON_BUILDER_LINUX_PACKAGE_MANAGER) || void 0 === t ? void 0 : t.trim();
            if (n) return n;
            for (const t of e) if (this.hasCommand(t)) return t;
            return this._logger.warn(`No package manager found in the list: ${e.join(", ")}. Defaulting to the first one: ${e[0]}`), 
            e[0];
        }
    }
    t.LinuxUpdater = i;
}
