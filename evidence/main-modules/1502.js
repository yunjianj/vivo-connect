// analysis/pretty/main.js:112345; webpack module 1502
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(158)), o = r.__importDefault(n(1)), a = r.__importDefault(n(4)), s = n(2), l = n(1503);
    class c {
        constructor() {
            this.cacheIconSuffix = ".png", this.cacheRootFolder = s.app.getPath("temp"), this.cacheFolder = "vivofilesearch";
        }
        static getInstance() {
            return this.instance || (this.instance = new this);
        }
        get cachePath() {
            let e = o.default.join(this.cacheRootFolder, this.cacheFolder);
            return a.default.existsSync(e) || a.default.mkdirSync(e), e;
        }
        generateCacheKey(e) {
            return e;
        }
        getThumb(e) {
            const {fileName: t, saveFileName: n = ""} = e, s = n + this.cacheIconSuffix;
            return new Promise(t => r.__awaiter(this, void 0, void 0, function*() {
                let n = o.default.join(this.cachePath, s);
                console.log("getThumb", n, a.default.existsSync(n)), a.default.existsSync(n) ? t(this.getLocalThumb(s)) : i.default.getInstance().getThumbnail(e).then(e => {
                    t("localapp://" + e);
                });
            }));
        }
        getLocalThumb(e) {
            const t = o.default.join(this.cachePath, e);
            return "localapp://" + encodeURI(t);
        }
        addThumb(e, t) {
            c.thumbMap.set(e, t);
        }
        cleanCache() {
            c.thumbMap.clear();
        }
        downloadThumbToTemp(e, t) {
            return new Promise(n => {
                const r = e.split(";base64,").pop(), i = Buffer.from(r, "base64"), s = o.default.join(this.cachePath, t);
                a.default.writeFile(s, i, e => {
                    e ? (console.error(e), n(!1)) : (console.log("图片已成功保存到临时目录:" + s), n(!0));
                });
            });
        }
    }
    t.default = c, c.thumbMap = new Map;
    l.queue((e, t) => {
        global.__log.info("进入下载队列，最多同时下载5张缩略图: " + e.fileName), c.getInstance().downloadThumbToTemp(e.base64Image, e.fileName).then(() => {
            t();
        });
    }, 5);
}
