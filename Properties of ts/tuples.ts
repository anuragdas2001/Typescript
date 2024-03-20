// const user : (string | number)[] = [1,"ad"];

const tuuser: [string, number, boolean] = ["ad", 2, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[0] = 123;
newUser[1] = "ad@gmail.com";
newUser.push(true);


export {};
