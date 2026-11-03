// analysis/pretty/main.js:47416; webpack module 480
function(e, t, n) {
    !function(e) {
        "use strict";
        //! moment.js locale configuration
                var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), n = [ "nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9] ];
        function r(e, r, i, o) {
            var a = "";
            switch (i) {
              case "s":
                return o ? "muutaman sekunnin" : "muutama sekunti";

              case "ss":
                a = o ? "sekunnin" : "sekuntia";
                break;

              case "m":
                return o ? "minuutin" : "minuutti";

              case "mm":
                a = o ? "minuutin" : "minuuttia";
                break;

              case "h":
                return o ? "tunnin" : "tunti";

              case "hh":
                a = o ? "tunnin" : "tuntia";
                break;

              case "d":
                return o ? "päivän" : "päivä";

              case "dd":
                a = o ? "päivän" : "päivää";
                break;

              case "M":
                return o ? "kuukauden" : "kuukausi";

              case "MM":
                a = o ? "kuukauden" : "kuukautta";
                break;

              case "y":
                return o ? "vuoden" : "vuosi";

              case "yy":
                a = o ? "vuoden" : "vuotta";
            }
            return a = function(e, r) {
                return e < 10 ? r ? n[e] : t[e] : e;
            }(e, o) + " " + a;
        }
        e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: r,
                ss: r,
                m: r,
                mm: r,
                h: r,
                hh: r,
                d: r,
                dd: r,
                M: r,
                MM: r,
                y: r,
                yy: r
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        });
    }(n(3));
}
