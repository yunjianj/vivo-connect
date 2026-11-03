// analysis/pretty/main.js:119426; webpack module 1555
function(e, t, n) {
    const r = n(1), i = n(10), {promises: o, constants: a} = n(4), s = n(1556), l = n(741), c = n(1557), u = r.join(__dirname, "xdg-open"), {platform: d, arch: h} = process, p = (() => {
        let e;
        return async function() {
            if (e) return e;
            let t = !1;
            try {
                await o.access("/etc/wsl.conf", a.F_OK), t = !0;
            } catch {}
            if (!t) return "/mnt/";
            const n = await o.readFile("/etc/wsl.conf", {
                encoding: "utf8"
            }), r = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(n);
            return r ? (e = r.groups.mountPoint.trim(), e = e.endsWith("/") ? e : e + "/", e) : "/mnt/";
        };
    })(), f = async (e, t) => {
        let n;
        for (const r of e) try {
            return await t(r);
        } catch (e) {
            n = e;
        }
        throw n;
    }, _ = async e => {
        if (e = {
            wait: !1,
            background: !1,
            newInstance: !1,
            allowNonzeroExitCode: !1,
            ...e
        }, Array.isArray(e.app)) return f(e.app, t => _({
            ...e,
            app: t
        }));
        let t, {name: n, arguments: r = []} = e.app || {};
        if (r = [ ...r ], Array.isArray(n)) return f(n, t => _({
            ...e,
            app: {
                name: t,
                arguments: r
            }
        }));
        const c = [], h = {};
        if ("darwin" === d) t = "open", e.wait && c.push("--wait-apps"), e.background && c.push("--background"), 
        e.newInstance && c.push("--new"), n && c.push("-a", n); else if ("win32" === d || s && !l()) {
            const i = await p();
            t = s ? i + "c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe" : process.env.SYSTEMROOT + "\\System32\\WindowsPowerShell\\v1.0\\powershell", 
            c.push("-NoProfile", "-NonInteractive", "–ExecutionPolicy", "Bypass", "-EncodedCommand"), 
            s || (h.windowsVerbatimArguments = !0);
            const o = [ "Start" ];
            e.wait && o.push("-Wait"), n ? (o.push(`"\`"${n}\`""`, "-ArgumentList"), e.target && r.unshift(e.target)) : e.target && o.push(`"${e.target}"`), 
            r.length > 0 && (r = r.map(e => `"\`"${e}\`""`), o.push(r.join(","))), e.target = Buffer.from(o.join(" "), "utf16le").toString("base64");
        } else {
            if (n) t = n; else {
                const e = !__dirname || "/" === __dirname;
                let n = !1;
                try {
                    await o.access(u, a.X_OK), n = !0;
                } catch {}
                t = process.versions.electron || "android" === d || e || !n ? "xdg-open" : u;
            }
            r.length > 0 && c.push(...r), e.wait || (h.stdio = "ignore", h.detached = !0);
        }
        e.target && c.push(e.target), "darwin" === d && r.length > 0 && c.push("--args", ...r);
        const m = i.spawn(t, c, h);
        return e.wait ? new Promise((t, n) => {
            m.once("error", n), m.once("close", r => {
                e.allowNonzeroExitCode && r > 0 ? n(new Error("Exited with code " + r)) : t(m);
            });
        }) : (m.unref(), m);
    }, m = (e, t) => {
        if ("string" != typeof e) throw new TypeError("Expected a `target`");
        return _({
            ...t,
            target: e
        });
    };
    function g(e) {
        if ("string" == typeof e || Array.isArray(e)) return e;
        const {[h]: t} = e;
        if (!t) throw new Error(h + " is not supported");
        return t;
    }
    function v({[d]: e}, {wsl: t}) {
        if (t && s) return g(t);
        if (!e) throw new Error(d + " is not supported");
        return g(e);
    }
    const y = {};
    c(y, "chrome", () => v({
        darwin: "google chrome",
        win32: "chrome",
        linux: [ "google-chrome", "google-chrome-stable" ]
    }, {
        wsl: {
            ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            x64: [ "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe" ]
        }
    })), c(y, "firefox", () => v({
        darwin: "firefox",
        win32: "C:\\Program Files\\Mozilla Firefox\\firefox.exe",
        linux: "firefox"
    }, {
        wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
    })), c(y, "edge", () => v({
        darwin: "microsoft edge",
        win32: "msedge",
        linux: "microsoft-edge"
    }, {
        wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
    })), m.apps = y, m.openApp = (e, t) => {
        if ("string" != typeof e) throw new TypeError("Expected a `name`");
        const {arguments: n = []} = t || {};
        if (null != n && !Array.isArray(n)) throw new TypeError("Expected `appArguments` as Array type");
        return _({
            ...t,
            app: {
                name: e,
                arguments: n
            }
        });
    }, e.exports = m;
}
