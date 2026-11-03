// analysis/pretty/main.js:13459; webpack module 64
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = n(220), s = r.__importDefault(n(80)), l = n(221), c = "chat_content", u = "chat_content_file";
    class d extends i.default {
        constructor(e) {
            super(e);
        }
        static getInstance() {
            return this.instance || (this.instance = new d(o.V_TALK_DB)), this.instance;
        }
        initTables() {
            return r.__awaiter(this, void 0, void 0, function*() {
                const e = a.vTalkTables.map(e => r.__awaiter(this, void 0, void 0, function*() {
                    return yield this.db.exec(e);
                }));
                yield Promise.all(e);
            });
        }
        checkColExist(e, t) {
            return new Promise((n, i) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const r = "PRAGMA table_info(" + e + ")";
                    this.db.all(r, (e, r) => {
                        if (e) s.default.commonLog("[db]checkColExist PRAGMA:" + e, "error"), i(!1); else {
                            const e = r.some(e => e.name === t);
                            n(e);
                        }
                    });
                } catch (e) {
                    s.default.commonLog("[db]checkColExist uncaughtException:" + e, "error"), i(!1);
                }
            }));
        }
        checkAndUpdateCols() {
            return r.__awaiter(this, void 0, void 0, function*() {
                const {tableName: e, newColsInfo: t} = a.newContentColsConf, {tableName: n, newColsInfo: i} = a.newFileColsConf, o = t.map(t => r.__awaiter(this, void 0, void 0, function*() {
                    const {colName: n, colType: r, defaultVal: i, notNull: o} = t, a = `alter table ${e} add column ${n} ${r} ${o ? "NOT NULL DEFAULT " + i : ""}`;
                    return (yield this.checkColExist(e, n)) ? void 0 : yield this.db.exec(a);
                })), l = i.map(e => r.__awaiter(this, void 0, void 0, function*() {
                    const {colName: t, colType: r, defaultVal: i, notNull: o} = e, a = `alter table ${n} add column ${t} ${r} ${o ? "NOT NULL DEFAULT " + i : ""}`;
                    return (yield this.checkColExist(n, t)) ? void 0 : yield this.db.exec(a);
                }));
                try {
                    yield Promise.all([ ...o, ...l ]);
                } catch (e) {
                    s.default.commonLog("[db] checkAndUpdateCols:" + e, "error");
                }
            });
        }
        getUserSpecificSql() {
            let {openid: e} = l.getAuthInfo();
            return `open_id = "${e}" `;
        }
        addContent(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]addContent"), yield this.insert(c, e), t();
                } catch (e) {
                    s.default.commonLog("[db]addContent uncaughtException:" + e, "error"), n();
                }
            }));
        }
        updateContent(e, t) {
            return new Promise((n, i) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]updateContent " + JSON.stringify(e));
                    const r = [], i = [];
                    Object.keys(e).map(t => {
                        "id" !== t && (r.push(t), i.push(e[t]));
                    });
                    const o = r.map(e => e + " = ?"), a = `UPDATE ${c} SET ${o.join(",")}  WHERE ${this.getUserSpecificSql()} AND request_id = '${t.request_id}' AND category = '${t.category}'`;
                    yield this.run(a, i), n("success");
                } catch (e) {
                    s.default.commonLog("[db]updateContent uncaughtException:" + e, "error"), i();
                }
            }));
        }
        getRecordCount(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]getRecordCount");
                    const n = `SELECT count(*) as count from chat_content where ${this.getUserSpecificSql()} AND deleted = 0 and session_id != '${e}' `;
                    let r = yield this.all(n);
                    t(r[0].count);
                } catch (e) {
                    s.default.commonLog("[db]getRecordCount uncaughtException:" + e, "error"), n();
                }
            }));
        }
        getMinCreTimeItem(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (null === e) return t(null);
                    s.default.commonLog("[db]getMinCreTimeItem");
                    const n = `SELECT *\n          FROM chat_content\n          WHERE ${this.getUserSpecificSql()} AND request_id = '${e}'\n          ORDER BY create_time ASC\n          LIMIT 1`;
                    let r = yield this.all(n);
                    r && r.length > 0 ? t(r[0]) : t(null);
                } catch (e) {
                    s.default.commonLog("[db]getMinCreTimeItem uncaughtException:" + e, "error"), n(e);
                }
            }));
        }
        getRecordList(e, t) {
            return new Promise((n, i) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]getRecordList");
                    const {sid: r, pageNum: i = 0, pageSize: o = 10} = e;
                    let a = i, l = o;
                    0 !== i && (a = i * o, l = o);
                    let c = "WHERE " + this.getUserSpecificSql();
                    null != r && (c += ` AND session_id = "${r}"`), null != t && (c += " AND create_time < " + t);
                    let u = `SELECT c.*, f.file_url, f.file_path, f.raw_file_url, f.raw_local_path\n            FROM (SELECT * from chat_content ${c} ORDER BY create_time DESC LIMIT ${a}, ${l}) as c\n              LEFT JOIN chat_content_file f\n              ON c.request_id = f.request_id\n                AND c.category = f.category\n            WHERE c.deleted = 0\n              AND (f.deleted = 0\n                OR f.request_id IS NULL)`;
                    console.log("sql", u);
                    let d = yield this.all(u);
                    n(d);
                } catch (e) {
                    s.default.commonLog("[db]getRecordCount uncaughtException:" + e, "error"), i();
                }
            }));
        }
        deleteRecord(e, t) {
            return new Promise((n, i) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]getRecordCount"), this.exec("BEGIN IMMEDIATE;");
                    const r = `delete from chat_content WHERE ${this.getUserSpecificSql()} AND request_id = "${e}" and category = "${t}"`, i = `delete from chat_content_file WHERE ${this.getUserSpecificSql()} AND request_id = "${e}" and category = "${t}"`;
                    yield this.all(r), yield this.all(i), yield this.exec("COMMIT;"), n(!0);
                } catch (e) {
                    this.exec("ROLLBACK;"), s.default.commonLog("[db]getRecordCount uncaughtException:" + e, "error"), 
                    i();
                }
            }));
        }
        addContentFile(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]addContentFile"), yield this.insert(u, e), t();
                } catch (e) {
                    s.default.commonLog("[db]addContentFile uncaughtException:" + e, "error"), n();
                }
            }));
        }
        updateExtra(e, t) {
            return new Promise((n, i) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]addContentFile");
                    const r = `UPDATE ${c} SET extra = ? WHERE ${this.getUserSpecificSql()} AND request_id = '${t.request_id}' AND category = '${t.category}'`;
                    yield this.run(r, [ e ]), n("success");
                } catch (e) {
                    s.default.commonLog("[db]addContentFile uncaughtException:" + e, "error"), i("error");
                }
            }));
        }
        clearAllByOpenid(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    s.default.commonLog("[db]clearAllByOpenid"), this.exec("BEGIN IMMEDIATE;");
                    const n = `delete from chat_content WHERE open_id = "${e}"`, r = `delete from chat_content_file WHERE open_id = "${e}"`;
                    yield this.all(n), yield this.all(r), yield this.exec("COMMIT;"), t(!0);
                } catch (e) {
                    this.exec("ROLLBACK;"), s.default.commonLog("[db]clearAllByOpenid uncaughtException:" + e, "error"), 
                    n(!1);
                }
            }));
        }
    }
    e.exports = d.getInstance();
}
