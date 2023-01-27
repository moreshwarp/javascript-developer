const employees = [
  { name: "John", age: 30, department: "AI" },
  { name: "Jane", age: 20, department: "AI" },
  { name: "Alex", age: 35, department: "Accounts" },
  { name: "Jason", age: 25, department: "AI" },
  { name: "Jacob", age: 20, department: "Accounts" },
  { name: "Ellen", age: 45, department: "Accounts" },
];

console.log(employees);

const empAI = employees.filter((empAIT) => empAIT.department === "AI");

let avg = 0;
for (let avgAge of empAI) {
  avg += avgAge.age;
}
console.log(avg / empAI.length);

console.log(empAI);
