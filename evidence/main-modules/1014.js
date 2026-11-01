// analysis/pretty/main.js:81977; webpack module 1014
function(e, t, n) {
    "use strict";
    const r = n(51), {MESSAGE: i} = n(27), o = n(202);
    e.exports = r(e => {
        const t = {};
        return e.message && (t["@message"] = e.message, delete e.message), e.timestamp && (t["@timestamp"] = e.timestamp, 
        delete e.timestamp), t["@fields"] = e, e[i] = o(t), e;
    });
}
