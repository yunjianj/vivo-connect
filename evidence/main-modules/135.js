// analysis/pretty/main.js:18595; webpack module 135
function(e, t, n) {
    "use strict";
    const r = n(23).fromCallback, i = n(20), o = [ "access", "appendFile", "chmod", "chown", "close", "copyFile", "fchmod", "fchown", "fdatasync", "fstat", "fsync", "ftruncate", "futimes", "lchmod", "lchown", "link", "lstat", "mkdir", "mkdtemp", "open", "opendir", "readdir", "readFile", "readlink", "realpath", "rename", "rm", "rmdir", "stat", "symlink", "truncate", "unlink", "utimes", "writeFile" ].filter(e => "function" == typeof i[e]);
    Object.assign(t, i), o.forEach(e => {
        t[e] = r(i[e]);
    }), t.realpath.native = r(i.realpath.native), t.exists = function(e, t) {
        return "function" == typeof t ? i.exists(e, t) : new Promise(t => i.exists(e, t));
    }, t.read = function(e, t, n, r, o, a) {
        return "function" == typeof a ? i.read(e, t, n, r, o, a) : new Promise((a, s) => {
            i.read(e, t, n, r, o, (e, t, n) => {
                if (e) return s(e);
                a({
                    bytesRead: t,
                    buffer: n
                });
            });
        });
    }, t.write = function(e, t, ...n) {
        return "function" == typeof n[n.length - 1] ? i.write(e, t, ...n) : new Promise((r, o) => {
            i.write(e, t, ...n, (e, t, n) => {
                if (e) return o(e);
                r({
                    bytesWritten: t,
                    buffer: n
                });
            });
        });
    }, "function" == typeof i.writev && (t.writev = function(e, t, ...n) {
        return "function" == typeof n[n.length - 1] ? i.writev(e, t, ...n) : new Promise((r, o) => {
            i.writev(e, t, ...n, (e, t, n) => {
                if (e) return o(e);
                r({
                    bytesWritten: t,
                    buffers: n
                });
            });
        });
    });
}
