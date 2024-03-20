function addTwo(num: number):number {
    // return "hello"
  return num + 5;
}

console.log(addTwo(5));

function getUpper(val: any) {
  return val.toUpperCase();
}
let val = getUpper("4");
console.log(val);

function signUpUser(name, email, password:boolean) {
  return { name, email, password };
}

console.log(signUpUser(1, 2, false));
function loginUser(name:string, email:string, isPaid:boolean =false) {
    return { name, email, isPaid };
}
  
let value = loginUser("Anurag","anu@gmail.com");

console.log(value);