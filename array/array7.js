var sales = [100,20,30,70,76,33,45,78,90,111,167]

var evenSales = sales.filter((s)=>{

    return s % 2== 0 && s>50
})
console.log(evenSales)


var oddSales = sales.filter((s)=>s %2 !=0 && s>50)
console.log(oddSales)