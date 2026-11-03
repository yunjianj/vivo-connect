// analysis/pretty/main.js:64435; webpack module 727
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.uploadInit = t.deleteRecord = t.uploadRecord = t.downloadComplete = t.downloadUrl = t.downloadInit = void 0;
    const r = n(359);
    t.downloadInit = function(e) {
        return r.axiosServer({
            method: "post",
            url: "/api/v1/file/initDownload",
            data: e
        });
    }, t.downloadUrl = "/api/v1/file/download", t.downloadComplete = function(e) {
        return r.axiosServer({
            method: "post",
            url: "/api/v1/download/complete",
            data: e
        });
    }, t.uploadRecord = function(e) {
        return r.axiosServer({
            method: "post",
            url: "/api/v1/upload/record",
            data: e
        });
    }, t.deleteRecord = function(e) {
        return r.axiosServer({
            method: "delete",
            url: "/api/v1/upload/record/delete",
            data: e
        });
    }, t.uploadInit = function(e) {
        return r.axiosServer({
            method: "post",
            url: "/api/v1/file/initUpload",
            data: e
        });
    };
}
