// function greeter
function greeter(person: string = "abc",age?:number) {
    return "Hello, " + person;
}
var user = "ABC 123 456";
document.body.innerHTML = greeter(user);