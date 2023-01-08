// console.log(this);

// let name = "Moreshwar";
// console.log(name);
// let getName = function () {
//   let lastName = "Pidadi";
//   console.log(this);
//   console.log(name + +lastName);
// };

// // console.log(getName);
// console.log(getName());
// // console.log(getName());

// // Part 1

// // Creating an Object
// const object1 = {
//   // 1book: "1984", (this numeric laterial Won't work)
//   book: "1984",
//   writer: "G Orwell",
// };

// console.log("object1");
// console.log(object1);

// // String, Undefiened, Symbol , BigInt, Boolean, Null, Number

// // Adding additional properties
// object1.book = "Animal Farm";
// console.log(object1);
// console.log(Object.getPrototypeOf(object1));

// for (loop in object1) {
//   console.log("Values of Object1 ", Object.keys(object1));
//   console.log("Values of Object1 ", Object.values(object1));
// }

// const object2 = {
//   book: "1984",
//   writer: "G Orwell",
//   famouseFor: {
//     skill: "Writing",
//   },
// };

// console.log("object2");
// console.log(object2);

// // Adding new properties to an object
// console.log("Adding Properties to an Object");

// object2.categories = "Fiction";
// console.log(object2);

// object2["Nationality"] = "British";
// console.log(object2);
// console.log(Object.getPrototypeOf(object2));

// // Part 2
// // Creating the object Using Constructor
// const object3 = new Object();
// console.log("object3 Empty Object Created");
// console.log(object3); // Empty Object created

// // Adding Properties to an Object
// console.log("Adding Properties to an Object");
// object3.firestName = "Moreshwar";
// object3["lastName"] = "Pidadi";
// console.log(object3);

// console.log(object3.firestName);
// console.log(object3.lastName);
// console.log(Object.getPrototypeOf(object3));

// // part 4 create method
// const shadowObjectDemo = {
//   testObject: true,
//   validData: "Yes",
// };

// const object4 = Object.create(shadowObjectDemo);
// console.log("object4");
// console.log(object4); // This gives you clean object
// console.log(Object.getPrototypeOf(object4));
// console.log(object4.testObject);
// console.log(object4.validData);
// console.log(typeof object4);
// console.log(object4["testObject"]);
// console.log(object4["validData"]);

// console.log("Part 5");
// // part 5
// console.log("Object 5");
// const object5 = Object.create({ test: true });
// console.log(object5.test);

// Object.defineProperty(object5, "bookIcon", {
//   // objectModified: "Yes", // This will still give you and empty Object.
//   get: () => "📘",
//   enumerable: true, // false will exclude this property this is the case when use use definedefineProperty
// });

// // defineProperty is used so that you can add properties the the object that too in a controled mode

// // Object.defineProperties(object5, "setBook", {
// //   set: () => "✅📘",
// // });

// console.log(object5);
// console.log(object5.test);
// console.log(object5.bookIcon);
// console.log(object5);
// console.log(Object.getPrototypeOf(object5));

// // Making Object Numerable
// console.log("Making Object Numeriable");
// for (i in object5) {
//   console.log(i);
// }

// const object6 = {
//   bookName: "Start With Why",
//   author: "Simon Sinek",

//   review: function () {
//     this.author = "Simon S";
//     console.log("this KeyWord is:");
//     console.log(this);
//     return this; // This return value is required
//   },
//   reviews: () => {
//     this.author = "Change";
//   },
// };

// console.log("Object 6");
// console.log(object6);
// // console.log(object6.review);

// console.log("Review Function called");
// console.log(object6.review().review().review());

// const object7 = new Object();

// object7.newName = "Name in the Object";

// console.log(object7);

// Self Study on Object
 
