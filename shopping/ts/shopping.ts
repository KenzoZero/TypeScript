/// <reference path="./libs/index.d.ts" />
import { ProductRepository } from "./product-repository";
import { Product } from "./product";

let productRepository = new ProductRepository();
let products : Product[] = productRepository.getItems();
//console.log(products);

/*let product102: Product = productRepository.getItemById(104);
console.log(product102);*/

console.log(productRepository.showItemInHTML());

$("#list-product").html(productRepository.showItemInHTML());
