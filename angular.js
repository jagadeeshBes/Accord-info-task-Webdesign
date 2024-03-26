var temp = /** @class */ (function () {
    function temp() {
        this.fahr = function (value) {
            var f = (value * 9 / 5) + 32;
            return f;
        };
        this.celsius = function (value) {
            var c = (value - 32) * 5 / 9;
            return c;
        };
    }
    return temp;
}());
var cel = new (temp);
console.log("fahrenheit", cel.fahr(6));
console.log("celsius", cel.celsius(6));
