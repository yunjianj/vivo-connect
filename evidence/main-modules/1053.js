// analysis/pretty/main.js:83657; webpack module 1053
function(e, t, n) {
    "use strict";
    e.exports = class {
        constructor(e) {
            if (!e) throw new Error("Logger is required for profiling.");
            this.logger = e, this.start = Date.now();
        }
        done(...e) {
            "function" == typeof e[e.length - 1] && (console.warn("Callback function no longer supported as of winston@3.0.0"), 
            e.pop());
            const t = "object" == typeof e[e.length - 1] ? e.pop() : {};
            return t.level = t.level || "info", t.durationMs = Date.now() - this.start, this.logger.write(t);
        }
    };
}
