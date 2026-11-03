// analysis/pretty/main.js:120665; webpack module 1573
function(e, t, n) {
    "use strict";
    e.exports = i;
    var r = n(244);
    function i(e, t, n, r, i) {
        this.prop = e, this.value = t, this.selector = n, this.priority = r || 0, this.additionalPriority = i || [];
    }
    i.prototype.compareFunc = function(e) {
        var t = [];
        t.push.apply(t, this.selector.specificity()), t.push.apply(t, this.additionalPriority), 
        t[0] += this.priority;
        var n = [];
        return n.push.apply(n, e.selector.specificity()), n.push.apply(n, e.additionalPriority), 
        n[0] += e.priority, r.compareFunc(t, n);
    }, i.prototype.compare = function(e) {
        return 1 === this.compareFunc(e) ? this : e;
    }, i.prototype.toString = function() {
        return this.prop + ": " + this.value.replace(/['"]+/g, "") + ";";
    };
}
