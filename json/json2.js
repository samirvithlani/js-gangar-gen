var student = {

    id:101,
    name:"amit",
    age:21,
    skills:["java","python","javascript","c++"],

}

console.log("student ",student);
console.log("student id ",student.id);
console.log("student name ",student.name);
console.log("student age ",student.age);
console.log("student skills ",student.skills);

for(let i=0;i<student.skills.length;i++){

    console.log("student skills ",student.skills[i]);
}