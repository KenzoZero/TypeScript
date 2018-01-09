"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = []; // tập hợp sản phẩm
        // Đặt danh sách các sản phẩm.
        this.addItem(new product_1.Product(100, "bulbasaur", "bulbasaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 2100));
        this.addItem(new product_1.Product(101, "charmander", "charmander.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 18));
        this.addItem(new product_1.Product(102, "ivysaur", "ivysaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 22));
        this.addItem(new product_1.Product(103, "squirtle", "squirtle.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 65, false));
        this.addItem(new product_1.Product(104, "venusaur", "venusaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 15));
    }
    addItem(product) {
        // viết phương thức thêm đối tượng product vào mảng products.
        //this.products.push(product);
        this.products[this.products.length] = product;
    }
    getItems() {
        return this.products;
    }
    getItemById(id) {
        // Cách 1 : Lấy Id bằng vòng lặp for
        let total = this.products.length;
        for (let i = 0; i < total; i++) {
            if (this.products[i].id == id) {
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
    showItemInHTML() {
        let total = this.products.length;
        let xhtmlResult = "";
        // Kiểm tra xem kho hàn có sản phẩm hay không
        if (total > 0) {
            for (let i = 0; i < total; i++) {
                let curentItem = this.products[i];
                let image = curentItem.image;
                let name = curentItem.name;
                let summary = curentItem.summary;
                let price = curentItem.price;
                xhtmlResult += `<div class="media product">
									<div class="media-left">
										<a href="#">
	                                        <img class="media-object" src="img/characters/${image}" alt="${name}">
	                                    </a>
									</div>
									<div class="media-body">
										<h4 class="media-heading">${name}</h4>
										<p>
											${summary}
										</p>
										${this.showBuyItemInHTML(curentItem)}
									</div>
								</div>`;
            }
        }
        else {
            xhtmlResult = "Empty product in my shop";
        }
        return xhtmlResult;
    }
    showBuyItemInHTML(product) {
        let xhtmlResult = "";
        let price = product.price;
        let canBuy = product.canBuy;
        if (canBuy == true) {
            xhtmlResult = `<input type="number" name="quantity-product-100" value="1" min="1">
										<a data-product="100" href="#" class="price">$ ${price}</a>`;
        }
        else {
            xhtmlResult = `<span class="price">$ ${price}</span>`;
        }
        return xhtmlResult;
    }
}
exports.ProductRepository = ProductRepository;
