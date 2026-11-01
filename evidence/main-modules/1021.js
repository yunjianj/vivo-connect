// analysis/pretty/main.js:82068; webpack module 1021
function(e, t, n) {
    "use strict";
    const r = n(1022), i = n(51);
    e.exports = i((e, t = {}) => (t.format && (e.timestamp = "function" == typeof t.format ? t.format() : r.format(new Date, t.format)), 
    e.timestamp || (e.timestamp = (new Date).toISOString()), t.alias && (e[t.alias] = e.timestamp), 
    e));
}
