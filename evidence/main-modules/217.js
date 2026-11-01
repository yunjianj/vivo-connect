// analysis/pretty/main.js:27330; webpack module 217
function(e, t, n) {
    (function() {
        var t, r = {}.hasOwnProperty;
        t = n(57), e.exports = function(e) {
            function t(e) {
                t.__super__.constructor.call(this, e), this.value = "";
            }
            return function(e, t) {
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                function i() {
                    this.constructor = e;
                }
                i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype;
            }(t, e), Object.defineProperty(t.prototype, "data", {
                get: function() {
                    return this.value;
                },
                set: function(e) {
                    return this.value = e || "";
                }
            }), Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this.value.length;
                }
            }), Object.defineProperty(t.prototype, "textContent", {
                get: function() {
                    return this.value;
                },
                set: function(e) {
                    return this.value = e || "";
                }
            }), t.prototype.clone = function() {
                return Object.create(this);
            }, t.prototype.substringData = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, t.prototype.appendData = function(e) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, t.prototype.insertData = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, t.prototype.deleteData = function(e, t) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, t.prototype.replaceData = function(e, t, n) {
                throw new Error("This DOM method is not implemented." + this.debugInfo());
            }, t.prototype.isEqualNode = function(e) {
                return !!t.__super__.isEqualNode.apply(this, arguments).isEqualNode(e) && e.data === this.data;
            }, t;
        }(t);
    }).call(this);
}
