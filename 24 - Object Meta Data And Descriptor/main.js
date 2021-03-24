/*
  Object meta data
  writable
  enumerable
  configurable
  ============
  Object.defineProperty(obj, prop, descriptor)
*/

const myObject = {
  a: 1,
  b: 2,
};
console.log(myObject);

Object.defineProperty(myObject, "c", {
  writable: false, // Changable or not
  enumerable: false, // Counted in loop or not
  configurable: true, // If false it prevent any change in descriptor(writable, enumerable, delete)
  value: 3,
});

////////////////////////// Test writable ////////////////////////////
// Will not change because writable is false
myObject.c = 500;
console.log(myObject);

console.log("#".repeat(20)); // Separator

///////////////////////// Test enumerable ///////////////////////////
// Will not work because enumerable is false
for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

// get own prop names
console.log(Object.getOwnPropertyNames(myObject));
console.log("#".repeat(20)); // Separator
