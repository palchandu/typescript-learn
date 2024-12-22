"use strict";
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
    constructor(email, name) {
        this.password = "";
        this.city = "Jaunpur";
        this.dob = "";
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
    get userPassword() {
        return this.password;
    }
    /** Provate methods */
    deletePassword() {
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
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    /** Access Private Property from parent class i'e User */
    setUserPassword() {
        /** Private property is not accessible in child class */
        //this.password="kkkkk"
    }
    set familyDOB(dob) {
        this.dob = dob;
    }
    get familyDOB() {
        return this.dob;
    }
}
const familyOne = new SubUser("c@c.com", "chandu");
familyOne.familyDOB = "12-06-1991";
console.log("DOB is: ", familyOne.familyDOB);
