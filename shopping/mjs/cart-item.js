"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(product, quantity = 1) {
        this._product = product;
        this._quantity = quantity;
    }
    showCardItemHTML() {
        return "123";
    }
    getSubTotal() {
        return 123;
    }
    get product() {
        return this._product;
    }
    set product(v) {
        this._product = v;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(v) {
        this._quantity = v;
    }
}
exports.CartItem = CartItem;
