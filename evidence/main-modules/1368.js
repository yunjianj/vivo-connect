// analysis/pretty/main.js:102127; webpack module 1368
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.KeygenProvider = void 0;
    const r = n(36), i = n(106), o = n(54);
    class a extends o.Provider {
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.configuration = e, this.updater = t, this.defaultHostname = "api.keygen.sh";
            const r = this.configuration.host || this.defaultHostname;
            this.baseUrl = (0, i.newBaseUrl)(`https://${r}/v1/accounts/${this.configuration.account}/artifacts?product=${this.configuration.product}`);
        }
        get channel() {
            return this.updater.channel || this.configuration.channel || "stable";
        }
        async getLatestVersion() {
            const e = new r.CancellationToken, t = (0, i.getChannelFilename)(this.getCustomChannelName(this.channel)), n = (0, 
            i.newUrlFromBase)(t, this.baseUrl, this.updater.isAddNoCacheQuery);
            try {
                const r = await this.httpRequest(n, {
                    Accept: "application/vnd.api+json",
                    "Keygen-Version": "1.1"
                }, e);
                return (0, o.parseUpdateInfo)(r, t, n);
            } catch (e) {
                throw (0, r.newError)(`Unable to find latest version on ${this.toString()}, please ensure release exists: ${e.stack || e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
            }
        }
        resolveFiles(e) {
            return (0, o.resolveFiles)(e, this.baseUrl);
        }
        toString() {
            const {account: e, product: t, platform: n} = this.configuration;
            return `Keygen (account: ${e}, product: ${t}, platform: ${n}, channel: ${this.channel})`;
        }
    }
    t.KeygenProvider = a;
}
