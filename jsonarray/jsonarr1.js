var students = [
  {
    id: 1,
    name: "Raj",
  },
  {
    id: 2,
    name: "Ravi",
  },
  {
    id: 3,
    name: "Amit",
  },
];

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name)
// }

//students[i] == stu
students.forEach((stu) => {
  console.log(stu.name);
});

console.log(students);
var newstudents = students.map((stu) => {
  //return stu.name.toUpperCase()
  return {
    id: stu.id * 10,
    name: stu.name.toUpperCase(),
  };
});
console.log(newstudents);


var filstudents = students.filter((stu)=>{



    return stu.name.startsWith("R")
})
console.log(filstudents)
