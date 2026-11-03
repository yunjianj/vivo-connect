// analysis/pretty/main.js:77606; webpack module 873
function(e, t, n) {
    "use strict";
    const {isUUID: r} = n(395), i = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, o = [ "http", "https", "ws", "wss", "urn", "urn:uuid" ];
    function a(e) {
        return !0 === e.secure || !1 !== e.secure && (!!e.scheme && !(3 !== e.scheme.length || "w" !== e.scheme[0] && "W" !== e.scheme[0] || "s" !== e.scheme[1] && "S" !== e.scheme[1] || "s" !== e.scheme[2] && "S" !== e.scheme[2]));
    }
    function s(e) {
        return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
    }
    function l(e) {
        const t = "https" === String(e.scheme).toLowerCase();
        return e.port !== (t ? 443 : 80) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), 
        e;
    }
    const c = {
        scheme: "http",
        domainHost: !0,
        parse: s,
        serialize: l
    }, u = {
        scheme: "ws",
        domainHost: !0,
        parse: function(e) {
            return e.secure = a(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), 
            e.path = void 0, e.query = void 0, e;
        },
        serialize: function(e) {
            if (e.port !== (a(e) ? 443 : 80) && "" !== e.port || (e.port = void 0), "boolean" == typeof e.secure && (e.scheme = e.secure ? "wss" : "ws", 
            e.secure = void 0), e.resourceName) {
                const [t, n] = e.resourceName.split("?");
                e.path = t && "/" !== t ? t : void 0, e.query = n, e.resourceName = void 0;
            }
            return e.fragment = void 0, e;
        }
    }, d = {
        http: c,
        https: {
            scheme: "https",
            domainHost: c.domainHost,
            parse: s,
            serialize: l
        },
        ws: u,
        wss: {
            scheme: "wss",
            domainHost: u.domainHost,
            parse: u.parse,
            serialize: u.serialize
        },
        urn: {
            scheme: "urn",
            parse: function(e, t) {
                if (!e.path) return e.error = "URN can not be parsed", e;
                const n = e.path.match(i);
                if (n) {
                    const r = t.scheme || e.scheme || "urn";
                    e.nid = n[1].toLowerCase(), e.nss = n[2];
                    const i = h(`${r}:${t.nid || e.nid}`);
                    e.path = void 0, i && (e = i.parse(e, t));
                } else e.error = e.error || "URN can not be parsed.";
                return e;
            },
            serialize: function(e, t) {
                if (void 0 === e.nid) throw new Error("URN without nid cannot be serialized");
                const n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), i = h(`${n}:${t.nid || r}`);
                i && (e = i.serialize(e, t));
                const o = e, a = e.nss;
                return o.path = `${r || t.nid}:${a}`, t.skipEscape = !0, o;
            },
            skipNormalize: !0
        },
        "urn:uuid": {
            scheme: "urn:uuid",
            parse: function(e, t) {
                const n = e;
                return n.uuid = n.nss, n.nss = void 0, t.tolerant || n.uuid && r(n.uuid) || (n.error = n.error || "UUID is not valid."), 
                n;
            },
            serialize: function(e) {
                const t = e;
                return t.nss = (e.uuid || "").toLowerCase(), t;
            },
            skipNormalize: !0
        }
    };
    function h(e) {
        return e && (d[e] || d[e.toLowerCase()]) || void 0;
    }
    Object.setPrototypeOf(d, null), e.exports = {
        wsIsSecure: a,
        SCHEMES: d,
        isValidSchemeName: function(e) {
            return -1 !== o.indexOf(e);
        },
        getSchemeHandler: h
    };
}
