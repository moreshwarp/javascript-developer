// String DataType
const firstName = "Moreshwar";
console.log("Variable is " + firstName + " Datatype " + typeof firstName);

// Boolean DataType
const varBoolean = true;
console.log(varBoolean + " Datatype " + typeof varBoolean);

// Undefined DataType
const testUndefined = undefined;
console.log(testUndefined + " Datatype " + typeof testUndefined);

// Null DataType
const nullDataType = null;
// const nullDataType = !null;
console.log(nullDataType + " Datatype " + typeof nullDataType);
// Here the typeOf will give an data type of an onject as in JS you will then have to use === operator to see if it's Null or not.
console.log("The True value says that the dataType is Null");
console.log(nullDataType === null);
