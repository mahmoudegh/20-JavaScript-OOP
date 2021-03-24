/*
  JavaScript Accessories
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  get showInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
  changeName(newName) {
    this.name = newName;
  }
  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user1 = new User("Mahmoud", "mahmoudegh@yahoo.com");

console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

user1.changeName("Osama");
console.log(user1.name);
console.log(user1.showInfo); // get

user1.changeEmail = "Osama@yahoo.com"; // set
console.log(user1.email);
console.log(user1.name);
console.log(user1.showInfo); // get
