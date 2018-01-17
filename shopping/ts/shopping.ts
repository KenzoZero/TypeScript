/// <reference path="./libs/index.d.ts" />
import { ProductRepository } from "./product-repository";
import { Product } from "./product";
import { Cart } from "./cart";
import { Validate } from "./libs/validate";


// Định nghĩa thành 1 hằng số, 
// Định nghĩa Element
namespace MElement
{
	export const ELM_LIST_PRODUCT : string = "#list-product";
	export const ELM_NOTIFICATION : string = "#mnotification";
	export const ELM_CART_BODY : string = "#my-cart-body";
	export const ELM_CART_FOOTER : string = "#my-cart-footer";
}

// Định nghĩa những thông báo
namespace MNotification
{
	export const NOTI_READY_TO_BUY : string = "Ready to buy product";
	export const NOTI_GREATE_THAN_ONE = "Quantity must equal or greater 1 and is Number";

}

// Tạo đối tượng
let productRepository = new ProductRepository();
let products : Product[] = productRepository.getItems();
let cartObj = new Cart();

//console.log(products);

/*let product102: Product = productRepository.getItemById(104);
console.log(product102);*/

// Hàm hiển thị danh sách sản phẩm.
function showListProduct()
{
	$(MElement.ELM_LIST_PRODUCT).html(productRepository.showItemInHTML());
}

// Hàm update sản phẩm
function showNotification(str:string) : void
{
	$(MElement.ELM_NOTIFICATION).html(str);
}

// Hiển thị giỏ hàng
function showCart()
{
	// hiển thị các sán phẩm có trong giỏ hàng
	$(MElement.ELM_CART_BODY).html(cartObj.showCartBodyInHTML());

	// Hiển thi số lượng và giá tiền của sản phẩm trong giỏ hàng
	$(MElement.ELM_CART_FOOTER).html("");
}


// Cần đợi cho tất cả dữ liệu troong html load xong mới thực hiện 
$(document).ready(function(){
	// Hiển thị danh sách các sản phẩm
	showListProduct();

	// Giỏ hàng rỗng => 2 thẻ có id = my-cart-body , my-cart-footer là rỗng.
	showCart();

	// Update thông báo
	showNotification(MNotification.NOTI_READY_TO_BUY);

	$("a.price").click(function(){
		let id:number = $(this).data("product");
		parseInt
		let quantity: number = Number($("input[name = 'quantity-product-"+id+"']").val());
		
		if(Validate.checkQuantity(quantity))
		{
			// Lấy sản phẩm bằng id
			let product:Product = productRepository.getItemById(id);
			cartObj.addProduct(product,quantity);
			showCart();
			// Sau khi mua thánh công cần cập nhật lại giỏ hàng

		}
		else
		{
			showNotification(MNotification.NOTI_GREATE_THAN_ONE);
		}
	});
})