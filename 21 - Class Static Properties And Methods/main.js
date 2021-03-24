/*
  Class
  =====
  Static properties & methods
*/
class User {
  // Static properties
  static counter = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    User.counter++;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `You email is ${this.email}`;
  }

  // Static method
  static countObjects = function () {
    return `${this.counter} objects created`;
  };
}

let user1 = new User("Mahmoud", "mahmoudegh@yahoo.com");
// let user2 = User("Osama", "osama@yahoo.com"); // Error
let user2 = new User("Osama", "osama@yahoo.com");
let user3 = new User("Galal", "galal@yahoo.com");

console.log(typeof User);
console.log(User === User.prototype.constructor); // true
console.log(User.countObjects());
