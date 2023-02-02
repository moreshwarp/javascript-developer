let key = prompt("Enter Key");
let value = prompt("Enter value");

localStorage.setItem(key, value);
console.log(` the Key is ${key} and its value is ${localStorage.getItem(key)}`);

key = prompt("Enter Key for which you want to remove the item");
localStorage.getItem(key);
console.log(
  `Item with ${key} Name and it has value ${localStorage.getItem(key)}`
);
localStorage.removeItem(key);

// localStorage.clear();
// To calculate the length of local storage
console.log(localStorage.length);
console.log(localStorage.key(2));
console.log(localStorage.getItem(2));

let aObject = {
  fname: "Moreshwar",
  lname: "Pidadi",
  empId: 19274,
  nickName: "More",
};

let value_1 = JSON.stringify(aObject);
localStorage.setItem("object", value_1);
console.log(localStorage.getItem(JSON.parse(value_1)));
