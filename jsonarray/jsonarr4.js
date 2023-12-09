var store = [

    {
        name:"cloths",
        products:[
            {
                id:1,
                name:"shirt",
                price:1000,
                quantity:10,
                colors:["black","white"]
            },
            {
                id:2,
                name:"jeans",
                price:2000,
                quantity:20,
                colors:["black","blue"]
            }
        ]

    },
    {
        name:"electronics",
        products:[
            {
                id:1,
                name:"mobile",
                price:10000,
                quantity:20,
                colors:["black","white"]
            },
            {
                id:2,
                name:"laptop",
                price:20000,
                quantity:10,
                colors:["black","blue"]
            }
        ]
    },
    {
        name:"grocery",
        products:[
            {
                id:1,
                name:"dal",
                price:100,
                quantity:100,
                colors:["white","yellow"]
            },
            {
                id:2,
                name:"rice",
                price:200,
                quantity:200,
                colors:["white","brown"]
            }
        ]
    }
]

//1) find all products of grocery
//2) find all products from store whose price > 1000
//3) calculate total quantities of electronics
//4) calculate total price of cloths
//5) find all products from store whose color is black

var grocProd = store.find((item)=>item.name=="grocery").products
//console.log(grocProd)

// var prodPrice = store.map((item)=>{
//     return item.products.filter((prod)=>prod.price > 12000)
// }).forEach((item)=>console.log("item",item))

var blackProd =  store.map((item)=>{
    return item.products.filter((prod)=>prod.colors.includes("black"))
})
console.log(blackProd)
