/*
  Defining Object
  [1] Object Literal
*/

// let myObj = {
//   One: "1",
//   Two: "2",
// };

// console.log(myObj.One);

let myObj = {
  name: "Mahmoud",
};

let myName = "name";

console.log(myObj.name);
console.log(myObj.myName); // Undefined
console.log(myObj[myName]);
console.log(myObj["name"]);
