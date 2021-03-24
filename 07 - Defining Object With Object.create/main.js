/*
  Defining Object
  [1] Object Literal
  [2] By new keyword
  [3] By object.create()
*/

let mainObj = {
  hasDiscount: true,
  showMsg: function () {
    return `You${this.hasDiscount ? "" : " Don't"} have discount`;
  },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let otherObj = Object.create(mainObj);

console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());

let lastObj = Object.create(mainObj);

console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg());
