const superHeroes: string[] = [];
//const heroPower: number[] = [];
// Can define same array in another way
const heroPower: Array<number> = [];
superHeroes.push("Hero1");
heroPower.push(2);

type User = {
    name: string;
    isActive: boolean;
}
const allUsers: User[] = []
allUsers.push({ name: "", isActive: true })
