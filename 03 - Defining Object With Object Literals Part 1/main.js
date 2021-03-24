/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "Mahmoud",
  lastName: "Galal",

  // Methods
  getFullName: function () {
    return `Full name is: ${user.firstName} ${user.lastName}`;
  },
};

// Accessing object propreties
console.log(user.firstName); // Dot notation
console.log(user["firstName"]); // Brackets notation
console.log(typeof user.firstName);

// Accessing object methods
console.log(user.getFullName());
console.log(typeof user.getFullName);
