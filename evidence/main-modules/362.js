// analysis/pretty/main.js:39872; webpack module 362
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAuthInfo = t.checkDeviceISOnLine = t.sortObjectAndConvertToString = t.setReportData = t.isNullOrUndefined = t.getPlatformSlash = t.getFilenameAndExtension = t.generateNonce = void 0;
    const r = n(0), i = n(11), o = r.__importDefault(n(6)), a = n(15);
    t.generateNonce = function() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789";
        let t = "";
        for (let n = 0; n < 8; n++) {
            const n = Math.floor(Math.random() * e.length);
            t += e.charAt(n);
        }
        return t;
    }, t.getFilenameAndExtension = function(e) {
        try {
            const t = new a.URL(e);
            let n = t.pathname.split("/").pop() || "";
            if (!n.includes(".")) throw new Error("No file extension found");
            const r = n.slice(n.lastIndexOf(".") + 1), i = n.slice(0, n.lastIndexOf("."));
            if (!i || !r) throw new Error("Invalid file name or extension");
            return {
                filename: i,
                fileExtension: r
            };
        } catch (e) {
            return console.error(e.message), {
                filename: "",
                fileExtension: ""
            };
        }
    }, t.getPlatformSlash = function() {
        return "win32" === process.platform ? "\\" : "/";
    }, t.isNullOrUndefined = function(e) {
        return null == e;
    }, t.setReportData = function(e, t, n, r) {
        let o = global.__mainWindow;
        try {
            null == o || o.webContents.send(i.APP_MESSAGE_ENUM.APP_AISEARCH_WS_ERROR, {
                errcode: e,
                errmsg: t,
                request_id: n,
                session_id: r
            });
        } catch (e) {
            global.__fm__asmLog.info("[aiSearch]: setReportData error " + e);
        }
    }, t.sortObjectAndConvertToString = function(e = {}) {
        return Object.keys(e).sort().map(function(t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
        }).join("&");
    }, t.checkDeviceISOnLine = function() {
        var e;
        return r.__awaiter(this, void 0, void 0, function*() {
            try {
                const t = null === (e = global.__mainWindow) || void 0 === e ? void 0 : e.webContents;
                if (t) {
                    return yield t.executeJavaScript("navigator.onLine");
                }
                return !0;
            } catch (e) {
                return global.__fm__asmLog.info("[aiSearch]: 判断网络连接异常, " + e), !0;
            }
        });
    }, t.getAuthInfo = function() {
        let e = o.default.getItem("userInfo") || {};
        return {
            openid: e.vivo_account_cookie_iqoo_openid,
            token: e.vivo_account_cookie_iqoo_vivotoken
        };
    };
}
