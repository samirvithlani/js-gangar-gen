//sop,prinf,co
//console is a global object
//log

console.log("Hello World");
console.info("This is some info");
console.warn("This is a warning");
console.error("This is an error");

//var let const...

var a = 10; //int
var sname = "raj" //string
var per = 20.20 //float
var isActive = true //boolean

console.log(a)
console.log("value of a = ",a)

console.log("value of name = ",sname)
console.log("value of per = ",per)
console.log("value of isActive = ",isActive)

console.log("Data type of a = ",typeof(a))
console.log("Data type of name = ",typeof(sname))
console.log("Data type of per = ",typeof(per))
console.log("Data type of isActive = ",typeof(isActive))
//number, string, boolean

//diff var let const.....
//var  - global scope
//let - block scope {}
//const - constant --> read only


let x =100
console.log("value of x = ",x)
console.log("Data type of x = ",typeof(x))

{

    var q =230;
    let p = 200
    console.log("value of p inside block.. = ",p)
    console.log("value of q inside block.. = ",q)
    console.log("a --->",a)
    const p2 = 100
    console.log("value of p2 inside block.. = ",p2)

}


//console.log("value of p2 = ",p2)  //error

//console.log("value of p = ",p) // error
console.log("value of q = ",q)


const pi = 3.14
console.log("value of pi = ",pi)
//pi = 3.15 //error