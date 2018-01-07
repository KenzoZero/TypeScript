import { Product } from "./product";

class ProductRepository 
{
	private products: Product[] = []; // tập hợp sản phẩm

	constructor()
	{

	}

	public addItem(product:Product)
	{

	}

	public getItems() : Product[]
	{
		return [];
	}

	public getItemById(id:number) : Product
	{
		return new Product();
	}

	public showItemInHTML() : string
	{
		return "ABC";
	}
}