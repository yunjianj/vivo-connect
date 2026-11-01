// analysis/pretty/main.js:131403; webpack module 1708
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DIALOG_STYLE = t.RESULT_CODE = t.SCENE_TYPE = t.FILE_VIEW_WAY = void 0, function(e) {
        e[e.VDFS_VALID = 0] = "VDFS_VALID", e[e.VDFS_INVALID = 1] = "VDFS_INVALID", e[e.LOCAL_FILES = 2] = "LOCAL_FILES", 
        e[e.CLOUD_FILES = 3] = "CLOUD_FILES";
    }(t.FILE_VIEW_WAY || (t.FILE_VIEW_WAY = {})), function(e) {
        e[e.FILE_MANAGE_LIST = 0] = "FILE_MANAGE_LIST", e[e.GLOBAL_SEARCH = 1] = "GLOBAL_SEARCH", 
        e[e.GLOBAL_LOCAL_SEARCH = 2] = "GLOBAL_LOCAL_SEARCH", e[e.GLOBAL_PCSUITE_ALL_SEARCH = 3] = "GLOBAL_PCSUITE_ALL_SEARCH", 
        e[e.GLOBAL_PCSUITE_ALBUM_SEARCH = 4] = "GLOBAL_PCSUITE_ALBUM_SEARCH", e[e.GLOBAL_PCSUITE_NOTE_SEARCH = 5] = "GLOBAL_PCSUITE_NOTE_SEARCH", 
        e[e.GLOBAL_PCSUITE_RECORD_SEARCH = 6] = "GLOBAL_PCSUITE_RECORD_SEARCH", e[e.TRANSFER_RECORD = 20] = "TRANSFER_RECORD", 
        e[e.TRANSFER_RECORD_LOCAL = 21] = "TRANSFER_RECORD_LOCAL", e[e.RECORD = 50] = "RECORD", 
        e[e.NOTE = 51] = "NOTE", e[e.ALBUM = 52] = "ALBUM", e[e.IMAGERELAY = 53] = "IMAGERELAY", 
        e[e.CLOUD = 54] = "CLOUD", e[e.UNSET = 99] = "UNSET";
    }(t.SCENE_TYPE || (t.SCENE_TYPE = {})), function(e) {
        e[e.CAN_NOT_OPERATE = -1] = "CAN_NOT_OPERATE", e[e.CAN_OPERATE = 0] = "CAN_OPERATE", 
        e[e.CHOOSE_OPERATITON = 1] = "CHOOSE_OPERATITON", e[e.OPERATE_SUCCESS = 2] = "OPERATE_SUCCESS", 
        e[e.OPERATE_FAIL = 3] = "OPERATE_FAIL";
    }(t.RESULT_CODE || (t.RESULT_CODE = {})), function(e) {
        e[e.WARN_DIALOG_DEFAULT = 1] = "WARN_DIALOG_DEFAULT", e[e.CONFIRM_DIALOG_DEFULT = 2] = "CONFIRM_DIALOG_DEFULT", 
        e[e.SAVE_SAME_NAME_DIALOG_DEFULT = 3] = "SAVE_SAME_NAME_DIALOG_DEFULT";
    }(t.DIALOG_STYLE || (t.DIALOG_STYLE = {}));
}
