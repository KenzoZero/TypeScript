// Khai báo 1 đối tượng interface-arrays
/*let course:string [] = ["es6","typescript"];
console.log(course); 
*/

interface CourseList
{
	[index:number]: string;
}

let course:CourseList = ["es6","typescript"];

console.log(course);