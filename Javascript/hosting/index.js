// Example with var

console.log(x);
// Hosted the decleration but not Initilized hence the memory allocation will take place and value initially stored in it will/ shall be undefined.

getName(); // Hosted and Initilized will give the intended o/p i.e what is written in Hosting in JavaScript
// Here the function code is been stored in the allocated memeory and hence we will have an expected output.
// Even After giving the call to the function

var x = 10;
// function getName() {
//   console.log("Hosting in JavaScript");
// }

// Arrow Function

var getName = () => {
  console.log("Hosting in JavaScript");
};

// Here in Arrow function will behave like a variable and hence it will give an err getName is not a function.
// getName();
