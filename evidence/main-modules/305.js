// analysis/pretty/main.js:33795; webpack module 305
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FEEL_FREE_TRANSF_SECRET = t.FEEL_FREE_TRANSF_APP_KEY = t.CLOUD_TRANSFER_RES = t.CLOUD_TRANSFER_EVENT = t.CloudServerApi = void 0, 
    function(e) {
        e.INIT_TASK = "/api/v1/file/initUpload", e.UPLOAD_FILE = "/api/v1/file/upload", 
        e.UPLOAD_FILE_STREAM = "/api/v1/file/streamUpload", e.TASK_SUCC = "/api/v1/upload/complete", 
        e.TASK_CANCEL = "/api/v1/upload/cancel";
    }(t.CloudServerApi || (t.CloudServerApi = {})), function(e) {
        e.UPLOAD_START = "CLOUD_UPLOAD_START", e.UPLOAD_PROGRESS = "CLOUD_UPLOAD_PROGRESS", 
        e.CANCEL_UPLOAD = "CANCEL_CLOUD_UPLOAD", e.UPLOAD_END = "CLOUD_UPLOAD_END", e.GET_FILES_INFO = "GET_FILES_INFO";
    }(t.CLOUD_TRANSFER_EVENT || (t.CLOUD_TRANSFER_EVENT = {})), function(e) {
        e.UPLOAD_SUCC = "CLOUD_UPLOAD_SUCC", e.UPLOAD_FAILED = "CLOUD_UPLOAD_FAILED", e.UPLOAD_END = "CLOUD_UPLOAD_END", 
        e.UPLOAD_CANCEL = "CLOUD_UPLOAD_CANCEL", e.UPLOAD_UNSTART = "UPLOAD_UNSTART";
    }(t.CLOUD_TRANSFER_RES || (t.CLOUD_TRANSFER_RES = {})), function(e) {
        e.WIN_TEST_KEY = "1046870e8cff4a8ba99f6ea90026e36c", e.WIN_PRE_KEY = "1046870e8cff4a8ba99f6ea90026e36c", 
        e.WIN_PROD_KEY = "1046870e8cff4a8ba99f6ea90026e36c", e.MAC_TEST_KEY = "7085a63dbc204fe99e0a9cf2a85fc3cf", 
        e.MAC_PRE_KEY = "7085a63dbc204fe99e0a9cf2a85fc3cf", e.MAC_PROD_KEY = "7085a63dbc204fe99e0a9cf2a85fc3cf";
    }(t.FEEL_FREE_TRANSF_APP_KEY || (t.FEEL_FREE_TRANSF_APP_KEY = {})), function(e) {
        e.WIN_TEST_SECRET = "315d77f6a4474d35a09c43a75d312776", e.WIN_PRE_SECRET = "315d77f6a4474d35a09c43a75d312776", 
        e.WIN_PROD_SECRET = "315d77f6a4474d35a09c43a75d312776", e.MAC_TEST_SECRET = "871183ee1ab84fbaa7c0632d0e9478f9", 
        e.MAC_PRE_SECRET = "871183ee1ab84fbaa7c0632d0e9478f9", e.MAC_PROD_SECRET = "871183ee1ab84fbaa7c0632d0e9478f9";
    }(t.FEEL_FREE_TRANSF_SECRET || (t.FEEL_FREE_TRANSF_SECRET = {}));
}
