// analysis/pretty/main.js:91656; webpack module 1167
function(e, t, n) {
    "use strict";
    const r = n(8), i = n(288), o = n(1168), {env: a} = process;
    let s;
    function l(e) {
        return 0 !== e && {
            level: e,
            hasBasic: !0,
            has256: e >= 2,
            has16m: e >= 3
        };
    }
    function c(e, t) {
        if (0 === s) return 0;
        if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
        if (o("color=256")) return 2;
        if (e && !t && void 0 === s) return 0;
        const n = s || 0;
        if ("dumb" === a.TERM) return n;
        if ("win32" === process.platform) {
            const e = r.release().split(".");
            return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in a) return [ "TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE" ].some(e => e in a) || "codeship" === a.CI_NAME ? 1 : n;
        if ("TEAMCITY_VERSION" in a) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a.TEAMCITY_VERSION) ? 1 : 0;
        if ("truecolor" === a.COLORTERM) return 3;
        if ("TERM_PROGRAM" in a) {
            const e = parseInt((a.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (a.TERM_PROGRAM) {
              case "iTerm.app":
                return e >= 3 ? 3 : 2;

              case "Apple_Terminal":
                return 2;
            }
        }
        return /-256(color)?$/i.test(a.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(a.TERM) || "COLORTERM" in a ? 1 : n;
    }
    o("no-color") || o("no-colors") || o("color=false") || o("color=never") ? s = 0 : (o("color") || o("colors") || o("color=true") || o("color=always")) && (s = 1), 
    "FORCE_COLOR" in a && (s = "true" === a.FORCE_COLOR ? 1 : "false" === a.FORCE_COLOR ? 0 : 0 === a.FORCE_COLOR.length ? 1 : Math.min(parseInt(a.FORCE_COLOR, 10), 3)), 
    e.exports = {
        supportsColor: function(e) {
            return l(c(e, e && e.isTTY));
        },
        stdout: l(c(!0, i.isatty(1))),
        stderr: l(c(!0, i.isatty(2)))
    };
}
