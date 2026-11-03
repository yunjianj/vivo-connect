// analysis/pretty/main.js:91188; webpack module 1136
function(e, t) {
    e.exports = function(e) {
        var t = "function" == typeof setImmediate ? setImmediate : "object" == typeof process && "function" == typeof process.nextTick ? process.nextTick : null;
        t ? t(e) : setTimeout(e, 0);
    };
}
