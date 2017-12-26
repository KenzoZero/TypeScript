let mVariable: any = "TypeScript Tranning";

console.log(mVariable);

console.log("Chiều dài của chuỗi:");
console.log(mVariable.length);

// Chuyển Any thành String. - C1.
/*let total = (<string>mVariable).length;
console.log(total);
*/
// C2
let total = (mVariable as string).length;
console.log(total);