/*========== 01.Error =============*/ 
/*let student = {
	name : "John",
	courses: ["Android","PHP","Java"],
	showInfo: function()
	{
		this.courses.forEach(function(course){
			console.log(`${this.name} study ${course}`);
		})
	}
}*/

/*========== 02.Cach 1 =============*/
/*let student = {
	name : "Peter",
	courses: ["Android","PHP","Java"],
	showInfo: function()
	{
		var _this = this;
		this.courses.forEach(function(course){
			console.log(`${_this.name} study ${course}`);
		})
	}
}*/

/*========== 02.Cach 02( Dung bind) =============*/
/*let student = {
	name : "Peter",
	courses: ["Android","PHP","Java"],
	showInfo: function()
	{
		this.courses.forEach(function(course){
			console.log(`${this.name} study ${course}`);
		}.bind(this))
	}
}*/

/*========== 03.Cach 03(Sử dung Arrow function-hay dùng) =============*/
let student = {
	name : "Hons",
	courses: ["Android","PHP","Java"],
	showInfo: function()
	{
		this.courses.forEach(course => console.log(`${this.name} study ${course}`));
	}
}

student.showInfo();

