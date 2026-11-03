// analysis/pretty/main.js:123311; webpack module 1616
function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    }, function(e, t) {
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n);
    }), o = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function(e) {
        function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, function(e) {
                for (var t, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                n.events.push([ e ].concat(r)), n._cbs[e] && (t = n._cbs)[e].apply(t, r);
            }) || this;
            return n._cbs = t, n.events = [], n;
        }
        return i(t, e), t.prototype.onreset = function() {
            this.events = [], this._cbs.onreset && this._cbs.onreset();
        }, t.prototype.restart = function() {
            var e;
            this._cbs.onreset && this._cbs.onreset();
            for (var t = 0; t < this.events.length; t++) {
                var n = this.events[t], r = n[0], i = n.slice(1);
                this._cbs[r] && (e = this._cbs)[r].apply(e, i);
            }
        }, t;
    }(o(n(1617)).default);
    t.CollectingHandler = a;
}
