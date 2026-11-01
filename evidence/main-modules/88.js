// analysis/pretty/main.js:14948; webpack module 88
function(e, t, n) {
    "use strict";
    var r, i, o = n(102), a = o.freeze, s = n(24), l = s.inherits, c = s.notEnumerableProp;
    function u(e, t) {
        function n(r) {
            if (!(this instanceof n)) return new n(r);
            c(this, "message", "string" == typeof r ? r : t), c(this, "name", e), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
        }
        return l(n, Error), n;
    }
    var d = u("Warning", "warning"), h = u("CancellationError", "cancellation error"), p = u("TimeoutError", "timeout error"), f = u("AggregateError", "aggregate error");
    try {
        r = TypeError, i = RangeError;
    } catch (e) {
        r = u("TypeError", "type error"), i = u("RangeError", "range error");
    }
    for (var _ = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < _.length; ++m) "function" == typeof Array.prototype[_[m]] && (f.prototype[_[m]] = Array.prototype[_[m]]);
    o.defineProperty(f.prototype, "length", {
        value: 0,
        configurable: !1,
        writable: !0,
        enumerable: !0
    }), f.prototype.isOperational = !0;
    var g = 0;
    function v(e) {
        if (!(this instanceof v)) return new v(e);
        c(this, "name", "OperationalError"), c(this, "message", e), this.cause = e, this.isOperational = !0, 
        e instanceof Error ? (c(this, "message", e.message), c(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
    f.prototype.toString = function() {
        var e = Array(4 * g + 1).join(" "), t = "\n" + e + "AggregateError of:\n";
        g++, e = Array(4 * g + 1).join(" ");
        for (var n = 0; n < this.length; ++n) {
            for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o) i[o] = e + i[o];
            t += (r = i.join("\n")) + "\n";
        }
        return g--, t;
    }, l(v, Error);
    var y = Error.__BluebirdErrorTypes__;
    y || (y = a({
        CancellationError: h,
        TimeoutError: p,
        OperationalError: v,
        RejectionError: v,
        AggregateError: f
    }), o.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: y,
        writable: !1,
        enumerable: !1,
        configurable: !1
    })), e.exports = {
        Error: Error,
        TypeError: r,
        RangeError: i,
        CancellationError: y.CancellationError,
        OperationalError: y.OperationalError,
        TimeoutError: y.TimeoutError,
        AggregateError: y.AggregateError,
        Warning: d
    };
}
