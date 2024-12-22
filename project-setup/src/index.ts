// class User {
//   email: string;
//   name: string;
//   readonly city: string = "Jaunpur";
//   constructor(email: string, name: string) {
//     this.name = name;
//     this.email = email;
//   }
// }

/** Learning of access modifier */
class User {
  public email: string;
  name: string; //default is public
  private password: string = "";
  readonly city: string = "Jaunpur";
  protected dob: string = "";
  constructor(email: string, name: string) {
    this.name = name;
    this.email = email;
  }
  /** Getters and setters */
  set userPassword(password) {
    if (password == "") {
      throw new Error("Password can't be null.");
    }
    this.password = password;
  }
  get userPassword(): string {
    return this.password;
  }
  /** Provate methods */
  private deletePassword() {
    console.log("Password deleted.");
  }
}

//const chandra = new User("chandra@gmail.com", "Chandra");
//console.log(chandra.name);
//console.log(chandra.email);
//console.log(chandra.city);
//chandra.userPassword = "Jeeeee";
//console.log(chandra.userPassword);
///chandra.deletePassword()

class SubUser extends User {
  isFamily: boolean = true;
  /** Access Private Property from parent class i'e User */
  setUserPassword() {
    /** Private property is not accessible in child class */
    //this.password="kkkkk"
  }
  set familyDOB(dob: string) {
    this.dob = dob;
  }
  get familyDOB(): string {
    return this.dob;
  }
}

const familyOne = new SubUser("c@c.com", "chandu");
familyOne.familyDOB = "12-06-1991";
console.log("DOB is: ", familyOne.familyDOB);
