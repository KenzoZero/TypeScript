import { CartItem } from "./cart-item";
import { Product } from "./product";
import { Helpers } from "./libs/helpers";
export class Cart 
{
	private cartItems: CartItem[] = [];
	private totalQuantity : number = 0;
	private totalPrice : number = 0;

	// Phương thức them sản phẩm
	public addProduct(product: Product, quantity:number = 1):void{
		// tạo 1 đối tượng cartItem mới 
		let cartItem = new CartItem(product,quantity);
		let position : number = this.getProductPosition(product);
		// Thêm đối tượng đó vào mảng cartItems đã có sẵng
		if(position > -1)
		{
			// Nếu đã tồn tại thì cập nhật lại số lượng của nó
			this.cartItems[position].quantity += quantity;
		}
		else
		{
			// Nếu chưa tồn tại thì thêm vô,
			this.cartItems[this.cartItems.length] = cartItem;
		}
		this.totalQuantity += quantity;
		this.totalPrice  += product.price * quantity;
	}

	// Phương thức dùng để kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa ?
	// => Nhận 1 sản và xem sản phẩm chỉ số bao nhiêu trong mảng cartItems
	private getProductPosition(product: Product):number{
		let total :number = this.cartItems.length;
		for(let i : number = 0; i < total ; i++)
		{
			let idcheck : number = Number(this.cartItems[i].product.id);
			if(idcheck == product.id)
			{
				return i;
			}
		}
		return -1;
	}


	public updateProduct(product: Product, quantity:number = 1):void{
		let position : number = this.getProductPosition(product);
		let oldQuantity = this.cartItems[position].quantity;
		// Nếu có sản phẩm thì update lại số lượng
		if(position > -1)
		{
			this.cartItems[position].quantity = quantity;

			this.totalQuantity = this.totalQuantity - oldQuantity + quantity;
			this.totalPrice  = this.totalPrice - product.price * (oldQuantity - quantity);
		}
	}

	removeProduct(product:Product):void{

	}

	public isEmpty() : boolean
	{
		// Nếu mà bằng 0 thì true, và không bằng 0 thì false
		return (this.cartItems.length == 0);
	}

	/*public getTotalQuantity ():number
	{
		// Gần vòng lặp theo cách mới => dùng foreach và arrow function
		let total:number = 0;
		this.cartItems.forEach((cartItem : CartItem ) => {
			total += cartItem.quantity;
		});
		return total;
	}*/
	
	/*public getTotalPrice (): number
	{
		let total1: number = 0;
		this.cartItems.forEach((cartItem : CartItem ) => {
			total1 += cartItem.quantity * cartItem.product.price;
		});
		return total1;
	}*/

	// cartItem[0] :
	// cartItem[1]

	public showCartBodyInHTML () :string
	{
		let xhtmlResult :string= "";
		// Gọi giá trị hàm isEmpty đã check ở trên.
		if (!this.isEmpty()) {
			let total : number = this.cartItems.length;
			for(let i : number = 0; i < total; i++)
			{
				let cartItemCurrent = this.cartItems[i];
				xhtmlResult += cartItemCurrent.showCardItemHTML(Number(i+1));
			}
		}

		return xhtmlResult;
	}

	public showCartFooterInHTML() :string
	{
		let xhtmlResult :string= `<tr><th colspan='6'>Empty product in your cart</th></tr>`;

		if(!this.isEmpty())
		{
			xhtmlResult = `<tr>
				<td colspan = "4">There are <b>${ this.totalQuantity }</b> items in your shopping cart.</td>
				<td colspan = "2" class="total-price text-left">${ Helpers.toCurrency(this.totalPrice ,"VND","right")}</td>
			</tr>`
		}
		return xhtmlResult;
	}
}
