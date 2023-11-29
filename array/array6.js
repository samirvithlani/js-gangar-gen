//filter 


var users =["raj","jayraj","jay","amit","parth","kishan","akash","akshay"]
var userfilter =[]

for(let i=0;i<users.length;i++){


        //console.log(users[i],"--",users[i].length)
        if(users[i].length>3){

            userfilter.push(users[i])
        }


}
console.log(userfilter)
//predicate function ---> true false..
//u  -->users[i]
var userfilt1 = users.filter((u)=>{

    //raj -->3 --> false...so it will not return
    //jayraj -->6 --> true...so it will return
    return u.length>3 

})
console.log(userfilt1)

var userfilt2 = users.filter((u)=>{

    //raj[0]=="a" -->false
    //return u[0]=="a"
    return u.startsWith("a")
})

console.log(userfilt2)
