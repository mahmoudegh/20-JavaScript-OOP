/*
  Constuctor function
  60% to 70%
  Training
*/
function User(name, email, age, showEmail) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.updateName = function (newName) {
    if (this.age > 18) {
      this.name = newName;
    } else {
      console.log(`You Are not allowed`);
    }
  };
  // this.hideEmail = function () {
  //   delete this.email;
  // };
  this.showEmail = function () {
    if (showEmail === true) {
      return `Email is: ${this.email}`;
    } else {
      return `Data is private`;
    }
  };
}

let user1 = new User("Mahmoud", "mahmoudegh@yahoo.com", 17, false);
console.log(user1.showEmail());

console.log(user1);
console.log(user1.name);
user1.updateName("Osama");
console.log(user1.name);
