"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
    // $ 20 - USD 20 - VND 20 - 20 VND
    // để goi phương thức ko cần khởi tao đối tượng
    static toCurrency(value, currencyUnit, position = "left") {
        if (position == "left") {
            return currencyUnit + " " + value;
        }
        else if (position == "right") {
            return value + " " + currencyUnit;
        }
    }
}
exports.Helpers = Helpers;
