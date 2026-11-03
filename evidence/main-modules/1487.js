// analysis/pretty/main.js:110930; webpack module 1487
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(53), o = r.__importDefault(n(80));
    t.default = class {
        static getCreateUserSql() {
            return `create TABLE if not exists ${i.CommonDataBase.USER_TABLE_NAME}(Id INTEGER PRIMARY KEY AUTOINCREMENT, \n                nickName TEXT,\n                smallAvatar TEXT,\n                userId TEXT,\n                openId TEXT,\n                token TEXT,\n                phone TEXT,\n                email TEXT,\n                regionCode TEXT,\n                regionName TEXT )`;
        }
        static getSelectUserSql() {
            return `select * from ${i.CommonDataBase.USER_TABLE_NAME} where openId = ?`;
        }
        static getClearUserSql() {
            return o.default.commonLog("delete TABALE User"), "delete from " + i.CommonDataBase.USER_TABLE_NAME;
        }
        static getConfigSql() {
            return `select * from ${i.CommonDataBase.CONFIG_TABLE_NAME} where openId = ?`;
        }
        static getTableUserSql() {
            return o.default.commonLog("get Table Users"), "SELECT * FROM  " + i.CommonDataBase.USER_TABLE_NAME;
        }
        static getCreateAuthTokenSql() {
            return `create TABLE if not exists ${i.CommonDataBase.AUTH_TOKEN_TABLE_NAME}(\n                Id INTEGER PRIMARY KEY AUTOINCREMENT,\n                token TEXT NOT NULL,\n                tokenName TEXT NOT NULL,\n                permission TEXT NOT NULL DEFAULT 'read-write',\n                expireType TEXT NOT NULL DEFAULT 'date',\n                expireDate TEXT,\n                createdAt TEXT NOT NULL )`;
        }
        static getSelectAllValidAuthTokensSql() {
            return `select * from ${i.CommonDataBase.AUTH_TOKEN_TABLE_NAME}\n                where expireType = 'permanent'\n                   or (expireType = 'date' and expireDate is not null and date(expireDate) >= date(?))`;
        }
        static getSelectAuthTokenByTokenSql() {
            return `select * from ${i.CommonDataBase.AUTH_TOKEN_TABLE_NAME} where token = ?`;
        }
        static getSelectAuthTokenByIdSql() {
            return `select * from ${i.CommonDataBase.AUTH_TOKEN_TABLE_NAME} where Id = ?`;
        }
        static getDeleteAuthTokenSql() {
            return `delete from ${i.CommonDataBase.AUTH_TOKEN_TABLE_NAME} where Id = ?`;
        }
        static getDeleteAuthTokenByTokenSql() {
            return `delete from ${i.CommonDataBase.AUTH_TOKEN_TABLE_NAME} where token = ?`;
        }
    };
}
