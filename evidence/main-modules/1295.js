// analysis/pretty/main.js:99263; webpack module 1295
function(e, t) {
    (function() {
        e.exports = function() {
            function e(e) {
                this.nodes = e;
            }
            return Object.defineProperty(e.prototype, "length", {
                get: function() {
                    return this.nodes.length || 0;
                }
            }), e.prototype.clone = function() {
                return this.nodes = null;
            }, e.prototype.item = function(e) {
                return this.nodes[e] || null;
            }, e;
        }();
    }).call(this);
}
