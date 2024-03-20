"use strict";
const scrore = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
function identityFive(val) {
}
function getSearchProducts(products) {
    //do some db operations
    const myindex = 3;
    return products[myindex];
}
const getMoreSearchProducts = (products) => {
    //do some db operations
    const myindex = 5;
    return products[myindex];
};
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction(3, { connection: "socket", username: "socket@gmail.com", password: "socket" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
