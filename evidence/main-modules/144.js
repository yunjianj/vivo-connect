// analysis/pretty/main.js:18997; webpack module 144
function(e, t, n) {
    "use strict";
    const {MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: o} = n(196), a = n(197), s = (t = e.exports = {}).re = [], l = t.safeRe = [], c = t.src = [], u = t.safeSrc = [], d = t.t = {};
    let h = 0;
    const p = [ [ "\\s", 1 ], [ "\\d", o ], [ "[a-zA-Z0-9-]", i ] ], f = (e, t, n) => {
        const r = (e => {
            for (const [t, n] of p) e = e.split(t + "*").join(`${t}{0,${n}}`).split(t + "+").join(`${t}{1,${n}}`);
            return e;
        })(t), i = h++;
        a(e, i, t), d[e] = i, c[i] = t, u[i] = r, s[i] = new RegExp(t, n ? "g" : void 0), 
        l[i] = new RegExp(r, n ? "g" : void 0);
    };
    f("NUMERICIDENTIFIER", "0|[1-9]\\d*"), f("NUMERICIDENTIFIERLOOSE", "\\d+"), f("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), 
    f("MAINVERSION", `(${c[d.NUMERICIDENTIFIER]})\\.(${c[d.NUMERICIDENTIFIER]})\\.(${c[d.NUMERICIDENTIFIER]})`), 
    f("MAINVERSIONLOOSE", `(${c[d.NUMERICIDENTIFIERLOOSE]})\\.(${c[d.NUMERICIDENTIFIERLOOSE]})\\.(${c[d.NUMERICIDENTIFIERLOOSE]})`), 
    f("PRERELEASEIDENTIFIER", `(?:${c[d.NONNUMERICIDENTIFIER]}|${c[d.NUMERICIDENTIFIER]})`), 
    f("PRERELEASEIDENTIFIERLOOSE", `(?:${c[d.NONNUMERICIDENTIFIER]}|${c[d.NUMERICIDENTIFIERLOOSE]})`), 
    f("PRERELEASE", `(?:-(${c[d.PRERELEASEIDENTIFIER]}(?:\\.${c[d.PRERELEASEIDENTIFIER]})*))`), 
    f("PRERELEASELOOSE", `(?:-?(${c[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[d.PRERELEASEIDENTIFIERLOOSE]})*))`), 
    f("BUILDIDENTIFIER", "[a-zA-Z0-9-]+"), f("BUILD", `(?:\\+(${c[d.BUILDIDENTIFIER]}(?:\\.${c[d.BUILDIDENTIFIER]})*))`), 
    f("FULLPLAIN", `v?${c[d.MAINVERSION]}${c[d.PRERELEASE]}?${c[d.BUILD]}?`), f("FULL", `^${c[d.FULLPLAIN]}$`), 
    f("LOOSEPLAIN", `[v=\\s]*${c[d.MAINVERSIONLOOSE]}${c[d.PRERELEASELOOSE]}?${c[d.BUILD]}?`), 
    f("LOOSE", `^${c[d.LOOSEPLAIN]}$`), f("GTLT", "((?:<|>)?=?)"), f("XRANGEIDENTIFIERLOOSE", c[d.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*"), 
    f("XRANGEIDENTIFIER", c[d.NUMERICIDENTIFIER] + "|x|X|\\*"), f("XRANGEPLAIN", `[v=\\s]*(${c[d.XRANGEIDENTIFIER]})(?:\\.(${c[d.XRANGEIDENTIFIER]})(?:\\.(${c[d.XRANGEIDENTIFIER]})(?:${c[d.PRERELEASE]})?${c[d.BUILD]}?)?)?`), 
    f("XRANGEPLAINLOOSE", `[v=\\s]*(${c[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[d.XRANGEIDENTIFIERLOOSE]})(?:${c[d.PRERELEASELOOSE]})?${c[d.BUILD]}?)?)?`), 
    f("XRANGE", `^${c[d.GTLT]}\\s*${c[d.XRANGEPLAIN]}$`), f("XRANGELOOSE", `^${c[d.GTLT]}\\s*${c[d.XRANGEPLAINLOOSE]}$`), 
    f("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), 
    f("COERCE", c[d.COERCEPLAIN] + "(?:$|[^\\d])"), f("COERCEFULL", c[d.COERCEPLAIN] + `(?:${c[d.PRERELEASE]})?` + `(?:${c[d.BUILD]})?(?:$|[^\\d])`), 
    f("COERCERTL", c[d.COERCE], !0), f("COERCERTLFULL", c[d.COERCEFULL], !0), f("LONETILDE", "(?:~>?)"), 
    f("TILDETRIM", `(\\s*)${c[d.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", f("TILDE", `^${c[d.LONETILDE]}${c[d.XRANGEPLAIN]}$`), 
    f("TILDELOOSE", `^${c[d.LONETILDE]}${c[d.XRANGEPLAINLOOSE]}$`), f("LONECARET", "(?:\\^)"), 
    f("CARETTRIM", `(\\s*)${c[d.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", f("CARET", `^${c[d.LONECARET]}${c[d.XRANGEPLAIN]}$`), 
    f("CARETLOOSE", `^${c[d.LONECARET]}${c[d.XRANGEPLAINLOOSE]}$`), f("COMPARATORLOOSE", `^${c[d.GTLT]}\\s*(${c[d.LOOSEPLAIN]})$|^$`), 
    f("COMPARATOR", `^${c[d.GTLT]}\\s*(${c[d.FULLPLAIN]})$|^$`), f("COMPARATORTRIM", `(\\s*)${c[d.GTLT]}\\s*(${c[d.LOOSEPLAIN]}|${c[d.XRANGEPLAIN]})`, !0), 
    t.comparatorTrimReplace = "$1$2$3", f("HYPHENRANGE", `^\\s*(${c[d.XRANGEPLAIN]})\\s+-\\s+(${c[d.XRANGEPLAIN]})\\s*$`), 
    f("HYPHENRANGELOOSE", `^\\s*(${c[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[d.XRANGEPLAINLOOSE]})\\s*$`), 
    f("STAR", "(<|>)?=?\\s*\\*"), f("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), f("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
}
