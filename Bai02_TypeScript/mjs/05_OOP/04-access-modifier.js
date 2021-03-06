class Course {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showCourseInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
class CourseMobile extends Course {
    constructor(id, name, price, author) {
        super(id, name, price);
        this.author = author;
    }
    checkPro() {
        console.log(this.price);
    }
}
let courseObj = new Course("C112", "f", 23);
let courseMobileObj = new CourseMobile("C112", "f", 60, "John");
console.log(courseObj.id);
courseMobileObj.checkPro();
/*						Outside		Insite			Child Class
    public 		:  			+			+				+
    private		: 			-			+				-
    protected	:			-			+				+
*/ 
