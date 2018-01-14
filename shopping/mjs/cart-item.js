"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }
    showCardItemHTML() {
        return "123";
    }
    getSubTotal() {
        return 123;
    }
}
exports.CartItem = CartItem;
