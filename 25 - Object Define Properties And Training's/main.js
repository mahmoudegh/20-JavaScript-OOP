/* Object.defineProperties & Trainings */

const myObject = {
  a: 1,
  b: 2,
};

// We can edit value from object
Object.defineProperty(myObject, "a", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 500,
});
console.log(myObject);

// By this way all descrebtors are true
myObject.c = 3;
console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));

// By this way all descrebtors are false
Object.defineProperty(myObject, "d", {
  value: 4,
});
console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

///////////////////////// Object.keys() /////////////////////////////
// get all keys from object that we can loop on
console.log(Object.keys(myObject));

///////////////////////// Object.getOwnPropertyNames() /////////////////////////////
// get all keys from object that we can loop or can't
console.log(Object.getOwnPropertyNames(myObject));

///////////////////////// Object.defineProperties() /////////////////////////////
Object.defineProperties(myObject, {
  e: {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 5,
  },
  f: {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 6,
  },
  g: {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 7,
  },
});

console.log(myObject);
