// analysis/pretty/main.js:118109; webpack module 1547
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AutoAsrManager = void 0;
    const r = n(0), i = n(738), o = "AutoAsrManager";
    class a {
        constructor() {
            this.isConverting = !1, this.toConvertList = [], this.convertingRecord = null, this.convertStartTime = Date.now(), 
            this.totalProcessedDurationSec = 0, this.convertLocalIds = [], this.asrTaskManagerInstance = null, 
            this.asrSuccessHandler = this.asrSuccessHandler.bind(this), this.asrFailHandler = this.asrFailHandler.bind(this);
        }
        static getInstance() {
            return this._instance || (this._instance = new a), this._instance;
        }
        runAsr(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info(`[record][${o}] runAsr`), !0 === this.isConverting) return void global.__log.info(`[record][${o}] 当前在正在转化中，不再处理`);
                this.toConvertList = e, this.convertStartTime = Date.now(), this.isConverting = !0, 
                this.onConvertDone = t;
                const n = i.ASRTaskManager.getInstance();
                this.asrTaskManagerInstance = n, n.off("asr-success", this.asrSuccessHandler), n.off("asr-fail", this.asrFailHandler), 
                n.on("asr-success", this.asrSuccessHandler), n.on("asr-fail", this.asrFailHandler), 
                this.processARecord();
            });
        }
        processARecord() {
            var e;
            const t = this.toConvertList.shift();
            t ? (global.__log.info(`[record][${o}] 继续转文本 record文件路径为 ${t.localFile_localPath}`), 
            this.convertingRecord = t, null === (e = this.asrTaskManagerInstance) || void 0 === e || e.addAutoTask(t)) : global.__log.info(`[record][${o}] 数据库已无需要ASR的录音数据，不做处理`);
        }
        asrSuccessHandler(e) {
            var t;
            const n = e.localId;
            this.convertingRecord && this.convertingRecord.record_localId == n && (this.totalProcessedDurationSec += this.convertingRecord.localFile_duration, 
            this.convertLocalIds.push(null === (t = this.convertingRecord) || void 0 === t ? void 0 : t.record_id)), 
            this.toConinueASR();
        }
        asrFailHandler(e) {
            global.__log.error(`[record][${o}] 转文本fail，本轮转文本结束: ${e.desc}`), 10403 === e.errorCode ? this.toConinueASR() : (this.resetToReadyState(), 
            this.onConvertDone(this.convertLocalIds));
        }
        toConinueASR() {
            this.isToProcessNext() ? this.processARecord() : (global.__log.info("[record][ASR] 已满足本批次转文本的时常，结束"), 
            global.__log.info(`[record][ASR] 总结转音频数量${this.convertLocalIds.length}，localID为: ${JSON.stringify(this.convertLocalIds)}`), 
            this.resetToReadyState(), this.onConvertDone(this.convertLocalIds));
        }
        resetToReadyState() {
            this.isConverting = !1, this.totalProcessedDurationSec = 0, this.convertingRecord = null, 
            this.convertStartTime = 0, this.convertLocalIds = [];
        }
        isToProcessNext() {
            return !(Date.now() - this.convertStartTime >= 3e5) && !(this.totalProcessedDurationSec >= 36e5);
        }
    }
    t.AutoAsrManager = a, a._instance = null;
}
