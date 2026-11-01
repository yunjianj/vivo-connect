// analysis/pretty/main.js:111098; webpack module 1490
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TaskDownload = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = r.__importDefault(n(43)), s = n(12), l = n(15), c = n(25), u = n(242), d = n(94), h = r.__importDefault(n(6)), p = n(96), f = n(11), _ = n(727), m = n(1493), g = n(141), v = n(141), y = n(164), E = n(1494), b = n(359), w = n(140), S = n(58);
    var T;
    !function(e) {
        e[e.SPACE_ERROR = 1] = "SPACE_ERROR";
    }(T || (T = {}));
    class A extends s.EventEmitter {
        constructor(e, t = !1) {
            var n, r;
            super(), this.files = [], this.currentFiles = [], this.totalCount = 0, this.totalSize = 0, 
            this.status = "waiting", this.downloadStatus = 3, this.concurrency = 3, this.activeRequests = new Map, 
            this.activeStreams = new Map, this.aborted = !1, this.backendTransfer = !1, this.isDownloadDeleted = !1, 
            this.isDownloadInitialed = !1, this.isFromVpush = !1, this.successFiles = [], this.failedFiles = [], 
            this.currentReceived = 0, this.currentTotal = 0, this.chunksSize = 0, this.chunksCount = 0, 
            this.isDirectory = !1, this.isError = !1, this.isInterruptedError = !1, this.isSpaceError = !1, 
            this.isNetWorkError = !1, this.sendSource = "", this.sendSourceEntry = "", this.taskStartTime = 0, 
            this.taskEndTime = 0, this.downloadTimeStart = 0, this.downloadTimeEnd = 0, this.downloadTimeTotal = 0, 
            this.defaultSavePath = "", this.errorCodeCollect = [], this.viewCount = 0, this.queue = [], 
            this.running = 0, this.cachedFileIds = [], this.alreadyWriteRecords = [], this.alreadyWriteRecordsFolderRetry = [], 
            this.lastRecord = null, this.createFolderResult = [], this.isRetry = !1, this.timeoutClose = c.debounce(this.timeoutCloseDebounce, 1e4, {
                leading: !1,
                trailing: !0
            }), this.id = e.id, this.taskId = e.taskId, this.totalCount = e.totalCount, this.totalSize = e.totalSize, 
            this.createTime = e.createTimeMillis, this.downloadStatus = e.downloadStatus, this.isFromVpush = !!t, 
            this.sendDeviceInfo = e.sendDeviceInfo, this.sendSource = e.sendSource, this.sendSourceEntry = e.sendSourceEntry, 
            this.receiveDeviceInfo = e.receiveDeviceInfo, this.defaultSavePath = h.default.getItem("receiveFilesPath") || d.getAppDownloadPath(), 
            this.progress = c.throttle(this.progress.bind(this), 300);
            const i = null === (n = e.fileTypes) || void 0 === n ? void 0 : n.split(",").length;
            this.iconType = i > 1 ? g.NOTICE_WIN_MSG_ITEM_ICON_TYPE.File : m.getIconTypeByFilePath(null === (r = e.firstFileInfo) || void 0 === r ? void 0 : r.fileName), 
            this.fileTypes = e.fileTypes, global.__log.info("[FreeTransfer] [TaskDonwload] [iconType]: " + this.iconType), 
            this.init(e, t);
        }
        init(e, t = !1) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.currentFiles = new Array(this.totalCount), this.viewCount = this.currentFiles.length, 
                this.currentTotal = this.totalSize, t) return;
                if (this.isDirectory = e.chunks.some(e => e.isFolder), this.isDirectory) this.iconType = g.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Folder; else {
                    const t = m.getIconTypeByFilePaths(e.chunks.map(e => e.fileName));
                    this.iconType = t;
                }
                const r = n(165), {openId: i} = h.default.getItem("userInfo");
                this.cachedFileIds = yield r.queryIdByTaskId(i, this.taskId), global.__log.info("[FreeTransfer] [TaskDonwload] [queryIdByTaskId]: " + JSON.stringify(this.cachedFileIds)), 
                global.__log.info("[FreeTransfer] [TaskDonwload] init taskItem: " + JSON.stringify(e)), 
                this.files = e.chunks.filter(e => !e.hasDownload).map((e, t) => ({
                    url: "",
                    fileName: e.fileName,
                    fileId: e.fileId,
                    fileSize: +(null == e ? void 0 : e.fileSize),
                    filePath: e.filePath,
                    isFolder: e.isFolder,
                    hasDownload: e.hasDownload,
                    modifiedTime: new Date(e.modifiedTime || Date.now())
                })), yield this.handleFolder(), this.currentFiles = this.files.filter(e => !e.done && !this.cachedFileIds.includes(e.fileId)), 
                this.viewCount = this.currentFiles.length, this.currentTotal = this.currentFiles.reduce((e, t) => e + (+t.fileSize || 0), 0) || this.totalSize;
            });
        }
        start() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info("[FreeTransfer] [TaskDonwload] start taskId: " + this.taskId), 
                "waiting" !== this.status) return;
                if (this.taskStartTime = this.taskStartTime || (new Date).getTime(), this.downloadTimeStart = (new Date).getTime(), 
                this.status = "downloading", !this.isDownloadInitialed) {
                    if (!(yield this.downloadInit())) return this.status = "failed", this.emit("error"), 
                    void this.calEndTime();
                }
                if (p.getDiskSpaceLeft(this.defaultSavePath, this.files) < 0) return this.status = "failed", 
                this.emit("spaceError"), this.errorCodeCollect.push(T.SPACE_ERROR), void this.calEndTime();
                this.reset(), this.next();
            });
        }
        resume() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info("[FreeTransfer] [TaskDonwload] resume taskId: " + this.taskId), 
                "completed" === this.status) return;
                if (this.taskStartTime = this.taskStartTime || (new Date).getTime(), this.downloadTimeStart = (new Date).getTime(), 
                this.status = "downloading", this.downloadStatus = y.recordStatus.download, this.isRetry = !0, 
                !this.isDownloadInitialed) {
                    if (!(yield this.downloadInit())) return this.status = "failed", this.emit("error"), 
                    void this.calEndTime();
                }
                if (p.getDiskSpaceLeft(this.defaultSavePath, this.files) < 0) return this.status = "failed", 
                this.emit("spaceError"), this.errorCodeCollect.push(T.SPACE_ERROR), void this.calEndTime();
                this.reset(), this.next();
            });
        }
        cancel() {
            var e;
            this.aborted = !0, this.status = "canceled";
            for (const e of this.currentFiles) {
                if (!(null == e ? void 0 : e.filePath)) break;
                const t = o.default.join(this.defaultSavePath, e.filePath, `${e.fileName}${e.index}${e.randomDownloadName}.download`);
                if (!e.done && i.default.existsSync(t)) try {
                    i.default.unlinkSync(t);
                } catch (e) {
                    global.__log.info(`[FreeTransfer] [TaskDonwload] cancel 取消时清理文件失败 tempPath: ${t} err: ${JSON.stringify(e)}`);
                }
            }
            for (const [, e] of this.activeRequests) e.destroy();
            for (const [, e] of this.activeStreams) e.destroy();
            this.activeRequests.clear(), this.activeStreams.clear(), this.viewCount = (null === (e = this.files.filter(e => !e.done && !this.cachedFileIds.includes(e.fileId))) || void 0 === e ? void 0 : e.length) || 0, 
            this.emit("cancel"), this.calEndTime();
        }
        cancelByNetwork() {
            var e;
            this.aborted = !1, this.status = "failed";
            for (const e of this.currentFiles) {
                const t = o.default.join(this.defaultSavePath, e.filePath, `${e.fileName}${e.index}${e.randomDownloadName}.download`);
                if (!e.done && i.default.existsSync(t)) try {
                    i.default.unlinkSync(t);
                } catch (e) {
                    global.__log.info(`[FreeTransfer] [TaskDonwload] cancel 取消时清理文件失败 tempPath: ${t} err: ${JSON.stringify(e)}`);
                }
            }
            for (const [, e] of this.activeRequests) e.destroy();
            for (const [, e] of this.activeStreams) e.destroy();
            this.activeRequests.clear(), this.activeStreams.clear(), this.viewCount = (null === (e = this.files.filter(e => !e.done && !this.cachedFileIds.includes(e.fileId))) || void 0 === e ? void 0 : e.length) || 0, 
            this.emit("errorNetwork"), this.calEndTime();
        }
        reset() {
            this.aborted = !1, this.running = 0, this.currentReceived = 0, this.successFiles = [], 
            this.failedFiles = [], this.errorCodeCollect = [], this.currentFiles = this.files.filter(e => !e.done && !this.cachedFileIds.includes(e.fileId)), 
            this.viewCount = this.currentFiles.length, this.currentTotal = this.currentFiles.reduce((e, t) => e + (+t.fileSize || 0), 0), 
            this.queue = [ ...this.currentFiles ], this.isError = !1, this.isInterruptedError = !1, 
            this.isSpaceError = !1, this.isFromVpush = !1, this.isNetWorkError = !1, this.timeoutClose.cancel();
        }
        calEndTime() {
            this.taskEndTime = (new Date).getTime(), this.downloadTimeEnd = (new Date).getTime(), 
            this.downloadTimeTotal += this.downloadTimeEnd - this.downloadTimeStart;
        }
        getNewFileFullPath(e) {
            const t = o.default.relative(this.defaultSavePath, e), n = this.getFirstLevelDirectory(t);
            let r = n;
            const i = this.createFolderResult.find(e => e.folderName == n);
            i ? r = i.targetFolderName : (r = E.getNewNameExits(this.defaultSavePath, n), this.createFolderResult.push({
                folderName: n,
                targetFolderName: r
            }));
            const a = t.replace(n, r);
            return o.default.join(this.defaultSavePath, a);
        }
        handleFolder() {
            return r.__awaiter(this, void 0, void 0, function*() {
                for (var e = 0; e < this.files.length; e++) {
                    const t = this.files[e], n = o.default.join(this.defaultSavePath, t.filePath, t.fileName), r = this.getNewFileFullPath(n);
                    if (t.filePath) {
                        const e = o.default.relative(this.defaultSavePath, r), n = o.default.dirname(e);
                        t.filePath = n;
                    } else t.fileName = o.default.basename(r);
                    if (t.isFolder) {
                        const e = o.default.join(this.defaultSavePath, t.filePath, t.fileName);
                        yield this.mkdir(e, t);
                    }
                }
            });
        }
        next() {
            return r.__awaiter(this, void 0, void 0, function*() {
                for (;this.running < this.concurrency && this.queue.length && !this.aborted; ) {
                    const e = this.queue.shift();
                    e && this.downloadFile(e);
                }
                if (0 === this.running && !this.aborted) {
                    const e = this.currentFiles.length, t = this.successFiles.length, n = this.failedFiles.length;
                    if (this.status = t === e ? "completed" : n === e ? "failed" : "interrupted", this.calEndTime(), 
                    "completed" !== this.status) return this.isNetWorkError ? void this.emit("errorNetwork") : void this.emit("done");
                    try {
                        yield _.downloadComplete({
                            taskId: this.taskId
                        }), this.emit("done"), this.viewFile(), global.__log.info("[FreeTransfer] [TaskDonwload] downloadComplete on.success taskId: " + this.taskId);
                    } catch (e) {
                        global.__log.info("[FreeTransfer] [TaskDonwload] downloadComplete on.error taskId: " + this.taskId), 
                        this.status = "failed", this.errorCodeCollect.push(e.code), this.emit("error");
                    }
                }
            });
        }
        downloadInit() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[FreeTransfer] [TaskDonwload] downloadInit taskId: " + this.taskId);
                try {
                    const t = yield _.downloadInit({
                        taskId: this.taskId,
                        receiveDeviceType: 3,
                        receiveDeviceId: h.default.getItem("newDeviceId")
                    });
                    if (global.__log.info("[FreeTransfer] [TaskDonwload] downloadInit response"), !Array.isArray(null == t ? void 0 : t.chunks) || !(null === (e = null == t ? void 0 : t.chunks) || void 0 === e ? void 0 : e.length)) throw new Error("预请求返回格式错误");
                    if (global.__log.info("[FreeTransfer] [TaskDonwload] downloadInit responseData: " + JSON.stringify(t)), 
                    this.files = t.chunks.filter(e => !e.hasDownload).map((e, t) => ({
                        index: t,
                        fileId: e.fileId,
                        fileName: e.fileName,
                        fileSize: +e.fileSize,
                        filePath: e.filePath || "",
                        isFolder: e.isFolder,
                        hasDownload: e.hasDownload,
                        modifiedTime: new Date(e.modifiedTime || Date.now()),
                        body: {
                            fileName: e.fileName,
                            fileId: e.fileId,
                            taskId: this.taskId,
                            fileSize: +e.fileSize,
                            sendSourceEntry: e.sendSourceEntry,
                            sendSource: e.sendSource || 2
                        }
                    })), this.isDirectory = t.chunks.some(e => e.isFolder), this.isDirectory) this.iconType = g.NOTICE_WIN_MSG_ITEM_ICON_TYPE.Folder; else {
                        const e = m.getIconTypeByFilePaths(t.chunks.map(e => e.fileName));
                        this.iconType = e;
                    }
                    yield this.handleFolder(), this.isDownloadInitialed = !0;
                } catch (e) {
                    global.__log.info(`[TaskDonwload][${this.taskId}] 初始化失败:, ${e.message}`), this.errorCodeCollect.push(e.code), 
                    this.status = "failed", this.emit("error");
                }
                return this.isDownloadInitialed;
            });
        }
        downloadFile(e) {
            this.running++, e.randomDownloadName = S.v4();
            const t = o.default.join(this.defaultSavePath, e.filePath, `${e.fileName}${e.index}${e.randomDownloadName}.download`), n = JSON.stringify(e.body), r = new l.URL(b.getBaseUrl() + _.downloadUrl);
            global.__log.info(`[taskDownload][downloadFile][request][url], url: ${r}, fileName: ${e.fileName}, fileId: ${e.fileId}, index: ${e.index}`);
            const s = {
                method: "POST",
                hostname: r.hostname,
                port: 443,
                path: r.pathname + r.search,
                headers: Object.assign({
                    "Content-Type": "application/json"
                }, u.getCyHeaders())
            }, c = a.default.request(s, n => {
                if (global.__log.info("[taskDownload][downloadFile][res] entered>>>, tempPath: " + t), 
                200 !== n.statusCode) return global.__log.info("[taskDownload][downloadFile][res http error]: " + n.statusCode), 
                n.resume(), void this.failed(e, new Error("HTTP " + n.statusCode));
                if (e.isFolder) return void this.successFolder(e, t);
                global.__log.info("[taskDownload][downloadFile][创建临时文件]begin, tempPath: " + t), 
                i.default.mkdirSync(o.default.dirname(t), {
                    recursive: !0
                });
                const r = i.default.createWriteStream(t);
                this.activeStreams.set(e.index, r), n.on("data", t => {
                    global.__log.info("[taskDownload][downloadFile][res] entered>>>"), this.aborted ? global.__log.info("[taskDownload][downloadFile][res][传输被取消]") : (this.currentReceived += t.length, 
                    global.__log.info(`[taskDownload][downloadFile][res] progress>>>this.currentReceived: ${this.currentReceived} , fileName: ${e.fileName}, fileId: ${e.fileId}, index: ${e.index}`), 
                    this.progress());
                }), n.on("error", t => {
                    global.__log.info(`[taskDownload][downloadFile][res error]: ${t.message} [fileName]: ${e.filePath + e.fileName}`), 
                    this.aborted || this.failed(e, t);
                }), r.on("error", t => {
                    global.__log.info(`[taskDownload][downloadFile][stream error]: ${t.message}, [fileName]: ${e.filePath + e.fileName}`), 
                    this.aborted || this.failed(e, t);
                }), r.on("finish", () => {
                    const n = i.default.existsSync(t);
                    global.__log.info(`[taskDownload][downloadFile][stream finish] fileExist: ${n}, this.aborted: ${this.aborted}`), 
                    !this.aborted && n ? (global.__log.info("[taskDownload][downloadFile][stream finish] [fileName]"), 
                    this.success(e, t)) : this.failed(e, new Error("finish emitted but file missing: " + t));
                }), n.pipe(r);
            });
            c.on("error", t => {
                global.__log.info(`[taskDownload][downloadFile][req error]: ${t.message} [fileName]: ${e.filePath + e.fileName}`), 
                this.isNetWorkError = !0, this.aborted || this.failed(e, t);
            }), c.write(n), c.end(), this.activeRequests.set(e.index, c);
        }
        success(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.activeRequests.delete(e.index), this.activeStreams.delete(e.index);
                const n = o.default.join(this.defaultSavePath, decodeURIComponent(e.filePath)), r = E.fileExistAndRename(decodeURIComponent(e.fileName), n), a = o.default.join(n, r);
                global.__log.info("[taskDownload][downloadFile][success] [fileName]: start rename");
                try {
                    if (!i.default.existsSync(t)) throw new Error("Temp file not exists before rename: " + t);
                    i.default.renameSync(t, a), this.running--, e.done = !0, this.successFiles.push(a), 
                    i.default.utimes(a, e.modifiedTime, e.modifiedTime, e => {
                        e && global.__log.error("[FreeTransfer][TaskDonwload] mkdir utimes error " + a);
                    }), global.__log.info("[taskDownload][downloadFile][success] [fileName]: end rename"), 
                    yield this.writeFileRecords(e, r);
                } catch (t) {
                    return void this.failed(e, t);
                }
                this.next();
            });
        }
        successFolder(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.activeRequests.delete(e.index), this.running--, e.done = !0, this.successFiles.push(t), 
                yield this.writeFileRecords(e, e.fileName), this.next();
            });
        }
        failed(e, t) {
            var n;
            void 0 !== (null == t ? void 0 : t.code) && this.errorCodeCollect.push(t.code), 
            global.__log.info(`[FreeTransfer] [TaskDonwload] download fail error: ${t.message || JSON.stringify(t)} filePath: ${e.filePath + e.fileName}`), 
            this.running--, null === (n = this.activeStreams.get(e.index)) || void 0 === n || n.close(), 
            this.activeRequests.delete(e.index), this.activeStreams.delete(e.index);
            const r = o.default.join(this.defaultSavePath, e.filePath, `${e.fileName}${e.index}${e.randomDownloadName}.download`);
            try {
                i.default.existsSync(r) && i.default.unlinkSync(r);
            } catch (e) {
                global.__log.info("[FreeTransfer] [TaskDonwload] download 失败后清理文件失败 tempPath: " + r);
            }
            e.error = t, this.failedFiles.push({
                filePath: e.filePath,
                error: t
            }), this.next();
        }
        writeFileRecords(e, t) {
            var i, a, s, l, c, u;
            return r.__awaiter(this, void 0, void 0, function*() {
                let r = t, d = 0;
                if (!!this.getFirstLevelDirectory(e.filePath)) {
                    d = 1, r = this.getFirstLevelDirectory(e.filePath);
                    if (-1 !== this.alreadyWriteRecords.findIndex(e => e == r)) return void (this.isRetry && (yield this.updateFileRecords(e)));
                    this.alreadyWriteRecords.push(r);
                } else {
                    if (-1 !== this.alreadyWriteRecords.findIndex(e => e == r)) return;
                    this.alreadyWriteRecords.push(r);
                }
                e.isFolder && (d = 1);
                const p = n(165);
                try {
                    const t = {
                        id: e.fileId,
                        fileName: r,
                        originName: e.fileName,
                        ts: this.taskStartTime,
                        fileSize: e.fileSize,
                        from: null === (i = this.sendDeviceInfo) || void 0 === i ? void 0 : i.deviceName,
                        to: "pc",
                        status: 0,
                        savePath: o.default.join(this.defaultSavePath, r),
                        deviceName: null === (a = this.sendDeviceInfo) || void 0 === a ? void 0 : a.deviceName,
                        deviceId: (null === (s = this.sendDeviceInfo) || void 0 === s ? void 0 : s.deviceId) || "deviceId",
                        deviceType: (null === (l = this.sendDeviceInfo) || void 0 === l ? void 0 : l.deviceType) || "phone",
                        openId: null === (c = h.default.getItem("userInfo")) || void 0 === c ? void 0 : c.openId,
                        isDirectory: d,
                        fromModule: v.NOTICE_WIN_MSG_ITEM_FROM.FEEL_FREE,
                        taskId: this.taskId
                    };
                    this.lastRecord = t, global.__cm__mpLog.info("[fm][transfer-record][insertTransferRecord][0] " + (t ? JSON.stringify(t) : null)), 
                    yield p.insertTransferRecord([ t ]), null === (u = global.__mainWindow) || void 0 === u || u.webContents.send(f.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_FILE_DOWNLOAD);
                } catch (e) {
                    console.log("insert err", e), global.__log.info("[FreeTransfer][TaskDonwload] download fileStream.onFinish TransferRecordDao.insertTransferRecord error");
                }
            });
        }
        updateFileRecords(e) {
            var t, i, a, s, l, c;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = this.getFirstLevelDirectory(e.filePath);
                if (-1 !== this.alreadyWriteRecordsFolderRetry.findIndex(e => e == r)) return;
                this.alreadyWriteRecordsFolderRetry.push(r);
                const u = n(165);
                try {
                    const n = {
                        id: e.fileId,
                        fileName: r,
                        originName: e.fileName,
                        ts: Date.now(),
                        fileSize: e.fileSize,
                        from: null === (t = this.sendDeviceInfo) || void 0 === t ? void 0 : t.deviceName,
                        to: "pc",
                        status: 0,
                        savePath: o.default.join(this.defaultSavePath, r),
                        deviceName: null === (i = this.sendDeviceInfo) || void 0 === i ? void 0 : i.deviceName,
                        deviceId: (null === (a = this.sendDeviceInfo) || void 0 === a ? void 0 : a.deviceId) || "deviceId",
                        deviceType: (null === (s = this.sendDeviceInfo) || void 0 === s ? void 0 : s.deviceType) || "phone",
                        openId: null === (l = h.default.getItem("userInfo")) || void 0 === l ? void 0 : l.openId,
                        isDirectory: 1,
                        fromModule: v.NOTICE_WIN_MSG_ITEM_FROM.FEEL_FREE,
                        taskId: this.taskId
                    };
                    this.lastRecord = n, yield u.updateTransferRecord([ n ]), null === (c = global.__mainWindow) || void 0 === c || c.webContents.send(f.FREE_TRANSFER_MESSAGE_ENUM.FREE_TRANSFER_FILE_DOWNLOAD);
                } catch (e) {
                    console.log("insert err", e), global.__log.info("[FreeTransfer][TaskDonwload] download fileStream.onFinish TransferRecordDao.insertTransferRecord error");
                }
            });
        }
        getFirstLevelDirectory(e) {
            if (!e) return "";
            return o.default.normalize(e).split(o.default.sep).filter(e => e.length > 0)[0] || "";
        }
        progress() {
            0 === this.running || this.aborted || "downloading" === this.status && (this.emit("progress"), 
            this.timeoutClose());
        }
        viewFile() {
            const e = this.defaultSavePath, t = this.alreadyWriteRecords;
            w.revealAndSelectFiles(e, t);
        }
        getIsExpired() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    return yield _.downloadInit({
                        taskId: this.taskId,
                        receiveDeviceType: 3,
                        receiveDeviceId: h.default.getItem("newDeviceId")
                    }), !1;
                } catch (e) {
                    global.__log.info(`[FreeTransfer][TaskDonwload] getIsExpired error ${e} ${JSON.stringify(e)}`);
                    return 1007 == (null == e ? void 0 : e.code) || 1008 == (null == e ? void 0 : e.code);
                }
            });
        }
        timeoutCloseDebounce() {
            "downloading" === this.status && global.__log.info("[FreeTransfer][TaskDonwload] timeoutClose timeout network error");
        }
        mkdir(e, t) {
            return new Promise(n => {
                i.default.mkdir(e, {
                    recursive: !0
                }, r => {
                    if (r) return global.__log.error("[FreeTransfer][TaskDonwload] mkdir error " + e), 
                    void n(!1);
                    i.default.utimes(e, t.modifiedTime, t.modifiedTime, t => {
                        t && global.__log.error("[FreeTransfer][TaskDonwload] mkdir utimes error " + e);
                    }), n(!0);
                });
            });
        }
    }
    t.TaskDownload = A;
}
