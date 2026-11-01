// analysis/pretty/main.js:60797; webpack module 673
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DifferentialDownloader = void 0;
    const r = n(36), i = n(93), o = n(4), a = n(674), s = n(15), l = n(333), c = n(1371), u = n(1372);
    function d(e, t = " KB") {
        return new Intl.NumberFormat("en").format((e / 1024).toFixed(2)) + t;
    }
    t.DifferentialDownloader = class {
        constructor(e, t, n) {
            this.blockAwareFileInfo = e, this.httpExecutor = t, this.options = n, this.fileMetadataBuffer = null, 
            this.logger = n.logger;
        }
        createRequestOptions() {
            const e = {
                headers: {
                    ...this.options.requestHeaders,
                    accept: "*/*"
                }
            };
            return (0, r.configureRequestUrl)(this.options.newUrl, e), (0, r.configureRequestOptions)(e), 
            e;
        }
        doDownload(e, t) {
            if (e.version !== t.version) throw new Error(`version is different (${e.version} - ${t.version}), full download is required`);
            const n = this.logger, r = (0, l.computeOperations)(e, t, n);
            null != n.debug && n.debug(JSON.stringify(r, null, 2));
            let i = 0, o = 0;
            for (const e of r) {
                const t = e.end - e.start;
                e.kind === l.OperationKind.DOWNLOAD ? i += t : o += t;
            }
            const a = this.blockAwareFileInfo.size;
            if (i + o + (null == this.fileMetadataBuffer ? 0 : this.fileMetadataBuffer.length) !== a) throw new Error(`Internal error, size mismatch: downloadSize: ${i}, copySize: ${o}, newSize: ${a}`);
            return n.info(`Full: ${d(a)}, To download: ${d(i)} (${Math.round(i / (a / 100))}%)`), 
            this.downloadFile(r);
        }
        downloadFile(e) {
            const t = [], n = () => Promise.all(t.map(e => (0, i.close)(e.descriptor).catch(t => {
                this.logger.error(`cannot close file "${e.path}": ${t}`);
            })));
            return this.doDownloadFile(e, t).then(n).catch(e => n().catch(t => {
                try {
                    this.logger.error("cannot close files: " + t);
                } catch (e) {
                    try {
                        console.error(e);
                    } catch (e) {}
                }
                throw e;
            }).then(() => {
                throw e;
            }));
        }
        async doDownloadFile(e, t) {
            const n = await (0, i.open)(this.options.oldFile, "r");
            t.push({
                descriptor: n,
                path: this.options.oldFile
            });
            const d = await (0, i.open)(this.options.newFile, "w");
            t.push({
                descriptor: d,
                path: this.options.newFile
            });
            const h = (0, o.createWriteStream)(this.options.newFile, {
                fd: d
            });
            await new Promise((i, o) => {
                const d = [];
                let p = void 0;
                if (!this.options.isUseMultipleRangeRequest && this.options.onProgress) {
                    const t = [];
                    let n = 0;
                    for (const r of e) r.kind === l.OperationKind.DOWNLOAD && (t.push(r.end - r.start), 
                    n += r.end - r.start);
                    const r = {
                        expectedByteCounts: t,
                        grandTotal: n
                    };
                    p = new u.ProgressDifferentialDownloadCallbackTransform(r, this.options.cancellationToken, this.options.onProgress), 
                    d.push(p);
                }
                const f = new r.DigestTransform(this.blockAwareFileInfo.sha512);
                f.isValidateOnEnd = !1, d.push(f), h.on("finish", () => {
                    h.close(() => {
                        t.splice(1, 1);
                        try {
                            f.validate();
                        } catch (e) {
                            return void o(e);
                        }
                        i(void 0);
                    });
                }), d.push(h);
                let _ = null;
                for (const e of d) e.on("error", o), _ = null == _ ? e : _.pipe(e);
                const m = d[0];
                let g;
                if (this.options.isUseMultipleRangeRequest) return g = (0, c.executeTasksUsingMultipleRangeRequests)(this, e, m, n, o), 
                void g(0);
                let v = 0, y = null;
                this.logger.info("Differential download: " + this.options.newUrl);
                const E = this.createRequestOptions();
                E.redirect = "manual", g = t => {
                    var i, c;
                    if (t >= e.length) return null != this.fileMetadataBuffer && m.write(this.fileMetadataBuffer), 
                    void m.end();
                    const u = e[t++];
                    if (u.kind === l.OperationKind.COPY) return p && p.beginFileCopy(), void (0, a.copyData)(u, m, n, o, () => g(t));
                    const d = `bytes=${u.start}-${u.end - 1}`;
                    E.headers.range = d, null === (c = null === (i = this.logger) || void 0 === i ? void 0 : i.debug) || void 0 === c || c.call(i, "download range: " + d), 
                    p && p.beginRangeDownload();
                    const h = this.httpExecutor.createRequest(E, e => {
                        e.on("error", o), e.on("aborted", () => {
                            o(new Error("response has been aborted by the server"));
                        }), e.statusCode >= 400 && o((0, r.createHttpError)(e)), e.pipe(m, {
                            end: !1
                        }), e.once("end", () => {
                            p && p.endRangeDownload(), 100 == ++v ? (v = 0, setTimeout(() => g(t), 1e3)) : g(t);
                        });
                    });
                    h.on("redirect", (e, t, n) => {
                        this.logger.info("Redirect to " + function(e) {
                            const t = e.indexOf("?");
                            return t < 0 ? e : e.substring(0, t);
                        }(n)), y = n, (0, r.configureRequestUrl)(new s.URL(y), E), h.followRedirect();
                    }), this.httpExecutor.addErrorAndTimeoutHandlers(h, o), h.end();
                }, g(0);
            });
        }
        async readRemoteBytes(e, t) {
            const n = Buffer.allocUnsafe(t + 1 - e), r = this.createRequestOptions();
            r.headers.range = `bytes=${e}-${t}`;
            let i = 0;
            if (await this.request(r, e => {
                e.copy(n, i), i += e.length;
            }), i !== n.length) throw new Error(`Received data length ${i} is not equal to expected ${n.length}`);
            return n;
        }
        request(e, t) {
            return new Promise((n, r) => {
                const i = this.httpExecutor.createRequest(e, e => {
                    (0, c.checkIsRangesSupported)(e, r) && (e.on("error", r), e.on("aborted", () => {
                        r(new Error("response has been aborted by the server"));
                    }), e.on("data", t), e.on("end", () => n()));
                });
                this.httpExecutor.addErrorAndTimeoutHandlers(i, r), i.end();
            });
        }
    };
}
