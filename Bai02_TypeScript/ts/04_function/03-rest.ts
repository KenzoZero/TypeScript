// Rest Parameter
 function showStudentInfo(name: string, ...course:string[]) : string
 {
 	console.log(course);
 	// join: chuyển mảng thành chuỗi 
 	return name + " study " + course.join(", ");
 }
 console.log(showStudentInfo("john","ES6","PHP","TypeScript"));