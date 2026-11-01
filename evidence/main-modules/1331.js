// analysis/pretty/main.js:100746; webpack module 1331
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.retry = async function e(t, n) {
        var i;
        const {retries: o, interval: a, backoff: s = 0, attempt: l = 0, shouldRetry: c, cancellationToken: u = new r.CancellationToken} = n;
        try {
            return await t();
        } catch (r) {
            if (await Promise.resolve(null === (i = null == c ? void 0 : c(r)) || void 0 === i || i) && o > 0 && !u.cancelled) return await new Promise(e => setTimeout(e, a + s * l)), 
            await e(t, {
                ...n,
                retries: o - 1,
                attempt: l + 1
            });
            throw r;
        }
    };
    const r = n(325);
}
