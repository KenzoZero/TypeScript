// Lớp mô tả các khóa học.
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
// Lớp mô tả các khóa học về di động.
class CourseMobile extends Course {
    constructor(id, name, price, author) {
        super(id, name, price);
        this.author = author;
    }
    showCourseInfo() {
        super.showCourseInfo();
        console.log(this.author);
    }
}
var courseObj = new Course("C012", "Programing", 23);
courseObj.showCourseInfo();
var courseMobileObj = new CourseMobile("C013", "Android", 60, "John");
courseMobileObj.showCourseInfo();
