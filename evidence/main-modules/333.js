// analysis/pretty/main.js:36090; webpack module 333
function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OperationKind = void 0, t.computeOperations = function(e, t, n) {
        const i = a(e.files), s = a(t.files);
        let l = null;
        const c = t.files[0], u = [], d = c.name, h = i.get(d);
        if (null == h) throw new Error(`no file ${d} in old blockmap`);
        const p = s.get(d);
        let f = 0;
        const {checksumToOffset: _, checksumToOldSize: m} = function(e, t, n) {
            const r = new Map, i = new Map;
            let o = t;
            for (let t = 0; t < e.checksums.length; t++) {
                const a = e.checksums[t], s = e.sizes[t], l = i.get(a);
                if (void 0 === l) r.set(a, o), i.set(a, s); else if (null != n.debug) {
                    const e = l === s ? "(same size)" : `(size: ${l}, this size: ${s})`;
                    n.debug(`${a} duplicated in blockmap ${e}, it doesn't lead to broken differential downloader, just corresponding block will be skipped)`);
                }
                o += s;
            }
            return {
                checksumToOffset: r,
                checksumToOldSize: i
            };
        }(i.get(d), h.offset, n);
        let g = c.offset;
        for (let e = 0; e < p.checksums.length; g += p.sizes[e], e++) {
            const t = p.sizes[e], i = p.checksums[e];
            let a = _.get(i);
            null != a && m.get(i) !== t && (n.warn(`Checksum ("${i}") matches, but size differs (old: ${m.get(i)}, new: ${t})`), 
            a = void 0), void 0 === a ? (f++, null != l && l.kind === r.DOWNLOAD && l.end === g ? l.end += t : (l = {
                kind: r.DOWNLOAD,
                start: g,
                end: g + t
            }, o(l, u, i, e))) : null != l && l.kind === r.COPY && l.end === a ? l.end += t : (l = {
                kind: r.COPY,
                start: a,
                end: a + t
            }, o(l, u, i, e));
        }
        f > 0 && n.info(`File${"file" === c.name ? "" : " " + c.name} has ${f} changed blocks`);
        return u;
    }, function(e) {
        e[e.COPY = 0] = "COPY", e[e.DOWNLOAD = 1] = "DOWNLOAD";
    }(r || (t.OperationKind = r = {}));
    const i = "true" === process.env.DIFFERENTIAL_DOWNLOAD_PLAN_BUILDER_VALIDATE_RANGES;
    function o(e, t, n, o) {
        if (i && 0 !== t.length) {
            const i = t[t.length - 1];
            if (i.kind === e.kind && e.start < i.end && e.start > i.start) {
                const t = [ i.start, i.end, e.start, e.end ].reduce((e, t) => e < t ? e : t);
                throw new Error(`operation (block index: ${o}, checksum: ${n}, kind: ${r[e.kind]}) overlaps previous operation (checksum: ${n}):\nabs: ${i.start} until ${i.end} and ${e.start} until ${e.end}\nrel: ${i.start - t} until ${i.end - t} and ${e.start - t} until ${e.end - t}`);
            }
        }
        t.push(e);
    }
    function a(e) {
        const t = new Map;
        for (const n of e) t.set(n.name, n);
        return t;
    }
}
