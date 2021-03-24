/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "Mahmoud",
  lastName: "Galal",
  age: "35",
  adresses: {
    eg: "Giza",
    usa: "California",
    ksa: "Riyadh",
    // Method
    getMainAdress: function () {
      return `Main adress In Egypt Is In ${user.adresses.eg}`;
    },
  },

  // Methods
  // getFullName: function () {
  //   return `Full name is: ${user.firstName} ${user.lastName}`;
  // },

  getFullName: () => `Full name is: ${user.firstName} ${user.lastName}`,
  getAgeInDays: () => `Your age in days is: ${user.age * 365}`,
};

// Accessing object propreties
console.log(user.firstName); // Dot notation
console.log(user["firstName"]); // Brackets notation
console.log(typeof user.firstName);
console.log(user.adresses.eg);
console.log(user["adresses"]["ksa"]);

// Accessing object methods
console.log(user.getFullName());
console.log(user.getAgeInDays());
console.log(typeof user.getFullName);
console.log(user.adresses.getMainAdress());
