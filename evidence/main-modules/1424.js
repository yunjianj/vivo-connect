// analysis/pretty/main.js:104827; webpack module 1424
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.search_getInRecycleResult = t.search_getNormalResult = void 0;
    const r = n(0), i = r.__importDefault(n(696));
    function o(e) {
        const t = new Set;
        for (let n = 0; n < e.length; n++) for (let r = n + 1; r <= e.length; r++) t.add(e.slice(n, r));
        return [ ...t ].sort((e, t) => t.length - e.length).slice(0, 300);
    }
    function a(e) {
        if (!e) return [];
        try {
            const t = JSON.parse(e);
            return Array.isArray(t) ? t : [];
        } catch (e) {
            return [];
        }
    }
    function s(e, t, n = 20, r = []) {
        e = function(e) {
            return e ? e.replace(/```[\s\S]*?```/g, " ").replace(/`([^`]+)`/g, "$1").replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/^\s{0,3}#{1,6}\s*/gm, "").replace(/#{1,6}\s+/g, "").replace(/^\s{0,3}>+\s?/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*\d+\.\s+/gm, "").replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/__([^_]+)__/g, "$1").replace(/_([^_]+)_/g, "$1").replace(/~~([^~]+)~~/g, "$1").replace(/^\s*[-*_]{3,}\s*$/gm, "").replace(/[ \t]+/g, " ").replace(/\n{2,}/g, "\n").trim() : e;
        }(e);
        const o = [ ...new Set([ t, ...r ]) ].filter(e => e && e.length > 0);
        if (0 === o.length || !e) return "";
        const a = new i.default, s = a.splitGraphemes(e), l = s.length;
        let c = null;
        for (const t of o) {
            const n = e.indexOf(t);
            if (-1 !== n) {
                const r = e.substring(0, n);
                c = {
                    index: a.countGraphemes(r),
                    keyword: t
                };
                break;
            }
        }
        if (!c) return "";
        const u = a.countGraphemes(c.keyword), d = Math.floor((n - u) / 2);
        let h = Math.max(0, c.index - d), p = Math.min(l, c.index + u + d);
        p - (c.index + u) < d && (h = Math.max(0, p - n)), c.index - h < d && (p = Math.min(l, h + n));
        const f = s.slice(h, p).join(""), _ = [ ...o ].sort((e, t) => t.length - e.length);
        let m = f;
        for (const e of _) {
            const t = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), n = new RegExp("" + t, "gi");
            m = m.replace(n, e => `<em>${e}</em>`);
        }
        const g = h > 0, v = p < l;
        return o[0].includes(m) && (m = `<em>${m}</em>`), (g ? "..." : "") + m + (v ? "..." : "");
    }
    function l(e) {
        return [ ...e ].sort((e, t) => {
            var n, r;
            const i = (null !== (n = t.typeCount) && void 0 !== n ? n : 0) - (null !== (r = e.typeCount) && void 0 !== r ? r : 0);
            return 0 !== i ? i : new Date(t.record_mDateModified).getTime() - new Date(e.record_mDateModified).getTime();
        });
    }
    function c(e, t) {
        if (!e || !t.length) return e;
        const n = t.map(e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), r = new RegExp(n, "gi");
        return e.replace(r, "<em>$&</em>");
    }
    t.search_getNormalResult = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, {keyword: n, isInCludeBackground: r} = e;
            try {
                const e = o(n), i = t => e.map(e => `${t} LIKE '%${e}%'`).join(" OR "), u = e.map(e => `rec.content LIKE '%${e}%'`).join(" OR "), d = e.map(e => `ins.insightContent LIKE '%${e}%'`).join(" OR "), h = `SELECT\n      -- Record\n      r.id AS record_id,\n      r.localId AS record_localId,\n      r.title AS record_title,\n      r.mDisplayName AS record_mDisplayName,\n      r.mDateModified AS record_mDateModified,\n      r.createTime AS record_createTime,\n      r.mDuration as record_mDuration,\n\n      -- Mark\n      m.id AS mark_id,\n      m.mMarkItemList AS mark_mMarkItemList,\n\n      -- Summary\n      s.id AS summary_id,\n      s.content AS summary_content,\n\n      -- Recognize (1:N → JSON)\n      IFNULL(\n        (\n          SELECT json_group_array(\n            json_object(\n              'id', rec.id,\n              'mFileId', rec.mFileId,\n              'startTime', rec.startTime,\n              'endTime', rec.endTime,\n              'content', rec.content,\n              'mIsBackground', rec.mIsBackground\n            )\n          )\n          FROM Recognize rec\n          WHERE rec.mFileId = r.localId\n                AND ${r ? " 1 = 1" : " rec.mIsBackground == 0"}\n                AND (${u})\n                ORDER BY rec.startTime ASC, rec.mIsBackground ASC\n        ),\n        '[]'\n      ) AS recognize_list,\n\n      -- Insight (1:N → JSON)\n      IFNULL(\n        (\n          SELECT json_group_array(\n            json_object(\n              'id', ins.id,\n              'mFileId', ins.mFileId,\n              'startTime', ins.startTime,\n              'endTime', ins.endTime,\n              'content', ins.insightContent\n            )\n          )\n          FROM Insight ins\n          WHERE ins.mFileId = r.localId\n                AND (${d})\n                ORDER BY ins.startTime ASC\n        ),\n        '[]'\n      ) AS insight_list\n\n    FROM Record r\n    LEFT JOIN Mark m ON m.mFileId = r.localId\n    LEFT JOIN Summary s ON s.mFileId = r.localId\n    WHERE\n      (\n        (${i("r.title")})\n        OR (${i("IFNULL(m.mMarkItemList, '')")})\n        OR (${i("IFNULL(s.content, '')")})\n        OR EXISTS (\n          SELECT 1\n          FROM Recognize rec\n          WHERE rec.mFileId = r.localId\n            AND (${u})\n        )\n        OR EXISTS (\n          SELECT 1\n          FROM Insight ins\n          WHERE ins.mFileId = r.localId\n            AND (${d})\n        )    \n      )\n      AND r.inRecycle != 1\n    `, p = yield t.all(h);
                return function(e, t) {
                    const n = [], r = [], i = [], u = o(t);
                    return e.forEach(e => {
                        const t = !!e.record_title && u.some(t => e.record_title.includes(t));
                        t && (e.record_title = c(e.record_title, u));
                        let o = a(e.mark_mMarkItemList), l = a(e.recognize_list), d = a(e.insight_list);
                        o.sort((e, t) => e.markTime - t.markTime);
                        const h = o.find(e => u.some(t => {
                            var n;
                            return null === (n = null == e ? void 0 : e.markName) || void 0 === n ? void 0 : n.includes(t);
                        }));
                        h && (h.markName = s(h.markName, u[0], 30, u)), e.markItem = h;
                        const p = !!e.summary_content && u.some(t => e.summary_content.includes(t));
                        console.log("AAA isSummaryCK", p), p && (e.summary_content_search = s(e.summary_content, u[0], 30, u));
                        const f = l.some(e => u.some(t => e.content.includes(t)));
                        if (f) {
                            let t = l.find(e => u.some(t => e.content.includes(t)));
                            t && (t.content = s(t.content, u[0], 30, u), e.recognizeItem = t);
                        }
                        const _ = d.some(e => u.some(t => e.content.includes(t)));
                        if (_) {
                            let t = d.find(e => u.some(t => e.content.includes(t)));
                            t && (t.content = s(t.content, u[0], 30, u), e.insightItem = t);
                        }
                        const m = (h ? 1 : 0) + Number(p) + Number(f) + Number(_);
                        e.typeCount = m;
                        const g = t, v = m > 0;
                        g && v ? n.push(e) : g ? r.push(e) : v && i.push(e);
                    }), [ ...l(n), ...l(r), ...l(i) ];
                }(p, n);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.search_getInRecycleResult = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this, n = e.keyword;
            try {
                const e = o(n), r = `SELECT\n      -- Record\n      r.id AS record_id,\n      r.localId AS record_localId,\n      r.title AS record_title,\n      r.mDateModified AS record_mDateModified,\n      r.createTime AS record_createTime,\n      r.mDuration as record_mDuration\n\n    FROM Record r\n    WHERE\n      (${e.map(e => `r.title LIKE '%${e}%'`).join(" OR ")})\n    AND r.inRecycle == 1\n    AND r.status != 3\n    ORDER BY r.mDateModified DESC\n    `, i = yield t.all(r);
                return i.forEach(t => {
                    t.record_title = c(t.record_title, e);
                }), i;
            } catch (e) {
                throw new Error(e.message);
            }
        });
    };
}
