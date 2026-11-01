// analysis/pretty/main.js:16709; webpack module 102
function(e, t) {
    var n = function() {
        "use strict";
        return void 0 === this;
    }();
    if (n) e.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: n,
        propertyIsWritable: function(e, t) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            return !(n && !n.writable && !n.set);
        }
    }; else {
        var r = {}.hasOwnProperty, i = {}.toString, o = {}.constructor.prototype, a = function(e) {
            var t = [];
            for (var n in e) r.call(e, n) && t.push(n);
            return t;
        };
        e.exports = {
            isArray: function(e) {
                try {
                    return "[object Array]" === i.call(e);
                } catch (e) {
                    return !1;
                }
            },
            keys: a,
            names: a,
            defineProperty: function(e, t, n) {
                return e[t] = n.value, e;
            },
            getDescriptor: function(e, t) {
                return {
                    value: e[t]
                };
            },
            freeze: function(e) {
                return e;
            },
            getPrototypeOf: function(e) {
                try {
                    return Object(e).constructor.prototype;
                } catch (e) {
                    return o;
                }
            },
            isES5: n,
            propertyIsWritable: function() {
                return !0;
            }
        };
    }
}
