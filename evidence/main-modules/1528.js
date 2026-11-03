// analysis/pretty/main.js:115782; webpack module 1528
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getRealLenOfHl = t.search_getExistsType = t.get_tags = t.search_getSearchResult = t.indexOfWords = void 0;
    const r = n(0), i = r.__importDefault(n(696));
    function o(e, t, n) {
        let r = e.toLowerCase().indexOf(t.toLowerCase());
        if (r >= 0) return r;
        if (n.length > 0) {
            const t = n.join("|"), r = new RegExp(t, "i"), i = e.match(r);
            return i && i.index || -1;
        }
        return -1;
    }
    t.indexOfWords = o;
    const a = function(e, t, n = !0, r = !1, a = 40, s = []) {
        if (!e) return e;
        let l = e, c = "", u = 0;
        if (r) {
            let n = /<(vnote-audio|vnote-audio2) [^>]*?name="([^"]+)"[^>]*><\/(vnote-audio|vnote-audio2)>/g;
            if (l = e.replace(n, function(e, n, r, i, o) {
                return r ? (r.includes(t) && !c && (c = r, u = o), "") : "";
            }), c && (!l.includes(t) || l.indexOf(t) > u) && (l = c), l = l.replace(/<[^>]+>|&#?[0-9A-Za-z]+;|\s*/g, "").replace(/\s*/g, ""), 
            t && -1 === l.toLowerCase().indexOf(t.toLowerCase())) return null;
        }
        return t && o(l, t, s) >= 0 ? function(e, t, n = 20, r = []) {
            console.log("AAA", e, t, n, r);
            const o = [ ...new Set([ t, ...r ]) ].filter(e => e && e.length > 0);
            if (0 === o.length || !e) return "";
            const a = new i.default, s = a.splitGraphemes(e), l = s.length;
            let c = null;
            for (const t of o) {
                const n = e.toLowerCase().indexOf(t);
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
            return (h > 0 ? "..." : "") + m + (p < l ? "..." : "");
        }(l, t, 20, s) : (n && l.length && (l = l.slice(0, a), a < e.length && (l += "...")), 
        l);
    };
    function s(e) {
        let t = [];
        return e.forEach(e => {
            let n = {}, r = {};
            Object.keys(e).forEach(t => {
                t.startsWith("r_") ? r[t.replace("r_", "")] = e[t] : n[t] = e[t];
            }), n.firstImage = r, t.push(n);
        }), t;
    }
    function l(e, t, n, i = [], o) {
        return new Promise(i => r.__awaiter(this, void 0, void 0, function*() {
            try {
                if (!e) return void i([]);
                let r = (yield this.all(e)).map(e => {
                    var n, r, i;
                    e.title = e.title && a(e.title, t, !0, !1, 16);
                    const s = t ? e.content : e.contentDigest, l = !!t;
                    e.content = a(s, t, !0, l), o[e.guid] && (e.resources = o[e.guid], e.resources.forEach(n => {
                        n.resourceTextContent = a(n.resourceTextContent, t, !0, l), n.resourceTextSummary = a(n.resourceTextSummary, t, !0, l), 
                        n.resourceTransferText = a(n.resourceTransferText, t, !0, l), e.content || (e.content = n.resourceTextContent || n.resourceTextSummary || n.resourceTransferText);
                    }));
                    let c = (null === (n = e.tagNames) || void 0 === n ? void 0 : n.split(",")) || [], u = (null === (r = e.tagCreateTimes) || void 0 === r ? void 0 : r.split(",")) || [], d = (null === (i = e.tagGuids) || void 0 === i ? void 0 : i.split(",")) || [];
                    return e.tagNames = c.map((e, t) => ({
                        name: e,
                        createTime: u[t],
                        guid: d[t]
                    })).filter(function(e, t, n) {
                        return n.findIndex(t => t.guid === e.guid) === t;
                    }).sort((e, t) => e.createTime - t.createTime).map(e => e.name), e;
                }).filter(e => {
                    var n;
                    return !(t && -1 == e.title.toLowerCase().indexOf(`<em>${t}</em>`) && null === e.content) || (null === (n = e.resources) || void 0 === n ? void 0 : n.length) > 0;
                });
                n && (r = r.filter(e => {
                    var t;
                    return null === (t = e.tagNames) || void 0 === t ? void 0 : t.includes(n);
                })), i(r);
            } catch (e) {
                console.warn(e), i([]);
            }
        }));
    }
    function c(e, t) {
        return new Promise(n => r.__awaiter(this, void 0, void 0, function*() {
            try {
                if (!e) return void n([]);
                console.log("toDoSql", e);
                const r = yield this.all(e);
                console.log("todo list", JSON.stringify(r), r.length);
                const i = r.map(e => (e.content = e.content && a(e.content, t, !1, !1), e));
                n(i);
            } catch (e) {
                console.warn(e), n([]);
            }
        }));
    }
    function u(e, t) {
        return new Promise(n => r.__awaiter(this, void 0, void 0, function*() {
            try {
                if (!e) return void n([]);
                console.log("documentSql", e);
                const r = yield this.all(e);
                console.log("doc list", JSON.stringify(r), r.length);
                const i = r.map(e => (e.content = e.name && a(e.name, t, !0, !1, 21), e));
                n(i);
            } catch (e) {
                console.warn(e), n([]);
            }
        }));
    }
    t.search_getSearchResult = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                const {tagName: n, contentType: r, page: i, pageSize: o, words: a, noteSort: d} = e;
                let {keyword: h} = e;
                h && (h = h.toLowerCase());
                const p = ` LIMIT ${o + 20} OFFSET ${i * o}`;
                let f = "", _ = "", m = "", g = 1 === Number("" + ((null == d ? void 0 : d.sortField) || 0)) ? "Note.createTime" : "max(Note.stickTopTime, Note.updateTime)";
                g += 1 === Number("" + (null == d ? void 0 : d.sortOrder) || 0) ? " DESC" : " ASC";
                const v = `SELECT guid, noteGuid, resourceTextContent, resourceTextSummary, resourceTransferText from Resource\n            WHERE (resourceTextContent is not NULL AND resourceTextContent !="" AND LOWER(resourceTextContent) LIKE '%${h}%')\n              OR (resourceTextSummary is not NULL AND resourceTextSummary !="" AND LOWER(resourceTextSummary) LIKE '%${h}%')\n              OR (resourceTransferText is not NULL AND resourceTransferText !="" AND LOWER(resourceTransferText) LIKE '%${h}%')`, y = {};
                let E = [];
                const b = {};
                try {
                    (yield this.all(v)).forEach(e => {
                        y[e.guid] = e, E.push(e.noteGuid), b[e.noteGuid] ? b[e.noteGuid].push(e) : b[e.noteGuid] = [ e ];
                    }), E = [ ...new Set(E) ];
                } catch (e) {
                    console.log(e, "查询resource报错");
                }
                const w = {
                    select: `\n            SELECT \n                Note.guid, \n                Note.deleted, \n                Note.stickTop, \n                Note.title, \n                Note.encryptType, \n                Note.contentDigest, \n                Note.alarmTime, \n                Note.updateTime, \n                Note.createTime, \n                Note.importantLevel, \n                Note.type, \n                Note.ex3 AS conflictTime, \n                Note.syncProtocolVersion, \n                Note.noteBookGuid,\n                ${h ? "Note.contentNote AS content," : ""} \n                GROUP_CONCAT(Tag.name, ',') AS tagNames, \n                GROUP_CONCAT(Tag.createTime, ',') AS tagCreateTimes, \n                GROUP_CONCAT(Tag.guid, ',') AS tagGuids,\n                R.guid AS r_guid, \n                R.mime AS r_mime, \n                R.resourceKey AS r_resourceKey, \n                R.domainAddr AS r_domainAddr, \n                R.fileID AS r_fileID, \n                R.sort AS r_sort, \n                R.name AS r_name,\n                NB.nameNew AS noteBookName,\n                NB.iconColor AS noteBookColor\n            FROM NOTE \n            LEFT JOIN NoteBook NB ON Note.noteBookGuid = NB.guid\n            LEFT JOIN (\n                SELECT *, \n                    MIN(sort) \n                FROM Resource \n                WHERE mime IN ('webp', 'jpeg', 'jpg', 'png', 'bmp', 'gif', 'ico', 'svg', 'table', 'hdwPic', 'webm', 'mp4') \n                AND (category < 10 OR category > 20) \n                AND deleted = 1 \n                GROUP BY noteGuid\n            ) AS R ON Note.guid = R.NoteGuid\n            `,
                    fromInnerJoin: "INNER JOIN Tag ON Tag.noteGuid = Note.guid AND Tag.deleted = 1",
                    fromLeftJoin: "LEFT JOIN Tag ON Tag.noteGuid = Note.guid AND Tag.deleted = 1",
                    like: `(title is not NULL AND title !="" AND LOWER(title) LIKE '%${h}%') OR LOWER(content) LIKE '%${h}%'` + (a && a.length > 0 ? ` OR (content is not NULL AND content !="" AND ${a.map(e => "LOWER(content) LIKE '%" + e + "%'").join(" OR ")})\n              OR (title is not NULL AND title !="" AND ${a.map(e => "LOWER(title) LIKE '%" + e + "%'").join(" OR ")})` : "") + (E.length > 0 ? ` OR Note.guid IN (${E.map(e => `'${e}'`).join(",")})` : ""),
                    order: " ORDER BY Note.deleted DESC, Note.stickTop DESC, " + g
                };
                if (n) f += w.select, f += `\n            ${w.fromInnerJoin}\n            WHERE Note.deleted != -1\n            `, 
                h && (f += "AND " + w.like), f += "GROUP BY Note.guid", f += w.order, p && (f += p), 
                f += ";"; else if (r) {
                    if (![ "todo", "document" ].includes(r.key)) {
                        f += w.select;
                        let e = ` ${w.fromLeftJoin}, Resource WHERE Note.deleted != -1 AND Resource.deleted = 1 AND Resource.noteGuid = Note.guid `;
                        switch (r.key) {
                          case "graffiti":
                          case "video":
                          case "audio":
                          case "attenment":
                            f += `${e} AND Resource.category = ${r.category}`;
                            break;

                          case "table":
                            f += `${e} AND (Resource.category = ${r.category} OR Resource.category = 0 AND Resource.mime='table')`;
                            break;

                          case "picAndvideo":
                          case "recording":
                            f += `${e} AND (Resource.category = ${r.category} OR Resource.category = 0 AND \n                            Resource.mime in ('${(r.mimeList || []).map(e => e).join("','")}'  ))`;
                            break;

                          case "reminder":
                            f += ` ${w.fromLeftJoin} WHERE Note.deleted != -1 AND alarmTime > 0 `;
                            break;

                          case "hdw":
                            f += ` ${w.fromLeftJoin} WHERE Note.deleted != -1 AND Note.type == 100 `;
                            break;

                          default:
                            f += ` ${w.fromLeftJoin} WHERE Note.deleted != -1 `;
                        }
                        h && (f += ` AND (${w.like})`), f += " GROUP BY Note.guid", f += w.order, p && (f += p), 
                        f += ";";
                    }
                } else h && (f += w.select, f += `\n                ${w.fromLeftJoin}\n                WHERE Note.deleted != -1 AND (${w.like})\n                GROUP BY Note.guid\n                `, 
                f += w.order, p && (f += p), f += ";");
                if (console.log("noteSql>>>", f), h && (!r || "todo" === r.key || "reminder" === r.key) && !n || r && "todo" === r.key || r && "reminder" === r.key) {
                    let t;
                    switch (_ += "\n            SELECT guid, deleted, contentToDo as content, type as todoType, bgColor, sort, reminderTime as alarmTime, alarmRepeatRule, categoryGuid, dueTimeType\n            FROM ToDo\n            ", 
                    h && r && r.key ? (_ += `WHERE deleted = 1 AND todoType IN (0, 1) AND LOWER(content) LIKE '%${h}%'`, 
                    "reminder" === r.key && (_ += " AND reminderTime > 0")) : r && r.key ? (_ += "WHERE deleted = 1 AND todoType IN (0, 1)", 
                    "reminder" === r.key && (_ += " AND reminderTime > 0")) : _ += `\n                WHERE deleted = 1 AND todoType IN (0, 1) AND (\n                  LOWER(content) LIKE '%${h}%'\n                  ${a.length > 0 ? " OR" + a.map(e => "LOWER(content) LIKE '%" + e + "%'").join(" OR ") : ""}\n            )`, 
                    e.todoSort.sortField) {
                      case 0:
                        t = "reminderTime";
                        break;

                      case 1:
                        t = "createTime";
                        break;

                      case 2:
                        t = "sort";
                    }
                    switch (e.todoSort.sortOrder) {
                      case 0:
                        t += " ASC";
                        break;

                      case 1:
                        t += " DESC";
                    }
                    _ += `\n            ORDER BY todoType ASC, ${t}\n            `, p && (_ += p), _ += ";";
                }
                (h && (!r || "document" === r.key) && !n || r && "document" === r.key) && (m += `\n            SELECT guid, deleted, name, updateTime, documentSize, mime\n            FROM Document\n            WHERE deleted != -1 ${h ? `AND (\n              (name is not NULL AND LOWER(name) LIKE '%${h}%')\n              ${a.length > 0 ? ` OR (name is not NULL AND name !="" AND ${a.map(e => "LOWER(name) LIKE '%" + e + "%'").join(" OR ")})` : ""})` : ""}\n             ORDER BY deleted DESC, updateTime DESC, createTime DESC`, 
                p && (m += p), m += ";");
                const S = {};
                return S.page = i, S.pageSize = o, S.hasMore = {}, new Promise(i => {
                    Promise.all([ l.call(t, f, h, n, a, b), e.notSearchTodo ? Promise.resolve([]) : c.call(t, _, h, a), u.call(t, m, h, a) ]).then(e => {
                        e[0].length > o ? (S.notes = s(e[0].slice(0, o)), S.hasMore.note = !0) : (S.notes = s(e[0]), 
                        r && "note" === r.key && (S.hasMore.note = !1)), e[1].length > o ? (S.todos = e[1].slice(0, o), 
                        S.hasMore.todo = !0) : (S.todos = e[1], r && "todo" === r.key && (S.hasMore.todo = !1)), 
                        e[2].length > o ? (S.documents = e[2].slice(0, o), S.hasMore.document = !0) : (S.documents = e[2], 
                        r && "document" === r.key && (S.hasMore.document = !1)), i(S);
                    }).catch(e => {
                        console.warn(e), S.notes = [], S.todos = [], S.documents = [], i(S);
                    });
                });
            } catch (e) {
                throw new Error(e);
            }
        });
    }, t.get_tags = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "\n        SELECT name \n        FROM Tag AS t LEFT JOIN Note AS n\n        ON n.guid = t.noteGuid\n        WHERE t.deleted = 1 AND n.deleted IN (0, 1) AND t.noteGuid is not NULL\n            ";
                return (yield e.all(t, [])).map(e => e.name);
            } catch (e) {
                throw new Error("expunge note failed");
            }
        });
    }, t.search_getExistsType = function() {
        return r.__awaiter(this, void 0, void 0, function*() {
            const e = this;
            try {
                const t = "SELECT type from Note where deleted != -1 GROUP by type";
                return (yield e.all(t, [])).map(e => e.type);
            } catch (e) {
                throw new Error("getExistsType note failed");
            }
        });
    }, t.getRealLenOfHl = function(e) {
        return (e = (e = e.replace(/\<em\>/g, "")).replace(/\<\/em\>/g, "")).length;
    };
}
