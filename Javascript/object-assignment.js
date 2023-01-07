// Part 1

// Creating an Object
const object1 = {
  book: "1984",
  writer: "G Orwell",
};
console.log("object1");

// Adding additional properties
console.log(object1);
console.log(Object.getPrototypeOf(object1));

const object2 = {
  book: "1984",
  writer: "G Orwell",
  famouseFor: {
    skill: "Writing",
  },
};

console.log("object2");
console.log(object2);

// Adding new properties to an object
console.log("Adding Properties to an Object");

object2.categories = "Fiction";
console.log(object2);

object2["Nationality"] = "British";
console.log(object2);
console.log(Object.getPrototypeOf(object2));

// Part 2
// Creating the object Using Constructor
const object3 = new Object();
console.log("object3 Empty Object Created");
console.log(object3); // Empty Object created

// Adding Properties to an Object
console.log("Adding Properties to an Object");
object3.firestName = "Moreshwar";
object3["lastName"] = "Pidadi";
console.log(object3);

console.log(object3.firestName);
console.log(object3.lastName);
console.log(Object.getPrototypeOf(object3));

// part 4 create method
const shadowObjectDemo = {
  testObject: true,
  validData: "Yes",
};

const object4 = Object.create(shadowObjectDemo);
console.log("object4");
console.log(object4);
console.log(object4.testObject);
console.log(object4.validData);
console.log(typeof object4);
console.log(object4["testObject"]);
console.log(object4["validData"]);
console.log(Object.getPrototypeOf(object4));

console.log("Part 5");
// part 5
console.log("Object 5");
const object5 = Object.create({ test: true });
console.log(object5.test);
