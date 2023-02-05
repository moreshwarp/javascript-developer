console.log(document.cookie);

document.cookie = "name=Moreshwar";
document.cookie = "name1=Moreshwar1";
document.cookie = "name2=Moreshwar2";
document.cookie = "name3=Moreshwar3";
document.cookie = "name4=Moreshwar4";

console.log(document.cookie);

// Encode URI Component That Helps to keep the valid formating. It is used like this

let key = prompt("Enter the Name");
let value = prompt("Enter Value");

document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);

console.log(document.cookie);
