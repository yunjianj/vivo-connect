// analysis/pretty/main.js:62155; webpack module 695
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.converPhonePath = t.tokenize = t.compareName = t.getCategoryByPath = t.getCategorySqlConditionNoStatus = t.getCategorySqlCondition = void 0;
    const r = n(0).__importDefault(n(1421)), i = n(347);
    function o(e) {
        const t = [], n = /[\u4e00-\u9fa5]/, i = /\d+/, o = /[A-Za-z]/, a = /[^A-Za-z0-9\u4e00-\u9fa5]/;
        let s = 0;
        for (;s < e.length; ) {
            const l = e[s];
            if (n.test(l)) {
                const e = r.default(l, {
                    style: r.default.STYLE_NORMAL
                })[0][0];
                t.push({
                    type: 1,
                    value: l,
                    pinyin: e
                }), s++;
            } else {
                if (i.test(l)) {
                    const n = e.slice(s).match(i);
                    if (n) {
                        const e = n[0];
                        t.push({
                            type: 3,
                            value: e,
                            num: parseInt(e, 10)
                        }), s += e.length;
                        continue;
                    }
                }
                if (o.test(l)) t.push({
                    type: 4,
                    value: l.toLowerCase(),
                    isUpper: l === l.toUpperCase()
                }), s++; else if (a.test(l)) {
                    const e = l.charCodeAt(0), n = e >= 33 && e <= 126;
                    t.push({
                        type: 2,
                        value: l,
                        isAsciiSymbol: n
                    }), s++;
                } else t.push({
                    type: 2,
                    value: l,
                    isAsciiSymbol: !1
                }), s++;
            }
        }
        return t;
    }
    t.getCategorySqlCondition = function(e) {
        switch (e) {
          case 1:
            return "\n            AND r.inRecycle != 1\n            AND r.status != 3 ";

          case 2:
            return `\n          AND r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.ROOT_DIR}%'\n          AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.CALL_DIR}%'\n          AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.CALL_DIR_SMART_ANSWER}%'\n          AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.APP_DIR}%'\n          AND r.inRecycle != 1\n          AND r.status != 3 \n        `;

          case 3:
            return `\n          AND (\n                r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.CALL_DIR}%'\n             OR r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.CALL_DIR_SMART_ANSWER}%'\n          )\n          AND r.inRecycle != 1\n          AND r.status != 3 \n        `;

          case 4:
            return `\n          AND r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.APP_DIR}%'\n          AND r.inRecycle != 1\n          AND r.status != 3 \n        `;

          case 5:
            return "\n          AND r.inRecycle = 1\n          AND r.status != 3 \n        ";

          default:
            return "";
        }
    }, t.getCategorySqlConditionNoStatus = function(e) {
        switch (e) {
          case 2:
            return `\n          AND r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.ROOT_DIR}%'\n          AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.CALL_DIR}%'\n          AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.CALL_DIR_SMART_ANSWER}%'\n          AND r.mMediaFileOriginalPath NOT LIKE '%${i.RECORD_MFD.APP_DIR}%'\n        `;

          case 3:
            return `\n          AND (\n                r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.CALL_DIR}%'\n             OR r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.CALL_DIR_SMART_ANSWER}%'\n          )\n        `;

          case 4:
            return `\n          AND r.mMediaFileOriginalPath LIKE '%${i.RECORD_MFD.APP_DIR}%'\n        `;

          default:
            return "";
        }
    }, t.getCategoryByPath = function(e) {
        return (null == e ? void 0 : e.indexOf(i.RECORD_MFD.ROOT_DIR)) > -1 && -1 === (null == e ? void 0 : e.indexOf(i.RECORD_MFD.CALL_DIR)) && -1 === (null == e ? void 0 : e.indexOf(i.RECORD_MFD.CALL_DIR_SMART_ANSWER)) && -1 === (null == e ? void 0 : e.indexOf(i.RECORD_MFD.APP_DIR)) ? "record" : "";
    }, t.compareName = function(e, t) {
        const n = e => (e || "").replace(/\s+/g, ""), r = o(n(e)), i = o(n(t)), a = Math.max(r.length, i.length);
        for (let e = 0; e < a; e++) {
            const t = r[e], n = i[e];
            if (!t) return -1;
            if (!n) return 1;
            if (t.type !== n.type) return t.type - n.type;
            switch (t.type) {
              case 1:
                if (t.pinyin !== n.pinyin) return t.pinyin.localeCompare(n.pinyin);
                break;

              case 2:
                return t.isAsciiSymbol !== n.isAsciiSymbol ? (n.isAsciiSymbol ? 1 : 0) - (t.isAsciiSymbol ? 1 : 0) : t.value.localeCompare(n.value);

              case 3:
                if (t.num !== n.num) return t.num - n.num;
                break;

              case 4:
                if (t.isUpper !== n.isUpper) return (n.isUpper ? 1 : 0) - (t.isUpper ? 1 : 0);
                if (t.value !== n.value) return t.value.localeCompare(n.value);
            }
        }
        return 0;
    }, t.tokenize = o, t.converPhonePath = function(e) {
        const t = e.split(/[\\/]/).pop();
        return `${i.RECORD_MFD.PHOTO_DIR}/${t}`;
    };
}
