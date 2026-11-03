// analysis/pretty/main.js:60949; webpack module 674
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DataSplitter = void 0, t.copyData = c;
    const r = n(36), i = n(4), o = n(9), a = n(333), s = Buffer.from("\r\n\r\n");
    var l;
    function c(e, t, n, r, o) {
        const a = (0, i.createReadStream)("", {
            fd: n,
            autoClose: !1,
            start: e.start,
            end: e.end - 1
        });
        a.on("error", r), a.once("end", o), a.pipe(t, {
            end: !1
        });
    }
    !function(e) {
        e[e.INIT = 0] = "INIT", e[e.HEADER = 1] = "HEADER", e[e.BODY = 2] = "BODY";
    }(l || (l = {}));
    class u extends o.Writable {
        constructor(e, t, n, r, i, o, a, s) {
            super(), this.out = e, this.options = t, this.partIndexToTaskIndex = n, this.partIndexToLength = i, 
            this.finishHandler = o, this.grandTotalBytes = a, this.onProgress = s, this.start = Date.now(), 
            this.nextUpdate = this.start + 1e3, this.transferred = 0, this.delta = 0, this.partIndex = -1, 
            this.headerListBuffer = null, this.readState = l.INIT, this.ignoreByteCount = 0, 
            this.remainingPartDataCount = 0, this.actualPartLength = 0, this.boundaryLength = r.length + 4, 
            this.ignoreByteCount = this.boundaryLength - 2;
        }
        get isFinished() {
            return this.partIndex === this.partIndexToLength.length;
        }
        _write(e, t, n) {
            this.isFinished ? console.error(`Trailing ignored data: ${e.length} bytes`) : this.handleData(e).then(() => {
                if (this.onProgress) {
                    const e = Date.now();
                    (e >= this.nextUpdate || this.transferred === this.grandTotalBytes) && this.grandTotalBytes && (e - this.start) / 1e3 && (this.nextUpdate = e + 1e3, 
                    this.onProgress({
                        total: this.grandTotalBytes,
                        delta: this.delta,
                        transferred: this.transferred,
                        percent: this.transferred / this.grandTotalBytes * 100,
                        bytesPerSecond: Math.round(this.transferred / ((e - this.start) / 1e3))
                    }), this.delta = 0);
                }
                n();
            }).catch(n);
        }
        async handleData(e) {
            let t = 0;
            if (0 !== this.ignoreByteCount && 0 !== this.remainingPartDataCount) throw (0, r.newError)("Internal error", "ERR_DATA_SPLITTER_BYTE_COUNT_MISMATCH");
            if (this.ignoreByteCount > 0) {
                const n = Math.min(this.ignoreByteCount, e.length);
                this.ignoreByteCount -= n, t = n;
            } else if (this.remainingPartDataCount > 0) {
                const n = Math.min(this.remainingPartDataCount, e.length);
                this.remainingPartDataCount -= n, await this.processPartData(e, 0, n), t = n;
            }
            if (t !== e.length) {
                if (this.readState === l.HEADER) {
                    const n = this.searchHeaderListEnd(e, t);
                    if (-1 === n) return;
                    t = n, this.readState = l.BODY, this.headerListBuffer = null;
                }
                for (;;) {
                    if (this.readState === l.BODY) this.readState = l.INIT; else {
                        this.partIndex++;
                        let n = this.partIndexToTaskIndex.get(this.partIndex);
                        if (null == n) {
                            if (!this.isFinished) throw (0, r.newError)("taskIndex is null", "ERR_DATA_SPLITTER_TASK_INDEX_IS_NULL");
                            n = this.options.end;
                        }
                        const i = 0 === this.partIndex ? this.options.start : this.partIndexToTaskIndex.get(this.partIndex - 1) + 1;
                        if (i < n) await this.copyExistingData(i, n); else if (i > n) throw (0, r.newError)("prevTaskIndex must be < taskIndex", "ERR_DATA_SPLITTER_TASK_INDEX_ASSERT_FAILED");
                        if (this.isFinished) return this.onPartEnd(), void this.finishHandler();
                        if (t = this.searchHeaderListEnd(e, t), -1 === t) return void (this.readState = l.HEADER);
                    }
                    const n = this.partIndexToLength[this.partIndex], i = t + n, o = Math.min(i, e.length);
                    if (await this.processPartStarted(e, t, o), this.remainingPartDataCount = n - (o - t), 
                    this.remainingPartDataCount > 0) return;
                    if (t = i + this.boundaryLength, t >= e.length) return void (this.ignoreByteCount = this.boundaryLength - (e.length - i));
                }
            }
        }
        copyExistingData(e, t) {
            return new Promise((n, r) => {
                const i = () => {
                    if (e === t) return void n();
                    const o = this.options.tasks[e];
                    o.kind === a.OperationKind.COPY ? c(o, this.out, this.options.oldFileFd, r, () => {
                        e++, i();
                    }) : r(new Error("Task kind must be COPY"));
                };
                i();
            });
        }
        searchHeaderListEnd(e, t) {
            const n = e.indexOf(s, t);
            if (-1 !== n) return n + s.length;
            const r = 0 === t ? e : e.slice(t);
            return null == this.headerListBuffer ? this.headerListBuffer = r : this.headerListBuffer = Buffer.concat([ this.headerListBuffer, r ]), 
            -1;
        }
        onPartEnd() {
            const e = this.partIndexToLength[this.partIndex - 1];
            if (this.actualPartLength !== e) throw (0, r.newError)(`Expected length: ${e} differs from actual: ${this.actualPartLength}`, "ERR_DATA_SPLITTER_LENGTH_MISMATCH");
            this.actualPartLength = 0;
        }
        processPartStarted(e, t, n) {
            return 0 !== this.partIndex && this.onPartEnd(), this.processPartData(e, t, n);
        }
        processPartData(e, t, n) {
            this.actualPartLength += n - t, this.transferred += n - t, this.delta += n - t;
            const r = this.out;
            return r.write(0 === t && e.length === n ? e : e.slice(t, n)) ? Promise.resolve() : new Promise((e, t) => {
                r.on("error", t), r.once("drain", () => {
                    r.removeListener("error", t), e();
                });
            });
        }
    }
    t.DataSplitter = u;
}
