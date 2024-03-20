class User {
  protected _courseCount = 1;
  email: string;
  public name: string;
  private city?: string; //private
  constructor(email: string, name: string, city?: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }
  private deleteToken(){
    console.log("Token deleted");
  }
  get getAppleEmail(): string {
    return `Your Apple email is ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if(courseNum<=1){
        alert("Wrong course");
    }
    this._courseCount=courseNum;
  }
}

class SubUser extends User{
    isFamily:boolean=true;
    changeCourseCount(){
        this._courseCount=4
    }
}

const Anurag = new User("Anurag", "Anurag", "Asansol");
const Rohan = new User("Rohan", "Rohan", "Kolkata");
console.log(Anurag.name);
console.log(Rohan.name);
// console.log(Anurag.city)
// Anurag.deleteToken();