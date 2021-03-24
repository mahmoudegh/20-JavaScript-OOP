/*
  For ... In Loop
  Loop through the properties of the object
*/
const user = {
  name: "Mahmoud",
  country: "Egypt",
  age: 35,
};

let finalData = "";

for (let info in user) {
  // console.log(info);
  // console.log(user[info]);
  // console.log(info, user[info]);
  // console.log(`The ${info} is => ${user[info]}`);
  finalData += `<div>The ${info} is => ${user[info]}</div>`;
}
console.log(finalData);
document.getElementById("info").innerHTML = finalData;
