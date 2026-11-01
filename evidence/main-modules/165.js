// analysis/pretty/main.js:23483; webpack module 165
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53);
    class a extends i.default {
        constructor(e) {
            super(e), this.recordTableName = "TransferRecord", this.taskTableName = "TransferTask";
        }
        static getInstance() {
            return this.instance || (this.instance = new a(o.TRANSFER_RECORD_DB)), this.instance;
        }
        initTransferRecordTable() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[fm] initTransferRecordTable start");
                try {
                    const e = yield this.tableIsExist(this.recordTableName);
                    if (e) global.__log.info("[fm] initTransferRecordTable rows exist."), this.checkAndAddColumn(e, "isDirectory", "INT", this.recordTableName), 
                    this.checkAndAddColumn(e, "phonePath", "TEXT", this.recordTableName), this.checkAndAddColumn(e, "deviceType", "TEXT", this.recordTableName), 
                    this.checkAndAddColumn(e, "fromModule", "TEXT", this.recordTableName), this.checkAndAddColumn(e, "taskId", "TEXT", this.recordTableName), 
                    this.checkAndAddColumn(e, "uploadStatus", "INTEGER DEFAULT NULL", this.recordTableName), 
                    this.checkAndAddColumn(e, "fileType", "TEXT", this.recordTableName); else {
                        global.__log.info("[fm] initTransferRecordTable no rows");
                        const e = "CREATE TABLE IF NOT EXISTS TransferRecord \n        (id text primary key, fileName TEXT, fileType TEXT, originName TEXT, ts INT, fileSize INT, fromDevice TEXT, toDevice TEXT, status INT, savePath TEXT, deviceName TEXT, deviceId TEXT, openId TEXT, isDirectory INT, phonePath TEXT, deviceType TEXT, fromModule TEXT, taskId TEXT)";
                        yield new Promise((t, n) => {
                            this.db.exec(e, e => {
                                e ? n(e) : t(void 0);
                            });
                        });
                    }
                } catch (e) {
                    global.__log.info("初始化传输记录表失败:" + e.message);
                }
            });
        }
        initTaskTable() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[fm] initTaskTable start");
                try {
                    if (yield this.tableIsExist(this.taskTableName)) global.__log.info("[fm] initTaskTable rows exist."); else {
                        global.__log.info("[fm] initTaskTable no rows");
                        const e = `CREATE TABLE IF NOT EXISTS ${this.taskTableName} (\n          taskId TEXT PRIMARY KEY,\n          freeTaskId TEXT,\n          taskName TEXT,\n          taskType TEXT,\n          fileTypes TEXT,\n          sendEntry INTEGER,\n          totalCount INTEGER DEFAULT 0,\n          completedCount INTEGER DEFAULT 0,\n          failedCount INTEGER DEFAULT 0,\n          status INTEGER DEFAULT 0,\n          createTime INTEGER,\n          updateTime INTEGER,\n          openId TEXT,\n          deviceId TEXT,\n          fromDevice TEXT,\n          toDevice TEXT\n        )`;
                        yield new Promise((t, n) => {
                            this.db.exec(e, e => {
                                e ? n(e) : t(void 0);
                            });
                        }), global.__log.info("[fm] initTaskTable completed");
                    }
                    return !0;
                } catch (e) {
                    return global.__log.info("初始化任务表失败:" + e.message), Promise.reject(e);
                }
            });
        }
        tableIsExist(e) {
            return new Promise((t, n) => {
                global.__log.info("[fm][tableIsExist] start"), this.db.all(`PRAGMA table_info(${e})`, (r, i) => {
                    if (r) return global.__log.info(`[fm][tableIsExist] ${e} err: ${r.message}`), void n(r);
                    i.length ? t(i) : (global.__log.info(`[fm][tableIsExist] ${e}, no rows`), t(!1));
                });
            });
        }
        checkAndAddColumn(e, t, n, r) {
            e.some(e => e.name === t) ? global.__log.info(`[fm][checkAndAddColumn] ${t} exist`) : (global.__log.info(`[fm][checkAndAddColumn] ${t} no exist`), 
            this.db.run(`ALTER TABLE ${r} ADD COLUMN ${t} ${n}`));
        }
        insertTransferTasks(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (e && 0 !== e.length) try {
                    return yield this.insertMany(this.taskTableName, e), yield this.insertTransferRecord(t), 
                    !0;
                } catch (t) {
                    return global.__log.error(`新增传输任务失败 (taskId: ${null === (n = e[0]) || void 0 === n ? void 0 : n.taskId}): ` + t.message), 
                    Promise.reject(t);
                }
            });
        }
        updateTransferTask(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return e && e.taskId ? yield this.update(this.taskTableName, e, "taskId") : Promise.reject("任务ID不能为空");
            });
        }
        queryTransferTaskById(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!e) return null;
                const t = `SELECT * FROM ${this.taskTableName} WHERE taskId = ?`;
                try {
                    const n = yield new Promise((n, r) => {
                        this.db.all(t, [ e ], (e, t) => {
                            e ? r(e) : n(t);
                        });
                    });
                    return n.length > 0 ? n[0] : null;
                } catch (t) {
                    return global.__log.error(`查询任务失败 (taskId: ${e}): ` + t.message), Promise.reject(t);
                }
            });
        }
        queryTransferTasks(e = {}, t = 1, n = 20) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = (t - 1) * n;
                let i = "WHERE 1=1";
                const o = [];
                e.openId && (i += " AND openId = ?", o.push(e.openId)), e.deviceId && (i += " AND deviceId = ?", 
                o.push(e.deviceId)), void 0 !== e.status && (i += " AND status = ?", o.push(e.status)), 
                e.taskType && (i += " AND taskType = ?", o.push(e.taskType));
                const a = `\n      SELECT * FROM ${this.taskTableName} \n      ${i} \n      ORDER BY createTime DESC \n      LIMIT ? OFFSET ?\n    `;
                o.push(n, r);
                try {
                    const e = yield new Promise((e, t) => {
                        this.db.all(a, o, (n, r) => {
                            n ? t(n) : e(r);
                        });
                    });
                    if (0 === e.length) return global.__log.info("[fm] 未找到匹配的任务记录"), [];
                    const t = e.map(e => e.taskId), n = `\n        SELECT * FROM TransferRecord \n        WHERE taskId IN (${t.map(() => "?").join(",")})\n        ORDER BY createTime ASC\n      `, r = (yield new Promise((e, r) => {
                        this.db.all(n, t, (t, n) => {
                            t ? r(t) : e(n);
                        });
                    })).reduce((e, t) => (e[t.taskId] || (e[t.taskId] = []), e[t.taskId].push(t), e), {}), i = e.map(e => Object.assign(Object.assign({}, e), {
                        files: r[e.taskId] || []
                    }));
                    return global.__log.info(`[fm] 成功查询到 ${i.length} 个任务及其文件记录`), i;
                } catch (e) {
                    return global.__log.error("查询任务列表失败: " + e.message), Promise.reject(e);
                }
            });
        }
        deleteTransferTask(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!e) return Promise.reject("任务ID不能为空");
                const t = `DELETE FROM ${this.taskTableName} WHERE taskId = ?`;
                try {
                    yield new Promise((n, r) => {
                        this.db.run(t, [ e ], function(e) {
                            e ? r(e) : n();
                        });
                    }), global.__log.info("成功删除任务: " + e);
                } catch (t) {
                    return global.__log.error(`删除任务失败 (taskId: ${e}): ` + t.message), Promise.reject(t);
                }
            });
        }
        batchDeleteTransferTasks(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                e && 0 !== e.length && (yield this.batchDelete(this.taskTableName, e), global.__log.info(`批量删除 ${e.length} 个任务`));
            });
        }
        queryTransferRecord(e, t, n, i = 50) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = `SELECT id, fileName, fileType, originName, ts, fileSize, fromDevice, toDevice, status, savePath, deviceName, deviceId, openId, isDirectory, phonePath, deviceType, fromModule, taskId FROM TransferRecord WHERE openId = '${e}' AND ${"receive" == t ? "toDevice" : "fromDevice"} = 'pc' ORDER BY ts DESC LIMIT ${i} OFFSET (${n}) * ${i}`, o = yield this.all(r);
                return this.revertHandleRecords(o);
            });
        }
        queryIdByTaskId(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = `SELECT id FROM TransferRecord WHERE openId = '${e}' AND taskId = '${t}' ORDER BY ts ASC`, r = yield this.all(n);
                return this.revertHandleRecords(r);
            });
        }
        insertTransferRecord(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                yield this.insertMany(this.recordTableName, this.handleRecords(e));
            });
        }
        updateTransferRecord(e) {
            this.update(this.recordTableName, this.handleRecords(e)[0]);
        }
        updateTransferRecordList(e) {
            this.updateMany(this.recordTableName, this.handleRecords(e));
        }
        batchDeleteTransferRecords(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = e.map(e => e.id || "");
                return yield this.batchDelete(this.recordTableName, t);
            });
        }
        clearRecords(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = `DELETE FROM TransferRecord WHERE ${"receive" == e ? "toDevice" : "fromDevice"} = 'pc'`;
                return yield this.all(t);
            });
        }
        clearEntireTable() {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield this.all("DELETE FROM TransferRecord WHERE 1 = 1");
            });
        }
        deleteRecordsOverOneMonth(e) {
            const t = `DELETE FROM TransferRecord WHERE ${e} > ts`;
            this.all(t);
        }
        deleteDeviceTransferRecords(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let n = `DELETE FROM ${this.recordTableName} WHERE deviceId IN ('${e}', '${t}')`;
                yield this.db.exec(n);
            });
        }
        handleRecords(e) {
            return e.map(e => {
                const t = Object.assign({}, e);
                return delete t.from, delete t.to, Object.assign({}, t, {
                    fromDevice: e.from,
                    toDevice: e.to
                });
            });
        }
        revertHandleRecords(e) {
            return e.map(e => {
                const t = Object.assign({}, e);
                return delete t.fromDevice, delete t.toDevice, Object.assign({}, t, {
                    from: e.fromDevice,
                    to: e.toDevice
                });
            });
        }
        queryDeviceRecord(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = `SELECT DISTINCT deviceName, deviceID FROM TransferRecord WHERE openId = '${e}' AND ${"receive" == t ? "toDevice" : "fromDevice"} = 'pc' ORDER BY ts ASC`;
                return yield this.all(n);
            });
        }
    }
    e.exports = a.getInstance();
}
