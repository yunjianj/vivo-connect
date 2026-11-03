// analysis/pretty/main.js:82003; webpack module 1016
function(e, t, n) {
    "use strict";
    const r = n(51), i = n(416);
    e.exports = r(e => {
        const t = +new Date;
        return this.diff = t - (this.prevTime || t), this.prevTime = t, e.ms = "+" + i(this.diff), 
        e;
    });
}
