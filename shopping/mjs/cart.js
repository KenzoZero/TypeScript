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
        // Nếu mà bằng 0 thì true, và không bằng 0 thì false
        return (this.cartItems.length == 0);
    }
    getTotalQuantity() {
        return 10;
    }
    getTotalPrice() {
        return 20;
    }
    showCartBodyInHTML() {
        let xhtmlResult = "<tr><th colspan='6'>Empty product in your cart</th></tr>";
        if (!this.isEmpty()) {
            xhtmlResult = `<tr>
					<th scope="row">1</th>
					<td>bulbasaur</td>
					<td>69 USD</td>
					<td><input name="cart-item-quantity-100" type="number" value="1" min="1"></td>
					<td><strong>69 USD</strong></td>
					<td>
						<a class="label label-info update-cart-item" href="#" data-product="100">Update</a>
						<a class="label label-danger delete-cart-item" href="#" data-product="100">Delete</a>
					</td>
				</tr>`;
        }
        return xhtmlResult;
    }
    showCartFooterInHTML() {
        return "123";
    }
}
exports.Cart = Cart;
