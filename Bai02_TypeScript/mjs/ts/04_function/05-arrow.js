// function có i kiểu number, sau khi xử lý trả về 1 number.Bên trong phần định nghĩa của number
let f1 = function (i) { return i * i; };
console.log(f1(2));
let f2 = function (i) { return i * i; };
console.log(f2(3));
// Sử dụng arrow funciton: Khi đề cập đến arrow function thì từ khóa function không còn nữa.
let f3 = (i) => { return i * i; };
console.log(f3(4));
// Sử dụng arrow funciton : không nói kết quã trả về
let f4 = (i) => { return i * i; };
console.log(f4(5));
// Sử dụng arrow funciton : không có kiểu trả về và không có lệnh return
let f5 = (i) => i * i;
console.log(f5(6));
