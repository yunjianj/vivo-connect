// analysis/pretty/main.js:101833; webpack module 1364
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ElectronHttpExecutor = t.NET_SESSION_NAME = void 0, t.getNetSession = i;
    const r = n(36);
    function i() {
        return n(2).session.fromPartition(t.NET_SESSION_NAME, {
            cache: !1
        });
    }
    t.NET_SESSION_NAME = "electron-updater";
    class o extends r.HttpExecutor {
        constructor(e) {
            super(), this.proxyLoginCallback = e, this.cachedSession = null;
        }
        async download(e, t, n) {
            return await n.cancellationToken.createPromise((i, o, a) => {
                const s = {
                    headers: n.headers || void 0,
                    redirect: "manual"
                };
                (0, r.configureRequestUrl)(e, s), (0, r.configureRequestOptions)(s), this.doDownload(s, {
                    destination: t,
                    options: n,
                    onCancel: a,
                    callback: e => {
                        null == e ? i(t) : o(e);
                    },
                    responseHandler: null
                }, 0);
            });
        }
        createRequest(e, t) {
            e.headers && e.headers.Host && (e.host = e.headers.Host, delete e.headers.Host), 
            null == this.cachedSession && (this.cachedSession = i());
            const r = n(2).net.request({
                ...e,
                session: this.cachedSession
            });
            return r.on("response", t), null != this.proxyLoginCallback && r.on("login", this.proxyLoginCallback), 
            r;
        }
        addRedirectHandlers(e, t, n, i, o) {
            e.on("redirect", (a, s, l) => {
                e.abort(), i > this.maxRedirects ? n(this.createMaxRedirectError()) : o(r.HttpExecutor.prepareRedirectUrlOptions(l, t));
            });
        }
    }
    t.ElectronHttpExecutor = o;
}
