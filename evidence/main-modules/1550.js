// analysis/pretty/main.js:118424; webpack module 1550
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OrganizeTaskManager = t.TASK_STATUS = void 0;
    const r = n(1551), i = n(11), o = n(243), a = "OrganizeTaskManager";
    t.TASK_STATUS = {
        WAITING: "waiting",
        PROCESSING: "processing",
        DONE: "done"
    };
    class s extends o.MicroEventClass {
        constructor() {
            super(), this.userQueue = [], this.isUserTrackBusy = !1, this.processingRecords = [];
        }
        static getInstance() {
            return this._instance || (this._instance = new s), this._instance;
        }
        addUserTask(e) {
            if (global.__log.error(`[record][${a} addUserTask] ${e.localFile_localPath}`), this.isInUserQueue(e)) return void global.__log.error(`[record][${a} addUserTask] 已经在文本整理队列中，不做处理`);
            const n = Object.assign(Object.assign({}, e), {
                state: t.TASK_STATUS.WAITING
            });
            this.userQueue.push(n), this.scheduleUserTrack();
        }
        scheduleUserTrack() {
            if (global.__log.error(`[record][${a} scheduleUserTrack]`), this.isUserTrackBusy || 0 === this.userQueue.length) return;
            const e = this.userQueue.find(e => e.state === t.TASK_STATUS.WAITING);
            e && this.runUserTask(e);
        }
        runUserTask(e) {
            global.__log.error(`[record][${a} runUserTask]`), this.processingRecords.includes(e.record_localId) ? global.__log.error(`[record][${a} runUserTask 已经在处理中，不做处理] ${e.localFile_localPath}`) : (this.isUserTrackBusy = !0, 
            this.addToProcessRecords(e), e.state = t.TASK_STATUS.PROCESSING, global.__log.error(`[record][${a}] 文本整理START: ${e.localFile_localPath}`), 
            this.processOrganize(e).finally(() => {
                e.state = t.TASK_STATUS.DONE, this.isUserTrackBusy = !1, this.removeFromUserQueue(e), 
                this.removeFromProcessRecords(e), this.scheduleUserTrack();
            }));
        }
        removeFromProcessRecords(e) {
            this.processingRecords = this.processingRecords.filter(t => t !== e.record_localId);
        }
        addToProcessRecords(e) {
            this.processingRecords = [ ...this.processingRecords, e.record_localId ];
        }
        processOrganize(e) {
            return new Promise((t, n) => {
                const i = e.localFile_localPath;
                if (global.__log.info(`[${a}] processOrganize localId=${e.record_localId} filePath=${i || "(empty)"}`), 
                !i) return global.__log.error(`[${a}] processOrganize filePath 为空，无法执行文本整理 localId=${e.record_localId}`), 
                this.sendMessageToRender({
                    type: "organize-fail",
                    localId: e.record_localId,
                    errorCode: "EMPTY_FILE_PATH",
                    desc: "音频文件路径为空，无法执行文本整理"
                }), n(`[record][${a}] process error，filePath 路径为空`);
                this.sendMessageToRender({
                    type: "organize-start",
                    localId: e.record_localId
                });
                const o = new r.AudioOrganize({
                    localId: e.record_localId,
                    recordName: e.record_mDisplayName
                });
                o.start(i, e.asr_result), o.on("organize-progress", e => {
                    this.emit("organize-progress", e), this.sendMessageToRender(e);
                }), o.on("organize-fail", e => (global.__log.error(`[record][${a}] processOrganize 文本整理fail: ${e.error}`), 
                this.emit("organize-fail", e), this.sendMessageToRender(e), n(e))), o.on("organize-success", e => (global.__log.error(`[record][${a}] processOrganize 文本整理success: ${JSON.stringify(e)}`), 
                this.emit("organize-success", e), this.sendMessageToRender(e), t(e)));
            });
        }
        isInUserQueue(e) {
            return this.userQueue.some(t => t.record_localId === e.record_localId);
        }
        removeFromUserQueue(e) {
            const t = this.userQueue.findIndex(t => t.record_localId === e.record_localId);
            t > -1 && this.userQueue.splice(t, 1);
        }
        sendMessageToRender(e) {
            const t = global.__mainWindow;
            (null == t ? void 0 : t.isDestroyed()) || (global.__log.info(`[${a}] sendMessageToRender ${e.type}`), 
            null == t || t.webContents.send(i.RECORDER_MESSAGE_ENUM.RECORDER_ORGANIZE_UPDATE, e));
        }
    }
    t.OrganizeTaskManager = s, s._instance = null;
}
