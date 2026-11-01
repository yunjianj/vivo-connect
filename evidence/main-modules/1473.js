// analysis/pretty/main.js:109106; webpack module 1473
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = n(9), s = n(162), l = n(96);
    class c extends a.Transform {
        constructor(e, t, n) {
            super(n), this.currentStream = null, this.modifiedTime = Date.now(), this.savePath = e, 
            this.files = t, this.current = 0, this.cache = Buffer.from(""), this.currentSize = 0, 
            this.currentStream = null, this.need = 0;
        }
        _transform(e, t, n) {
            const {current: a, files: l, savePath: c} = this;
            if (a >= l.length) return void n();
            this.currentSize += e.length, this.customEmit("parse-progress", this.currentSize);
            const {name: u, size: d} = l[a];
            if (this.cache = Buffer.concat([ this.cache, e ]), null == this.currentStream) {
                const {head: e, filename: t, extraFieldLength: r} = this.getHeadAndFilename(this.cache);
                if (this.setModifiedTime(this.cache), !e || !t) return void n();
                this.cache = this.cache.slice(e.length + t.length + r), this.need = d;
                const a = s.fileExistAndRename(u, c);
                this.currentStream = i.default.createWriteStream(o.default.resolve(c, a)).on("error", e => {
                    this.customEmit("parse-error", e);
                });
            }
            const h = this.cache.slice(0, this.need), p = this.cache.slice(this.need);
            this.currentStream.write(h, e => r.__awaiter(this, void 0, void 0, function*() {
                e ? this.customEmit("parse-error", e) : (this.need -= h.length, this.cache = p, 
                0 == this.need && (yield this.handleSingleFileEnd(this.modifiedTime)), n());
            }));
        }
        _final(e) {
            this.customEmit("parse-end"), e();
        }
        handleSingleFileEnd(e) {
            return new Promise(t => {
                if (null == this.currentStream) return void t();
                this.current++;
                const n = this.currentStream.path.toString();
                global.__log.info("[ParseStream]handleSingleFileEnd current: " + this.current), 
                this.currentStream.close(() => {
                    if (i.default.existsSync(n)) {
                        const t = n.lastIndexOf("darwin" == process.platform ? "/" : "\\");
                        t >= 0 ? this.customEmit("single-file-end", n.slice(t + 1)) : global.__log.error("[ParseStream]handleSingleFileEnd not nameIndex filePath: " + n), 
                        i.default.utimes(n, new Date(e), new Date(e), t => {
                            t ? global.__log.error(`[ParseStream]handleSingleFileEnd utimes error filePath: ${n}, modifiedTime: ${e}`) : global.__log.info(`[ParseStream]handleSingleFileEnd utimes success filePath: ${n}, modifiedTime: ${e}`);
                        });
                    } else global.__log.error("[ParseStream]handleSingleFileEnd not exists filePath: " + n);
                    this.currentStream = null, t();
                });
            });
        }
        getHeadAndFilename(e) {
            let t = void 0, n = void 0, r = 0;
            if (e.length >= 30) {
                t = e.slice(0, 30);
                const i = t.readUInt8(26) + 16 * t.readUInt8(27) * 16;
                r = e.readUInt16LE(28), e.length >= t.length + i && (n = e.slice(30, 30 + i));
            }
            return {
                head: t,
                filename: n,
                extraFieldLength: r
            };
        }
        setModifiedTime(e) {
            const t = new DataView(e.buffer), n = t.getUint16(10, !0), r = t.getUint16(12, !0), i = new Date(1980 + (r >> 9 & 127), (r >> 5 & 15) - 1, 31 & r, n >> 11 & 31, n >> 5 & 63, 2 * (31 & n)).getTime();
            global.__log.info("[ParseStream]setModifiedTime modifiedTime: " + i), this.modifiedTime = i || Date.now();
        }
        handleError() {
            null != this.currentStream && l.closeAndDelete(this.currentStream);
        }
        customOn(e, t) {
            return super.on(e, t);
        }
        customEmit(e, ...t) {
            return super.emit.apply(this, [ e, ...t ]);
        }
    }
    t.default = c;
}
