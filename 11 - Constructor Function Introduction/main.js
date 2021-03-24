/*
  Constuctor function
*/

function Phone(serial, color, price) {
  this.serial = serial;
  this.color = color;
  this.price = price - 100;
}

const phone1 = new Phone(123, "Red", 500);
console.log(phone1);

const phone2 = new Phone(456, "Black", 500);
console.log(phone2);

const phone3 = new Phone(789, "Silver", 500);
console.log(phone3);

// const phone1 = {
//   serial: 123,
//   color: "Red",
//   price: 500,
// };

// const phone2 = {
//   serial: 456,
//   color: "Black",
//   price: 500,
// };

// const phone3 = {
//   serial: 789,
//   color: "Silver",
//   price: 500,
// };
