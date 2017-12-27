// Rest Parameter
function showStudentInfo(name, ...course) {
    console.log(course);
    // join: chuyển mảng thành chuỗi 
    return name + " study " + course.join(", ");
}
console.log(showStudentInfo("john", "ES6", "PHP", "TypeScript"));
