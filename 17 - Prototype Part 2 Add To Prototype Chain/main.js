/*
  Prototype
*/
function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Mahmoud");
let user2 = new User("Osama");

console.log(User.prototype);
console.log(user1);

// Add method to prototype
User.prototype.addTitle = function () {
  return `Mr.${this.name}`;
};

// Add properity to Object prototype
console.log(Object.prototype);
Object.prototype.elzero = "Elzero web school";
console.log(Object.prototype);

const myObject = { a: 1, b: 2 };
console.log(myObject);
console.log(myObject.elzero);
