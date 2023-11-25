var users = ["amit","jay","raj","parth","amit"]

//predicate.... True or False
//age<18
//age!= 15
//name.startsWith("a")
//name.includes("a")
var x = users.some((name)=>{
    
    //jay.includes("a") ->false
    //raj.includes("a") ->false
    //parth.includes("a") ->true
    //amit.includes("a") ->true
    return name.startsWith("a")
})
console.log("some...",x);

var x = users.every((name)=>{


    return name.length>=3

})
console.log("every...",x);


var flag = true;

for(let i=0;i<users.length;i++){

    //amit.length<=3
    //hr length<=3
    if(users[i].length<3){
        flag = false;
        break;
    }

}
console.log("flag...",flag);



