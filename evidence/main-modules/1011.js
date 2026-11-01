// analysis/pretty/main.js:81940; webpack module 1011
function(e, t, n) {
    "use strict";
    const {Colorizer: r} = n(267), {Padder: i} = n(414), {configs: o, MESSAGE: a} = n(27);
    class s {
        constructor(e = {}) {
            e.levels || (e.levels = o.cli.levels), this.colorizer = new r(e), this.padder = new i(e), 
            this.options = e;
        }
        transform(e, t) {
            return this.colorizer.transform(this.padder.transform(e, t), t), e[a] = `${e.level}:${e.message}`, 
            e;
        }
    }
    e.exports = e => new s(e), e.exports.Format = s;
}
