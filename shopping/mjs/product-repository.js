"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
class ProductRepository {
    constructor() {
        this.products = []; // tập hợp sản phẩm
    }
    addItem(product) {
    }
    getItems() {
        return [];
    }
    getItemById(id) {
        return new product_1.Product();
    }
    showItemInHTML() {
        return "ABC";
    }
}
