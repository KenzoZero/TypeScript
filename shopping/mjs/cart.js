"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_item_1 = require("./cart-item");
const helpers_1 = require("./libs/helpers");
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
        // Gần vòng lặp theo cách mới => dùng foreach và arrow function
        let total = 0;
        this.cartItems.forEach((cartItem) => {
            total += cartItem.quantity;
        });
        return total;
    }
    getTotalPrice() {
        let total1 = 0;
        this.cartItems.forEach((cartItem) => {
            total1 += cartItem.quantity * cartItem.product.price;
        });
        return total1;
    }
    // cartItem[0] :
    // cartItem[1]
    showCartBodyInHTML() {
        let xhtmlResult = "";
        // Gọi giá trị hàm isEmpty đã check ở trên.
        if (!this.isEmpty()) {
            let total = this.cartItems.length;
            for (let i = 0; i < total; i++) {
                let cartItemCurrent = this.cartItems[i];
                xhtmlResult += cartItemCurrent.showCardItemHTML(Number(i + 1));
            }
        }
        return xhtmlResult;
    }
    showCartFooterInHTML() {
        let xhtmlResult = `<tr><th colspan='6'>Empty product in your cart</th></tr>`;
        if (!this.isEmpty()) {
            xhtmlResult = `<tr>
				<td colspan = "4">There are <b>${this.getTotalQuantity()}</b> items in your shopping cart.</td>
				<td colspan = "2" class="total-price text-left">${helpers_1.Helpers.toCurrency(this.getTotalPrice(), "VND", "right")}</td>
			</tr>`;
        }
        return xhtmlResult;
    }
}
exports.Cart = Cart;
