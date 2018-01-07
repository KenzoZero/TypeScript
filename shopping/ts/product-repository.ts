import { Product } from "./product";

export class ProductRepository 
{
	private products: Product[] = []; // tập hợp sản phẩm

	constructor()
	{
		// Đặt danh sách các sản phẩm.
		let product1 = new Product(100,
			"bulbasaur",
			"bulbasaur.png",
			"bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",
			20);
		this.addItem(product1);

		let product2 = new Product(100,
			"bulbasaur",
			"bulbasaur.png",
			"bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",
			20);
		this.addItem(product2);
	}

	public addItem(product:Product)
	{
		// viết phương thức thêm đối tượng product vào mảng products.
		/*this.products.push(product);*/
		this.products[this.products.length] = product;
		console.log(this.products);
	}

	public getItems() : Product[]
	{
		console.log("getItems");
		return this.products;
	}

	public getItemById(id:number) : Product
	{
		return new Product(100,
			"bulbasaur",
			"bulbasaur.png",
			"bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",
			20);
	}

	public showItemInHTML() : string
	{
		return "ABC";
	}
}