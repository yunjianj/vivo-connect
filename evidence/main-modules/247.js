// analysis/pretty/main.js:30228; webpack module 247
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = r.__importDefault(n(1675)), s = n(786), l = r.__importDefault(n(80));
    class c extends i.default {
        constructor(e) {
            super(e), this.db.configure("busyTimeout", 5e3);
        }
        getReportList() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = yield this.queryPage(o.BuriedPointDataBase.REPORT_TABLE_NAME, {
                        pageNum: 0,
                        pageSize: s.BATCH_SIZE
                    });
                    return l.default.commonLog("getReportList length:" + (null == e ? void 0 : e.length)), 
                    e;
                } catch (e) {
                    l.default.commonLog("getReportList uncaughtException:" + e, "error"), console.error("埋点上报异常", e);
                }
            });
        }
        batchUpdateReportStaus() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    l.default.commonLog("batchUpdateReportStaus BEGIN"), this.exec("BEGIN IMMEDIATE;"), 
                    yield this.all(a.default.createUpdateBuriedPointSql()), this.exec("COMMIT;");
                } catch (e) {
                    throw yield this.exec("ROLLBACK;"), l.default.commonLog("batchUpdateReportStaus uncaughtException:" + e, "error"), 
                    new Error("updateReport failed:" + e);
                }
            });
        }
        batchDeleteReportStaus(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return new Promise((t, n) => {
                    try {
                        const r = e.map(() => "?").join(","), i = e.map(e => e._id);
                        this.exec("BEGIN IMMEDIATE;"), this.db.run(a.default.createRemoveBuriedPointSql(r), i, r => {
                            if (r) return l.default.commonLog("[db]batchDeleteReportStaus:error:" + r), void n("report db delete error:" + r);
                            l.default.commonLog("[db]batchDeleteReportStaus:success:" + e.length), this.exec("COMMIT;"), 
                            t();
                        });
                    } catch (e) {
                        this.exec("ROLLBACK;"), l.default.commonLog("[db]batchDeleteReportStaus uncaughtException:" + e, "error"), 
                        n("report db delete catch error:" + e);
                    }
                });
            });
        }
        batchInsertReportStaus(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    l.default.commonLog("batchInsertReportStaus"), this.exec("BEGIN IMMEDIATE;"), yield this.batchInsert(o.BuriedPointDataBase.REPORT_TABLE_NAME, e), 
                    yield this.exec("COMMIT;"), t();
                } catch (e) {
                    l.default.commonLog("[db]batchInsertReportStaus uncaughtException:" + e, "error"), 
                    n("report db insert catch error:" + e), this.exec("ROLLBACK;");
                }
            }));
        }
        getRepeatReportList() {
            return l.default.commonLog("getRepeatReportList"), new Promise((e, t) => {
                try {
                    const n = `\n                SELECT COUNT(*) as count, eventID, createTime\n                FROM ${o.BuriedPointDataBase.REPORT_TABLE_NAME}\n                GROUP BY eventID, createTime\n                HAVING COUNT(*) >= 2\n                ORDER BY count DESC\n                LIMIT 10000\n                `;
                    this.db.all(n, [], (n, r) => {
                        if (n) return l.default.commonLog("getRepeatReportList error: " + n), void t("report db query error:" + n);
                        l.default.commonLog("getRepeatReportList: " + r), e(r);
                    });
                } catch (e) {
                    l.default.commonLog("getRepeatReportList catch: " + e), t(e);
                }
            });
        }
    }
    const u = new c(o.BuriedPointDataBase.DATA_BASE_NAME);
    e.exports = u;
}
