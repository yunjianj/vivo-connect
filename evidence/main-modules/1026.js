// analysis/pretty/main.js:82365; webpack module 1026
function(e, t, n) {
    "use strict";
    const r = n(8), {LEVEL: i, MESSAGE: o} = n(27), a = n(120);
    e.exports = class extends a {
        constructor(e = {}) {
            super(e), this.name = e.name || "console", this.stderrLevels = this._stringArrayToSet(e.stderrLevels), 
            this.consoleWarnLevels = this._stringArrayToSet(e.consoleWarnLevels), this.eol = "string" == typeof e.eol ? e.eol : r.EOL, 
            this.setMaxListeners(30);
        }
        log(e, t) {
            return setImmediate(() => this.emit("logged", e)), this.stderrLevels[e[i]] ? (console._stderr ? console._stderr.write(`${e[o]}${this.eol}`) : console.error(e[o]), 
            void (t && t())) : this.consoleWarnLevels[e[i]] ? (console._stderr ? console._stderr.write(`${e[o]}${this.eol}`) : console.warn(e[o]), 
            void (t && t())) : (console._stdout ? console._stdout.write(`${e[o]}${this.eol}`) : console.log(e[o]), 
            void (t && t()));
        }
        _stringArrayToSet(e, t) {
            if (!e) return {};
            if (t = t || "Cannot make set from type other than Array of string elements", !Array.isArray(e)) throw new Error(t);
            return e.reduce((e, n) => {
                if ("string" != typeof n) throw new Error(t);
                return e[n] = !0, e;
            }, {});
        }
    };
}
