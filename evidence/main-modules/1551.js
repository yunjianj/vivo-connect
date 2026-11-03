// analysis/pretty/main.js:118508; webpack module 1551
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AudioOrganize = void 0;
    const r = n(0), i = r.__importDefault(n(117)), o = r.__importDefault(n(6)), a = r.__importDefault(n(4)), s = r.__importDefault(n(1)), l = r.__importDefault(n(75)), c = n(58), u = r.__importDefault(n(739)), d = r.__importDefault(n(740)), h = n(243);
    const p = () => {
        let e = "0.0.1";
        return e = process.env.IS_WEB ? n(168).version : o.default.getItem("appVersion"), 
        e;
    };
    let f = 0;
    function _(e, t, n = null) {
        const r = Date.now();
        f = r;
        const i = {
            model: "Unknown",
            system_version: "Unknown",
            client_version: p(),
            product: "Unknown",
            package: "pack",
            sdk_version: "3.0",
            user_id: c.v4(),
            android_version: "28",
            system_time: r,
            net_type: 1,
            user_info: 0 == o.default.getItem("reportSwitch") ? 0 : 1,
            engineid: "fileasrrecorder"
        };
        n && Object.assign(i, n);
        return `${e}${t}?${function(e = {}) {
            return Object.keys(e).sort().map(function(t) {
                return t + "=" + e[t];
            }).join("&");
        }(i)}`;
    }
    function m(e, t = {}, n = {}) {
        const r = o.default.getItem("userInfo"), a = o.default.getItem("countryCode") || "", s = new URL(e), l = function() {
            const e = "abcdefghijklmnopqrstuvwxyz0123456789";
            let t = "";
            for (let n = 0; n < 8; n++) {
                const n = Math.floor(Math.random() * e.length);
                t += e.charAt(n);
            }
            return t;
        }();
        const c = function(e, t) {
            return i.default.HmacSHA256(t, e).toString(i.default.enc.Base64);
        }("kfXVjaVVweoSQDtM", [ "POST", s.pathname, s.search.substring(1), "6936961114", f, "x-ai-gateway-app-id:6936961114", "x-ai-gateway-timestamp:" + f, "x-ai-gateway-nonce:" + l ].join("\n"));
        return u.default.request.request({
            url: e,
            method: "POST",
            data: t,
            headers: Object.assign({
                source: "2",
                version: p(),
                platform: "pc",
                vaid: o.default.getItem("newDeviceId"),
                "X-AI-GATEWAY-APP-ID": "6936961114",
                "X-AI-GATEWAY-TIMESTAMP": f,
                "X-AI-GATEWAY-NONCE": l,
                "X-AI-GATEWAY-SIGNED-HEADERS": "x-ai-gateway-app-id;x-ai-gateway-timestamp;x-ai-gateway-nonce",
                "X-AI-GATEWAY-SIGNATURE": c,
                vivotoken: null == r ? void 0 : r.token,
                token: null == r ? void 0 : r.token,
                openId: null == r ? void 0 : r.openId,
                country_code: a
            }, n)
        });
    }
    class g extends h.MicroEventClass {
        constructor(e) {
            super(), this.isClose = !1, this.baseUrl = "", this.resultRetryCount = 0, this.processStartTime = 0, 
            this.lastNonZeroProgressTime = 0, this.asrResult = [];
            const t = o.default.getItem("userInfo");
            this.xSessionId = c.v4(), this.localId = e.localId, this.recordName = e.recordName || "", 
            this.userId = (null == t ? void 0 : t.openId) ? t.openId : c.v4(), this.isClose = !1, 
            this.baseUrl = l.default.currentRuntimeConfig.recordASRUrl;
        }
        close() {
            this.isClose = !0;
        }
        start(e, t) {
            this.asrResult = t || [], this.createAudioByPath(e), global.__log.info(`[record][ASR-AudioOrganize] start 录音名称=${this.recordName} x-sessionId=${this.xSessionId} 初始链接url:  baseUrl = ${this.baseUrl}，整理filePath：${e}，asrResult长度：${this.asrResult.length}`);
        }
        createAudioByPath(e) {
            if (this.isClose) return;
            const t = a.default.statSync(e).size, n = ".pcm" === s.default.extname(e).toLowerCase() ? "pcm" : "auto";
            if (this.sliceNum = Math.ceil(t / 5242880), global.__log.info(`[record][ASR-AudioOrganize] createAudio userId = ${this.userId} xSessionId = ${this.xSessionId} size = ${t} sliceNum = ${this.sliceNum} audioType = ${n}`), 
            this.sliceNum > 100) return;
            const r = {
                audio_type: "pcm" === n.toLowerCase() ? "pcm" : "auto",
                "x-sessionId": this.xSessionId,
                slice_num: this.sliceNum,
                scene: "user"
            };
            m(_(this.baseUrl, "/lasr/create"), r, {
                "Content-Type": "application/json; charset=UTF-8"
            }).then(t => {
                this.audioId = t.audio_id, this.uploadAudioByPath(e, 0), global.__log.info("[record][ASR-AudioOrganize] 第一步:创建音频任务 - 完成 audio_id = " + this.audioId);
            }).catch(e => {
                this.handleError(e, "第一步:创建音频任务");
            });
        }
        uploadAudioByPath(e, t) {
            if (this.isClose) return void global.__log.info("[record][ASR-AudioOrganize] 第二步, 文件分片上传 this.isClose 关闭");
            const n = _(this.baseUrl, "/lasr/upload", {
                audio_id: this.audioId,
                "x-sessionId": this.xSessionId,
                slice_index: t,
                slice_num: this.sliceNum,
                scene: "user"
            }), r = 5242880 * t, i = Math.min(r + 5242880, a.default.statSync(e).size) - 1, o = a.default.createReadStream(e, {
                start: r,
                end: i
            }), s = new d.default;
            s.append("file", o), m(n, s, {
                "Content-Type": "multipart/form-data"
            }).then(n => {
                global.__log.info("[record][ASR-AudioOrganize] 文件分片上传 success");
                const r = n.total || n.slice_num || this.sliceNum;
                n.slices < r ? (global.__log.info(`[record][ASR-AudioOrganize] 第二步:文件分片上传部分 - 完成 uploadAudio 当前片数sliceIndex = ${t} 已处理的片数slices = ${n.slices} 总片数total = ${r}`), 
                this.uploadAudioByPath(e, t + 1)) : n.slices === r && (global.__log.info("[record][ASR-AudioOrganize] 第二步:文件分片上传 - 完成 uploadAudio"), 
                this.createTask());
            }).catch(e => {
                this.handleError(e, "第二步:文件分片上传");
            });
        }
        createTask() {
            if (this.isClose) return void global.__log.info("[record][ASR-AudioOrganize] 第三步, 创建任务并开始文本整理 this.isClose 关闭");
            const e = _(this.baseUrl, "/lasr/run"), t = {
                audio_id: this.audioId,
                "x-sessionId": this.xSessionId,
                enable_speaker: 1,
                refinement: 1,
                scene: "user"
            };
            this.asrResult && this.asrResult.length > 0 && (t.asr_result = this.asrResult), 
            global.__log.info(`[record][ASR-AudioOrganize] 第三步:创建任务并开始文本整理 录音名称=${this.recordName} x-sessionId=${this.xSessionId} 入参=${JSON.stringify(t)}`), 
            m(e, t, {
                "Content-Type": "application/json; charset=UTF-8"
            }).then(e => {
                global.__log.info(`[record][ASR-AudioOrganize] 第三步:创建任务并开始文本整理 - 完成 录音名称=${this.recordName} x-sessionId=${this.xSessionId} task_id=${e.task_id}`), 
                this.taskId = e.task_id, this.processTask();
            }).catch(e => {
                this.handleError(e, "第三步:创建任务并开始文本整理");
            });
        }
        processTask() {
            this.isClose ? global.__log.info("[record][ASR-AudioOrganize] 第四步, 查询任务进度 this.isClose 关闭") : (this.processStartTime = Date.now(), 
            this.lastNonZeroProgressTime = Date.now(), this.processTimer = setInterval(() => {
                if (this.isClose) return global.__log.info("[record][ASR-AudioOrganize] 第四步, 查询任务进度 - 循环 this.isClose 关闭"), 
                clearInterval(this.processTimer), void (this.processTimer = null);
                const e = Date.now() - this.processStartTime;
                if (e > g.MAX_PROCESS_DURATION) return global.__log.error(`[record][ASR-AudioOrganize] 第四步:查询任务进度 - 总时长超限 ${e}ms，超时失败`), 
                void this.handleError({
                    code: "ECONNABORTED",
                    desc: "文本整理超时，请稍后重试"
                }, "第四步:查询任务进度-总超时");
                const t = Date.now() - this.lastNonZeroProgressTime;
                if (t > g.MAX_ZERO_PROGRESS_DURATION) return global.__log.error(`[record][ASR-AudioOrganize] 第四步:查询任务进度 - 进度持续为0超过 ${t}ms，超时失败`), 
                void this.handleError({
                    code: "ECONNABORTED",
                    desc: "文本整理超时，请稍后重试"
                }, "第四步:查询任务进度-进度卡0");
                m(_(this.baseUrl, "/lasr/progress"), {
                    task_id: this.taskId,
                    "x-sessionId": this.xSessionId,
                    scene: "user"
                }, {
                    "Content-Type": "application/json; charset=UTF-8"
                }).then(e => {
                    global.__log.info("[record][ASR-AudioOrganize] 第四步:查询任务进度 - 完成 processTask 当前进度progress = " + e.progress), 
                    e.progress > 0 && (this.lastNonZeroProgressTime = Date.now()), this.emit("organize-progress", {
                        type: "organize-progress",
                        localId: this.localId,
                        progress: e.progress
                    }), e.progress >= 100 && (clearInterval(this.processTimer), this.processTimer = null, 
                    this.getResult());
                }).catch(e => {
                    this.handleError(e, "第四步:查询任务进度");
                });
            }, 2e3));
        }
        getResult() {
            if (this.isClose) return void global.__log.info("[record][ASR-AudioOrganize] 第五步, 获取整理结果 this.isClose 关闭");
            m(_(this.baseUrl, "/lasr/result"), {
                task_id: this.taskId,
                "x-sessionId": this.xSessionId,
                scene: "user"
            }, {
                "Content-Type": "application/json; charset=UTF-8"
            }).then(e => {
                var t, n, r, i, o;
                const a = Array.isArray(null == e ? void 0 : e.refined_result) && e.refined_result.length > 0, s = a ? e.refined_result : e.result;
                if (global.__log.info("[record][ASR-AudioOrganize] 第五步:获取整理结果 keys=" + Object.keys(e || {}).join(",") + " refined_result_len=" + (null !== (n = null === (t = null == e ? void 0 : e.refined_result) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : "N/A") + " result_len=" + (null !== (i = null === (r = null == e ? void 0 : e.result) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : "N/A") + " use_field=" + (a ? "refined_result" : "result(fallback)") + " res_len=" + (null !== (o = null == s ? void 0 : s.length) && void 0 !== o ? o : 0)), 
                !s || !Array.isArray(s) || 0 === s.length) return this.resultRetryCount < g.MAX_RESULT_RETRY ? (this.resultRetryCount++, 
                global.__log.info(`[record][ASR-AudioOrganize] 第五步:获取整理结果 - 结果为空，${g.RESULT_RETRY_DELAY}ms 后重试 (${this.resultRetryCount}/${g.MAX_RESULT_RETRY})`), 
                void setTimeout(() => this.getResult(), g.RESULT_RETRY_DELAY)) : (global.__log.error("[record][ASR-AudioOrganize] 第五步:获取整理结果 - 结果为空，重试已耗尽，走 fail 逻辑"), 
                void this.handleError({
                    code: 10403,
                    desc: "识别结果为空或只有一个句号"
                }, "第五步:获取整理结果"));
                this.emit("organize-success", {
                    type: "organize-success",
                    localId: this.localId,
                    data: s
                });
            }).catch(e => {
                this.handleError(e, "第五步:获取整理结果");
            });
        }
        handleError(e, t = "") {
            this.processTimer && clearInterval(this.processTimer), this.processTimer = null;
            const n = [ "ENOTFOUND", "ECONNREFUSED", "ETIMEDOUT", "ENETUNREACH", "ECONNRESET", "EAI_AGAIN" ].includes(null == e ? void 0 : e.code) || (null == e ? void 0 : e.message) && /ENOTFOUND|ECONNREFUSED|ETIMEDOUT|ENETUNREACH/.test(e.message), r = n ? "网络异常，请检查网络连接" : {
                1e4: "客户端传公共参数校验失败",
                10001: "客户端传创建音频相关参数校验失败",
                10002: "客户端请求body参数音频分片数slice_num大于100",
                10003: "服务端创建音频失败",
                10100: "客户端传公共参数校验失败",
                10101: "客户端传音频上传相关参数校验失败",
                10102: "服务端创建读音频对象失败",
                10103: "服务端读取音频失败",
                10104: "服务端获取缓存的音频分片数量失败",
                10105: "服务端上传音频到数据库失败",
                10106: "最后一个分片上传完成时服务端状态流转失败",
                10200: "客户端传公共参数校验失败",
                10201: "客户端传转写相关参数校验失败",
                10202: "服务端创建转写任务失败",
                10203: "开始转写时服务端状态流转失败",
                10300: "客户端传公共参数校验失败",
                10301: "客户端传查询进度相关参数校验失败",
                10302: "服务端获取进度失败",
                10400: "客户端传公共参数校验失败",
                10401: "客户端传查询结果相关参数校验失败",
                10402: "服务端获取结果失败",
                10403: "识别结果为空或只有一个句号",
                ENOTFOUND: "网络异常，请检查网络连接",
                ECONNABORTED: "请求超时，请稍后重试"
            }[null == e ? void 0 : e.code] || (null == e ? void 0 : e.desc) || "服务器错误";
            this.emit("organize-fail", {
                type: "organize-fail",
                localId: this.localId,
                errorCode: n ? "NETWORK_ERROR" : (null == e ? void 0 : e.code) || 500,
                desc: r,
                error: n ? null : null == e ? void 0 : e.message
            }), console.log("[AudioOrganize] 文本整理错误 error", e, t), global.__log.info(`[record][ASR-AudioOrganize] Audio error 录音名称=${this.recordName} x-sessionId=${this.xSessionId} step=${t} code=${null == e ? void 0 : e.code} desc=${r} error=${(null == e ? void 0 : e.message) || ""}`);
        }
    }
    g.MAX_RESULT_RETRY = 3, g.RESULT_RETRY_DELAY = 2e3, g.MAX_PROCESS_DURATION = 36e5, 
    g.MAX_ZERO_PROGRESS_DURATION = 36e5, t.AudioOrganize = g;
}
