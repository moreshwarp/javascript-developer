//alert("Prototype in JavaScript");
console.log("Array");
let myHero = ["Thor", "Dr. Strange", "Capt. America", "IronMan"];
// console.log(typeof myHero);
console.log(myHero);

// Most powerful statment in entire code
Object.prototype.Moreshwar = function () {
  console.log("This is most powerful line in ProtoType in JS");
};

Array.prototype.heyMoreshwar = function () {
  console.log("This is most powerful line in ProtoType in JS");
};

// Inheritance , prototype chanining

const user = {
  fName: "Moreshwar     ",
  eMail: "moreshwarpidadi@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvaliable: false,
};

const TSAssistance = {
  makeAsssignemt: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

console.log(TSAssistance);

Teacher.__proto__ = user;
console.log(Teacher);

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);
Object.setPrototypeOf(TeachingSupport, user);

console.log(Teacher.makeVideo);
console.log(Teacher.eMail);

// Goal is to get truelenght

String.prototype.trueLength = function () {
  console.log("The true lenght is " + this.trim().length);
};
