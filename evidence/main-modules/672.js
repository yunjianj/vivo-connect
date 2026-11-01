// analysis/pretty/main.js:60670; webpack module 672
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GitHubProvider = t.BaseGitHubProvider = void 0, t.computeReleaseNotes = d;
    const r = n(36), i = n(665), o = n(15), a = n(106), s = n(54), l = /\/tag\/([^/]+)$/;
    class c extends s.Provider {
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.options = e, this.baseUrl = (0, a.newBaseUrl)((0, r.githubUrl)(e, t));
            const i = "github.com" === t ? "api.github.com" : t;
            this.baseApiUrl = (0, a.newBaseUrl)((0, r.githubUrl)(e, i));
        }
        computeGithubBasePath(e) {
            const t = this.options.host;
            return t && ![ "github.com", "api.github.com" ].includes(t) ? "/api/v3" + e : e;
        }
    }
    t.BaseGitHubProvider = c;
    function u(e) {
        const t = e.elementValueOrEmpty("content");
        return "No content." === t ? "" : t;
    }
    function d(e, t, n, r) {
        if (!t) return u(r);
        const o = [];
        for (const t of n.getElements("entry")) {
            const n = /\/tag\/v?([^/]+)$/.exec(t.element("link").attribute("href"))[1];
            i.valid(n) && i.lt(e, n) && o.push({
                version: n,
                note: u(t)
            });
        }
        return o.sort((e, t) => i.rcompare(e.version, t.version));
    }
    t.GitHubProvider = class extends c {
        constructor(e, t, n) {
            super(e, "github.com", n), this.options = e, this.updater = t;
        }
        get channel() {
            const e = this.updater.channel || this.options.channel;
            return null == e ? this.getDefaultChannelName() : this.getCustomChannelName(e);
        }
        async getLatestVersion() {
            var e, t, n, o, c;
            const u = new r.CancellationToken, h = await this.httpRequest((0, a.newUrlFromBase)(this.basePath + ".atom", this.baseUrl), {
                accept: "application/xml, application/atom+xml, text/xml, */*"
            }, u), p = (0, r.parseXml)(h);
            let f, _ = p.element("entry", !1, "No published versions on GitHub"), m = null;
            try {
                if (this.updater.allowPrerelease) {
                    const r = (null === (e = this.updater) || void 0 === e ? void 0 : e.channel) || (null === (t = i.prerelease(this.updater.currentVersion)) || void 0 === t ? void 0 : t[0]) || null;
                    if (null === r) m = l.exec(_.element("link").attribute("href"))[1]; else for (const e of p.getElements("entry")) {
                        const t = l.exec(e.element("link").attribute("href"));
                        if (null === t) continue;
                        const o = t[1], a = (null === (n = i.prerelease(o)) || void 0 === n ? void 0 : n[0]) || null, s = !r || [ "alpha", "beta" ].includes(r), c = null !== a && ![ "alpha", "beta" ].includes(String(a)), u = "beta" === r && "alpha" === a;
                        if (s && !c && !u) {
                            m = o;
                            break;
                        }
                        if (a && a === r) {
                            m = o;
                            break;
                        }
                    }
                } else {
                    m = await this.getLatestTagName(u);
                    for (const e of p.getElements("entry")) if (l.exec(e.element("link").attribute("href"))[1] === m) {
                        _ = e;
                        break;
                    }
                }
            } catch (e) {
                throw (0, r.newError)(`Cannot parse releases feed: ${e.stack || e.message},\nXML:\n${h}`, "ERR_UPDATER_INVALID_RELEASE_FEED");
            }
            if (null == m) throw (0, r.newError)("No published versions on GitHub", "ERR_UPDATER_NO_PUBLISHED_VERSIONS");
            let g = "", v = "";
            const y = async e => {
                g = (0, a.getChannelFilename)(e), v = (0, a.newUrlFromBase)(this.getBaseDownloadPath(String(m), g), this.baseUrl);
                const t = this.createRequestOptions(v);
                try {
                    return await this.executor.request(t, u);
                } catch (e) {
                    if (e instanceof r.HttpError && 404 === e.statusCode) throw (0, r.newError)(`Cannot find ${g} in the latest release artifacts (${v}): ${e.stack || e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                    throw e;
                }
            };
            try {
                let e = this.channel;
                this.updater.allowPrerelease && (null === (o = i.prerelease(m)) || void 0 === o ? void 0 : o[0]) && (e = this.getCustomChannelName(String(null === (c = i.prerelease(m)) || void 0 === c ? void 0 : c[0]))), 
                f = await y(e);
            } catch (e) {
                if (!this.updater.allowPrerelease) throw e;
                f = await y(this.getDefaultChannelName());
            }
            const E = (0, s.parseUpdateInfo)(f, g, v);
            return null == E.releaseName && (E.releaseName = _.elementValueOrEmpty("title")), 
            null == E.releaseNotes && (E.releaseNotes = d(this.updater.currentVersion, this.updater.fullChangelog, p, _)), 
            {
                tag: m,
                ...E
            };
        }
        async getLatestTagName(e) {
            const t = this.options, n = null == t.host || "github.com" === t.host ? (0, a.newUrlFromBase)(this.basePath + "/latest", this.baseUrl) : new o.URL(this.computeGithubBasePath(`/repos/${t.owner}/${t.repo}/releases`) + "/latest", this.baseApiUrl);
            try {
                const t = await this.httpRequest(n, {
                    Accept: "application/json"
                }, e);
                if (null == t) return null;
                return JSON.parse(t).tag_name;
            } catch (e) {
                throw (0, r.newError)(`Unable to find latest version on GitHub (${n}), please ensure a production release exists: ${e.stack || e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
            }
        }
        get basePath() {
            return `/${this.options.owner}/${this.options.repo}/releases`;
        }
        resolveFiles(e) {
            return (0, s.resolveFiles)(e, this.baseUrl, t => this.getBaseDownloadPath(e.tag, t.replace(/ /g, "-")));
        }
        getBaseDownloadPath(e, t) {
            return `${this.basePath}/download/${e}/${t}`;
        }
    };
}
