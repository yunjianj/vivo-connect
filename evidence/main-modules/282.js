// analysis/pretty/main.js:32643; webpack module 282
function(e, t) {
    var n = e.exports = {};
    n.dateToDos = function(e, t) {
        var n = (t = t || !1) ? e.getFullYear() : e.getUTCFullYear();
        return n < 1980 ? 2162688 : n >= 2044 ? 2141175677 : n - 1980 << 25 | (t ? e.getMonth() : e.getUTCMonth()) + 1 << 21 | (t ? e.getDate() : e.getUTCDate()) << 16 | (t ? e.getHours() : e.getUTCHours()) << 11 | (t ? e.getMinutes() : e.getUTCMinutes()) << 5 | (t ? e.getSeconds() : e.getUTCSeconds()) / 2;
    }, n.dosToDate = function(e) {
        return new Date(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1);
    }, n.fromDosTime = function(e) {
        return n.dosToDate(e.readUInt32LE(0));
    }, n.getEightBytes = function(e) {
        var t = Buffer.alloc(8);
        return t.writeUInt32LE(e % 4294967296, 0), t.writeUInt32LE(e / 4294967296 | 0, 4), 
        t;
    }, n.getShortBytes = function(e) {
        var t = Buffer.alloc(2);
        return t.writeUInt16LE((65535 & e) >>> 0, 0), t;
    }, n.getShortBytesValue = function(e, t) {
        return e.readUInt16LE(t);
    }, n.getLongBytes = function(e) {
        var t = Buffer.alloc(4);
        return t.writeUInt32LE((4294967295 & e) >>> 0, 0), t;
    }, n.getLongBytesValue = function(e, t) {
        return e.readUInt32LE(t);
    }, n.toDosTime = function(e) {
        return n.getLongBytes(n.dateToDos(e));
    };
}
