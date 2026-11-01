// analysis/pretty/main.js:101883; webpack module 1365
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isUrlProbablySupportMultiRangeRequests = u, t.createClient = function(e, t, n) {
        if ("string" == typeof e) throw (0, r.newError)("Please pass PublishConfiguration object", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
        const d = e.provider;
        switch (d) {
          case "github":
            {
                const r = e, i = (r.private ? process.env.GH_TOKEN || process.env.GITHUB_TOKEN : null) || r.token;
                return null == i ? new a.GitHubProvider(r, t, n) : new c.PrivateGitHubProvider(r, t, i, n);
            }

          case "bitbucket":
            return new i.BitbucketProvider(e, t, n);

          case "gitlab":
            return new s.GitLabProvider(e, t, n);

          case "keygen":
            return new l.KeygenProvider(e, t, n);

          case "s3":
          case "spaces":
            return new o.GenericProvider({
                provider: "generic",
                url: (0, r.getS3LikeProviderBaseUrl)(e),
                channel: e.channel || null
            }, t, {
                ...n,
                isUseMultipleRangeRequest: !1
            });

          case "generic":
            {
                const r = e;
                return new o.GenericProvider(r, t, {
                    ...n,
                    isUseMultipleRangeRequest: !1 !== r.useMultipleRangeRequest && u(r.url)
                });
            }

          case "custom":
            {
                const i = e, o = i.updateProvider;
                if (!o) throw (0, r.newError)("Custom provider not specified", "ERR_UPDATER_INVALID_PROVIDER_CONFIGURATION");
                return new o(i, t, n);
            }

          default:
            throw (0, r.newError)("Unsupported provider: " + d, "ERR_UPDATER_UNSUPPORTED_PROVIDER");
        }
    };
    const r = n(36), i = n(1366), o = n(670), a = n(672), s = n(1367), l = n(1368), c = n(1369);
    function u(e) {
        return !e.includes("s3.amazonaws.com");
    }
}
