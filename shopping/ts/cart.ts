import { CartItem } from "./cart-item";
import { Product } from "./product";

export class Cart 
{
	private cartItems: CartItem[] = []

	// Phương thức them sản phẩm
	addProduct(product: Product, quantity:number = 1):void{
		// tạo 1 đối tượng cartItem mới 
		let cartItem = new CartItem(product,quantity);

		// Thêm đối tượng đó vào mảng cartItems đã có sẵng
		this.cartItems[this.cartItems.length] = cartItem;

		console.log(this.cartItems);
	}

	updateProduct(product: Product, quantity:number = 1):void{

	}

	removeProduct(product:Product):void{

	}

	public isEmpty() : boolean
	{
		return true;
	}

	public getTotalQuantity ():number
	{
		return 10;
	}
	
	public getTotalPrice (): number
	{
		return 20;
	}

	public showCartBodyInHTML () :string
	{
		return "123";
	}

	public showCartFooterInHTML () :string
	{
		return "123";
	}
}
