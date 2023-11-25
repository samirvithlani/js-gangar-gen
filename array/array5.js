var marks = [78,89,76,65,45,35]


var marks1 = marks.map((m)=>{
    return m*2
})

console.log(marks1)


var data = [1,2,3,4,5,6,7,8,9,10]


var newData = data.map((d)=>{

    //1//2//3
    if(d %2 ==0){
        return d**2
    }
    else{
        return d**3
    }


})
console.log(newData)