// Định nghĩa 1 function: đầy đủ tham số
function userInfo1(name:string,age:number):string
{
	return `My name is ${name},${age} year old`;
}
console.log("Đầy đủ tham số");
console.log(userInfo1("Jonh",20));

// Định nghĩa 1 function: tham số mặc định
function userInfo2(name:string = "John",age:number = 69):string
{
	return `My name is ${name},${age} year old`;
}
console.log("Tham số mặc định");
console.log(userInfo2());

// Định nghĩa 1 function: tham số khuyết => kết quả là undefine
function userInfo3(name:string = "John",age?:number):string
{
	if(age == null)
	{
		return `My name is ${name}`;
	}
	else
	{
		return `My name is ${name},${age} year old`;
	}
}
console.log("Tham số khuyết");
console.log(userInfo3());
console.log(userInfo3("Peter",20));

