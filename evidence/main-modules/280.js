// analysis/pretty/main.js:32611; webpack module 280
function(e, t, n) {
    var r = n(593);
    function i(e) {
        var t = function() {
            return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
        };
        return t.called = !1, t;
    }
    function o(e) {
        var t = function() {
            if (t.called) throw new Error(t.onceError);
            return t.called = !0, t.value = e.apply(this, arguments);
        }, n = e.name || "Function wrapped with `once`";
        return t.onceError = n + " shouldn't be called more than once", t.called = !1, t;
    }
    e.exports = r(i), e.exports.strict = r(o), i.proto = i(function() {
        Object.defineProperty(Function.prototype, "once", {
            value: function() {
                return i(this);
            },
            configurable: !0
        }), Object.defineProperty(Function.prototype, "onceStrict", {
            value: function() {
                return o(this);
            },
            configurable: !0
        });
    });
}
