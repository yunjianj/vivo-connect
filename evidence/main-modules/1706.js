// analysis/pretty/main.js:131335; webpack module 1706
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(798)), o = n(25), a = n(163), s = r.__importDefault(n(604)), l = r.__importDefault(n(4));
    t.default = class {
        constructor(e, t) {
            this.filePath = "", this.uploadDir = "", this.cTime = 0, this.uploadFile = o.debounce(this.uploadFileDebounce, 200, {
                leading: !0,
                trailing: !0
            }), this.filePath = e, this.uploadDir = t;
        }
        init() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__fmLog.info("[fm]PassBack init: " + this.filePath), this.watchFileChange(), 
                this.cTime = yield this.getCTime();
            });
        }
        getFilePath() {
            return this.filePath;
        }
        watchFileChange() {
            const e = s.default.watch(this.filePath, {
                awaitWriteFinish: {
                    stabilityThreshold: 500,
                    pollInterval: 100
                }
            });
            e.on("change", () => r.__awaiter(this, void 0, void 0, function*() {
                const e = yield this.getCTime();
                global.__fmLog.info(`[fm]PassBack watchFileChange change: ${this.filePath}, cTime:${e}, now: ${Date.now()}`), 
                e > Date.now() || e !== this.cTime && (global.__fmLog.info(`[fm]PassBack watchFileChange cTime change: ${e} ${this.cTime}`), 
                this.cTime = e, this.uploadFile());
            })), e.on("unlink", () => {
                global.__fmLog.info("[fm]PassBack watchFileChange unlink: " + this.filePath), e.unwatch(this.filePath), 
                i.default.delete(this.filePath);
            });
        }
        uploadFileDebounce() {
            var e;
            global.__fmLog.info(`[fm]PassBack uploadFileDebounce start: ${this.filePath} ${this.uploadDir}`), 
            null === (e = global.__mainWindow) || void 0 === e || e.webContents.send(a.FM_MAIN_EVENT_ENUM.PASS_BACK, {
                uploadDir: this.uploadDir,
                filePath: this.filePath
            });
        }
        getCTime() {
            return new Promise(e => {
                l.default.stat(this.filePath, (t, n) => {
                    e(!t && n ? n.mtime.getTime() : Date.now());
                });
            });
        }
    };
}
