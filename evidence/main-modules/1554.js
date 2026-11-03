// analysis/pretty/main.js:119342; webpack module 1554
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.exportFile = t.getSoftwarePath = t.recallOfficeSoft = t.runExec = void 0;
    const r = n(0), i = n(2), o = r.__importDefault(n(1)), a = n(1555), {dialog: s} = n(2);
    let l = n(701), c = n(4);
    const u = n(10);
    t.runExec = function() {
        let e;
        e = u.exec(`${cmdStr}\\FormatConvTools.exe 1 ${cmdStr}\\test.html ${cmdStr}\\test.doc`), 
        e.stdout.on("data", function(e) {
            console.log("stdout: " + e);
        }), e.stderr.on("data", function(e) {
            console.log("stderr: " + e);
        }), e.on("close", function(e) {
            let t = o.default.join(appPath, "../");
            console.log(">>>>>>>", t), console.log("-----", appPath), console.log("out code：" + e);
        });
    }, t.recallOfficeSoft = function(e) {
        return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
            if ("win32" === process.platform) {
                let a;
                {
                    let e = i.app.getPath("exe");
                    a = o.default.join(e, "../");
                }
                global.__log.info("officeSoft path:" + a), global.__log.info(`-----打开文件状态命令:${a}\\pcsuite_.exe ${e}`);
                const s = yield u.exec(`"${a}\\pcsuite_.exe" "${e}"`, (e, t, n) => {
                    e ? console.error("exec error: " + e) : (console.log("stdout: " + t), console.error("stderr: " + n));
                });
                s.on("data", function(e) {
                    console.log("stdout: " + e);
                }), s.on("close", function(e) {
                    return r.__awaiter(this, void 0, void 0, function*() {
                        global.__log.info("-----打开文件状态码:" + e), 0 !== e ? n("file open error code:" + e) : t({
                            msg: "success"
                        });
                    });
                });
            } else if ("darwin" === process.platform) {
                (yield a(e)).on("close", e => {
                    console.log("result:", e), 0 !== e ? n("file open error code:" + e) : t({
                        msg: "success"
                    });
                });
            }
        }));
    }, t.getSoftwarePath = (e, t) => {
        let n = "HKLM\\SOFTWARE\\WOW6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall", r = !1;
        l.list(n, (i, o) => {
            console.log("注册表错误:", i);
            let a = o[n].keys;
            console.log("注册表软件路径:", a);
            for (let t = 0; t < a.length; t++) if (console.log("注册表软件:", a[t]), a[t] === e) {
                r = !0;
                break;
            }
            r ? l.list([ n + "\\" + e ]).on("data", function(e) {
                let n = e.data.values.DisplayIcon.value;
                c.stat(n, (e, r) => {
                    console.log("注册表读取错误:", e), r ? t(n) : s.showErrorBox("提示", "未找到该软件");
                });
            }) : s.showErrorBox("提示", "未找到该软件");
        });
    }, t.exportFile = (e, t, n = "word") => new Promise(a => r.__awaiter(void 0, void 0, void 0, function*() {
        let s;
        s = "win32" === process.platform ? o.default.join(i.app.getPath("exe"), "../pcsuite_.exe") : o.default.resolve(o.default.dirname(i.app.getPath("exe")), "../", "Resources/FormatConvTools/pdf2word"), 
        global.__log.info("-----导出文件路径:" + s), console.log(">>>>>", s);
        const l = "pdf" === n ? 0 : 1, c = `"${s}" "${e}" "${t}"`, d = yield u.exec(c, (e, t, n) => {
            e ? console.error("exec error: " + e) : (console.log("stdout: " + t), console.error("stderr: " + n));
        });
        d.on("data", function(e) {
            console.log("stdout: " + e);
        }), d.on("close", function(n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                console.log("out code32：" + n), global.__log.info("-----导出文件状态码:" + n), global.__log.info(`-----导出文件状态码:${s} ${l} ${e} ${t}`), 
                a({
                    code: n,
                    path: t
                });
            });
        });
    }));
}
