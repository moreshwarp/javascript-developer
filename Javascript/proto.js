let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "black adam", "superman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`Hitesh is peresent in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

myHeros.hitesh();

//inheritance

const User = {
  name: "top name",
  email: "topuser@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TSAssistant = {
  makeAssignment: "JS assigment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

// Goal: get truelength of string

let yourname = "pooja";

String.prototype.truelength = function () {
  console.log(`${this.name}`);
  console.log(`true length is: ${this.trim().length}`);
};

let myname = "hitesh   ";
