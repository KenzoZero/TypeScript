import { Product } from "./product";
import { Helpers } from "./libs/helpers";

export class CartItem
{
	// Card item tương ứng vs sản phẩm nào
	private _product:Product;
	// số lượng sản phẩm 
	private _quantity: number;

	constructor(product:Product, quantity: number = 1)
	{
		this._product = product;
		this._quantity = quantity;
	}

	public showCardItemHTML(index : number) :string
	{
		// Đối tượng this cũng là 1 cartItem có 2 phần tử: _product và _quantity
		let id:number = this.product.id;
		let name:string = this.product.name;
		let price : string =  Helpers.toCurrency(this.product.price,"VND","right");
		let quantity : number = this.quantity;
		let total : string  = Helpers.toCurrency(this.getSubTotal(),"VND","right");
		return `<tr>
					<th scope="row">${index}</th>
					<td>${name}</td>
					<td>${price}</td>
					<td><input name="cart-item-quantity-${id}" type="number" value="${quantity}" min="1"></td>
					<td><strong>${total}</strong></td>
					<td>
						<a class="label label-info update-cart-item" href="#" data-product="${id}">Update</a>
						<a class="label label-danger delete-cart-item" href="#" data-product="100">Delete</a>
					</td>
				</tr>`;
	}

	public getSubTotal(): number
	{
		return this.product.price * this.quantity;
	}

	public get product() : Product {
		return this._product;
	}

	public set product(v : Product) {
		this._product = v;
	}

	public get quantity() : number {
		return this._quantity;
	}

	public set quantity(v : number) {
		this._quantity = v;
	}
}