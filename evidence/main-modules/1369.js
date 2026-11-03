// analysis/pretty/main.js:102167; webpack module 1369
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PrivateGitHubProvider = void 0;
    const r = n(36), i = n(326), o = n(1), a = n(15), s = n(106), l = n(672), c = n(54);
    class u extends l.BaseGitHubProvider {
        constructor(e, t, n, r) {
            super(e, "api.github.com", r), this.updater = t, this.token = n;
        }
        createRequestOptions(e, t) {
            const n = super.createRequestOptions(e, t);
            return n.redirect = "manual", n;
        }
        async getLatestVersion() {
            const e = new r.CancellationToken, t = (0, s.getChannelFilename)(this.getDefaultChannelName()), n = await this.getLatestVersionInfo(e), o = n.assets.find(e => e.name === t);
            if (null == o) throw (0, r.newError)(`Cannot find ${t} in the release ${n.html_url || n.name}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
            const l = new a.URL(o.url);
            let c;
            try {
                c = (0, i.load)(await this.httpRequest(l, this.configureHeaders("application/octet-stream"), e));
            } catch (e) {
                if (e instanceof r.HttpError && 404 === e.statusCode) throw (0, r.newError)(`Cannot find ${t} in the latest release artifacts (${l}): ${e.stack || e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                throw e;
            }
            return c.assets = n.assets, c;
        }
        get fileExtraDownloadHeaders() {
            return this.configureHeaders("application/octet-stream");
        }
        configureHeaders(e) {
            return {
                accept: e,
                authorization: "token " + this.token
            };
        }
        async getLatestVersionInfo(e) {
            const t = this.updater.allowPrerelease;
            let n = this.basePath;
            t || (n += "/latest");
            const i = (0, s.newUrlFromBase)(n, this.baseUrl);
            try {
                const n = JSON.parse(await this.httpRequest(i, this.configureHeaders("application/vnd.github.v3+json"), e));
                return t ? n.find(e => e.prerelease) || n[0] : n;
            } catch (e) {
                throw (0, r.newError)(`Unable to find latest version on GitHub (${i}), please ensure a production release exists: ${e.stack || e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
            }
        }
        get basePath() {
            return this.computeGithubBasePath(`/repos/${this.options.owner}/${this.options.repo}/releases`);
        }
        resolveFiles(e) {
            return (0, c.getFileList)(e).map(t => {
                const n = o.posix.basename(t.url).replace(/ /g, "-"), i = e.assets.find(e => null != e && e.name === n);
                if (null == i) throw (0, r.newError)(`Cannot find asset "${n}" in: ${JSON.stringify(e.assets, null, 2)}`, "ERR_UPDATER_ASSET_NOT_FOUND");
                return {
                    url: new a.URL(i.url),
                    info: t
                };
            });
        }
    }
    t.PrivateGitHubProvider = u;
}
