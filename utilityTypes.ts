/**
 * 
 * 1. Partial
    The Partial<T> type makes all properties in a type optional.
 */

interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser = (id: number, user: Partial<User>) => {
  console.log(id, user);
};
updateUser(1, { name: "Chandra" });

/**
 * 2. Required
The Required<T> type makes all properties in a type required (opposite of Partial).
 */

interface User1 {
  id?: number;
  name?: string;
}

const createUser1 = (user: Required<User1>) => {
  console.log(user);
};
createUser1({ id: 1, name: "John Doe" });

/**
 * 3. Readonly
The Readonly<T> type makes all properties in a type immutable.
 */
interface User2 {
  id: number;
  name: string;
}
const user1: Readonly<User2> = {
  id: 1,
  name: "John Doe",
};
console.log(user1);
//user1.name="Chandra"

/**
 * 4. Pick
The Pick<T, K> type allows selecting specific properties from a type.
 */
interface User3 {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User3, "id" | "name">;
const user3: UserPreview = {
  id: 1,
  name: "Chandra",
};

/**
 * 5. Omit
The Omit<T, K> type removes specific properties from a type.
 */

type UserWithoutEmail = Omit<User3, "email">;
const user4: UserWithoutEmail = {
  id: 2,
  name: "Chandra",
  //email:"test@gmail.com"
};

/**
 * 6. Record
The Record<K, T> type creates a type with keys K and values T.
 */

type Roles = "admin" | "user" | "guest";
const rolePermission: Record<Roles, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
};

/**
 * 7. Exclude
The Exclude<T, U> type removes from T those types that are assignable to U.
 */
type NonGuestRoles = Exclude<Roles, "guest">;

const role: NonGuestRoles = "admin"; // Allowed
//const guestRole: NonGuestRoles = "guest"; // Error: `"guest"` is not assignable to type

/**
 * 8. Extract
The Extract<T, U> type selects from T those types that are assignable to U.
 */
type AdminOrGuest = Extract<Roles, "admin" | "guest">;
const role2: AdminOrGuest = "guest";

/**
 * 9. NonNullable
The NonNullable<T> type removes null and undefined from a type.
 */

type MaybeString = string | null | undefined;
type DefinitString = NonNullable<MaybeString>;
//const str: DefinitString = null;

/**
 * 10. ReturnType
 * The ReturnType<T> type extracts the return type of a function.
 */

function getUser() {
  return { id: 1, name: "Chandra" };
}
type UserNew = ReturnType<typeof getUser>;

const userNew: UserNew = { id: 2, name: "Chandra" };

/**
 * 11. InstanceType
The InstanceType<T> type gets the instance type of a class constructor.
 */

class UserDetails {
  id: number = 1;
  name: string = "John Doe";
}
type UserInstance = InstanceType<typeof UserDetails>;
const user: UserInstance = new UserDetails();

/**
 * 12. ThisType
The ThisType<T> utility sets the type of this in an object or class
 */
interface User5 {
  id: number;
  name: string;
}

const userManager: ThisType<User5> = {
  printInfo() {
    console.log(this.id, this.name);
  },
};

// Usage with type assertion:
const user5: User5 = { id: 1, name: "John Doe" };
//userManager.printInfo.call(user5)

