// analysis/pretty/main.js:66412; webpack module 737
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.downloadImageWithoutWatermark = t.addImageWatermark = t.downloadImage = t.getExtensionFromMime = t.cacheUrlGetFile = t.cacheUrlToFile = t.getAuthInfo = t.downloadFileWithAxios = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = r.__importDefault(n(55)), s = r.__importDefault(n(1543)), l = n(167), c = r.__importDefault(n(80)), u = r.__importDefault(n(6)), d = r.__importDefault(n(43)), h = r.__importDefault(n(39)), p = n(2), f = n(15);
    function _() {
        let e = u.default.getItem("userInfo") || {};
        return {
            openid: e.vivo_account_cookie_iqoo_openid,
            token: e.vivo_account_cookie_iqoo_vivotoken
        };
    }
    t.downloadFileWithAxios = () => {
        let {openid: e} = _();
        const t = o.default.join(p.app.getPath("appData"), `pcsuite${l.getPlatformSlash()}storage_files`), n = o.default.join(t || p.app.getPath("userData"), "vtalk");
        let r = n;
        return i.default.existsSync(n) || i.default.mkdirSync(n), e && (r = o.default.join(n, e), 
        i.default.existsSync(r) || i.default.mkdirSync(r)), r;
    }, t.getAuthInfo = _, t.cacheUrlToFile = (e, n) => (global.__log.info("cacheUrlToFile: " + e), 
    new Promise((r, a) => {
        try {
            if (e) {
                (e.startsWith("https") ? d.default : h.default).get(e, {
                    headers: {
                        "User-Agent": "Node.js"
                    }
                }, n => {
                    if (200 !== n.statusCode) return void a("Failed to fetch the URL: " + e);
                    const s = t.downloadFileWithAxios() + "/" + (new Date).getTime() + ".jpg";
                    global.__log.info("cacheUrlToFile---newUrl: " + s);
                    const l = o.default.resolve(s), c = i.default.createWriteStream(l);
                    n.pipe(c), c.on("finish", () => {
                        c.close(), r("" + l);
                    }), c.on("error", e => {
                        a("Error saving file: " + e.message);
                    });
                }).on("error", e => {
                    a("Request error: " + e.message);
                });
            } else if (n) {
                const e = t.downloadFileWithAxios() + "/" + (new Date).getTime() + ".jpg", s = o.default.resolve(e), l = i.default.createWriteStream(s);
                l.write(n), l.end(), l.on("finish", () => {
                    l.close(), r("" + s);
                }), l.on("error", e => {
                    a("Error saving file: " + e.message);
                });
            }
        } catch (e) {
            global.__log.info("cacheUrlToFile2: " + e);
        }
    })), t.cacheUrlGetFile = e => {
        try {
            let t = e.startsWith("file://") ? f.fileURLToPath(new URL(e)) : e;
            return "win32" === process.platform && t.startsWith("/") && (t = t.slice(1)), global.__log.info("realPath: " + decodeURIComponent(t)), 
            i.default.readFileSync(decodeURIComponent(t));
        } catch (e) {
            return console.error("[readLocalImage] 读取失败:", e), null;
        }
    }, t.getExtensionFromMime = e => ({
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/gif": "gif",
        "image/bmp": "bmp",
        "image/webp": "webp",
        "image/svg+xml": "svg",
        "application/pdf": "pdf",
        "text/html": "html"
    }[e] || "bin"), t.downloadImage = (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
        const n = yield a.default({
            url: e,
            method: "GET",
            responseType: "stream"
        });
        return n.data.pipe(i.default.createWriteStream(t)), new Promise((e, t) => {
            n.data.on("end", () => {
                e();
            }), n.data.on("error", e => {
                t(e);
            });
        });
    }), t.addImageWatermark = (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
        try {
            const r = yield a.default.get(e, {
                responseType: "arraybuffer"
            }), i = yield s.default.read(r.data);
            let u = "";
            {
                const {app: e} = n(2);
                let t = e.getAppPath();
                if ("darwin" === process.platform) u = o.default.resolve(t + "/dist/electron/static/v-talk-print.png"); else {
                    "app.asar" == o.default.basename(t) && (t = o.default.dirname(e.getPath("exe")));
                    const n = l.getPlatformSlash();
                    let r = `${t}${n}resources${n}app.asar`;
                    u = o.default.resolve(r + "/dist/electron/static/v-talk-print.png");
                }
            }
            const d = yield s.default.read(u), h = .2, p = d.getWidth(), f = d.getHeight(), _ = i.getWidth() * h, m = _ * (f / p);
            return i.composite(d.resize(_, m), 10, i.getHeight() - m - 10, {
                mode: s.default.BLEND_SOURCE_OVER,
                opacityDest: .5,
                opacitySource: 1
            }), yield i.writeAsync(t), c.default.commonLog("[vtalk] 水印添加完成！：" + t), t;
        } catch (e) {
            throw c.default.commonLog("[vtalk] 添加水印时出错：：" + e), e;
        }
    }), t.downloadImageWithoutWatermark = (e, t) => r.__awaiter(void 0, void 0, void 0, function*() {
        const n = yield a.default.get(e, {
            responseType: "arraybuffer"
        }), r = yield s.default.read(n.data);
        yield r.writeAsync(t);
    });
}
