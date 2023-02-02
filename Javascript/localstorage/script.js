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
