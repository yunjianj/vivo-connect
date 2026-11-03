// analysis/pretty/main.js:31882; webpack module 275
function(e, t) {
    /*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */
    e.exports = function(e, t) {
        if ("string" != typeof e) throw new TypeError("expected path to be a string");
        if ("\\" === e || "/" === e) return "/";
        var n = e.length;
        if (n <= 1) return e;
        var r = "";
        if (n > 4 && "\\" === e[3]) {
            var i = e[2];
            "?" !== i && "." !== i || "\\\\" !== e.slice(0, 2) || (e = e.slice(2), r = "//");
        }
        var o = e.split(/[/\\]+/);
        return !1 !== t && "" === o[o.length - 1] && o.pop(), r + o.join("/");
    };
}
