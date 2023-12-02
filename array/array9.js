var marks = [78,89,66,55,35,80]

var total = 0;

// for(let i=0;i<marks.length;i++){

//     total = total + marks[i]
// }

//acc 
var add = marks.reduce((sum,item)=>{
    // 0 + 78 = 78
    // 78 + 89 = 167
    return sum + item
},0)

//console.log(total)
console.log(add)

var sum1 = marks.reduce((sum,item)=>sum+item)
console.log(sum1)

var address = ["ahmedabad","surat","rajkot","vadodara"]

var add1 = address.reduce((sum,item)=>sum+","+item)
console.log(add1)