// Question 1

// String DataType
const firstName = "Moreshwar";
console.log("Value is " + firstName + " Datatype " + typeof firstName);

// Boolean DataType
const varBoolean = true;
console.log("Value is " + varBoolean + " Datatype " + typeof varBoolean);

// Undefined DataType
const testUndefined = undefined;
console.log("Value is " + testUndefined + " Datatype " + typeof testUndefined);

// Null DataType
const nullDataType = null;
// const nullDataType = !null;
console.log("Value is " + nullDataType + " Datatype " + typeof nullDataType);
// Here the typeOf will give an data type of an onject as in JS you will then have to use === operator to see if it's Null or not.
console.log("The True value says that the dataType is Null");
console.log(nullDataType === null);

// BigInt DataType
const bigIntData = 16464646764694674764964747614n;
console.log("Value is " + bigIntData + " Datatype " + typeof bigIntData);

// Question 2

const selfProfile = {
  firstName: "Moreshwar",
  lastName: "Pidadi",
  matrialStatus: false,
  country: "India",
  age: 26,
};

console.log(`Hi There,
            My name is ${selfProfile.firstName} ${selfProfile.lastName} I am from ${selfProfile.country} and ${selfProfile.age} and current marritial status is ${selfProfile.matrialStatus}`);

// Question 3
const userName = "Moreshwar";
console.log(userName);
console.log(userName.toUpperCase());

// Question 4

const wordString = "Hello World Demo";
console.log(wordString.trim().toLowerCase().includes("world"));

// Question 5
const splitString = "Hello This Is An Split String Ex.";
console.log(splitString.split(" "));
const arrayString = splitString.split(" ");
console.log(arrayString[0]);
console.log(arrayString[1]);
console.log(arrayString[3]);
console.log(arrayString[4]);
console.log(arrayString[5]);
console.log(arrayString[2]);
console.log(arrayString[4]);
