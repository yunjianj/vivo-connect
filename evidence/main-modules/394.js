// analysis/pretty/main.js:42045; webpack module 394
function(e, t, n) {
    "use strict";
    const {normalizeIPv6: r, removeDotSegments: i, recomposeAuthority: o, normalizeComponentEncoding: a, isIPv4: s, nonSimpleDomain: l} = n(395), {SCHEMES: c, getSchemeHandler: u} = n(873);
    function d(e, t, n, r) {
        const o = {};
        return r || (e = f(h(e, n), n), t = f(h(t, n), n)), !(n = n || {}).tolerant && t.scheme ? (o.scheme = t.scheme, 
        o.userinfo = t.userinfo, o.host = t.host, o.port = t.port, o.path = i(t.path || ""), 
        o.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (o.userinfo = t.userinfo, 
        o.host = t.host, o.port = t.port, o.path = i(t.path || ""), o.query = t.query) : (t.path ? ("/" === t.path[0] ? o.path = i(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? o.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : o.path = t.path : o.path = "/" + t.path, 
        o.path = i(o.path)), o.query = t.query) : (o.path = e.path, void 0 !== t.query ? o.query = t.query : o.query = e.query), 
        o.userinfo = e.userinfo, o.host = e.host, o.port = e.port), o.scheme = e.scheme), 
        o.fragment = t.fragment, o;
    }
    function h(e, t) {
        const n = {
            host: e.host,
            scheme: e.scheme,
            userinfo: e.userinfo,
            port: e.port,
            path: e.path,
            query: e.query,
            nid: e.nid,
            nss: e.nss,
            uuid: e.uuid,
            fragment: e.fragment,
            reference: e.reference,
            resourceName: e.resourceName,
            secure: e.secure,
            error: ""
        }, r = Object.assign({}, t), a = [], s = u(r.scheme || n.scheme);
        s && s.serialize && s.serialize(n, r), void 0 !== n.path && (r.skipEscape ? n.path = unescape(n.path) : (n.path = escape(n.path), 
        void 0 !== n.scheme && (n.path = n.path.split("%3A").join(":")))), "suffix" !== r.reference && n.scheme && a.push(n.scheme, ":");
        const l = o(n);
        if (void 0 !== l && ("suffix" !== r.reference && a.push("//"), a.push(l), n.path && "/" !== n.path[0] && a.push("/")), 
        void 0 !== n.path) {
            let e = n.path;
            r.absolutePath || s && s.absolutePath || (e = i(e)), void 0 === l && "/" === e[0] && "/" === e[1] && (e = "/%2F" + e.slice(2)), 
            a.push(e);
        }
        return void 0 !== n.query && a.push("?", n.query), void 0 !== n.fragment && a.push("#", n.fragment), 
        a.join("");
    }
    const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function f(e, t) {
        const n = Object.assign({}, t), i = {
            scheme: void 0,
            userinfo: void 0,
            host: "",
            port: void 0,
            path: "",
            query: void 0,
            fragment: void 0
        };
        let o = !1;
        "suffix" === n.reference && (e = n.scheme ? n.scheme + ":" + e : "//" + e);
        const a = e.match(p);
        if (a) {
            if (i.scheme = a[1], i.userinfo = a[3], i.host = a[4], i.port = parseInt(a[5], 10), 
            i.path = a[6] || "", i.query = a[7], i.fragment = a[8], isNaN(i.port) && (i.port = a[5]), 
            i.host) {
                if (!1 === s(i.host)) {
                    const e = r(i.host);
                    i.host = e.host.toLowerCase(), o = e.isIPV6;
                } else o = !0;
            }
            void 0 !== i.scheme || void 0 !== i.userinfo || void 0 !== i.host || void 0 !== i.port || void 0 !== i.query || i.path ? void 0 === i.scheme ? i.reference = "relative" : void 0 === i.fragment ? i.reference = "absolute" : i.reference = "uri" : i.reference = "same-document", 
            n.reference && "suffix" !== n.reference && n.reference !== i.reference && (i.error = i.error || "URI is not a " + n.reference + " reference.");
            const t = u(n.scheme || i.scheme);
            if (!(n.unicodeSupport || t && t.unicodeSupport) && i.host && (n.domainHost || t && t.domainHost) && !1 === o && l(i.host)) try {
                i.host = URL.domainToASCII(i.host.toLowerCase());
            } catch (e) {
                i.error = i.error || "Host's domain name can not be converted to ASCII: " + e;
            }
            (!t || t && !t.skipNormalize) && (-1 !== e.indexOf("%") && (void 0 !== i.scheme && (i.scheme = unescape(i.scheme)), 
            void 0 !== i.host && (i.host = unescape(i.host))), i.path && (i.path = escape(unescape(i.path))), 
            i.fragment && (i.fragment = encodeURI(decodeURIComponent(i.fragment)))), t && t.parse && t.parse(i, n);
        } else i.error = i.error || "URI can not be parsed.";
        return i;
    }
    const _ = {
        SCHEMES: c,
        normalize: function(e, t) {
            return "string" == typeof e ? e = h(f(e, t), t) : "object" == typeof e && (e = f(h(e, t), t)), 
            e;
        },
        resolve: function(e, t, n) {
            const r = n ? Object.assign({
                scheme: "null"
            }, n) : {
                scheme: "null"
            }, i = d(f(e, r), f(t, r), r, !0);
            return r.skipEscape = !0, h(i, r);
        },
        resolveComponent: d,
        equal: function(e, t, n) {
            return "string" == typeof e ? (e = unescape(e), e = h(a(f(e, n), !0), {
                ...n,
                skipEscape: !0
            })) : "object" == typeof e && (e = h(a(e, !0), {
                ...n,
                skipEscape: !0
            })), "string" == typeof t ? (t = unescape(t), t = h(a(f(t, n), !0), {
                ...n,
                skipEscape: !0
            })) : "object" == typeof t && (t = h(a(t, !0), {
                ...n,
                skipEscape: !0
            })), e.toLowerCase() === t.toLowerCase();
        },
        serialize: h,
        parse: f
    };
    e.exports = _, e.exports.default = _, e.exports.fastUri = _;
}
