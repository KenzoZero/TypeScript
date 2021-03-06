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
	export const NOTI_ACT_ADD : string = "Added successful";
	export const NOTI_ACT_UPDATE : string = "Update successfull";
	export const NOTI_ACT_DELETE : string = "Delete successfull";


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
	$(MElement.ELM_CART_FOOTER).html(cartObj.showCartFooterInHTML());
}


// Cần đợi cho tất cả dữ liệu troong html load xong mới thực hiện 
$(document).ready(function(){
	// Hiển thị danh sách các sản phẩm
	showListProduct();

	// Giỏ hàng rỗng => 2 thẻ có id = my-cart-body , my-cart-footer là rỗng.
	showCart();

	// Update thông báo
	showNotification(MNotification.NOTI_READY_TO_BUY);

	// Phương thức thêm sản phẩm
	function addProductShopping(id:number,quantity:number)
	{
		if(Validate.checkQuantity(quantity))
		{
			// Lấy sản phẩm bằng id
			let product:Product = productRepository.getItemById(id);
			cartObj.addProduct(product,quantity);
			// Sau khi mua thánh công cần cập nhật lại giỏ hàng
			showCart();
			showNotification(MNotification.NOTI_ACT_ADD);
		}
		else
		{
			showNotification(MNotification.NOTI_GREATE_THAN_ONE);
		}
	}

	// Phương thức chỉnh sửa sản phẩm
	function updateProductShopping(id:number,quantity:number)
	{
		if(Validate.checkQuantity(quantity))
		{
			// Lấy sản phẩm bằng id
			let product:Product = productRepository.getItemById(id);
			cartObj.updateProduct(product,quantity);
			// Sau khi mua thánh công cần cập nhật lại giỏ hàng
			showCart();
			showNotification(MNotification.NOTI_ACT_UPDATE);
		}
		else
		{
			showNotification(MNotification.NOTI_GREATE_THAN_ONE);
		}
	}

	// Phương thức xóa sản phẩm
	function deleteProductShopping(id:number)
	{
		let product:Product = productRepository.getItemById(id);
		cartObj.removeProduct(product);
		showCart();
		showNotification(MNotification.NOTI_ACT_DELETE);
	}

	// Event mua sản phẩm
	$("a.price").click(function(){
		let id:number = $(this).data("product");
		let quantity: number = Number($("input[name = 'quantity-product-"+id+"']").val());
		addProductShopping(id,quantity);
		
	});

	// Event Update sản phẩm => Dùng $(document).on vì khi load xong trong click mua thì mới có nut Update
	$(document).on("click","a.update-cart-item",function(){
		let id:number = $(this).data("product");
		let quantity: number = Number($("input[name = 'cart-item-quantity-"+id+"']").val());
		updateProductShopping(id,quantity);
	});

	// Event Delete product
	$(document).on("click","a.delete-cart-item",function(){
		let id:number = $(this).data("product");
		deleteProductShopping(id);
	});
})