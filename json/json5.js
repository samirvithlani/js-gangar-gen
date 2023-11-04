var product ={

    name:"Iphone 14 pro",
    
    category:{
        id:101,
        name:"mobile",
        description:"mobile phones",
    },

    detail:{
        price: 100000,
        colors:["red","blue","black","white"],
        manufacturer:{
            name:"Apple",
            address:"USA",
            year:2022,
        }
    },
    ratings:4.5


}

console.log("product ",product);
console.log("product name ",product.name);
console.log("product colors",product.detail.colors);
console.log("product colors",product.detail.manufacturer.year);