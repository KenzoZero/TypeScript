// function greeter
function greeter(person = "abc", age) {
    return "Hello, " + person;
}
var user = "ABC 123456";
document.body.innerHTML = greeter(user);
