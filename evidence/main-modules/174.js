// analysis/pretty/main.js:23938; webpack module 174
function(e, t, n) {
    "use strict";
    const r = new Map([ [ "C", "cwd" ], [ "f", "file" ], [ "z", "gzip" ], [ "P", "preservePaths" ], [ "U", "unlink" ], [ "strip-components", "strip" ], [ "stripComponents", "strip" ], [ "keep-newer", "newer" ], [ "keepNewer", "newer" ], [ "keep-newer-files", "newer" ], [ "keepNewerFiles", "newer" ], [ "k", "keep" ], [ "keep-existing", "keep" ], [ "keepExisting", "keep" ], [ "m", "noMtime" ], [ "no-mtime", "noMtime" ], [ "p", "preserveOwner" ], [ "L", "follow" ], [ "h", "follow" ] ]);
    e.exports = e => e ? Object.keys(e).map(t => [ r.has(t) ? r.get(t) : t, e[t] ]).reduce((e, t) => (e[t[0]] = t[1], 
    e), Object.create(null)) : {};
}
