function userInfo01(name, age) {
    return `My name is ${name},${age} years old`;
}
let userInfo02 = function (name, age) {
    return `My name is ${name},${age} years old`;
};
let userInfo03 = function (pname, page) {
    return `My name is ${pname},${page} years old`;
};
console.log(userInfo01("user01", 23));
console.log(userInfo02("user02", 22));
console.log(userInfo03("user03", 21));
