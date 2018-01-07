"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = []; // tập hợp sản phẩm
        // Đặt danh sách các sản phẩm.
        let product1 = new product_1.Product(100, "bulbasaur", "bulbasaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 20);
        this.addItem(product1);
        let product2 = new product_1.Product(100, "bulbasaur", "bulbasaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 20);
        this.addItem(product2);
    }
    addItem(product) {
        // viết phương thức thêm đối tượng product vào mảng products.
        /*this.products.push(product);*/
        this.products[this.products.length] = product;
        console.log(this.products);
    }
    getItems() {
        console.log("getItems");
        return this.products;
    }
    getItemById(id) {
        return new product_1.Product(100, "bulbasaur", "bulbasaur.png", "bulbasaurLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis laoreet orci quis mollis", 20);
    }
    showItemInHTML() {
        return "ABC";
    }
}
exports.ProductRepository = ProductRepository;
