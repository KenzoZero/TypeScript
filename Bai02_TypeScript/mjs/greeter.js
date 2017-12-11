// function greeter
function greeter(person = "abc", age) {
    return "Hello, " + person;
}
var user = "ABC 123 456";
document.body.innerHTML = greeter(user);
