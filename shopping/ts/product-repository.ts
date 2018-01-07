import { Product } from "./product";

export class ProductRepository 
{
	private products: Product[] = []; // tập hợp sản phẩm

	constructor()
	{
		// Đặt danh sách các sản phẩm.
		this.addItem(new Product(100,"bulbasaur","bulbasaur.png","bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",21));
		this.addItem(new Product(101,"charmander","charmander.png","bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",18));
		this.addItem(new Product(102,"ivysaur","ivysaur.png","bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",22));
		this.addItem(new Product(103,"squirtle","squirtle.png","bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",65,false));
		this.addItem(new Product(104,"venusaur","venusaur.png","bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis",15));
	}

	public addItem(product:Product)
	{
		// viết phương thức thêm đối tượng product vào mảng products.
		//this.products.push(product);
		this.products[this.products.length] = product;
	}

	public getItems() : Product[]
	{
		return this.products;
	}

	public getItemById(id:number) : Product
	{
		// Cách 1 : Lấy Id bằng vòng lặp for
		let total = this.products.length;
		for(let i = 0; i < total ; i++)
		{
			if(this.products[i].id == id)
			{
				return this.products[i];
			}
		}
		return null;

		// Cách 2 : Duyệt qua các phần tử trong array Product dùng Arrow function
		/*let filter : Product[] = this.products.filter(
			product => product.id == id;
		);
		if(filter.length > 0)
		{
			return filter[0];
		}
		return null;*/
	}

	public showItemInHTML() : string
	{
		return "ABC";
	}
}