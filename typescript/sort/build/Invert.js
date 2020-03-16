"use strict";
var InvertString = /** @class */ (function () {
    function InvertString(string) {
        this.string = string;
        this.novaString = '';
    }
    InvertString.prototype.sort = function () {
        for (var i = this.string.length; i > 0; i--) {
            this.novaString += this.string[i - 1];
        }
    };
    return InvertString;
}());
