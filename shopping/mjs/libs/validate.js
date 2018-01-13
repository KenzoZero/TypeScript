"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validate {
    // sẽ trả về true nếu như thỏa mãn điều kiện là số và khác NaN
    static isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}
exports.Validate = Validate;
