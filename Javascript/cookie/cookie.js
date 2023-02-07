console.log(document.cookie);

document.cookie = "name=Moreshwar";
document.cookie = "name1=Moreshwar1";
document.cookie = "name2=Moreshwar2";
document.cookie = "name3=Moreshwar3";
document.cookie = "name4=Moreshwar4";

console.log(document.cookie);

// document.cookie = `{key}` + "=" + `{value}`;
// This won't set Key Value pair properly in case of special character's

// Encode URI Component That Helps to keep the valid formating. It is used like this

let key = prompt("Enter the Name");
let value = prompt("Enter Value");
document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);
console.log(document.cookie);
console.log(decodeURIComponent("%40%23%40%23%40!%23!%40"));

// Cookie Options
document.cookie =
  "user=Moreshwar; path=/; expires=Tue, 6 Feb 2023 02:06:00 GMT";

document.cookie = "user10=Moreshwar; path=/; max-age=1000";

console.log(document.cookie);

// On and average the cookie last for 45 minutes.
// If an cookie option either of these cookie option last then in that case we can say that 
