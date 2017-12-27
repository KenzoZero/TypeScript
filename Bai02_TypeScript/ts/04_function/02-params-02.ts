// Khai báo hàm vừa có string vừa có array kiểu string.
// => Tham số x vừa có thể có giá trị string và có giá trị bất kỳ
function totalLength(x:( string | any[]),y:(string[] | string)):number
{
	return x.length + y.length;
}

let check = totalLength("abc",["123"]);
console.log(check);

let check2 = totalLength([1,"abc","def","nth"],["123"]);
console.log(check2);

let check3 = totalLength([1,"abc","def"],"123");
console.log(check3);
