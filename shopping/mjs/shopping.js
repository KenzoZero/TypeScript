"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./libs/index.d.ts" />
const product_repository_1 = require("./product-repository");
// Định nghĩa thành 1 hằng số,
var MDefine;
(function (MDefine) {
    MDefine.ELM_LIST_PRODUCT = "#list-product";
    MDefine.ELM_NOTIFICATION = "#mnotification";
    MDefine.ELM_CART_BODY = "#my-cart-body";
    MDefine.ELM_CART_FOOTER = "#my-cart-footer";
})(MDefine || (MDefine = {}));
let productRepository = new product_repository_1.ProductRepository();
let products = productRepository.getItems();
//console.log(products);
/*let product102: Product = productRepository.getItemById(104);
console.log(product102);*/
// Hàm hiển thị danh sách sản phẩm.
function showListProduct() {
    $(MDefine.ELM_LIST_PRODUCT).html(productRepository.showItemInHTML());
}
// Hàm update sản phẩm
function showNotification(str) {
    $(MDefine.ELM_NOTIFICATION).html(str);
}
function showCart() {
    $(MDefine.ELM_CART_BODY).html("");
    $(MDefine.ELM_CART_FOOTER).html("");
}
// Cần đợi cho tất cả dữ liệu troong html load xong mới thực hiện 
$(document).ready(function () {
    // Hiển thị danh sách các sản phẩm
    showListProduct();
    // Giỏ hàng rỗng => 2 thẻ có id = my-cart-body , my-cart-footer là rỗng.
    showCart();
    // Update thông báo
    showNotification("Ready to buy product");
    $("a.price").click(function () {
        let id = $(this).data("product");
        let quantity = Number($("input[name = 'quantity-product-" + id + "']").val());
        console.log(id + " - " + quantity);
    });
});
