// analysis/pretty/main.js:81808; webpack module 1001
function(e, t) {
    e.exports = function(e) {
        return function(t, n, r) {
            if (" " === t) return t;
            switch (n % 3) {
              case 0:
                return e.red(t);

              case 1:
                return e.white(t);

              case 2:
                return e.blue(t);
            }
        };
    };
}
