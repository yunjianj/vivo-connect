// analysis/pretty/main.js:122766; webpack module 1603
function(e, t, n) {
    "use strict";
    e.exports = (e, t) => {
        t = t || process.argv;
        const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", r = t.indexOf(n + e), i = t.indexOf("--");
        return -1 !== r && (-1 === i || r < i);
    };
}
