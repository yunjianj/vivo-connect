// analysis/pretty/main.js:103856; webpack module 1415
function(e, t) {
    var n = {
        disableWarnings: !1,
        deprecationWarningMap: {},
        warn: function(e) {
            !this.disableWarnings && this.deprecationWarningMap[e] && (console.warn("DEPRECATION WARNING: " + this.deprecationWarningMap[e]), 
            this.deprecationWarningMap[e] = !1);
        }
    };
    e.exports = n;
}
