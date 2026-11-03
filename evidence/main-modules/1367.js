// analysis/pretty/main.js:101978; webpack module 1367
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GitLabProvider = void 0;
    const r = n(36), i = n(15), o = n(671), a = n(106), s = n(54);
    class l extends s.Provider {
        normalizeFilename(e) {
            return e.replace(/ |_/g, "-");
        }
        constructor(e, t, n) {
            super({
                ...n,
                isUseMultipleRangeRequest: !1
            }), this.options = e, this.updater = t, this.cachedLatestVersion = null;
            const r = e.host || "gitlab.com";
            this.baseApiUrl = (0, a.newBaseUrl)(`https://${r}/api/v4`);
        }
        get channel() {
            const e = this.updater.channel || this.options.channel;
            return null == e ? this.getDefaultChannelName() : this.getCustomChannelName(e);
        }
        async getLatestVersion() {
            const e = new r.CancellationToken, t = (0, a.newUrlFromBase)(`projects/${this.options.projectId}/releases/permalink/latest`, this.baseApiUrl);
            let n;
            try {
                const i = {
                    "Content-Type": "application/json",
                    ...this.setAuthHeaderForToken(this.options.token || null)
                }, o = await this.httpRequest(t, i, e);
                if (!o) throw (0, r.newError)("No latest release found", "ERR_UPDATER_NO_PUBLISHED_VERSIONS");
                n = JSON.parse(o);
            } catch (e) {
                throw (0, r.newError)(`Unable to find latest release on GitLab (${t}): ${e.stack || e.message}`, "ERR_UPDATER_LATEST_VERSION_NOT_FOUND");
            }
            const o = n.tag_name;
            let l = null, c = "", u = null;
            const d = async t => {
                c = (0, a.getChannelFilename)(t);
                const o = n.assets.links.find(e => e.name === c);
                if (!o) throw (0, r.newError)(`Cannot find ${c} in the latest release assets`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                u = new i.URL(o.direct_asset_url);
                const s = this.options.token ? {
                    "PRIVATE-TOKEN": this.options.token
                } : void 0;
                try {
                    const t = await this.httpRequest(u, s, e);
                    if (!t) throw (0, r.newError)("Empty response from " + u, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                    return t;
                } catch (e) {
                    if (e instanceof r.HttpError && 404 === e.statusCode) throw (0, r.newError)(`Cannot find ${c} in the latest release artifacts (${u}): ${e.stack || e.message}`, "ERR_UPDATER_CHANNEL_FILE_NOT_FOUND");
                    throw e;
                }
            };
            try {
                l = await d(this.channel);
            } catch (e) {
                if (this.channel === this.getDefaultChannelName()) throw e;
                l = await d(this.getDefaultChannelName());
            }
            if (!l) throw (0, r.newError)("Unable to parse channel data from " + c, "ERR_UPDATER_INVALID_UPDATE_INFO");
            const h = (0, s.parseUpdateInfo)(l, c, u);
            null == h.releaseName && (h.releaseName = n.name), null == h.releaseNotes && (h.releaseNotes = n.description || null);
            const p = new Map;
            for (const e of n.assets.links) p.set(this.normalizeFilename(e.name), e.direct_asset_url);
            const f = {
                tag: o,
                assets: p,
                ...h
            };
            return this.cachedLatestVersion = f, f;
        }
        convertAssetsToMap(e) {
            const t = new Map;
            for (const n of e.links) t.set(this.normalizeFilename(n.name), n.direct_asset_url);
            return t;
        }
        findBlockMapInAssets(e, t) {
            const n = [ t + ".blockmap", this.normalizeFilename(t) + ".blockmap" ];
            for (const t of n) {
                const n = e.get(t);
                if (n) return new i.URL(n);
            }
            return null;
        }
        async fetchReleaseInfoByVersion(e) {
            const t = new r.CancellationToken, n = [ "v" + e, e ];
            for (const e of n) {
                const n = (0, a.newUrlFromBase)(`projects/${this.options.projectId}/releases/${encodeURIComponent(e)}`, this.baseApiUrl);
                try {
                    const e = {
                        "Content-Type": "application/json",
                        ...this.setAuthHeaderForToken(this.options.token || null)
                    }, r = await this.httpRequest(n, e, t);
                    if (r) {
                        return JSON.parse(r);
                    }
                } catch (t) {
                    if (t instanceof r.HttpError && 404 === t.statusCode) continue;
                    throw (0, r.newError)(`Unable to find release ${e} on GitLab (${n}): ${t.stack || t.message}`, "ERR_UPDATER_RELEASE_NOT_FOUND");
                }
            }
            throw (0, r.newError)(`Unable to find release with version ${e} (tried: ${n.join(", ")}) on GitLab`, "ERR_UPDATER_RELEASE_NOT_FOUND");
        }
        setAuthHeaderForToken(e) {
            const t = {};
            return null != e && (e.startsWith("Bearer") ? t.authorization = e : t["PRIVATE-TOKEN"] = e), 
            t;
        }
        async getVersionInfoForBlockMap(e) {
            if (this.cachedLatestVersion && this.cachedLatestVersion.version === e) return this.cachedLatestVersion.assets;
            const t = await this.fetchReleaseInfoByVersion(e);
            return t && t.assets ? this.convertAssetsToMap(t.assets) : null;
        }
        async findBlockMapUrlsFromAssets(e, t, n) {
            let r = null, i = null;
            const a = await this.getVersionInfoForBlockMap(t);
            a && (r = this.findBlockMapInAssets(a, n));
            const s = await this.getVersionInfoForBlockMap(e);
            if (s) {
                const r = n.replace(new RegExp(o(t), "g"), e);
                i = this.findBlockMapInAssets(s, r);
            }
            return [ i, r ];
        }
        async getBlockMapFiles(e, t, n, i = null) {
            if ("project_upload" === this.options.uploadTarget) {
                const i = e.pathname.split("/").pop() || "", [o, a] = await this.findBlockMapUrlsFromAssets(t, n, i);
                if (!a) throw (0, r.newError)(`Cannot find blockmap file for ${n} in GitLab assets`, "ERR_UPDATER_BLOCKMAP_FILE_NOT_FOUND");
                if (!o) throw (0, r.newError)(`Cannot find blockmap file for ${t} in GitLab assets`, "ERR_UPDATER_BLOCKMAP_FILE_NOT_FOUND");
                return [ o, a ];
            }
            return super.getBlockMapFiles(e, t, n, i);
        }
        resolveFiles(e) {
            return (0, s.getFileList)(e).map(t => {
                const n = [ t.url, this.normalizeFilename(t.url) ].find(t => e.assets.has(t)), o = n ? e.assets.get(n) : void 0;
                if (!o) throw (0, r.newError)(`Cannot find asset "${t.url}" in GitLab release assets. Available assets: ${Array.from(e.assets.keys()).join(", ")}`, "ERR_UPDATER_ASSET_NOT_FOUND");
                return {
                    url: new i.URL(o),
                    info: t
                };
            });
        }
        toString() {
            return `GitLab (projectId: ${this.options.projectId}, channel: ${this.channel})`;
        }
    }
    t.GitLabProvider = l;
}
