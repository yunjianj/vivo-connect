// analysis/pretty/main.js:13906; webpack module 70
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(1302)), o = r.__importDefault(n(6)), a = r.__importStar(n(8)), s = r.__importDefault(n(25)), l = r.__importDefault(n(80)), c = () => "win32" === process.platform ? "\\" : "/", u = n(1), d = n(4), {app: h} = n(2), p = {};
    class f {
        constructor(e) {
            if (this.userInfo = o.default.getItem("userInfo"), this.connectionAttempts = 0, 
            !e) throw "数据库不存在";
            p[e] ? this.db = p[e] : this.connect(e);
        }
        connect(e) {
            const t = "darwin" === a.platform(), r = ("renderer" === process.type ? n(146).app : h).getPath("appData"), i = r, o = `pcsuite${c()}database`, s = u.join(t ? i : r, o);
            return new Promise((t, n) => {
                var r;
                let i = `${s}${c()}${e}`;
                console.log("[framework] connect database: " + i), l.default.commonLog("[framework] connect database: " + i), 
                this.db = p[e] = new f.sqlite3.Database(s ? "" + i : e, r => {
                    null === r ? (l.default.commonLog("[framework] connect database success: " + e), 
                    t(r)) : (l.default.commonLog("[framework] connect database error: " + r), console.error("[framework] connect database error:" + r), 
                    d.existsSync(i) || l.default.commonLog("[framework] connect database not exist: " + i), 
                    l.default.commonLog("[framework] Retrying database connection...: " + this.connectionAttempts), 
                    setTimeout(this.connect.bind(this, e), 5e3), n(r));
                }), this.db && (null === (r = this.db) || void 0 === r || r.configure("busyTimeout", 6e4));
            });
        }
        all(e) {
            return new Promise((t, n) => {
                this.db.all(e, (e, r) => {
                    e ? n(e) : t(r);
                });
            });
        }
        allWithParams(e, t) {
            return new Promise((n, r) => {
                this.db.all(e, t, (e, t) => {
                    e ? r(e) : n(t);
                });
            });
        }
        queryPage(e, t) {
            const {pageNum: n = 0, pageSize: r = 10} = t;
            let i = n, o = r;
            return 0 !== n && (i = n * r, o = (n + 1) * r), new Promise((t, n) => {
                this.db.all(`SELECT * FROM ${e} LIMIT ${i},${o}`, (e, r) => {
                    e ? n(e) : t(r);
                });
            });
        }
        run(e, t) {
            return new Promise((n, r) => {
                try {
                    this.db.run(e, t, (e, t) => {
                        null === e ? n(t || []) : (console.log(e), r(this.errorHandle(e)));
                    });
                } catch (e) {
                    console.error("数据库[run]操作异常捕获:", e), r(this.errorHandle(e));
                }
            });
        }
        exec(e) {
            return new Promise((t, n) => {
                try {
                    this.db.exec(e, e => {
                        null === e ? t(e) : (console.warn(e), n(e));
                    });
                } catch (e) {
                    console.error("数据库[exec]操作异常捕获:", e), n(e);
                }
            });
        }
        get(e, t) {
            return new Promise((n, r) => {
                try {
                    this.db.get(e, t, (e, t) => {
                        e ? r(e) : n(t);
                    });
                } catch (e) {
                    console.error("数据库[get]操作异常捕获:", e), r(e);
                }
            });
        }
        find(e, t, n) {
            const r = `SELECT * FROM ${e} WHERE ${n || "id"} = ? `;
            return new Promise((e, n) => {
                this.db.get(r, t, (t, r) => {
                    t ? n(t) : e(r);
                });
            });
        }
        insert(e, t) {
            const n = Object.keys(t), r = Object.values(t), i = n.map(() => "?"), o = `INSERT INTO ${e} (${n.join(",")}) VALUES (${i.join(",")})`;
            return this.run(o, [ ...r ]).then(e => this.formatData(e, "SAVE_CODE"));
        }
        insertWithResult(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = Object.keys(t), r = Object.values(t), i = n.map(() => "?"), o = `INSERT INTO ${e} (${n.join(",")}) VALUES (${i.join(",")})`;
                return new Promise((e, t) => {
                    this.db.serialize(() => {
                        this.db.run(o, [ ...r ], () => {
                            this.db.get("SELECT last_insert_rowid() as eventLastId", {}, (n, r) => {
                                n ? t(n) : e(r.eventLastId);
                            });
                        });
                    });
                });
            });
        }
        insertMany(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return !t || t.length <= 0 ? [] : new Promise((n, r) => {
                    try {
                        const r = Object.keys(t[0]), i = r.map(() => "?");
                        this.db.serialize(() => {
                            this.db.run("BEGIN IMMEDIATE");
                            const o = this.db.prepare(`INSERT INTO ${e} (${r.join(",")}) VALUES (${i.join(",")})`);
                            t.forEach(e => {
                                const t = Object.values(e);
                                o.run(...t);
                            }), o.finalize(), this.db.run("COMMIT", {}, e => {
                                n(e || []);
                            });
                        });
                    } catch (e) {
                        console.error("数据库[insertMany]操作异常捕获:", e), r(e);
                    }
                });
            });
        }
        batchInsert(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return !t || t.length <= 0 ? [] : new Promise(n => {
                    const r = Object.keys(t[0]), i = r.map(() => "?");
                    this.db.serialize(() => {
                        const o = this.db.prepare(`INSERT or REPLACE INTO ${e} (${r.join(",")}) VALUES (${i.join(",")})`);
                        t.forEach(e => {
                            const t = Object.values(e);
                            o.run(...t);
                        }), o.finalize(), n({});
                    });
                });
            });
        }
        batchDelete(e, t) {
            return !t || t.length <= 0 ? [] : new Promise((n, r) => {
                try {
                    this.db.run("BEGIN IMMEDIATE");
                    const r = t.map(() => "?"), i = `DELETE FROM ${e} WHERE id in (${r.join(",")})`;
                    this.run(i, t).then(e => this.formatData(e, "DELETE_CODE")), this.db.run("COMMIT", {}, e => {
                        n(e || []);
                    });
                } catch (e) {
                    console.error("数据库[batchDelete]操作异常捕获:", e), r(e);
                }
            });
        }
        update(e, t, n) {
            const r = n || "id", i = [], o = [];
            Object.keys(t).filter(e => e !== r).map(e => {
                i.push(e), o.push(t[e]);
            });
            const a = `UPDATE ${e} SET ${i.map(e => e + " = ?").join(",")} WHERE  ${r} = '${t[r]}'`;
            return this.run(a, o).then(e => this.formatData(e, "UPDATE_CODE"));
        }
        updateMany(e, t, n = "id") {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (t && 0 !== t.length) try {
                    yield new Promise((r, i) => {
                        this.db.serialize(() => {
                            this.db.run("BEGIN TRANSACTION"), t.forEach(t => {
                                if (!t[n]) return void global.__log.warn("跳过无主键的记录: " + JSON.stringify(t));
                                const r = Object.keys(t).filter(e => e !== n), o = r.map(e => e + " = ?").join(", "), a = r.map(e => t[e]);
                                a.push(t[n]);
                                const s = `UPDATE ${e} SET ${o} WHERE ${n} = ?`;
                                this.db.run(s, a, e => {
                                    e && (global.__log.error("批量更新失败: " + e.message), i(e));
                                });
                            }), this.db.run("COMMIT", e => {
                                e ? i(e) : r();
                            });
                        });
                    }), global.__log.info(`成功批量更新 ${t.length} 条记录`);
                } catch (e) {
                    throw this.db.run("ROLLBACK"), global.__log.error("批量更新失败: " + e.message), e;
                }
            });
        }
        delete(e, t, n) {
            try {
                const r = `DELETE FROM ${e} WHERE ${n || "id"} = ?`;
                return this.run(r, t).then(e => this.formatData(e, "DELETE_CODE"));
            } catch (e) {
                return this.formatData(e, "SQL_ERROR_CODE");
            }
        }
        formatData(e, t) {
            return {
                data: e,
                code: t,
                message: t ? i.default[t] : i.default.SUCCESS_CODE
            };
        }
        errorHandle(e) {
            return console.log("数据库操作:" + e), e;
        }
        query(e, t, n) {
            let r = [ "Select" ];
            s.default.isString(e) && r.push(e);
        }
    }
    t.default = f, f.sqlite3 = n(384).verbose();
}
