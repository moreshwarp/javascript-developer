// Question 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

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

// Question 02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

const selfProfile = {
  firstName: "Moreshwar",
  lastName: "Pidadi",
  matrialStatus: false,
  country: "India",
  age: 26,
};

console.log(`Hi There,
            My name is ${selfProfile.firstName} ${selfProfile.lastName} I am from ${selfProfile.country} and ${selfProfile.age} and current marritial status is ${selfProfile.matrialStatus}`);

// Question 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

const userName = "Moreshwar";
console.log(userName);
console.log(userName.toUpperCase());

// Question 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

const wordString = "Hello World Demo";
console.log(wordString.trim().toLowerCase().includes("world"));

// Question 05. Declare a varibale and assign string value to it and then split it into an array using split() method

const splitString = "Hello This Is An Split String Ex.";
console.log(splitString.split(" "));
// console.log(splitString.split(""));
// console.log(splitString.split("AN"));
const arrayString = splitString.split(" ");
console.log(arrayString[0]);
console.log(arrayString[1]);
console.log(arrayString[3]);
console.log(arrayString[4]);
console.log(arrayString[5]);
console.log(arrayString[2]);
console.log(arrayString[4]);

// Question : 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const arrFang = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(arrFang);
console.log(arrFang.split(","));
// console.log(arrFang.split());

// Question 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const arr = [
  "Moreshwar",
  26,
  true,
  4545,
  "test",
  "pw skills",
  "DataTypes",
  "Assignment",
  "pw skills",
];

console.log(arr);
console.log(`pw skills First occurance is at ${arr.indexOf("pw skills")}`);
console.log(`pw skills Last occurance is at ${arr.lastIndexOf("pw skills")}`);

// Question 08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string

const trimString = " Hello How are you doing ";
console.table(`String with white spaces ${trimString}`);
console.table(`String without the whiteSpaces ${trimString.trim()}`);

// Question 09. Boolean value is either true or false.
//    - Write three JavaScript statement example which provide truthy value.
//    - Write three JavaScript statement example which provide falsy value.

const testNumberOne = "4";
const testNumberTwo = 4;
const result = testNumberOne + testNumberTwo;
console.log(result);
console.log(`${result ? true : false}`);
// Type Coersion concept
console.log(Number(testNumberOne) + testNumberTwo);

// Falsy Value
const falsyExample = "";
const nanNumber = null;

console.log(`${falsyExample ? true : false}`);
console.log(`${nanNumber ? true : false}`);

// Question 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// - 4 > 3      true
// - 4 >= 3     true
// - 4 < 3      false
// - 4 <= 3     false
// - 4 == 4     true
// - 4 === 4    true
// - 4 != 4     false
// - 4 !== 4    false
// - 4 != '4'   false
// - 4 == '4'   true
// - 4 === '4'  false
// - Find the length of python and jargon and make a falsy comparison statement.

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

const testVarOne = "Python";
console.log(testVarOne.length);

const testVarTwo = "Jargon";
console.log(testVarTwo.length);

// Created a falsy statment
console.log(6 === "6");
