var order = {

    id: 101,
    amount: 5000,
    foods:["idly","vada","dosa","coffee"],
    addresses:[
        {
            id:101,
            name:"Home",
            area:"BTM",
        },
        {   
            id:102,
            name:"office",
            area:"MG Road",
        }
    ]

}
console.log("order ",order);

console.log("order id ",order.id);
console.log("order amount ",order.amount);
console.log("order foods ",order.foods);
//loop

console.log("address ",order.addresses);
//console.log("address id ",order.addresses[0].name);

for(let i=0;i<order.addresses.length;i++){

    console.log("Name = ",order.addresses[i].name)

}