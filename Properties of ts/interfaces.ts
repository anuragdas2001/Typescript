interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
//   startTrail: () => string;
    startTrail():string
    getCoupon(coupon:string,value:number):number
}

interface User{
    githubToken:string
}

interface Manager {

}

interface Admin extends User {
    role:"Admini" | "TA" | "Instructor"


}

const Anurag: Admin = {
  dbId: 123,
  role:"TA",
  email: "a@a.com",
  userId: 2211,
  githubToken:"",
  startTrail: () => {
    return "trail started";
  },
  getCoupon:(coupon:"Anurag10",value:10)=> {
      return value;
  },
};
