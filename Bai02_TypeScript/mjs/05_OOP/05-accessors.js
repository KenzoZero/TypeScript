class Course1 {
    constructor(name) {
        this._name = name;
    }
    showCourseInfo() {
        console.log(`${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
var courseObj1 = new Course1("TypeScript");
console.log(courseObj1);
console.log("Name: " + courseObj1.name);
courseObj1.name = "Typescript Tranning";
console.log("Name: " + courseObj1.name);
