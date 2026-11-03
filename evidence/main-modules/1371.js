// analysis/pretty/main.js:102242; webpack module 1371
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.executeTasksUsingMultipleRangeRequests = function(e, t, n, s, l) {
        const c = u => {
            if (u >= t.length) return null != e.fileMetadataBuffer && n.write(e.fileMetadataBuffer), 
            void n.end();
            const d = u + 1e3;
            !function(e, t, n, s, l) {
                let c = "bytes=", u = 0, d = 0;
                const h = new Map, p = [];
                for (let e = t.start; e < t.end; e++) {
                    const n = t.tasks[e];
                    n.kind === o.OperationKind.DOWNLOAD && (c += `${n.start}-${n.end - 1}, `, h.set(u, e), 
                    u++, p.push(n.end - n.start), d += n.end - n.start);
                }
                if (u <= 1) {
                    const r = c => {
                        if (c >= t.end) return void s();
                        const u = t.tasks[c++];
                        if (u.kind === o.OperationKind.COPY) (0, i.copyData)(u, n, t.oldFileFd, l, () => r(c)); else {
                            const t = e.createRequestOptions();
                            t.headers.Range = `bytes=${u.start}-${u.end - 1}`;
                            const i = e.httpExecutor.createRequest(t, e => {
                                e.on("error", l), a(e, l) && (e.pipe(n, {
                                    end: !1
                                }), e.once("end", () => r(c)));
                            });
                            e.httpExecutor.addErrorAndTimeoutHandlers(i, l), i.end();
                        }
                    };
                    return void r(t.start);
                }
                const f = e.createRequestOptions();
                f.headers.Range = c.substring(0, c.length - 2);
                const _ = e.httpExecutor.createRequest(f, o => {
                    if (!a(o, l)) return;
                    const c = (0, r.safeGetHeader)(o, "content-type"), u = /^multipart\/.+?\s*;\s*boundary=(?:"([^"]+)"|([^\s";]+))\s*$/i.exec(c);
                    if (null == u) return void l(new Error(`Content-Type "multipart/byteranges" is expected, but got "${c}"`));
                    const f = new i.DataSplitter(n, t, h, u[1] || u[2], p, s, d, e.options.onProgress);
                    f.on("error", l), o.pipe(f), o.on("end", () => {
                        setTimeout(() => {
                            _.abort(), l(new Error("Response ends without calling any handlers"));
                        }, 1e4);
                    });
                });
                e.httpExecutor.addErrorAndTimeoutHandlers(_, l), _.end();
            }(e, {
                tasks: t,
                start: u,
                end: Math.min(t.length, d),
                oldFileFd: s
            }, n, () => c(d), l);
        };
        return c;
    }, t.checkIsRangesSupported = a;
    const r = n(36), i = n(674), o = n(333);
    function a(e, t) {
        if (e.statusCode >= 400) return t((0, r.createHttpError)(e)), !1;
        if (206 !== e.statusCode) {
            const n = (0, r.safeGetHeader)(e, "accept-ranges");
            if (null == n || "none" === n) return t(new Error(`Server doesn't support Accept-Ranges (response code ${e.statusCode})`)), 
            !1;
        }
        return !0;
    }
}
