sessionStorage.setItem("nameSession", "testSession");
sessionStorage.setItem("nameSession1", "testSession1");
console.log(sessionStorage.getItem("nameSession"));
console.log(sessionStorage.getItem("nameSession1"));

document.onstorage = (e) => {
  alert("updated");
  console.log(e);
};

console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
console.log(sessionStorage.key(2));
console.log(sessionStorage.key(5));

// console.log(
//   `Removing the Session Storage with key name ${nameSession1} removed`
// );

// sessionStorage.removeItem("nameSession1");

// sessionStorage.clear();