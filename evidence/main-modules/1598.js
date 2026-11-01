// analysis/pretty/main.js:122398; webpack module 1598
function(e, t, n) {
    "use strict";
    (function(e) {
        const t = n(1599), r = (e, n) => function() {
            const r = e.apply(t, arguments);
            return `[${r + n}m`;
        }, i = (e, n) => function() {
            const r = e.apply(t, arguments);
            return `[${38 + n};5;${r}m`;
        }, o = (e, n) => function() {
            const r = e.apply(t, arguments);
            return `[${38 + n};2;${r[0]};${r[1]};${r[2]}m`;
        };
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            get: function() {
                const e = new Map, n = {
                    modifier: {
                        reset: [ 0, 0 ],
                        bold: [ 1, 22 ],
                        dim: [ 2, 22 ],
                        italic: [ 3, 23 ],
                        underline: [ 4, 24 ],
                        inverse: [ 7, 27 ],
                        hidden: [ 8, 28 ],
                        strikethrough: [ 9, 29 ]
                    },
                    color: {
                        black: [ 30, 39 ],
                        red: [ 31, 39 ],
                        green: [ 32, 39 ],
                        yellow: [ 33, 39 ],
                        blue: [ 34, 39 ],
                        magenta: [ 35, 39 ],
                        cyan: [ 36, 39 ],
                        white: [ 37, 39 ],
                        gray: [ 90, 39 ],
                        redBright: [ 91, 39 ],
                        greenBright: [ 92, 39 ],
                        yellowBright: [ 93, 39 ],
                        blueBright: [ 94, 39 ],
                        magentaBright: [ 95, 39 ],
                        cyanBright: [ 96, 39 ],
                        whiteBright: [ 97, 39 ]
                    },
                    bgColor: {
                        bgBlack: [ 40, 49 ],
                        bgRed: [ 41, 49 ],
                        bgGreen: [ 42, 49 ],
                        bgYellow: [ 43, 49 ],
                        bgBlue: [ 44, 49 ],
                        bgMagenta: [ 45, 49 ],
                        bgCyan: [ 46, 49 ],
                        bgWhite: [ 47, 49 ],
                        bgBlackBright: [ 100, 49 ],
                        bgRedBright: [ 101, 49 ],
                        bgGreenBright: [ 102, 49 ],
                        bgYellowBright: [ 103, 49 ],
                        bgBlueBright: [ 104, 49 ],
                        bgMagentaBright: [ 105, 49 ],
                        bgCyanBright: [ 106, 49 ],
                        bgWhiteBright: [ 107, 49 ]
                    }
                };
                n.color.grey = n.color.gray;
                for (const t of Object.keys(n)) {
                    const r = n[t];
                    for (const t of Object.keys(r)) {
                        const i = r[t];
                        n[t] = {
                            open: `[${i[0]}m`,
                            close: `[${i[1]}m`
                        }, r[t] = n[t], e.set(i[0], i[1]);
                    }
                    Object.defineProperty(n, t, {
                        value: r,
                        enumerable: !1
                    }), Object.defineProperty(n, "codes", {
                        value: e,
                        enumerable: !1
                    });
                }
                const a = e => e, s = (e, t, n) => [ e, t, n ];
                n.color.close = "[39m", n.bgColor.close = "[49m", n.color.ansi = {
                    ansi: r(a, 0)
                }, n.color.ansi256 = {
                    ansi256: i(a, 0)
                }, n.color.ansi16m = {
                    rgb: o(s, 0)
                }, n.bgColor.ansi = {
                    ansi: r(a, 10)
                }, n.bgColor.ansi256 = {
                    ansi256: i(a, 10)
                }, n.bgColor.ansi16m = {
                    rgb: o(s, 10)
                };
                for (let e of Object.keys(t)) {
                    if ("object" != typeof t[e]) continue;
                    const a = t[e];
                    "ansi16" === e && (e = "ansi"), "ansi16" in a && (n.color.ansi[e] = r(a.ansi16, 0), 
                    n.bgColor.ansi[e] = r(a.ansi16, 10)), "ansi256" in a && (n.color.ansi256[e] = i(a.ansi256, 0), 
                    n.bgColor.ansi256[e] = i(a.ansi256, 10)), "rgb" in a && (n.color.ansi16m[e] = o(a.rgb, 0), 
                    n.bgColor.ansi16m[e] = o(a.rgb, 10));
                }
                return n;
            }
        });
    }).call(this, n(40)(e));
}
