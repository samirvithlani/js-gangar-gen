//callback function...

//single thread environment --> one by one
//multi thread environment --> multiple at a time

//callback --->


function tobeCalled(){

    console.log("I am called")

}

function test(a){

    //console.log("a = ",a)
    a()
}

// test(10)
// test("hello")
// test([1,2,3,4,5])
// test({name:"Ravi",age:21})
// test(true)
// test(null)
// test(undefined)
// test()

//test(tobeCalled)

const printStudentData =()=>{

    console.log("I am printStudentData function")
}
const printEmployeeData =()=>{

    console.log("I am printEmpData function")
}



const printData =(a,cb)=>{

    
    console.log("a = ",a)
    cb()

} 


flag = prompt("Enter 1 for student data and 2 for employee data")
if(flag==1){

    printData(100,printStudentData)
}
if (flag==2){
    printData(200,printEmployeeData)
}
else{
    alert("Invalid input")
}










