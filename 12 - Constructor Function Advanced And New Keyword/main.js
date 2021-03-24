/*
  Constuctor function
*/
function Phone(serial) {
  // this is the created object from the constructor function
  console.log(this);
  this.serial = 1;
  this.serial = serial;
}
let phone1 = new Phone(123456);
let phone2 = new Phone(567208);
let phone3 = Phone(456098);

console.log(phone1.serial);
console.log(phone2.serial);
console.log(window.serial);

console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone3 instanceof Phone);

console.log(phone1.constructor === Phone);
console.log(phone2.constructor === Phone);
// console.log(phone3.constructor === Phone);  // Error

///////////////////////// Simple function ///////////////////////////////
function sayHelloTo(someone) {
  return `Hello ${someone}`;
}

console.log(sayHelloTo("Mahmoud"));
