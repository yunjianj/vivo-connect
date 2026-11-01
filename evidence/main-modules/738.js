// analysis/pretty/main.js:66524; webpack module 738
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ASRTaskManager = t.TASK_STATUS = void 0;
    const r = n(0), i = n(58), o = n(1548), a = n(11), s = n(243), l = "ASRTaskManager";
    t.TASK_STATUS = {
        WAITING: "waiting",
        PROCESSING: "processing",
        DONE: "done"
    };
    class c extends s.MicroEventClass {
        constructor() {
            super(), this.userQueue = [], this.autoQueue = [], this.isUserTrackBusy = !1, this.isAutoTrackBusy = !1, 
            this.processingRecords = [], this.recordModule = null, this.recordModule = n(346);
        }
        static getInstance() {
            return this._instance || (this._instance = new c), this._instance;
        }
        addUserTask(e) {
            if (global.__log.error(`[record][${l} addUserTask] ${e.localFile_localPath}`), this.isInUserQueue(e)) return void global.__log.error(`[record][${l} addUserTask] 已经在用户转文本队列中，不做处理`);
            this.isInAutoQueue(e) && (global.__log.error(`[record][${l} addUserTask] 已经在自动转文本队列中，不做处理`), 
            this.removeFromAutoQueue(e));
            const n = Object.assign(Object.assign({}, e), {
                state: t.TASK_STATUS.WAITING
            });
            this.userQueue.push(n), this.scheduleUserTrack();
        }
        scheduleUserTrack() {
            if (global.__log.error(`[record][${l} scheduleUserTrack]`), this.isUserTrackBusy || 0 === this.userQueue.length) return;
            const e = this.userQueue.find(e => e.state === t.TASK_STATUS.WAITING);
            e && this.runUserTask(e);
        }
        runUserTask(e) {
            global.__log.error(`[record][${l} runUserTask]`), this.processingRecords.includes(e.record_localId) ? global.__log.error(`[record][${l} runUserTask 已经在处理做，不做处理] ${e.localFile_localPath}`) : (this.isUserTrackBusy = !0, 
            this.addToProcessRecords(e), e.state = t.TASK_STATUS.PROCESSING, global.__log.error(`[record][${l}] 转文本START: ${e.localFile_localPath}`), 
            this.processASR(e).finally(() => {
                e.state = t.TASK_STATUS.DONE, this.isUserTrackBusy = !1, this.removeFromUserQueue(e), 
                this.removeFromProcessRecords(e), this.scheduleUserTrack();
            }));
        }
        addAutoTask(e) {
            if (global.__log.error(`[record][${l} addAutoTask] ${e.localFile_localPath}`), this.isInAutoQueue(e)) return void global.__log.error(`[record][${l} addAutoTask] 已经在自动转文本队列中，不做处理`);
            if (this.isInUserQueue(e)) return void global.__log.error(`[record][${l} addAutoTask] 已经在用户转文本队列中，不做处理`);
            const n = Object.assign(Object.assign({}, e), {
                state: t.TASK_STATUS.WAITING
            });
            this.autoQueue.push(n), this.scheduleAutoTrack();
        }
        scheduleAutoTrack() {
            if (global.__log.error(`[record][${l} scheduleAutoTrack]`), this.isAutoTrackBusy || 0 === this.autoQueue.length) return;
            const e = this.autoQueue.find(e => e.state === t.TASK_STATUS.WAITING);
            e && this.runAutoTask(e);
        }
        runAutoTask(e) {
            this.processingRecords.includes(e.record_localId) ? global.__log.error(`[record][${l} runAutoTask 已经在处理做，不做处理] ${e.localFile_localPath}`) : (this.isAutoTrackBusy = !0, 
            this.addToProcessRecords(e), e.state = t.TASK_STATUS.PROCESSING, global.__log.error(`[record][${l} runAutoTask] 转文本START: ${e.localFile_localPath}`), 
            this.processASR(e).finally(() => {
                this.isAutoTrackBusy = !1, e.state = t.TASK_STATUS.DONE, this.removeFromAutoQueue(e), 
                this.removeFromProcessRecords(e), this.scheduleAutoTrack();
            }));
        }
        removeFromProcessRecords(e) {
            this.processingRecords = this.processingRecords.filter(t => t !== e.record_localId);
        }
        addToProcessRecords(e) {
            this.processingRecords = [ ...this.processingRecords, e.record_localId ];
        }
        processASR(e) {
            return new Promise((t, n) => {
                const i = e.localFile_localPath;
                if (!i) return n(`[record][${l}] process error，filePath 路径为空`);
                this.isInUserQueueByLocalId(e.record_localId) && this.sendMessageToRender({
                    type: "asr-start",
                    localId: e.record_localId
                });
                const a = new o.AudioLsr({
                    localId: e.record_localId,
                    recordName: e.record_mDisplayName
                });
                a.start(i), a.on("asr-progress", e => {
                    this.emit("asr-progress", e), this.isInUserQueueByLocalId(e.localId) && this.sendMessageToRender(e);
                }), a.on("asr-fail", e => (global.__log.error(`[record][${l}] processASR 转文本fail: ${e.error}`), 
                this.emit("asr-fail", e), this.isInUserQueueByLocalId(e.localId) && this.sendMessageToRender(e), 
                n(e))), a.on("asr-success", e => r.__awaiter(this, void 0, void 0, function*() {
                    return global.__log.error(`[record][${l}] processASR 转文本success: ${JSON.stringify(e)}`), 
                    this.emit("asr-success", e), this.isInUserQueueByLocalId(e.localId) ? this.sendMessageToRender(e) : yield this.saveToDataBase(e), 
                    t(e);
                }));
            });
        }
        saveToDataBase(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const t = e.localId, n = e.data;
                    null != this.recordModule && t && (yield this.convertTransferData(t, n));
                } catch (e) {
                    global.__log.info(`[record][${l}] processASR 转文本存储失败 ${e.message}`);
                }
            });
        }
        convertTransferData(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    console.log("recgList", t);
                    const o = t => t.map((t, n) => {
                        var r;
                        return {
                            uuid: i.v4(),
                            mSentenceId: (null !== (r = t.index) && void 0 !== r ? r : n) + 1,
                            content: t.onebest,
                            startTime: t.bg,
                            endTime: t.ed,
                            speakerName: "说话人" + ((t.speaker || 0) + 1),
                            speaker: t.speaker || 0,
                            isSupportSpeaker: t.enable_speaker || 0,
                            isSupportNewConvert: 1,
                            convertTimeTip: "GONE",
                            aWholeSentence: !0,
                            isLastSentence: !1,
                            isUserVisible: !0,
                            lid: 0,
                            mIsBackground: 1,
                            mLanguage: "",
                            mFileId: e,
                            textCanConvert: 0,
                            textType: 0
                        };
                    }), a = (r = t) && r.constructor === Object && 0 === Object.keys(r).length ? [] : o(t), s = yield null === (n = this.recordModule) || void 0 === n ? void 0 : n.record_batchInsertRecognize({
                        data: a,
                        localId: e
                    });
                    global.__log.error(`[record][ASR] 批量插入转文本成功: ${s}, localId`);
                } catch (e) {
                    global.__log.error("[record][ASR] 批量插入转文本失败: " + e.message);
                }
                var r;
            });
        }
        isInAutoQueue(e) {
            return this.autoQueue.some(t => t.record_localId === e.record_localId);
        }
        isInUserQueue(e) {
            return this.userQueue.some(t => t.record_localId === e.record_localId);
        }
        isInUserQueueByLocalId(e) {
            return this.userQueue.some(t => t.record_localId === e);
        }
        removeFromAutoQueue(e) {
            const t = this.autoQueue.findIndex(t => t.record_localId === e.record_localId);
            t > -1 && this.autoQueue.splice(t, 1);
        }
        removeFromUserQueue(e) {
            const t = this.userQueue.findIndex(t => t.record_localId === e.record_localId);
            t > -1 && this.userQueue.splice(t, 1);
        }
        sendMessageToRender(e) {
            const t = global.__mainWindow;
            (null == t ? void 0 : t.isDestroyed()) || (global.__log.info("aiTalkWindow 发送"), 
            null == t || t.webContents.send(a.RECORDER_MESSAGE_ENUM.RECORDER_ASR_UPDATE, e));
        }
    }
    t.ASRTaskManager = c, c._instance = null;
}
