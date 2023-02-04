sessionStorage.setItem("nameSession", "testSession");
sessionStorage.setItem("nameSession1", "testSession1");
console.log(sessionStorage.getItem("nameSession"));
console.log(sessionStorage.getItem("nameSession1"));

// console.log(
//   `Removing the Session Storage with key name ${nameSession1} removed`
// );
sessionStorage.removeItem("nameSession1");

sessionStorage.clear();
