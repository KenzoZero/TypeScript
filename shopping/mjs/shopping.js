"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./libs/index.d.ts" />
const product_repository_1 = require("./product-repository");
const cart_1 = require("./cart");
const validate_1 = require("./libs/validate");
// Định nghĩa thành 1 hằng số, 
// Định nghĩa Element
var MElement;
(function (MElement) {
    MElement.ELM_LIST_PRODUCT = "#list-product";
    MElement.ELM_NOTIFICATION = "#mnotification";
    MElement.ELM_CART_BODY = "#my-cart-body";
    MElement.ELM_CART_FOOTER = "#my-cart-footer";
})(MElement || (MElement = {}));
// Định nghĩa những thông báo
var MNotification;
(function (MNotification) {
    MNotification.NOTI_READY_TO_BUY = "Ready to buy product";
    MNotification.NOTI_GREATE_THAN_ONE = "Quantity must equal or greater 1 and is Number";
})(MNotification || (MNotification = {}));
// Tạo đối tượng
let productRepository = new product_repository_1.ProductRepository();
let products = productRepository.getItems();
let cartObj = new cart_1.Cart();
//console.log(products);
/*let product102: Product = productRepository.getItemById(104);
console.log(product102);*/
// Hàm hiển thị danh sách sản phẩm.
function showListProduct() {
    $(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemInHTML());
}
// Hàm update sản phẩm
function showNotification(str) {
    $(MElement.ELM_NOTIFICATION).html(str);
}
// Hiển thị giỏ hàng
function showCart() {
    // hiển thị các sán phẩm có trong giỏ hàng
    $(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());
    // Hiển thi số lượng và giá tiền của sản phẩm trong giỏ hàng
    $(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
}
// Cần đợi cho tất cả dữ liệu troong html load xong mới thực hiện 
$(document).ready(function () {
    // Hiển thị danh sách các sản phẩm
    showListProduct();
    // Giỏ hàng rỗng => 2 thẻ có id = my-cart-body , my-cart-footer là rỗng.
    showCart();
    // Update thông báo
    showNotification(MNotification.NOTI_READY_TO_BUY);
    // Phương thức thêm sản phẩm
    function addProductShopping(id, quantity) {
        if (validate_1.Validate.checkQuantity(quantity)) {
            // Lấy sản phẩm bằng id
            let product = productRepository.getItemById(id);
            cartObj.addProduct(product, quantity);
            showCart();
            // Sau khi mua thánh công cần cập nhật lại giỏ hàng
        }
        else {
            showNotification(MNotification.NOTI_GREATE_THAN_ONE);
        }
    }
    // Phương thức chỉnh sửa sản phẩm
    function updateProductShopping(id, quantity) {
        if (validate_1.Validate.checkQuantity(quantity)) {
            // Lấy sản phẩm bằng id
            let product = productRepository.getItemById(id);
            cartObj.updateProduct(product, quantity);
            showCart();
            // Sau khi mua thánh công cần cập nhật lại giỏ hàng
        }
        else {
            showNotification(MNotification.NOTI_GREATE_THAN_ONE);
        }
    }
    // Event mua sản phẩm
    $("a.price").click(function () {
        let id = $(this).data("product");
        let quantity = Number($("input[name = 'quantity-product-" + id + "']").val());
        addProductShopping(id, quantity);
    });
    // Event Update sản phẩm => Dùng $(document).on vì khi load xong trong click mua thì mới có nut Update
    $(document).on("click", "a.update-cart-item", function () {
        let id = $(this).data("product");
        let quantity = Number($("input[name = 'cart-item-quantity-" + id + "']").val());
        updateProductShopping(id, quantity);
    });
});
