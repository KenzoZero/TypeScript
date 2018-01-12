"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./libs/index.d.ts" />
const product_repository_1 = require("./product-repository");
let productRepository = new product_repository_1.ProductRepository();
let products = productRepository.getItems();
//console.log(products);
/*let product102: Product = productRepository.getItemById(104);
console.log(product102);*/
// Hàm hiển thị danh sách sản phẩm.
function showListProduct() {
    $("#list-product").html(productRepository.showItemInHTML());
}
// Hàm update sản phẩm
function showNotification(str) {
    $("#list-product").html(str);
}
// Cần đợi cho tất cả dữ liệu troong html load xong mới thực hiện 
$(document).ready(function () {
    // Hiển thị danh sách các sản phẩm
    showListProduct();
    // Giỏ hàng rỗng => 2 thẻ có id = my-cart-body , my-cart-footer là rỗng.
});
