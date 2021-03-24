/*
  Class
  =====
*/
/////////////////// constructor //////////////////////
// function User(name, email) {
//   this.name = name;
//   this.email = email;
//   this.sayHello = function () {
//     return `Hello ${this.name}`;
//   };
// }

// let user1 = new User("Mahmoud");
// let user2 = new User("Osama");

// console.log(user1);
// console.log(user2);

////////////////// Class /////////////////////
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `You email is ${this.email}`;
  }
}

let user1 = new User("Mahmoud", "mahmoudegh@yahoo.com");
let user2 = new User("Osama");

console.log(user1);
console.log(user2);
