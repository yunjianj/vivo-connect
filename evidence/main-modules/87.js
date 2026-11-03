// analysis/pretty/main.js:14914; webpack module 87
function(e, t, n) {
    "use strict";
    "undefined" == typeof process || !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? e.exports = {
        nextTick: function(e, t, n, r) {
            if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
            var i, o, a = arguments.length;
            switch (a) {
              case 0:
              case 1:
                return process.nextTick(e);

              case 2:
                return process.nextTick(function() {
                    e.call(null, t);
                });

              case 3:
                return process.nextTick(function() {
                    e.call(null, t, n);
                });

              case 4:
                return process.nextTick(function() {
                    e.call(null, t, n, r);
                });

              default:
                for (i = new Array(a - 1), o = 0; o < i.length; ) i[o++] = arguments[o];
                return process.nextTick(function() {
                    e.apply(null, i);
                });
            }
        }
    } : e.exports = process;
}
