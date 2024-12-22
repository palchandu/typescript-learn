const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(value: string): string {
  return value;
}

function identityTwo(value: string): string {
  return value;
}

function identityThree(value: any): any {
  return value;
}

//In the above function every function retuen a specific types of value only
// but we need a function who will return what type provided.

function identityGeneric<Type>(value: Type): Type{
    return value;
}

// let's use it and return any types of value from it.

interface Bottle{
    brand: string;
    type: string;
}
identityGeneric<Bottle>({ brand: "ll", type: "" });