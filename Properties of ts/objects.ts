const User = {
  name: "Anurag",
  email: "anu@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "Anurag", isPaid: false, isActive: true };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type Mystring = string;

// function createUser2(user: User): User {
//   return { name: "Anurag", email: "anu@gmail.com", isActive: true };
// }

// createUser2({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: true;
  creditCardDetails?:number; //? means optional property
};

let myUser: User = {
    _id:"1234",
    name:"h",
    email:"h@h.com",
    isActive:true,
    creditCardDetails:2235678909876789
};

myUser.email = "h@h.com";
// myUser._id="123";
console.log(myUser._id);
console.log(myUser.creditCardDetails);

type cardNumber = {
    cardnumber: string;

}

type CardDate = {
    cardDate:string;
}

type cardDetails = cardNumber & CardDate & {
    cvv:number
}



export {};
