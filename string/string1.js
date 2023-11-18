var sname = "Rohit"

console.log(sname)
console.log(sname[0])

for(let i=0;i<sname.length;i++){
    console.log(sname[i])
}

//mutablity  immutable


//sname = sname + " Sharma"


const toUpperCaseUdf= (name)=>{

    //amit
    let newName = ""
    for(let i=0;i<name.length;i++){
        let ch = name[i]
        //a
        let chCode = ch.charCodeAt(0)
        //97
        if(chCode>=97 && chCode<=122){
            chCode = chCode - 32
            //97-32 = 65
            ch = String.fromCharCode(chCode)
            //a = A
        }
        newName = newName + ch

    }

    
    
    return newName
}


sname = sname.concat(" Sharma")
console.log(sname)

sname = sname.toUpperCase()
console.log(sname)


var x = 65
ans = x.valueOf()
console.log(ans)

console.log(String.fromCharCode(65))

var n = toUpperCaseUdf("amit")
console.log("caps....",n)


var ch = "A"
var chCode = ch.charCodeAt(0)
console.log(chCode)


//charCodeAt(0) //ascii code
//fromCharCode(65) //char
//valueOf() //number
