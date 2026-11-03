// analysis/pretty/main.js:14161; webpack module 74
function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SameNameBtnStrategyEnum = t.SameNameClickEnum = t.QuickShareFromEnum = t.GLOBALSEARCH_VDFS_EVENT_NAME = t.UPLOAD_TYPE = t.TRANSFER_FAIL_CODE = t.SEARCH_TYPE = t.DRAG_TRANSFER = t.RECORD_TYPE = t.PROGRESS_TYPE = t.CURSOR_TYPE = t.CLICK = t.DOWNLOAD_TYPE = t.WX_QQ_TYPE = t.CAT_TYPE = t.ALBUM_PAGE_TYPE = void 0, 
    function(e) {
        e.IMAGE = "IMAGE", e.VIDEO = "VIDEO", e.AUDIO = "AUDIO", e.DOC = "DOC", e.File = "File";
    }(r || (r = {})), function(e) {
        e[e.ALL = 0] = "ALL", e[e.OTHER = 1] = "OTHER", e[e.DETAIL = 2] = "DETAIL";
    }(t.ALBUM_PAGE_TYPE || (t.ALBUM_PAGE_TYPE = {})), function(e) {
        e[e.RECENTFILE = 0] = "RECENTFILE", e[e.IMAGE = 1] = "IMAGE", e[e.VIDEO = 2] = "VIDEO", 
        e[e.AUDIO = 3] = "AUDIO", e[e.DOC = 4] = "DOC", e[e.WX = 5] = "WX", e[e.QQ = 6] = "QQ", 
        e[e.STORAGE = 7] = "STORAGE", e[e.SEARCH = 8] = "SEARCH", e[e.RECENTDELETE = 9] = "RECENTDELETE", 
        e[e.APP = 10] = "APP";
    }(t.CAT_TYPE || (t.CAT_TYPE = {})), function(e) {
        e.ALL = "ALL", e.IMAGE = "IMAGE", e.DOCUMENT = "DOCUMENT", e.VIDEO = "VIDEO", e.AUDIO = "AUDIO", 
        e.APK = "APK", e.ZIP = "ZIP", e.OTHERS = "OTHERS", e.HOME = "HOME";
    }(t.WX_QQ_TYPE || (t.WX_QQ_TYPE = {})), function(e) {
        e[e.SAVE_TO_PC = 0] = "SAVE_TO_PC", e[e.OPEN_FILE = 1] = "OPEN_FILE";
    }(t.DOWNLOAD_TYPE || (t.DOWNLOAD_TYPE = {})), function(e) {
        e.SIMPLE = "simple", e.CTRL = "ctrl", e.SHIFT = "shift";
    }(t.CLICK || (t.CLICK = {})), function(e) {
        e.DEFAULT = "default", e.WAIT = "wait";
    }(t.CURSOR_TYPE || (t.CURSOR_TYPE = {})), function(e) {
        e.STRAT = "startTransmission", e.ING = "inTransmission", e.END = "endTransmission";
    }(t.PROGRESS_TYPE || (t.PROGRESS_TYPE = {})), function(e) {
        e[e.DOWNLOAD = 0] = "DOWNLOAD", e[e.UPLOAD = 1] = "UPLOAD";
    }(t.RECORD_TYPE || (t.RECORD_TYPE = {})), function(e) {
        e.START = "drag_transfer_start", e.ING = "drag_transfer_progress", e.END = "drag_transfer_end", 
        e.CLOUD_DOWNLOAD_CHECK = "checkDownloadInfo", e.CLOUD_DOWNLOAD = "download", e.NOT_SUPPORT = "drag_not_support", 
        e.CLOUD_CHECK_FILE = "drag_precheck", e.IN_PROGRESS_NEAR = "inTransmission_near", 
        e.IN_PROGRESS = "inTransmission", e.DRAG_DOWNLOAD_BY_PC = "drag_download";
    }(t.DRAG_TRANSFER || (t.DRAG_TRANSFER = {})), function(e) {
        e.ALL = "HOME", e.FOLDER = "FOLDER", e.IMAGE = "IMAGE", e.VIDEO = "VIDEO", e.AUDIO = "AUDIO", 
        e.DOC = "DOCUMENT", e.ZIP = "ZIP", e.APK = "APK", e.OTHER = "OTHERS";
    }(t.SEARCH_TYPE || (t.SEARCH_TYPE = {})), function(e) {
        e.OK = "ok", e.PARTIAL_SUCCESS = "partial_success", e.CHOOSE_EMPTY = "choose_empty_list", 
        e.NOT_FOUND_CONTINUE = "not_found_continue", e.ABORT = "abort", e.NETWORK = "network", 
        e.NOT_ENOUGH_SPACE = "not_enough_space", e.FILE_NOT_EXIST = "file_not_exist", e.NO_PERMISSSION = "no_permission", 
        e.EXTRACT = "extract", e.ARCHIVE = "archive", e.ALL_FILE_SIZE_OVER_LIMIT = "all_file_size_over_limit", 
        e.FILE_SIZE_OVER_LIMIT = "file_size_over_limit", e.TRAFFIC_NOT_ENOUGH = "traffic__not_enough", 
        e.SHA256_NOT_SIMPLE = "sha256_not_simple", e.CHOOSE_TOO_MUCH_FILE = "choose_too_much_file", 
        e.UNKNOWN = "unknow", e.CLOUD_RECONNECT_FAIL = "cloud_reconnect_fail", e.CANCEL_FROM_PHONE = "CANCEL_FROM_PHONE", 
        e.NO_CHOOSE_DIR = "NO_CHOOSE_DIR", e.ALREADY_HAS_TASK = "ALREADY_HAS_TASK", e.CLOUD_CHECK_FAILD = "CLOUD_CHECK_FAILD", 
        e.ConnectionException = "ConnectionException";
    }(t.TRANSFER_FAIL_CODE || (t.TRANSFER_FAIL_CODE = {})), function(e) {
        e[e.DRAG = 1] = "DRAG", e[e.IMPORT = 2] = "IMPORT", e[e.SHARE = 3] = "SHARE";
    }(t.UPLOAD_TYPE || (t.UPLOAD_TYPE = {})), function(e) {
        e.NAME = "globalSearch$-$globalSearch", e.MODULE_NAME = "com.vivo.pcsuite.globalSearch", 
        e.INFO_TYPE = "on_globalSearch_get_mobile_pc_version", e.REGISTER_TYPE = "on_pc_vdfs_module_function_registration", 
        e.CLIENT_TYPE = "request_access_files", e.RELAY_COPY_TO_CLIPBOARD = "request_copy_to_clipboard", 
        e.RELAY_COPY_TO_CLIPBOARD_RESULT = "files_copy_to_clipboard_result", e.MEDIA_PLAYER_NAME = "mediaPlayer$-$mediaPlayer", 
        e.MEDIA_PLAYER_INFO_TYPE = "on_mediaPlayer_get_mobile_pc_version", e.MEDIA_PLAYER_MODULE_NAME = "com.vivo.pcsuite.mediaPlayer", 
        e.MEDIA_PLAYER_FILE_TRANS = "on_pc_vdfs_mediaPlayer_fileTrans";
    }(t.GLOBALSEARCH_VDFS_EVENT_NAME || (t.GLOBALSEARCH_VDFS_EVENT_NAME = {})), function(e) {
        e[e.HomeBtn = 1] = "HomeBtn", e[e.HomeDrag = 2] = "HomeDrag", e[e.RightClickOnTheComputer = 3] = "RightClickOnTheComputer", 
        e[e.IsRetry = 4] = "IsRetry";
    }(t.QuickShareFromEnum || (t.QuickShareFromEnum = {})), function(e) {
        e.Cancel = "Cancel", e.Skip = "Skip", e.Replace = "Replace", e.KeepBoth = "KeepBoth";
    }(t.SameNameClickEnum || (t.SameNameClickEnum = {})), function(e) {
        e.MultipleOne = "MultipleOne", e.MultipleMultiple = "MultipleMultiple";
    }(t.SameNameBtnStrategyEnum || (t.SameNameBtnStrategyEnum = {}));
}
