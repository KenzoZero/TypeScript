"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./libs/helpers");
class CartItem {
    constructor(product, quantity = 1) {
        this._product = product;
        this._quantity = quantity;
    }
    showCardItemHTML(index) {
        // Đối tượng this cũng là 1 cartItem có 2 phần tử: _product và _quantity
        let id = this.product.id;
        let name = this.product.name;
        let price = helpers_1.Helpers.toCurrency(this.product.price, "VND", "right");
        let quantity = this.quantity;
        let total = helpers_1.Helpers.toCurrency(this.getSubTotal(), "VND", "right");
        return `<tr>
					<th scope="row">${index}</th>
					<td>${name}</td>
					<td>${price}</td>
					<td><input name="cart-item-quantity-${id}" type="number" value="${quantity}" min="1"></td>
					<td><strong>${total}</strong></td>
					<td>
						<a class="label label-info update-cart-item" href="#" data-product="${id}">Update</a>
						<a class="label label-danger delete-cart-item" href="#" data-product="${id}">Delete</a>
					</td>
				</tr>`;
    }
    getSubTotal() {
        return this.product.price * this.quantity;
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
