var uni = [
    {
        name:"science",
        students:[
            {
                id:1,
                name:"ram",
                marks:100,
                subjects:["maths","science","drawing"]
            },
            {
                id:2,
                name:"shyam",
                marks:200,
                subjects:["maths","physics"]
            },
            {
                id:3,
                name:"ghanshyam",
                marks:120,
                subjects:["maths","chemistry","drawing"]
            }
        ]
    },
    {
        name:"commerce",
        students:[
            {
                id:1,
                name:"ajay",
                marks:80,
                subjects:["eco","accounts"]

            },
            {
                id:2,
                name:"vijay",
                marks:90,
                subjects:["eco","business","drawing"]
            },
            {
                id:3,
                name:"jay",
                marks:100,
                subjects:["eco","accounts"]
            }
        ]
    },
    {
        name:"arts",
        students:[
            {
                id:1,
                name:"amit",
                marks:80,
                subjects:["history","geography"]
            },
            {
                id:2,
                name:"sumit",
                marks:90,
                subjects:["history","political science"]
            },
            {
                id:3,
                name:"umesh",
                marks:100,
                subjects:["history","geography","drawing"]
            }
        ]
    }
]

//1 find
//all records map
//some records filter
// combine records reduce


//find all students of commerce

const commstudent = uni.find((item)=>item.name =="commerce").students
const commstudent1 = uni.find((item)=>item.name =="commerce").students.filter((item)=>item.marks>80)
const commstudent2 = uni.find((item)=>item.name == "commerce").students.filter((stu)=>stu.subjects.includes("accounts"))
const commstudent3 = uni.find((item)=>item.name =="commerce").students.reduce((sum,item)=>sum+item.marks,0)
//console.log(commstudent)
//console.log(commstudent1)
//console.log(commstudent2)
//console.log(commstudent3)



const studntRec = uni.map((stud)=>{
    // return stud.students.filter((stu)=>stu.marks>80)
    return stud.students.reduce((sum,item)=>sum+item.marks,0)
}).reduce((sum,item)=>sum+item,0)

//console.log(studntRec)



const recs = uni.map((stu)=>{
    return stu.students.filter((item)=>item.subjects.includes("drawing"))
})
console.log(recs)