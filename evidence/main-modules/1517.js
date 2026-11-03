// analysis/pretty/main.js:114285; webpack module 1517
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = class {
        get state() {
            return "SELECT MAX(updateTime) as updateTime, MAX(createTime) as createTime, MAX(updateSequenceNum) as usn FROM Document";
        }
        get count() {
            return "SELECT COUNT(guid) num FROM Document WHERE deleted = 1";
        }
        get list() {
            return "SELECT d.guid, d.deleted, d.name, d.mime, d.documentSize, d.updateTime, d.createTime, f.guid as fileID, f.path, f.status, d.ex1\n            FROM Document d  LEFT JOIN File f  ON d.fileID = f.guid \n                WHERE deleted = 1";
        }
        getListByGuid(e) {
            return `SELECT d.guid, d.deleted, d.name, d.mime, d.documentSize, d.updateTime, d.createTime, f.guid as fileID, f.path, f.status, d.ex1\n            FROM Document d  LEFT JOIN File f  ON d.fileID = f.guid \n                WHERE d.guid in (${e.map(e => `'${e}'`).join(",")})`;
        }
        get removelist() {
            return "SELECT guid FROM Document WHERE deleted != 1";
        }
        get get() {
            return "SELECT d.*, f.path, f.status \n            FROM Document d  LEFT JOIN  File  f  ON d.fileID = f.guid  \n                WHERE  d.guid = ?";
        }
        get create() {
            return "INSERT INTO Document (guid, createTime, updateTime, name, mime, fileID, documentSize, deleted, dirty) VALUES(?,?,?,?,?,?,?,1,1)";
        }
        get update() {
            return "UPDATE Document SET name=?, updateTime=?, dirty=1  WHERE guid=?";
        }
        remove(e) {
            return `UPDATE Document SET deleted=0, updateTime=?, dirty=1  WHERE guid in (${e.map(e => `'${e}'`).join(",")})`;
        }
        recover(e) {
            return `UPDATE Document SET deleted=1, updateTime=?, dirty=1  WHERE guid in (${e.map(e => `'${e}'`).join(",")})`;
        }
        delete(e) {
            return `UPDATE Document SET deleted=-1, dirty=1  WHERE guid in (${e.map(e => `'${e}'`).join(",")})`;
        }
        selectFileByDocId(e) {
            return `SELECT f.guid, f.path FROM Document d LEFT JOIN File f ON d.fileID = f.guid WHERE d.guid in (${e.map(e => `'${e}'`).join(",")}) AND deleted = -1`;
        }
        deleteFile(e) {
            return `DELETE FROM File WHERE guid in (${e.map(e => `'${e}'`).join(",")})`;
        }
        get updateFile() {
            return "UPDATE File SET path=?  WHERE guid=?";
        }
        get unDiryGuids() {
            return "SELECT guid FROM Document WHERE dirty=0 AND deleted=1";
        }
    };
}
