// analysis/pretty/main.js:114991; webpack module 1523
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.note_findNoteTags = t.note_findTags = t.note_updateTags = t.note_updateTag = t.note_deleteTag = t.note_insertTag = void 0;
    const r = n(0);
    t.note_insertTag = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                return t.insert("Tag", e);
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_deleteTag = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = {
                    deleted: -1,
                    dirty: 1,
                    guid: e
                };
                return t.update("Tag", n, "guid");
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_updateTag = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = {
                    dirty: 1,
                    guid: e.guid,
                    name: e.name,
                    updateTime: e.updateTime
                };
                return t.update("Tag", n, "guid");
            } catch (e) {
                throw new Error(e.message);
            }
        });
    }, t.note_updateTags = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                yield t.exec("BEGIN IMMEDIATE;");
                for (let n = 0; n < e.length; n++) {
                    let r = {
                        deleted: e[n].deleted,
                        dirty: 1,
                        guid: e[n].guid,
                        name: e[n].name,
                        updateTime: e[n].updateTime
                    };
                    t.update("Tag", r, "guid");
                }
                t.exec("COMMIT;");
            } catch (e) {
                throw yield t.exec("ROLLBACK;"), new Error(e.message);
            }
        });
    }, t.note_findTags = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT * from Tag where guid in ('${e.join("','")}') and deleted = 1`;
                return yield t.all(n);
            } catch (e) {
                throw new Error("findTags failed");
            }
        });
    }, t.note_findNoteTags = function(e) {
        return r.__awaiter(this, void 0, void 0, function*() {
            const t = this;
            try {
                let n = `SELECT * from Tag where noteGuid = '${e}' and deleted = 1`;
                return yield t.all(n);
            } catch (e) {
                throw console.log(e), new Error("findTags failed");
            }
        });
    };
}
