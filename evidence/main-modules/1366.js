// analysis/pretty/main.js:101941; webpack module 1366
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BitbucketProvider = void 0;
    const r = n(36), i = n(106), o = n(54);
    class a extends o.Provider {
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.configuration = e, this.updater = t;
            const {owner: r, slug: o} = e;
            this.baseUrl = (0, i.newBaseUrl)(`https://api.bitbucket.org/2.0/repositories/${r}/${o}/downloads`);
        }
        get channel() {
            return this.updater.channel || this.configuration.channel || "latest";
        }
        async getLatestVersion() {
            const e = new r.CancellationToken, t = (0, i.getChannelFilename)(this.getCustomChannelName(this.channel)), n = (0, 
            i.newUrlFromBase)(t, this.baseUrl, this.updater.isAddNoCacheQuery);
            try {
                const r = await this.httpRequest(n, void 0, e);
                return (0, o.parseUpdateInfo)(r, t, n);
            } catch (e) {
                throw (0, r.newError)(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${e.stack || e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
            }
        }
        resolveFiles(e) {
            return (0, o.resolveFiles)(e, this.baseUrl);
        }
        toString() {
            const {owner: e, slug: t} = this.configuration;
            return `Bitbucket (owner: ${e}, slug: ${t}, channel: ${this.channel})`;
        }
    }
    t.BitbucketProvider = a;
}
