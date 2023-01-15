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
