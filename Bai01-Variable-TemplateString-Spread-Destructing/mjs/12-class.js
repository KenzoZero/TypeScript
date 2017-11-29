// Định nghĩa class Stuadent
class Student
{
	constructor(code,name,age)
	{
		this.code = code;
		this.name = name;
		this.age = age;
	}
	// phương thức show thông tin sinh viên:
	showInfo()
	{
		return this.code + "-" + this.name + "-" + this.getAge();
	}

	// Phương thức tuổi
	getAge()
	{
		// Khai báo 1 biến ngày
		let today = new Date();
		let year = today.getFullYear();
		return year - this.age;
	}
}

// Tạo 1 đối tượng student
let studentObj = new Student("SV001","john",1992);
console.log(studentObj);
console.log(studentObj.showInfo());

