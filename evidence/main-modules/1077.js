// analysis/pretty/main.js:87429; webpack module 1077
function(e, t, n) {
    var r = n(9);
    "disable" === process.env.READABLE_STREAM && r ? (e.exports = r, (t = e.exports = r.Readable).Readable = r.Readable, 
    t.Writable = r.Writable, t.Duplex = r.Duplex, t.Transform = r.Transform, t.PassThrough = r.PassThrough, 
    t.Stream = r) : ((t = e.exports = n(582)).Stream = r || t, t.Readable = t, t.Writable = n(585), 
    t.Duplex = n(124), t.Transform = n(587), t.PassThrough = n(1080));
}
