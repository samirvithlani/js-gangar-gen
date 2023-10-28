function outer(){


    console.log("I am outer function");

    function inner(){

        console.log("I am inner function");

    }

    inner();

}
//outer();

function outer1(a){

    let x =100;

    function inner1(b){

        console.log("I am inner function");
        console.log("a = ",a)
        console.log("b = ",b)
        console.log("x = ",x)


    }
    inner1(2000)
    console.log("b = ",b)
}

//outer1(1000)

function outer2(a){



    function inner2(x,y){

        console.log("I am inner function");
        return a + x + y;
    }

    let ans  = inner2(5,20)

    return ans * a;


}

//var ans = outer2(10)
//console.log("ans = ",ans)


const outer3 = (a)=>{

    var y =100
        
    const inner3 = (x)=>{
        var y =150
        console.log("I am inner function",y);
            return a + x;
    }

    console.log("I am outer function",y);

    return inner3(a+10) ** 2;
}

var ans1 = outer3(10)
console.log("ans1 = ",ans1)