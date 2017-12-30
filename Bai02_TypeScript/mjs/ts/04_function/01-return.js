// Hàm không có sự trả về hoac trả về kiểu void:
function funcNoReturn() {
    console.log("funcNoReturn");
}
funcNoReturn();
// Hàm không có sự trả về 
function funcReturnNumber() {
    return 2;
}
console.log(funcReturnNumber());
// Hàm trả về 1 array thuộc kiểu chuỗi
function funcReturnArray() {
    return ["a", "b"];
}
console.log(funcReturnArray());
// Xây dựng function chưa xác định được kiểu trả về là gì.
function funcReturnAny() {
    //return ["c","d"];
    return 12;
}
console.log(funcReturnAny());
