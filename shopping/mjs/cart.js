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
        let position = this.getProductPosition(product);
        // Thêm đối tượng đó vào mảng cartItems đã có sẵng
        if (position > -1) {
            // Nếu đã tồn tại thì cập nhật lại số lượng của nó
            this.cartItems[position].quantity += quantity;
        }
        else {
            // Nếu chưa tồn tại thì thêm vô,
            this.cartItems[this.cartItems.length] = cartItem;
        }
        console.log(this.cartItems);
    }
    // Phương thức dùng để kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa ?
    // => Nhận 1 sản và xem sản phẩm chỉ số bao nhiêu trong mảng cartItems
    getProductPosition(product) {
        let total = this.cartItems.length;
        for (let i = 0; i < total; i++) {
            let idcheck = Number(this.cartItems[i].product.id);
            if (idcheck == product.id) {
                return i;
            }
        }
        return -1;
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
