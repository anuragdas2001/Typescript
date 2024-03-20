function addTwo(num) {
    return num + 5;
}
console.log(addTwo(5));
function getUpper(val) {
    return val.toUpperCase();
}
var val = getUpper("4");
console.log(val);
function signUpUser(name, email, password) {
    return { name: name, email: email, password: password };
}
console.log(signUpUser(1, 2, false));
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return { name: name, email: email, isPaid: isPaid };
}
var value = loginUser("Anurag", "anu@gmail.com");
console.log(value);
