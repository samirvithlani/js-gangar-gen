//function : function is collection of statements
//use: to perform some task
//advantage: code reusability
//boiler plate code: code which is used again and again
//2 type PREDEFINED and USER DEFINED
//promt().....

//4 types of function
//with argument and with return type
//with argument and without return type
//without argument and with return type
//without argument and without return type

//int sum(){}

//using function keyword
//arrow function

function add(a,b)
{
    console.log("Addition is "+(a+b));
    return a+b;
}


var  x =add(10,20)
var x1 = add("hello","world")

function sub(){

    console.log("Substraction is ");
}


sub();

const sum =(a,b)=>{

    return a+b;
}
var x2 = sum(10,20);
console.log(x2);


const sum1 = (a,b)=>a+b;

var x3 = sum1(10,20);
console.log(x3);




// const  checkAlig =(age)=>{

//     return age>=18?"eligible":"not eligible";

// }

const checkAlig = (age)=> age>=18?"eligible":"not eligible";

var x4 = checkAlig(17);
console.log(x4);



//color = red then price = 1200 color is blue then price = 1500  color is black then price = 2000
var color = "red"
var x5 = color =="red"?1200:color=="blue"?1500:color=="black"?2000:"invalid color";
console.log(x5);


