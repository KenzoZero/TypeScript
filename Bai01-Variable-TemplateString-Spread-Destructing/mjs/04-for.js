let todoArr = [
	"Play football",
	"Coding",
	"Study TypeScript"
];
/*
	================Cách 1================

let length = todoArr.length
for(let i = 0; i < length;i++)
{
	console.log(todoArr[i]);
}

*/
/*
	================Cách 2: For in================

for (let index in todoArr)
{
	console.log(index + ": " +todoArr[index]);
}
*/
/*
	================Cách 3: For of================

for (let todo of todoArr)
{
	console.log(todo);
}
*/
/*
================Cách 4: In ra cách phần tử trong 1 đối tượng dùng for in================
*/
let todoObj = {
	id: 169,
	name:"Play football",
	status: false
};
for(let index in todoObj)
{
	console.log(index + ": " +todoObj[index]);
}
/*
for (let pro of todoObj)
{
	console.log(pro);
}
*/