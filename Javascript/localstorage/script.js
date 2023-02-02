let key = prompt("Enter Key");
let value = prompt("Enter value");

localStorage.setItem(key, value);
console.log(` the Key is ${key} and its value is ${localStorage.getItem(key)}`);
