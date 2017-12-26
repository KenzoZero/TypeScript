// Khai báo 1 đối tượng object: 
let objOne: any = {};
console.log(objOne);

interface CourseInterface
{
 	name: string;
 	time: number;
 	free?: boolean;
}

let objTwo: CourseInterface;
objTwo = {
	name: "ES6",
	time: 5
};
console.log("Đối tương objTwo: ");
console.log(objTwo);

let objThree: CourseInterface;
objThree = {
	name: "TypeScript",
	time: 10,
	free: true
};

console.log("Đối tương objThree: ");
console.log(objThree);