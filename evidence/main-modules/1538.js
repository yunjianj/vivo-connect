// analysis/pretty/main.js:116941; webpack module 1538
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "calendar", function() {
        return r;
    });
    var r = {
        lunarInfo: [ 19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 92821, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 37600, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560 ],
        solarMonth: [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ],
        Gan: [ "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸" ],
        Zhi: [ "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥" ],
        Animals: [ "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪" ],
        festival: {
            "1-1": {
                title: "元旦"
            },
            "2-14": {
                title: "情人节"
            },
            "3-8": {
                title: "妇女节"
            },
            "3-12": {
                title: "植树节"
            },
            "4-1": {
                title: "愚人节"
            },
            "5-1": {
                title: "劳动节"
            },
            "5-4": {
                title: "青年节"
            },
            "6-1": {
                title: "儿童节"
            },
            "7-1": {
                title: "建党节"
            },
            "8-1": {
                title: "建军节"
            },
            "9-3": {
                title: "胜利日"
            },
            "9-10": {
                title: "教师节"
            },
            "10-1": {
                title: "国庆节"
            },
            "10-31": {
                title: "万圣夜"
            },
            "12-13": {
                title: "国家公祭日"
            },
            "12-24": {
                title: "平安夜"
            },
            "12-25": {
                title: "圣诞节"
            }
        },
        lfestival: {
            "12-30": {
                title: "除夕"
            },
            "1-1": {
                title: "春节"
            },
            "1-15": {
                title: "元宵节"
            },
            "5-5": {
                title: "端午节"
            },
            "7-7": {
                title: "七夕节"
            },
            "7-15": {
                title: "中元节"
            },
            "8-15": {
                title: "中秋节"
            },
            "9-9": {
                title: "重阳节"
            },
            "12-8": {
                title: "腊八节"
            }
        },
        getFestival() {
            return this.festival;
        },
        getLunarFestival() {
            return this.lfestival;
        },
        setFestival(e = {}) {
            this.festival = e;
        },
        setLunarFestival(e = {}) {
            this.lfestival = e;
        },
        solarTerm: [ "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至" ],
        sTermInfo: [ "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722" ],
        nStr1: [ "日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十" ],
        nStr4: {
            "一": "1",
            "二": "2",
            "三": "3",
            "四": "4",
            "五": "5",
            "六": "6",
            "七": "7",
            "八": "8",
            "九": "9"
        },
        nStr2: [ "初", "十", "廿", "卅" ],
        nStr3: [ "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊" ],
        lYearDays: function(e) {
            var t, n = 348;
            for (t = 32768; t > 8; t >>= 1) n += this.lunarInfo[e - 1900] & t ? 1 : 0;
            return n + this.leapDays(e);
        },
        leapMonth: function(e) {
            return 15 & this.lunarInfo[e - 1900];
        },
        leapDays: function(e) {
            return this.leapMonth(e) ? 65536 & this.lunarInfo[e - 1900] ? 30 : 29 : 0;
        },
        monthDays: function(e, t) {
            return t > 12 || t < 1 ? -1 : this.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
        },
        solarDays: function(e, t) {
            if (t > 12 || t < 1) return -1;
            var n = t - 1;
            return 1 == n ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 29 : 28 : this.solarMonth[n];
        },
        toGanZhiYear: function(e) {
            var t = (e - 3) % 10, n = (e - 3) % 12;
            return 0 == t && (t = 10), 0 == n && (n = 12), this.Gan[t - 1] + this.Zhi[n - 1];
        },
        toAstro: function(e, t) {
            return "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * e - (t < [ 20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22 ][e - 1] ? 2 : 0), 2) + "座";
        },
        toGanZhi: function(e) {
            return this.Gan[e % 10] + this.Zhi[e % 12];
        },
        getTerm: function(e, t) {
            if (e < 1900 || e > 2100) return -1;
            if (t < 1 || t > 24) return -1;
            var n = this.sTermInfo[e - 1900], r = [ parseInt("0x" + n.substr(0, 5)).toString(), parseInt("0x" + n.substr(5, 5)).toString(), parseInt("0x" + n.substr(10, 5)).toString(), parseInt("0x" + n.substr(15, 5)).toString(), parseInt("0x" + n.substr(20, 5)).toString(), parseInt("0x" + n.substr(25, 5)).toString() ], i = [ r[0].substr(0, 1), r[0].substr(1, 2), r[0].substr(3, 1), r[0].substr(4, 2), r[1].substr(0, 1), r[1].substr(1, 2), r[1].substr(3, 1), r[1].substr(4, 2), r[2].substr(0, 1), r[2].substr(1, 2), r[2].substr(3, 1), r[2].substr(4, 2), r[3].substr(0, 1), r[3].substr(1, 2), r[3].substr(3, 1), r[3].substr(4, 2), r[4].substr(0, 1), r[4].substr(1, 2), r[4].substr(3, 1), r[4].substr(4, 2), r[5].substr(0, 1), r[5].substr(1, 2), r[5].substr(3, 1), r[5].substr(4, 2) ];
            return parseInt(i[t - 1]);
        },
        toChinaMonth: function(e) {
            if (e > 12 || e < 1) return -1;
            var t = this.nStr3[e - 1];
            return t += "月";
        },
        toChinaDay: function(e) {
            var t;
            switch (e) {
              case 10:
                t = "初十";
                break;

              case 20:
                t = "二十";
                break;

              case 30:
                t = "三十";
                break;

              default:
                t = this.nStr2[Math.floor(e / 10)], t += this.nStr1[e % 10];
            }
            return t;
        },
        getAnimal: function(e) {
            return this.Animals[(e - 4) % 12];
        },
        getMonthWeek(e, t, n) {
            const r = new Date(e, parseInt(t) - 1, n).getDate();
            return Math.ceil(r / 7);
        },
        solar2lunar: function(e, t, n) {
            if (e = parseInt(e), t = parseInt(t), n = parseInt(n), e < 1900 || e > 2100) return -1;
            if (1900 == e && 1 == t && n < 31) return -1;
            if (e) r = new Date(e, parseInt(t) - 1, n); else var r = new Date;
            var i, o = 0, a = (e = r.getFullYear(), t = r.getMonth() + 1, n = r.getDate(), (Date.UTC(r.getFullYear(), r.getMonth(), r.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
            for (i = 1900; i < 2101 && a > 0; i++) a -= o = this.lYearDays(i);
            a < 0 && (a += o, i--);
            var s = new Date, l = !1;
            s.getFullYear() == e && s.getMonth() + 1 == t && s.getDate() == n && (l = !0);
            var c = r.getDay(), u = this.nStr1[c];
            0 == c && (c = 7);
            var d = i, h = this.leapMonth(i), p = !1;
            for (i = 1; i < 13 && a > 0; i++) h > 0 && i == h + 1 && 0 == p ? (--i, p = !0, 
            o = this.leapDays(d)) : o = this.monthDays(d, i), 1 == p && i == h + 1 && (p = !1), 
            a -= o;
            0 == a && h > 0 && i == h + 1 && (p ? p = !1 : (p = !0, --i)), a < 0 && (a += o, 
            --i);
            var f = i, _ = a + 1, m = t - 1, g = this.toGanZhiYear(d), v = this.getTerm(e, 2 * t - 1), y = this.getTerm(e, 2 * t), E = this.toGanZhi(12 * (e - 1900) + t + 11);
            n >= v && (E = this.toGanZhi(12 * (e - 1900) + t + 12));
            var b = !1, w = null;
            v == n && (b = !0, w = this.solarTerm[2 * t - 2]), y == n && (b = !0, w = this.solarTerm[2 * t - 1]);
            var S = Date.UTC(e, m, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, T = this.toGanZhi(S + n - 1), A = this.toAstro(t, n), O = e + "-" + t + "-" + n, C = d + "-" + f + "-" + _, N = this.festival, I = this.lfestival, R = t + "-" + n, D = f + "-" + _, L = this.getMonthWeek(e, t, n), k = this.IsLastDayBeforeNewYearOfCN(d, f, _, I, D), M = N[R] ? N[R].title : null, P = this.toChinaDay(_), x = (p ? "闰" : "") + this.toChinaMonth(f), F = this.holidaySolt(P, t, L, c, k, w, M, x);
            return {
                date: O,
                lunarDate: C,
                festival: N[R] ? N[R].title : null,
                lunarFestival: this.IsLastDayBeforeNewYearOfCN(d, f, _, I, D),
                lYear: d,
                lMonth: f,
                lDay: _,
                Animal: this.getAnimal(d),
                IYearCn: this.getYearCn(d + ""),
                IMonthCn: (p ? "闰" : "") + this.toChinaMonth(f),
                IDayCn: this.toChinaDay(_),
                cYear: e,
                cMonth: t,
                cDay: n,
                gzYear: g,
                gzMonth: E,
                gzDay: T,
                isToday: l,
                isLeap: p,
                nWeek: c,
                ncWeek: "星期" + u,
                isTerm: b,
                Term: w,
                astro: A,
                howWeek: L,
                nlTitle: F
            };
        },
        IsLastDayBeforeNewYearOfCN: function(e, t, n, r, i) {
            let o = 30, a = r[i] ? r[i].title : null;
            return 12 === t && (o = this.monthDays(e, t)), 12 === t && o < 30 && 29 === n && (a = "除夕"), 
            a;
        },
        getYearCn: function(e) {
            let t = "";
            for (let n of e) t += "0" == n ? "〇" : this.nStr1[parseInt(n)];
            return t;
        },
        getNumCn: function(e) {
            let t = "";
            return t += "0" == e ? "〇" : this.nStr1[parseInt(e)], t;
        },
        getYearNum: function(e) {
            let t = "";
            for (let n of e) t += "〇" == n ? "0" : this.nStr4[n];
            return t;
        },
        formatDate: function(e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
        },
        formatDateFun: function(e) {
            let t = e.getMonth() + 1, n = e.getDate();
            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), e.getFullYear() + "-" + t + "-" + n;
        },
        holidaySolt(e, t, n, r, i, o, a, s) {
            let l = e, c = "";
            return t && 5 === t && 2 === n && 7 === r && (c = "母亲节"), t && 6 === t && 3 === n && 7 === r && (c = "父亲节"), 
            t && 11 === t && 4 === n && 4 === r && (c = "感恩节"), a ? l = a : c ? l = c : i ? l = i : o ? (l = o, 
            "清明" === o && (l = o + "节")) : "初一" === e && (l = s + e), l;
        },
        getWorkOrFreeDay(e, t, n) {
            let r = n, i = "", o = "";
            return t.forEach(t => {
                e && e === t.toString() && (i = "班");
            }), r.forEach(t => {
                e && e === t.toString() && (o = "休");
            }), i + o;
        },
        lunar2solar: function(e, t, n, r) {
            e = parseInt(e), t = parseInt(t), n = parseInt(n);
            r = !!r;
            var i = this.leapMonth(e);
            this.leapDays(e);
            if (r && i != t) return -1;
            if (2100 == e && 12 == t && n > 1 || 1900 == e && 1 == t && n < 31) return -1;
            var o = this.monthDays(e, t), a = o;
            if (r && (a = this.leapDays(e, t)), e < 1900 || e > 2100 || n > a) return -1;
            for (var s = 0, l = 1900; l < e; l++) s += this.lYearDays(l);
            var c = 0, u = !1;
            for (l = 1; l < t; l++) c = this.leapMonth(e), u || c <= l && c > 0 && (s += this.leapDays(e), 
            u = !0), s += this.monthDays(e, l);
            r && (s += o);
            var d = Date.UTC(1900, 1, 30, 0, 0, 0), h = new Date(864e5 * (s + n - 31) + d), p = h.getUTCFullYear(), f = h.getUTCMonth() + 1, _ = h.getUTCDate();
            return this.solar2lunar(p, f, _);
        }
    };
}
