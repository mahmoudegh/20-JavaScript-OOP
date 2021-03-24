/*
  Prototype
  =========
  [1] Every object has a prototype
  [2] Prototype chaim ends with object.prototype
  [3] In javaScript function is object
*/
function User(name) {
  /*
    [1] Create empty object
    [2] Assign the new object to this
    this = {};
    [3] New object created prototype = Function prototype
    this.__proto__ = User.__proto__
  */
  this.name = name;
  /*
    [4] Return the new object
    return this
  */

  // if (!(this instanceof User)) {
  //   // throw new Error("Must be called with new keyword");
  //   console.log("Error, Must be called with new keyword");
  // }

  // Es6
  if (!new.target) {
    // throw new Error("Must be called with new keyword");
    console.log("Error, Must be called with new keyword");
  }
}

let user1 = new User("Mahmoud");
let user2 = User("Osama");
console.log(User.prototype);
console.log(user1);
console.log(user2);

let myArray = [1, 2, 3, 4];
console.log(myArray);
