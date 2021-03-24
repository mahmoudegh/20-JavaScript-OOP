/*
  Defining Object
  [1] Object Literal
  [2] By new keyword
*/
let user = new Object();

user.firstName = "Mahmoud";
user.lastName = "Galal";
user["age"] = 35;

user.getFullName = function () {
  return `Full name is: ${user.firstName} ${user.lastName}`;
};
console.log(user);
console.log(user.getFullName());
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
