// analysis/pretty/main.js:94042; webpack module 1191
function(e, t, n) {
    var r = n(21), i = n(5), o = n(634), a = n(48).isError, s = o.sprintf;
    function l(e) {
        var t, n, i, o;
        if (r.object(e, "args"), r.bool(e.strict, "args.strict"), r.array(e.argv, "args.argv"), 
        0 === (t = e.argv).length) n = {}, i = []; else if (a(t[0])) n = {
            cause: t[0]
        }, i = t.slice(1); else if ("object" == typeof t[0]) {
            for (o in n = {}, t[0]) n[o] = t[0][o];
            i = t.slice(1);
        } else r.string(t[0], "first argument to VError, SError, or WError constructor must be a string, object, or Error"), 
        n = {}, i = t;
        return r.object(n), n.strict || e.strict || (i = i.map(function(e) {
            return null === e ? "null" : void 0 === e ? "undefined" : e;
        })), {
            options: n,
            shortmessage: 0 === i.length ? "" : s.apply(null, i)
        };
    }
    function c() {
        var e, t, n, i, o, s, u;
        if (e = Array.prototype.slice.call(arguments, 0), !(this instanceof c)) return t = Object.create(c.prototype), 
        c.apply(t, arguments), t;
        if ((n = l({
            argv: e,
            strict: !1
        })).options.name && (r.string(n.options.name, 'error\'s "name" must be a string'), 
        this.name = n.options.name), this.jse_shortmsg = n.shortmessage, s = n.shortmessage, 
        (i = n.options.cause) && (r.ok(a(i), "cause is not an Error"), this.jse_cause = i, 
        n.options.skipCauseMessage || (s += ": " + i.message)), this.jse_info = {}, n.options.info) for (u in n.options.info) this.jse_info[u] = n.options.info[u];
        return this.message = s, Error.call(this, s), Error.captureStackTrace && (o = n.options.constructorOpt || this.constructor, 
        Error.captureStackTrace(this, o)), this;
    }
    function u() {
        var e, t, n, r;
        return e = Array.prototype.slice.call(arguments, 0), this instanceof u ? (r = (n = l({
            argv: e,
            strict: !0
        })).options, c.call(this, r, "%s", n.shortmessage), this) : (t = Object.create(u.prototype), 
        u.apply(t, arguments), t);
    }
    function d(e) {
        r.array(e, "list of errors"), r.ok(e.length > 0, "must be at least one error"), 
        this.ase_errors = e, c.call(this, {
            cause: e[0]
        }, "first of %d error%s", e.length, 1 == e.length ? "" : "s");
    }
    function h() {
        var e, t, n, r;
        return e = Array.prototype.slice.call(arguments, 0), this instanceof h ? ((r = (n = l({
            argv: e,
            strict: !1
        })).options).skipCauseMessage = !0, c.call(this, r, "%s", n.shortmessage), this) : (t = Object.create(h.prototype), 
        h.apply(t, e), t);
    }
    e.exports = c, c.VError = c, c.SError = u, c.WError = h, c.MultiError = d, i.inherits(c, Error), 
    c.prototype.name = "VError", c.prototype.toString = function() {
        var e = this.hasOwnProperty("name") && this.name || this.constructor.name || this.constructor.prototype.name;
        return this.message && (e += ": " + this.message), e;
    }, c.prototype.cause = function() {
        var e = c.cause(this);
        return null === e ? void 0 : e;
    }, c.cause = function(e) {
        return r.ok(a(e), "err must be an Error"), a(e.jse_cause) ? e.jse_cause : null;
    }, c.info = function(e) {
        var t, n, i;
        if (r.ok(a(e), "err must be an Error"), t = null !== (n = c.cause(e)) ? c.info(n) : {}, 
        "object" == typeof e.jse_info && null !== e.jse_info) for (i in e.jse_info) t[i] = e.jse_info[i];
        return t;
    }, c.findCauseByName = function(e, t) {
        var n;
        for (r.ok(a(e), "err must be an Error"), r.string(t, "name"), r.ok(t.length > 0, "name cannot be empty"), 
        n = e; null !== n; n = c.cause(n)) if (r.ok(a(n)), n.name == t) return n;
        return null;
    }, c.hasCauseWithName = function(e, t) {
        return null !== c.findCauseByName(e, t);
    }, c.fullStack = function(e) {
        r.ok(a(e), "err must be an Error");
        var t = c.cause(e);
        return t ? e.stack + "\ncaused by: " + c.fullStack(t) : e.stack;
    }, c.errorFromList = function(e) {
        return r.arrayOfObject(e, "errors"), 0 === e.length ? null : (e.forEach(function(e) {
            r.ok(a(e));
        }), 1 == e.length ? e[0] : new d(e));
    }, c.errorForEach = function(e, t) {
        r.ok(a(e), "err must be an Error"), r.func(t, "func"), e instanceof d ? e.errors().forEach(function(e) {
            t(e);
        }) : t(e);
    }, i.inherits(u, c), i.inherits(d, c), d.prototype.name = "MultiError", d.prototype.errors = function() {
        return this.ase_errors.slice(0);
    }, i.inherits(h, c), h.prototype.name = "WError", h.prototype.toString = function() {
        var e = this.hasOwnProperty("name") && this.name || this.constructor.name || this.constructor.prototype.name;
        return this.message && (e += ": " + this.message), this.jse_cause && this.jse_cause.message && (e += "; caused by " + this.jse_cause.toString()), 
        e;
    }, h.prototype.cause = function(e) {
        return a(e) && (this.jse_cause = e), this.jse_cause;
    };
}
