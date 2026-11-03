// analysis/pretty/main.js:41126; webpack module 374
function(e, t, n) {
    "use strict";
    const {Minipass: r} = n(373), i = n(175), o = Symbol("slurp");
    e.exports = class extends r {
        constructor(e, t, n) {
            switch (super(), this.pause(), this.extended = t, this.globalExtended = n, this.header = e, 
            this.startBlockSize = 512 * Math.ceil(e.size / 512), this.blockRemain = this.startBlockSize, 
            this.remain = e.size, this.type = e.type, this.meta = !1, this.ignore = !1, this.type) {
              case "File":
              case "OldFile":
              case "Link":
              case "SymbolicLink":
              case "CharacterDevice":
              case "BlockDevice":
              case "Directory":
              case "FIFO":
              case "ContiguousFile":
              case "GNUDumpDir":
                break;

              case "NextFileHasLongLinkpath":
              case "NextFileHasLongPath":
              case "OldGnuLongPath":
              case "GlobalExtendedHeader":
              case "ExtendedHeader":
              case "OldExtendedHeader":
                this.meta = !0;
                break;

              default:
                this.ignore = !0;
            }
            this.path = i(e.path), this.mode = e.mode, this.mode && (this.mode = 4095 & this.mode), 
            this.uid = e.uid, this.gid = e.gid, this.uname = e.uname, this.gname = e.gname, 
            this.size = e.size, this.mtime = e.mtime, this.atime = e.atime, this.ctime = e.ctime, 
            this.linkpath = i(e.linkpath), this.uname = e.uname, this.gname = e.gname, t && this[o](t), 
            n && this[o](n, !0);
        }
        write(e) {
            const t = e.length;
            if (t > this.blockRemain) throw new Error("writing more to entry than is appropriate");
            const n = this.remain, r = this.blockRemain;
            return this.remain = Math.max(0, n - t), this.blockRemain = Math.max(0, r - t), 
            !!this.ignore || (n >= t ? super.write(e) : super.write(e.slice(0, n)));
        }
        [o](e, t) {
            for (const n in e) null === e[n] || void 0 === e[n] || t && "path" === n || (this[n] = "path" === n || "linkpath" === n ? i(e[n]) : e[n]);
        }
    };
}
