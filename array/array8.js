var names = ["amit","raj","parth","priya","neha"]

var x = names.find((n)=>{
    //return n == "raj"
    return n.startsWith("p")
})
console.log(x)

var y = names.find((n)=>{

    return n.length>3
})
console.log(y)

//foreach --> no return can be used for printing purpose only
//map --> return new array but with same length
//filter --> return new array but with same or less length and it will return only those
//elements which satisfy the condition
//find --> return only one element which satisfy the condition
//reduce --> will return single value --> sum of all elements