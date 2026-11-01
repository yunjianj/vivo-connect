// analysis/pretty/main.js:37465; webpack module 348
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.windowTimingTracker = t.WindowTimingTracker = void 0;
    class r {
        constructor() {
            this.timingDataMap = new Map;
        }
        static getInstance() {
            return r.instance || (r.instance = new r), r.instance;
        }
        recordStartTime(e, t = Date.now()) {
            const n = {
                windowId: e,
                startTime: t,
                endTime: void 0,
                closeTime: void 0,
                from: 0,
                type: 0,
                fileType: ""
            };
            return this.timingDataMap.set(e, n), global.__cm__mpLog.info(`[WindowTiming] 开始记录窗口 ${e} 启动时间: ${new Date(t).toISOString()}`), 
            n;
        }
        recordEndTime(e, t = Date.now()) {
            const n = this.timingDataMap.get(e);
            if (!n) return global.__cm__mpLog.info(`[WindowTiming] 警告: 窗口 ${e} 未记录开始时间，无法记录结束时间`), 
            null;
            const r = Object.assign(Object.assign({}, n), {
                endTime: t
            });
            this.timingDataMap.set(e, r);
            const i = t - n.startTime;
            return global.__cm__mpLog.info(`[WindowTiming] 窗口 ${e} 启动完成，耗时: ${i}ms`), r;
        }
        recordFileInfo(e, t, n, r) {
            const i = this.timingDataMap.get(e);
            if (!i) return global.__cm__mpLog.info(`[WindowTiming] 警告: 窗口 ${e} 未记录开始时间，无法记录文件信息`), 
            null;
            const o = Object.assign(Object.assign({}, i), {
                from: t,
                type: n,
                fileType: r
            });
            return this.timingDataMap.set(e, o), global.__cm__mpLog.info(`[WindowTiming] 窗口 ${e} 更新文件信息: type=${n}, fileType=${r}`), 
            o;
        }
        recordCloseTime(e, t = Date.now()) {
            const n = this.timingDataMap.get(e);
            if (!n) return global.__cm__mpLog.info(`[WindowTiming] 警告: 窗口 ${e} 未记录开始时间，无法记录关闭时间`), 
            null;
            const r = Object.assign(Object.assign({}, n), {
                closeTime: t
            });
            this.timingDataMap.set(e, r);
            const i = t - n.startTime;
            return global.__cm__mpLog.info(`[WindowTiming] 窗口 ${e} 关闭，总存活时长: ${i}ms`), r;
        }
        getDuration(e, t = Date.now()) {
            var n;
            const r = this.timingDataMap.get(e);
            if (!r) return global.__cm__mpLog.info(`[WindowTiming] 警告: 窗口 ${e} 的时间数据不存在`), null;
            return (null !== (n = r.endTime) && void 0 !== n ? n : t) - r.startTime;
        }
        getOpenDuration(e, t = Date.now()) {
            var n;
            const r = this.timingDataMap.get(e);
            if (!r) return global.__cm__mpLog.info(`[WindowTiming] 警告: 窗口 ${e} 的时间数据不存在`), null;
            return (null !== (n = r.closeTime) && void 0 !== n ? n : t) - r.startTime;
        }
        getFormattedDuration(e) {
            const t = this.getDuration(e);
            if (null === t) return null;
            if (t >= 1e3) {
                return (t / 1e3).toFixed(2) + "s";
            }
            return t + "ms";
        }
        getTimingData(e) {
            return this.timingDataMap.get(e) || null;
        }
        getAllTimingData() {
            return Array.from(this.timingDataMap.values());
        }
        getAverageDuration(e = !0) {
            const t = this.getAllTimingData();
            if (0 === t.length) return 0;
            const n = e ? t.filter(e => void 0 !== e.endTime) : t;
            if (0 === n.length) return 0;
            return n.reduce((e, t) => {
                var n;
                return e + ((null !== (n = t.endTime) && void 0 !== n ? n : Date.now()) - t.startTime);
            }, 0) / n.length;
        }
        clearWindowData(e) {
            return this.timingDataMap.delete(e);
        }
        clearAllData() {
            this.timingDataMap.clear(), global.__cm__mpLog.info("[WindowTiming] 已清除所有窗口时间数据");
        }
        getTrackedWindowCount() {
            return this.timingDataMap.size;
        }
        printTimingDataMap() {
            var e, t;
            if (0 !== this.timingDataMap.size) {
                global.__cm__mpLog.info("[WindowTiming] ========== 窗口时间数据列表 ==========");
                for (const [n, r] of this.timingDataMap.entries()) {
                    const i = new Date(r.startTime).toISOString(), o = r.endTime ? new Date(r.endTime).toISOString() : "未完成", a = r.closeTime ? new Date(r.closeTime).toISOString() : "未关闭", s = (null !== (e = r.endTime) && void 0 !== e ? e : Date.now()) - r.startTime, l = s >= 1e3 ? (s / 1e3).toFixed(2) + "s" : s + "ms", c = (null !== (t = r.closeTime) && void 0 !== t ? t : Date.now()) - r.startTime, u = c >= 1e3 ? (c / 1e3).toFixed(2) + "s" : c + "ms", d = 1 === r.type ? "图片" : 2 === r.type ? "视频" : "未设置";
                    global.__cm__mpLog.info(`[WindowTiming] 窗口: ${n}\n  开始时间: ${i}\n  结束时间: ${o}\n  关闭时间: ${a}\n  来源: ${r.from}\n  类型: ${d} (${r.type})\n  文件类型: ${r.fileType || "未设置"}\n  启动耗时: ${l}\n  存活时长: ` + u);
                }
                global.__cm__mpLog.info("[WindowTiming] ====================================");
            } else global.__cm__mpLog.info("[WindowTiming] 当前无任何窗口数据");
        }
    }
    t.WindowTimingTracker = r, t.windowTimingTracker = r.getInstance();
}
