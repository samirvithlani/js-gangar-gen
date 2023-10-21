//string,number,boolean,undefined,null,object
//descision making statements if else switch loops

//if(condition part){}
//else{}

var no = 100

if(no %2 ==0){

    console.log("Even")
}
else{
    console.log("Odd")
}
//

var age = 19

if(age>=18){

    console.log("Eligible for voting")

    if(age>=21){
        console.log("Eligible for marriage")

        if(age>=60){
            console.log("Eligible for senior citizen")
        }
        else{
            console.log("Not eligible for senior citizen")
        }

    }
    else{
        console.log("Not eligible for marriage")
    }
}
else{
    console.log("Not eligible for voting")
}


//<--- laddder if else ---->

var  marks = 66

if(marks>=70){
    console.log("Distinction")
}
else if(marks>=60){
    console.log("First class")
}
else{
    console.log("Second class")
}


