// analysis/pretty/main.js:116103; webpack module 1530
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = class {
        searchByIds(e) {
            return `SELECT guid, path, hasThumb, thumbPath FROM File WHERE guid in (${e.map(e => `'${e}'`).join(",")})`;
        }
        get create() {
            const e = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? 3 : 2;
            return `INSERT INTO File \n        (guid, path, fileSize, checkSum, checkSumVersion, fileCreateTime, metaType, hasThumb, mimeType, width, height, duration, rotate, source, category, relateFlag, requestFrom, thumbPath, thumbCheckSum, thumbCheckSumVersion, thumbStyle) \n        VALUES(?,?,?,?,${e},?,?,?,?,?,?,?,?,'SKETCH', 'NOTES', 1, 'SKETCH_NOTES', ?, ?, ${e}, ?)`;
        }
        get_file_usn(e, t) {
            return `select updateSequenceNum as usn, guid from ${e} where guid in (${t.map(e => `'${e}'`).join(",")})`;
        }
        getResourcesByIds(e) {
            return `SELECT * FROM Resource WHERE fileID in (${e.map(e => `'${e}'`).join(",")})`;
        }
    };
}
