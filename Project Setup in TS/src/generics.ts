const scrore :Array<number>= [];
const names : Array<string> = [];
function identityOne(val:boolean | number):boolean | number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}

function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree(true);

function identityFour<T>(val:T):T{
    return val;
}

interface Bottle{
    brand:string,
    type:number
}

function identityFive<Bottle>(val:Bottle ){

}


function getSearchProducts<T>(products:T[]):T{
    //do some db operations
    const myindex = 3;
    return products[myindex];
}

const getMoreSearchProducts = <T,>(products:T[]):T =>{
    //do some db operations
    const myindex = 5;
    return products[myindex];
}

interface Database{
    connection:string,
    username:string,
    password:string
}


function anotherFunction <T,U extends Database>(val1:T,val2:U):object{
    return {val1,val2};
}

anotherFunction(3,{connection:"socket",username:"socket@gmail.com",password:"socket"});


interface Quiz{
    name:string,
    type:string,

}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[];
     addToCart(product:T){
        this.cart.push(product);
     }
}