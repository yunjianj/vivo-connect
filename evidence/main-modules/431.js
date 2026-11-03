// analysis/pretty/main.js:44014; webpack module 431
function(e, t, n) {
    "use strict";
    const r = n(8), i = n(274), o = n(203)("winston:exception"), a = n(432), s = n(433), l = n(434);
    e.exports = class {
        constructor(e) {
            if (!e) throw new Error("Logger is required to handle exceptions");
            this.logger = e, this.handlers = new Map;
        }
        handle(...e) {
            e.forEach(e => {
                if (Array.isArray(e)) return e.forEach(e => this._addHandler(e));
                this._addHandler(e);
            }), this.catcher || (this.catcher = this._uncaughtException.bind(this), process.on("uncaughtException", this.catcher));
        }
        unhandle() {
            this.catcher && (process.removeListener("uncaughtException", this.catcher), this.catcher = !1, 
            Array.from(this.handlers.values()).forEach(e => this.logger.unpipe(e)));
        }
        getAllInfo(e) {
            let {message: t} = e;
            return t || "string" != typeof e || (t = e), {
                error: e,
                level: "error",
                message: [ "uncaughtException: " + (t || "(no error message)"), e.stack || "  No stack trace" ].join("\n"),
                stack: e.stack,
                exception: !0,
                date: (new Date).toString(),
                process: this.getProcessInfo(),
                os: this.getOsInfo(),
                trace: this.getTrace(e)
            };
        }
        getProcessInfo() {
            return {
                pid: process.pid,
                uid: process.getuid ? process.getuid() : null,
                gid: process.getgid ? process.getgid() : null,
                cwd: process.cwd(),
                execPath: process.execPath,
                version: process.version,
                argv: process.argv,
                memoryUsage: process.memoryUsage()
            };
        }
        getOsInfo() {
            return {
                loadavg: r.loadavg(),
                uptime: r.uptime()
            };
        }
        getTrace(e) {
            return (e ? s.parse(e) : s.get()).map(e => ({
                column: e.getColumnNumber(),
                file: e.getFileName(),
                function: e.getFunctionName(),
                line: e.getLineNumber(),
                method: e.getMethodName(),
                native: e.isNative()
            }));
        }
        _addHandler(e) {
            if (!this.handlers.has(e)) {
                e.handleExceptions = !0;
                const t = new l(e);
                this.handlers.set(e, t), this.logger.pipe(t);
            }
        }
        _uncaughtException(e) {
            const t = this.getAllInfo(e), n = this._getExceptionHandlers();
            let r, s = "function" == typeof this.logger.exitOnError ? this.logger.exitOnError(e) : this.logger.exitOnError;
            function l() {
                o("doExit", s), o("process._exiting", process._exiting), s && !process._exiting && (r && clearTimeout(r), 
                process.exit(1));
            }
            if (!n.length && s && (console.warn("winston: exitOnError cannot be true with no exception handlers."), 
            console.warn("winston: not exiting process."), s = !1), !n || 0 === n.length) return process.nextTick(l);
            i(n, (e, t) => {
                const n = a(t), r = e.transport || e;
                function i(e) {
                    return () => {
                        o(e), n();
                    };
                }
                r._ending = !0, r.once("finish", i("finished")), r.once("error", i("error"));
            }, () => s && l()), this.logger.log(t), s && (r = setTimeout(l, 3e3));
        }
        _getExceptionHandlers() {
            return this.logger.transports.filter(e => (e.transport || e).handleExceptions);
        }
    };
}
