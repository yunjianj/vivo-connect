// analysis/pretty/main.js:9164; webpack module 38
function(e, t, n) {
    var r = n(9);
    "disable" === process.env.READABLE_STREAM && r ? (e.exports = r.Readable, Object.assign(e.exports, r), 
    e.exports.Stream = r) : ((t = e.exports = n(422)).Stream = r || t, t.Readable = t, 
    t.Writable = n(268), t.Duplex = n(121), t.Transform = n(428), t.PassThrough = n(1042), 
    t.finished = n(270), t.pipeline = n(1043));
}
