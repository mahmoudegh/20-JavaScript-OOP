/*
  Constuctor function
  Dealing with propreties
  40% to 60%
*/
function User(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;

  // If "Egypt" Don't change, We dont need use country param
  this.country = "Egypt";
  this.fullName = function () {
    return `Full name is: ${this.fName} ${this.lName}`;
  };
}
const user1 = new User("Mahmoud", "Galal", 35);
const user2 = new User("Osama", "Elzero", 37);
console.log(user1.fullName());
console.log(user2);
