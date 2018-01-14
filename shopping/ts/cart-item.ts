import { Product } from "./product";

export class CartItem
{
	// Card item tương ứng vs sản phẩm nào
	private product:Product;
	// số lượng sản phẩm 
	private quantity: number;

	constructor(product:Product, quantity: number = 1)
	{
		this.product = product;
		this.quantity = quantity;
	}

	public showCardItemHTML() :string
	{
		return "123";
	}

	public getSubTotal(): number
	{
		return 123;
	}
}