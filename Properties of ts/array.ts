const superHeros: string[] = [];
const heroPower: number[] = [];
const arr : Array<number> = [];
superHeros.push("spiderman");
heroPower.push(2);
console.log(superHeros);
console.log(heroPower);

arr.push(3);

console.log(arr);


type User = { 
    name:string,
    isActive:boolean
}

const allUsers : User[] = [];

allUsers.push({name:"Anurag",isActive:true});

console.log(allUsers);

const MLModels : number[][] = [
    [255,255,255],
    []
]


const rar : ReadonlyArray<number> = [1,2,4,5];

// rar[0]=5;

console.log(rar);

