import { Product } from "./product";

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

	public showCardItemHTML() :string
	{
		return "123";
	}

	public getSubTotal(): number
	{
		return 123;
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