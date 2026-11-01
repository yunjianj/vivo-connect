// analysis/pretty/main.js:41529; webpack module 380
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.buildUrl = t.API_DROP_FILE_TO_PHONE = t.API_FILE_UPLOAD_INFO = t.API_FILE_DOWNLOAD = t.API_FILE_DOWNLOAD_INFO = void 0;
    t.API_FILE_DOWNLOAD_INFO = "/pc_file_manager/download_info", t.API_FILE_DOWNLOAD = "/pc_file_manager/download", 
    t.API_FILE_UPLOAD_INFO = "/pc_file_manager/drop_files_info", t.API_DROP_FILE_TO_PHONE = "/upload/drop_file_to_phone", 
    t.buildUrl = (e, t, n = {}) => {
        let r = "", i = [];
        for (const e in n) {
            const t = n[e];
            i.push(`${e}=${t}`);
        }
        return i.length > 0 && (r = "?" + encodeURI(i.join("&"))), `https://${e}${t}${r}`;
    };
}
