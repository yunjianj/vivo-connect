// analysis/pretty/main.js:109624; webpack module 1478
function(e, t, n) {
    "use strict";
    var r;
    function i(e, n) {
        var r, i;
        return null !== (i = null !== (r = t.HttpMessage[e]) && void 0 !== r ? r : n) && void 0 !== i ? i : "未知错误";
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.buildClawErrorResponse = t.getHttpResMessage = t.getHttpMessage = t.HttpMessage = t.HttpCode = void 0, 
    function(e) {
        e[e.SUCCESS = 0] = "SUCCESS", e[e.FAILED = 1] = "FAILED", e[e.WEB_CONTENT_NOT_FOUND = 2] = "WEB_CONTENT_NOT_FOUND", 
        e[e.NOT_CONNECTED = -1] = "NOT_CONNECTED", e[e.FORWARD_FAILED = -2] = "FORWARD_FAILED", 
        e[e.TIMEOUT = -3] = "TIMEOUT", e[e.NETWORK_ERROR = -4] = "NETWORK_ERROR", e[e.SERVER_ERROR = -5] = "SERVER_ERROR", 
        e[e.NOT_SUPPORT_GLOBAL_SEARCH = -6] = "NOT_SUPPORT_GLOBAL_SEARCH", e[e.KEYWORDS_NULL = -10] = "KEYWORDS_NULL", 
        e[e.DEVICEID_NULL = -11] = "DEVICEID_NULL", e[e.INTENTION_REC_FAILED = -12] = "INTENTION_REC_FAILED", 
        e[e.TERMINATE_PARSE = -13] = "TERMINATE_PARSE", e[e.INDEX_NOT_EXIST = -14] = "INDEX_NOT_EXIST", 
        e[e.AI_PLACEHOLDER_NOT_EXIST = -15] = "AI_PLACEHOLDER_NOT_EXIST", e[e.HAS_FILE_UPLOADING = -40] = "HAS_FILE_UPLOADING", 
        e[e.FILE_NOT_EXIST = -41] = "FILE_NOT_EXIST", e[e.UNKNOWN = -99] = "UNKNOWN";
    }(r = t.HttpCode || (t.HttpCode = {})), t.HttpMessage = {
        [r.SUCCESS]: "成功",
        [r.FAILED]: "失败",
        [r.WEB_CONTENT_NOT_FOUND]: "webContents未找到",
        [r.NOT_CONNECTED]: "设备未连接",
        [r.FORWARD_FAILED]: "请求转发失败",
        [r.TIMEOUT]: "请求超时",
        [r.NOT_SUPPORT_GLOBAL_SEARCH]: "设备不支持全搜",
        [r.NETWORK_ERROR]: "网络异常",
        [r.SERVER_ERROR]: "服务器异常",
        [r.KEYWORDS_NULL]: "不存在搜索关键字",
        [r.DEVICEID_NULL]: "不存在设备ID",
        [r.INTENTION_REC_FAILED]: "意图识别不通过",
        [r.TERMINATE_PARSE]: "终止解析",
        [r.INDEX_NOT_EXIST]: "索引不存在，解析异常",
        [r.AI_PLACEHOLDER_NOT_EXIST]: "检测到不存在 AI 占位",
        [r.HAS_FILE_UPLOADING]: "已存在上传中的任务",
        [r.FILE_NOT_EXIST]: "下载文件不存在",
        [r.UNKNOWN]: "未知异常"
    }, t.getHttpMessage = i, t.getHttpResMessage = function(e) {
        return {
            code: e,
            message: i(e)
        };
    }, t.buildClawErrorResponse = function(e, t) {
        return {
            code: e,
            message: i(e),
            data: t
        };
    };
}
