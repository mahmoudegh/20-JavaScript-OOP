/*
  Delete operator
*/
const user = { name: "Mahmoud" };

console.log(user);
console.log(user.name);

// delete user;  // Delete prpperty not object
delete user.name;

console.log(user);
console.log(user.name);
console.log(delete user.name);
console.log("#".repeat(20));

// Cases we can't use delete

//////////////////// [1]Can't delete let or const or var /////////////////////////
const userName = "Mahmoud";
console.log(userName);
delete userName;
console.log(delete userName);
console.log(userName);
console.log("#".repeat(20));

///////////////// [2]Object.freez(); /////////////////////
const freezedObj = Object.freeze({ age: 37 });
console.log(freezedObj);
console.log(freezedObj.age);
console.log(delete freezedObj.age);
delete freezedObj.age;
console.log(freezedObj.age);
console.log("#".repeat(20));

//////////////////////// [3]Object.defineProperty(); ///////////////////
const eObj = {};
Object.defineProperty(eObj, "a", { value: 1, configurable: false });
console.log(eObj);
console.log(eObj.a);
console.log(delete eObj.a);
delete eObj.a;
console.log(eObj);
console.log(eObj.a);
