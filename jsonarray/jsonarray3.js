var company =[
    {
        name:"IT",
        employees:[
            {
                id:1,
                name:"amit",
                age:21,
                gender:"male",
                salary:20000
            },
            {
                id:2,
                name:"rajvi",
                age:22,
                gender:"female",
                salary:22000
            },
            {
                id:3,
                name:"kunal",
                age:24,
                gender:"male",
                salary:24000
            }
        ]
    },
    {
        name:"HR",
        employees:[
            {
                id:1,
                name:"priya",
                age:21,
                gender:"female",
                salary:12000
            },
            {
                id:2,
                name:"reema",
                age:22,
                gender:"female",
                salary:14000
            }
        ]
    }
]

// var Dept = company.find((dept)=>{
//     return dept.name == "IT"
// })
var Dept = company.find((dept)=>dept.name == "IT").employees.filter((emp)=>emp.gender=="female")
console.log(Dept)

var totalSalaryOfDept = company.find((dept)=>dept.name =="HR").employees.reduce((sum,item)=>sum + item.salary,0)
console.log(totalSalaryOfDept)


var totalSalary = company.find((dept)=>dept.name =="IT").employees.filter((emp)=>emp.gender == "male").reduce((sum,item)=>sum+item.salary,0)
console.log(totalSalary)