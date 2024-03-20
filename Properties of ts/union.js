var score = 33;
score = 44;
score = "55";
var Anurag = { name: "Anurag", id: 123 };
Anurag = { username: "Anu", id: 334 };
// function getDBId(id:number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDBId(3);
getDBId("4");
function getDBId(id) {
    //making some API calls
    //   id.toLowerCase();
    if (typeof id === "string") {
        id.toLowerCase();
        console.log("DB id is: ".concat(id));
    }
    console.log("DB id is: ".concat(id));
}
