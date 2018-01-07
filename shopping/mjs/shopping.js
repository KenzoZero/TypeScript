"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_repository_1 = require("./product-repository");
let productRepository = new product_repository_1.ProductRepository();
let products = productRepository.getItems();
//console.log(products);
let product102 = productRepository.getItemById(104);
console.log(product102);
