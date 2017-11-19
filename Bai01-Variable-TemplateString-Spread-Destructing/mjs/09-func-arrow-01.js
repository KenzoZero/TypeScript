
function func01(name,age)
{
	return `My name is ${name}, ${age}  years old`;
}
console.log(func01("john",69));

var func02 = function(name,age)
{
	return `My name is ${name}, ${age}  years old`;
}
console.log(func02("john",69));
/*=====Viết theo kiểu arrow function============*/
var func03 = (name,age) =>{
	return `My name is ${name}, ${age}  years old`;
}
console.log(func03("john",69));

var func04 = (name,age) =>`My name is ${name}, ${age}  years old`;
console.log(func04("john",69));

var func05 = (name) =>`My name is ${name}`;
console.log(func05("john"));

var func06 = () =>`My name is`;
console.log(func06());

