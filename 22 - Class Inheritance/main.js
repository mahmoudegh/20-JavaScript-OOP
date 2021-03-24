/*
  Class
  =====
  Inheritance
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `You email is ${this.email}`;
  }
  writeMsg() {
    return `Message from parent class`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMsg() {
    return `You are admin`;
  }
  // This method overrided on previous function in parent class
  writeMsg() {
    return `Message from child class`;
  }
}
let admin1 = new Admin("Mahmoud", "mahmoudegh@yahoo.com");
console.log(admin1.name);
console.log(admin1.email);
console.log(admin1.sayHello());
console.log(admin1.showEmail());
console.log(admin1.writeMsg());
console.log(admin1.adminMsg());
