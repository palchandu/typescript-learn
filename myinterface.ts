interface User {
  readonly uid: number;
  name: string;
    email: string;
    getLogin:()=>string
}
const chandra: User = {
    uid: 124,
    name: "Chandra",
    email: "c@c.com",
    getLogin: () => {
        return chandra.name
    }
}
console.log(chandra.getLogin())
export {};
