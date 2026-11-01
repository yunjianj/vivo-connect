// analysis/pretty/main.js:103325; webpack module 1401
function(e, t, n) {
    var r = n(288), i = n(5);
    (t = e.exports = n(690)).init = function(e) {
        e.inspectOpts = {};
        for (var n = Object.keys(t.inspectOpts), r = 0; r < n.length; r++) e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
    }, t.log = function() {
        return a.write(i.format.apply(i, arguments) + "\n");
    }, t.formatArgs = function(e) {
        var n = this.namespace;
        if (this.useColors) {
            var r = this.color, i = "  [3" + r + ";1m" + n + " [0m";
            e[0] = i + e[0].split("\n").join("\n" + i), e.push("[3" + r + "m+" + t.humanize(this.diff) + "[0m");
        } else e[0] = (new Date).toUTCString() + " " + n + " " + e[0];
    }, t.save = function(e) {
        null == e ? delete process.env.DEBUG : process.env.DEBUG = e;
    }, t.load = s, t.useColors = function() {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(o);
    }, t.colors = [ 6, 2, 3, 4, 5, 1 ], t.inspectOpts = Object.keys(process.env).filter(function(e) {
        return /^debug_/i.test(e);
    }).reduce(function(e, t) {
        var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function(e, t) {
            return t.toUpperCase();
        }), r = process.env[t];
        return r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r)), 
        e[n] = r, e;
    }, {});
    var o = parseInt(process.env.DEBUG_FD, 10) || 2;
    1 !== o && 2 !== o && i.deprecate(function() {}, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    var a = 1 === o ? process.stdout : 2 === o ? process.stderr : function(e) {
        var t;
        switch (process.binding("tty_wrap").guessHandleType(e)) {
          case "TTY":
            (t = new r.WriteStream(e))._type = "tty", t._handle && t._handle.unref && t._handle.unref();
            break;

          case "FILE":
            var i = n(4);
            (t = new i.SyncWriteStream(e, {
                autoClose: !1
            }))._type = "fs";
            break;

          case "PIPE":
          case "TCP":
            var o = n(104);
            (t = new o.Socket({
                fd: e,
                readable: !1,
                writable: !0
            })).readable = !1, t.read = null, t._type = "pipe", t._handle && t._handle.unref && t._handle.unref();
            break;

          default:
            throw new Error("Implement me. Unknown stream file type!");
        }
        return t.fd = e, t._isStdio = !0, t;
    }(o);
    function s() {
        return process.env.DEBUG;
    }
    t.formatters.o = function(e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts).split("\n").map(function(e) {
            return e.trim();
        }).join(" ");
    }, t.formatters.O = function(e) {
        return this.inspectOpts.colors = this.useColors, i.inspect(e, this.inspectOpts);
    }, t.enable(s());
}
