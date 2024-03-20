"use strict";
class User {
    constructor(email, name, city) {
        this._courseCount = 1;
        this.email = email;
        this.name = name;
        this.city = city;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `Your Apple email is ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            alert("Wrong course");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const Anurag = new User("Anurag", "Anurag", "Asansol");
const Rohan = new User("Rohan", "Rohan", "Kolkata");
console.log(Anurag.name);
console.log(Rohan.name);
// console.log(Anurag.city)
// Anurag.deleteToken();
