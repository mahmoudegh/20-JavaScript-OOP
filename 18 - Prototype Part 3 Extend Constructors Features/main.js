/*
  Prototype
*/
console.log(String.prototype);

String.prototype.zFill = function (width) {
  let theResult = this;
  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }

  return theResult.toString();
};

console.log("1".zFill(6));
console.log("12".zFill(6));
console.log("123".zFill(6));
console.log("1234".zFill(6));
console.log("12345".zFill(6));
console.log("123456".zFill(6));

String.prototype.sayYouLoveMe = function () {
  return `I love you ${this}`;
};
console.log("Osama".sayYouLoveMe());

function sayYouLoveMe(name) {
  console.log(`I love you ${name}`);
}
sayYouLoveMe("Osama");
