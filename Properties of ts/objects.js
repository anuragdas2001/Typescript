"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Anurag",
    email: "anu@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Anurag", isPaid: false, isActive: true };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: true,
    creditCardDetails: 2235678909876789
};
myUser.email = "h@h.com";
// myUser._id="123";
console.log(myUser._id);
console.log(myUser.creditCardDetails);
