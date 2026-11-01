// analysis/pretty/main.js:99246; webpack module 1294
function(e, t) {
    (function() {
        e.exports = function() {
            function e(e) {
                this.arr = e || [];
            }
            return Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this.arr.length;
                }
            }), e.prototype.item = function(e) {
                return this.arr[e] || null;
            }, e.prototype.contains = function(e) {
                return -1 !== this.arr.indexOf(e);
            }, e;
        }();
    }).call(this);
}
