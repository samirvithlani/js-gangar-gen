var employees = [
  {
    id: 1,
    name: "Raj",
    gender: "male",
    salary: 10000,
    isMarried: false,
    child: 0,
    degree: ["BE", "ME"],
  },
  {
    id: 2,
    name: "Seeta",
    gender: "female",
    salary: 30000,
    isMarried: true,
    child: 1,
    degree: ["BE"],
  },
  {
    id: 3,
    name: "Ravi",
    gender: "male",
    salary: 22000,
    isMarried: true,
    child: 1,
    degree: ["BCOM"],
  },
];

//1) all employee who is married

var filemp = employees.filter((emp) => {
  return emp.isMarried == true;
});
console.log(filemp);
// find emps who is having child...

var filemp1 = employees.filter((emp) => {
  return emp.child > 0;
});
console.log(filemp1);
//// find emps who is having child... female

var filemp2 = employees.filter((emp) => {
  return emp.gender == "female" && emp.child > 0;
});
console.log(filemp2);
//3) find male employee who is having salary > 20000

var filemp3 = employees.filter((emp) => {
  return emp.gender == "male" && emp.salary > 20000;
});
console.log(filemp3);

//find employees who is having degree BE

var filemp4 = employees.filter((emp) => {
  return emp.degree.includes("BE");
});
console.log(filemp4);
