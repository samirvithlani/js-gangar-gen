console.log("time....")

function myfun(){
    console.log("hello")
}

setTimeout(()=>
{
    //function call...
    //console.log("hello")
    //console.log("hello")
    myfun()
},3000)
//3000 - 3 sec