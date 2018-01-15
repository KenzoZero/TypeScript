"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_item_1 = require("./cart-item");
class Cart {
    constructor() {
        this.cartItems = [];
    }
    // Phương thức them sản phẩm
    addProduct(product, quantity = 1) {
        // tạo 1 đối tượng cartItem mới 
        let cartItem = new cart_item_1.CartItem(product, quantity);
        // Thêm đối tượng đó vào mảng cartItems đã có sẵng
        this.cartItems[this.cartItems.length] = cartItem;
        console.log(this.cartItems);
    }
    // Phương thức dùng để kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa ?
    // => Nhận 1 sản và xem sản phẩm chỉ số bao nhiêu trong mảng cartItems
    checkProductExitst(product) {
        let total = this.cartItems.length;
        for (let i = 0; i < total; i++) {
            if (this.cartItems[i].getProduct().id == product.id) {
                return true;
            }
            return false;
        }
    }
    updateProduct(product, quantity = 1) {
    }
    removeProduct(product) {
    }
    isEmpty() {
        return true;
    }
    getTotalQuantity() {
        return 10;
    }
    getTotalPrice() {
        return 20;
    }
    showCartBodyInHTML() {
        return "123";
    }
    showCartFooterInHTML() {
        return "123";
    }
}
exports.Cart = Cart;
