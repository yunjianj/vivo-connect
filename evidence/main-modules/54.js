// analysis/pretty/main.js:10170; webpack module 54
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Provider = void 0, t.findFile = function(e, t, n) {
        var i;
        if (0 === e.length) throw (0, r.newError)("No files provided", "ERR_UPDATER_NO_FILES_PROVIDED");
        const o = e.filter(e => e.url.pathname.toLowerCase().endsWith("." + t.toLowerCase())), a = null !== (i = o.find(e => [ e.url.pathname, e.info.url ].some(e => e.includes(process.arch)))) && void 0 !== i ? i : o.shift();
        return a || (null == n ? e[0] : e.find(e => !n.some(t => e.url.pathname.toLowerCase().endsWith("." + t.toLowerCase()))));
    }, t.parseUpdateInfo = function(e, t, n) {
        if (null == e) throw (0, r.newError)(`Cannot parse update info from ${t} in the latest release artifacts (${n}): rawData: null`, "ERR_UPDATER_INVALID_UPDATE_INFO");
        let o;
        try {
            o = (0, i.load)(e);
        } catch (i) {
            throw (0, r.newError)(`Cannot parse update info from ${t} in the latest release artifacts (${n}): ${i.stack || i.message}, rawData: ${e}`, "ERR_UPDATER_INVALID_UPDATE_INFO");
        }
        return o;
    }, t.getFileList = l, t.resolveFiles = function(e, t, n = e => e) {
        const i = l(e).map(e => {
            if (null == e.sha2 && null == e.sha512) throw (0, r.newError)("Update info doesn't contain nor sha256 neither sha512 checksum: " + (0, 
            r.safeStringifyJson)(e), "ERR_UPDATER_NO_CHECKSUM");
            return {
                url: (0, a.newUrlFromBase)(n(e.url), t),
                info: e
            };
        }), o = e.packages, s = null == o ? null : o[process.arch] || o.ia32;
        null != s && (i[0].packageInfo = {
            ...s,
            path: (0, a.newUrlFromBase)(n(s.path), t).href
        });
        return i;
    };
    const r = n(36), i = n(326), o = n(15), a = n(106), s = n(671);
    function l(e) {
        const t = e.files;
        if (null != t && t.length > 0) return t;
        if (null != e.path) return [ {
            url: e.path,
            sha2: e.sha2,
            sha512: e.sha512
        } ];
        throw (0, r.newError)("No files provided: " + (0, r.safeStringifyJson)(e), "ERR_UPDATER_NO_FILES_PROVIDED");
    }
    t.Provider = class {
        constructor(e) {
            this.runtimeOptions = e, this.requestHeaders = null, this.executor = e.executor;
        }
        getBlockMapFiles(e, t, n, r = null) {
            const i = (0, a.newUrlFromBase)(e.pathname + ".blockmap", e);
            return [ (0, a.newUrlFromBase)(e.pathname.replace(new RegExp(s(n), "g"), t) + ".blockmap", r ? new o.URL(r) : e), i ];
        }
        get isUseMultipleRangeRequest() {
            return !1 !== this.runtimeOptions.isUseMultipleRangeRequest;
        }
        getChannelFilePrefix() {
            if ("linux" === this.runtimeOptions.platform) {
                const e = process.env.TEST_UPDATER_ARCH || process.arch;
                return "-linux" + ("x64" === e ? "" : "-" + e);
            }
            return "darwin" === this.runtimeOptions.platform ? "-mac" : "";
        }
        getDefaultChannelName() {
            return this.getCustomChannelName("latest");
        }
        getCustomChannelName(e) {
            return `${e}${this.getChannelFilePrefix()}`;
        }
        get fileExtraDownloadHeaders() {
            return null;
        }
        setRequestHeaders(e) {
            this.requestHeaders = e;
        }
        httpRequest(e, t, n) {
            return this.executor.request(this.createRequestOptions(e, t), n);
        }
        createRequestOptions(e, t) {
            const n = {};
            return null == this.requestHeaders ? null != t && (n.headers = t) : n.headers = null == t ? this.requestHeaders : {
                ...this.requestHeaders,
                ...t
            }, (0, r.configureRequestUrl)(e, n), n;
        }
    };
}
