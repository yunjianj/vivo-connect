// analysis/pretty/main.js:57245; webpack module 612
function(e, t) {
    function n(e) {
        "function" == typeof this.jobs[e] && this.jobs[e]();
    }
    e.exports = function(e) {
        Object.keys(e.jobs).forEach(n.bind(e)), e.jobs = {};
    };
}
