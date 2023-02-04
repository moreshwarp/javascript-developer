// let key = prompt("Enter Key");
// let value = prompt("Enter value");

// localStorage.setItem(key, value);
// console.log(` the Key is ${key} and its value is ${localStorage.getItem(key)}`);

// key = prompt("Enter Key for which you want to remove the item");
// localStorage.getItem(key);
// console.log(
//   `Item with ${key} Name and it has value ${localStorage.getItem(key)}`
// );
// localStorage.removeItem(key);

// // localStorage.clear();
// // To calculate the length of local storage
// console.log(localStorage.length);
// console.log(localStorage.key(2));
// console.log(localStorage.getItem(2));

// let aObject = `{
//   fname: "Moreshwar",
//   lname: "Pidadi",
//   empId: 19274,
//   nickName: "More",
// }`;

const user = {
  firstName: "Moreshwar",
  age: 26,
};

localStorage.setItem("user", user); // [object, object] here the object is been passed into the string same for Ex: String(user) [object, object]

// here we will use JASON.Stringify now the object is converted into JASON Valid String and stored to local Storage.

localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));

// localStorage.setItem("object", JSON.stringify(aObject));
// console.log(localStorage.getItem("object"));
