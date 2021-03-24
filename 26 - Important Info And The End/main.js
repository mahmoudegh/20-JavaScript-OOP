/* 
  Important notes and the end
  ===========================
  [1] Arrow function don't has prototype property.
  [2] You can use objects inside constructors freely
  [3] f =function () {} === f() {}
*/

class User {
  constructor(fName, lName, age, email) {
    this.name = {
      first: fName,
      last: lName,
    };
    (this.age = age), (this.email = email);
  }
  sayHello = function () {
    return `Say Hello`;
  };
  sayHi() {
    return `Say Hi`;
  }
}

let user1 = new User("Mahmoud", "Galal", 35, "mahmoudegh@yahoo.com");
console.log(user1.name.first);
console.log(user1.name.last);
console.log(user1.age);
console.log(user1.email);
console.log(user1.sayHello());
console.log(user1.sayHi());
