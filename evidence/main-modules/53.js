// analysis/pretty/main.js:10150; webpack module 53
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Record_DB = t.DEVICE_BACKUP_DB = t.V_TALK_DB = t.TRANSFER_RECORD_DB = t.osDb = t.Note_DB = t.ALBUM_DB = t.CALENDAR_DB = t.BuriedPointDataBase = t.CalendarDataBase = t.CommonDataBase = void 0;
    t.CALENDAR_DB = "CalendarSync.db";
    t.ALBUM_DB = "AlbumSync.db", function(e) {
        e.DATA_BASE_NAME = "Config.db", e.USER_TABLE_NAME = "User", e.CONFIG_TABLE_NAME = "SoftwareSet", 
        e.AUTH_TOKEN_TABLE_NAME = "AuthToken";
    }(t.CommonDataBase || (t.CommonDataBase = {})), function(e) {
        e.DATA_BASE_NAME = "CalendarSync.db", e.REPORTING_TIME_NAME = "ReportingTime";
    }(t.CalendarDataBase || (t.CalendarDataBase = {})), function(e) {
        e.DATA_BASE_NAME = "Report.db", e.REPORT_TABLE_NAME = "OperLog";
    }(t.BuriedPointDataBase || (t.BuriedPointDataBase = {}));
    t.Note_DB = "NoteSync.db";
    t.osDb = "OSSync.db";
    t.TRANSFER_RECORD_DB = "TransferRecord.db";
    t.V_TALK_DB = "VTalk.db";
    t.DEVICE_BACKUP_DB = "DeviceBackup.db";
    t.Record_DB = "RecordSync.db";
}
