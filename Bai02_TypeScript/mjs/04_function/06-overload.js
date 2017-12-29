/*function funcABC(x:string):number
{
    return 100;
}

function funcABC(x:number):string
{
    return "abc";
}

funcABC("abc");*/
function funcABC(x) {
    // Nếu x thuộc về kiểu string => dùng typeof x == "string" (dùng instanceof). Nếu x thuộc kiểu number dùng typeof x == "number"
    if (typeof x == "string") {
        return 100;
    }
    else if (typeof x == "number") {
        return "abc";
    }
    else {
        return true;
    }
}
let checkFunc = funcABC(12);
console.log(checkFunc);
let checkFunc1 = funcABC("hello");
console.log(checkFunc1);
let checkFunc2 = funcABC(false);
console.log(checkFunc2);
