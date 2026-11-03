// analysis/pretty/main.js:60616; webpack module 670
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GenericProvider = void 0;
    const r = n(36), i = n(106), o = n(54);
    class a extends o.Provider {
        constructor(e, t, n) {
            super(n), this.configuration = e, this.updater = t, this.baseUrl = (0, i.newBaseUrl)(this.configuration.url);
        }
        get channel() {
            const e = this.updater.channel || this.configuration.channel;
            return null == e ? this.getDefaultChannelName() : this.getCustomChannelName(e);
        }
        async getLatestVersion() {
            const e = (0, i.getChannelFilename)(this.channel), t = (0, i.newUrlFromBase)(e, this.baseUrl, this.updater.isAddNoCacheQuery);
            for (let n = 0; ;n++) try {
                return (0, o.parseUpdateInfo)(await this.httpRequest(t), e, t);
            } catch (t) {
                if (t instanceof r.HttpError && 404 === t.statusCode) throw (0, r.newError)(`Cannot find channel "${e}" update info: ${t.stack || t.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                if ("ECONNREFUSED" === t.code && n < 3) {
                    await new Promise((e, t) => {
                        try {
                            setTimeout(e, 1e3 * n);
                        } catch (e) {
                            t(e);
                        }
                    });
                    continue;
                }
                throw t;
            }
        }
        resolveFiles(e) {
            return (0, o.resolveFiles)(e, this.baseUrl);
        }
    }
    t.GenericProvider = a;
}
