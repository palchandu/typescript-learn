let score: number | string = 33;

type User1 = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let chandra: User1 | Admin = { name: "", id: 12233 };

function getDbId(id: number | string) {
  console.log("BD id is ", id);
}
getDbId(7);
getDbId("5");


