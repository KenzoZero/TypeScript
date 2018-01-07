"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = []; // tập hợp sản phẩm
        // Đặt danh sách các sản phẩm.
        this.addItem(new product_1.Product(100, "bulbasaur", "bulbasaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 21));
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
        return "ABC";
    }
}
exports.ProductRepository = ProductRepository;
