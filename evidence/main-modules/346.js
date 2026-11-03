// analysis/pretty/main.js:37313; webpack module 346
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = r.__importDefault(n(6)), s = r.__importStar(n(1419)), l = r.__importStar(n(1424)), c = n(1425);
    class u extends i.default {
        constructor(e) {
            super(e), this._initPromise = this.ensureTables();
        }
        ensureReady() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return this._initPromise;
            });
        }
        ensureTables() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield new Promise((e, t) => {
                        var n;
                        null === (n = this.db) || void 0 === n || n.run("CREATE TABLE IF NOT EXISTS Insight (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            uuid TEXT NOT NULL DEFAULT ' ',\n            mFileId TEXT NOT NULL DEFAULT ' ',\n            idPhone INTEGER NOT NULL DEFAULT 0,\n            costTime INTEGER NOT NULL DEFAULT 0,\n            startTime INTEGER NOT NULL DEFAULT 0,\n            endTime INTEGER NOT NULL DEFAULT 0,\n            modifyDate INTEGER NOT NULL DEFAULT 0,\n            recreateTip INTEGER NOT NULL DEFAULT 0,\n            insightContent TEXT NOT NULL DEFAULT ' ',\n            otherData TEXT NOT NULL DEFAULT '{}'\n          )", n => n ? t(n) : e());
                    }), yield this.addColumnIfNotExists("Insight", "_insight_file_path", "TEXT"), yield this.addColumnIfNotExists("Insight", "_insight_recreate_tip", "INTEGER"), 
                    yield this.addColumnIfNotExists("Insight", "_insight_trace_id", "TEXT"), yield this.addColumnIfNotExists("Insight", "_insight_time_tip", "INTEGER"), 
                    yield this.addColumnIfNotExists("Record", "mHasAiInsight", "INTEGER DEFAULT 0"), 
                    yield this.addColumnIfNotExists("Record", "mRecordMode", "INTEGER DEFAULT -1"), 
                    yield this.addColumnIfNotExists("Record", "textArrangements", "TEXT NOT NULL DEFAULT ''"), 
                    yield new Promise((e, t) => {
                        var n;
                        null === (n = this.db) || void 0 === n || n.run("CREATE TABLE IF NOT EXISTS Outline (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            uuid TEXT NOT NULL DEFAULT ' ',\n            mFileId TEXT NOT NULL DEFAULT ' ',\n            bg INTEGER NOT NULL DEFAULT 0,\n            ed INTEGER NOT NULL DEFAULT 0,\n            mCreateTime INTEGER NOT NULL DEFAULT 0,\n            mModifyTime INTEGER NOT NULL DEFAULT 0,\n            mSaveAndroidVersion INTEGER NOT NULL DEFAULT 0,\n            outline TEXT NOT NULL DEFAULT ' ',\n            otherData TEXT NOT NULL DEFAULT '{}'\n          )", n => n ? t(n) : e());
                    }), yield this.addColumnIfNotExists("Summary", "mSummaryMarks", "TEXT NOT NULL DEFAULT ''"), 
                    yield this.addColumnIfNotExists("Summary", "mPointRelateData", "TEXT NOT NULL DEFAULT ''"), 
                    yield this.addColumnIfNotExists("Summary", "mRoleList", "TEXT NOT NULL DEFAULT ''"), 
                    yield this.addColumnIfNotExists("Summary", "scenesType", "INTEGER NOT NULL DEFAULT 1"), 
                    yield new Promise((e, t) => {
                        var n;
                        null === (n = this.db) || void 0 === n || n.run("CREATE TABLE IF NOT EXISTS TextArrangement (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            uuid TEXT NOT NULL DEFAULT ' ',\n            mFileId TEXT NOT NULL DEFAULT ' ',\n            startTime INTEGER NOT NULL DEFAULT 0,\n            endTime INTEGER NOT NULL DEFAULT 0,\n            mRecognizeItemInfoModifiedTime INTEGER NOT NULL DEFAULT 0,\n            content TEXT NOT NULL DEFAULT ' ',\n            speaker INTEGER NOT NULL DEFAULT 0,\n            mIsBackground INTEGER NOT NULL DEFAULT 0,\n            textCanConvert INTEGER NOT NULL DEFAULT 0,\n            textType INTEGER NOT NULL DEFAULT 0,\n            mSentenceId INTEGER NOT NULL DEFAULT 0,\n            mParagraphId INTEGER NOT NULL DEFAULT 0,\n            speakerName TEXT NOT NULL DEFAULT ' ',\n            speakerColor INTEGER NOT NULL DEFAULT 0,\n            isSupportSpeaker INTEGER NOT NULL DEFAULT 0,\n            isSupportNewConvert INTEGER NOT NULL DEFAULT 0,\n            convertTimeTip TEXT NOT NULL DEFAULT ' ',\n            mLanguage TEXT NOT NULL DEFAULT ' '\n          )", n => n ? t(n) : e());
                    }), yield this.addColumnIfNotExists("TextArrangement", "mLanguage", "TEXT NOT NULL DEFAULT ' '");
                } catch (e) {
                    console.error("ensureTables error", e);
                }
            });
        }
        addColumnIfNotExists(e, t, n) {
            return new Promise(r => {
                var i;
                null === (i = this.db) || void 0 === i || i.run(`ALTER TABLE ${e} ADD COLUMN ${t} ${n}`, e => {
                    r();
                });
            });
        }
        transaction(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.db.run("BEGIN");
                try {
                    const t = yield e(this);
                    return yield this.db.run("COMMIT"), t;
                } catch (e) {
                    try {
                        yield this.db.run("ROLLBACK");
                    } catch (e) {
                        console.warn("[RecordDao] ROLLBACK skipped:", e);
                    }
                    throw e;
                }
            });
        }
        getUserId() {
            return a.default.getItem("userInfo").openId;
        }
    }
    const d = Object.assign(Object.assign({}, s), l);
    Object.keys(d).forEach(e => {
        let t = d[e];
        "function" == typeof t && (t.needDirty && (t = c.DirtyRecord()(t)), u.prototype[e] = t);
    });
    const h = new u(o.Record_DB);
    console.log("RecordModule", h), e.exports = h;
}
