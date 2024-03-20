let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Anurag: User | Admin = { name: "Anurag", id: 123 };

Anurag = { username: "Anu", id: 334 };

// function getDBId(id:number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDBId(3);
getDBId("4");

function getDBId(id: number | string) {
  //making some API calls
  //   id.toLowerCase();
  if (typeof id === "string") {
    id.toLowerCase();
    console.log(`DB id is: ${id}`);
  }
  console.log(`DB id is: ${id}`);
}

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", 2, "3", 4];


let pi:3.14 = 3.14  ; 

// pi=45;

let seatAllotment: "Aisle" | "middle" | "window"


seatAllotment="Aisle";
seatAllotment="middle";
seatAllotment="crew";