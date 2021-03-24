/*
  Constuctor function 80%
  Bulit in constructors
*/
function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Mahmoud");
let user2 = new User("Osama");

let num = 1;
let str = "Mahmoud";
let bolean = false;
