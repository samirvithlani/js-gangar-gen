const menu = [
    {
        id:1,
        name:"Pizza Combo",
        price:700,
        items :["Pizza","Coke","Fries"]
    },
    {
        id:2,
        name:"Burger Combo",
        price:500,
        items :["Burger","Coke","Fries"]
    },
    {
        id:3,
        name:"Pizza-Burger Combo",
        price:1000,
        items :["Pizza","Burger","Coke","Fries","Ice Cream"],
    },
    {
        id:4,
        name:"Ice Cream Combo",
        price:300,
        items :["Ice Cream","Coke"]
    },
    {
        id:5,
        name:"Fries Combo",
        price:200,
        items :["Fries","Coke"]
    },
    {
        id:1,
        name:"Pizza Combo",
        price:700,
        items :["Pizza","Coke","Fries"]
    },
    {
        id:2,
        name:"Burger Combo",
        price:500,
        items :["Burger","Coke","Fries"]
    },
    {
        id:3,
        name:"Pizza-Burger Combo",
        price:1000,
        items :["Pizza","Burger","Coke","Fries","Ice Cream"],
    },
    {
        id:4,
        name:"Ice Cream Combo",
        price:300,
        items :["Ice Cream","Coke"]
    },
    {
        id:5,
        name:"Fries Combo",
        price:200,
        items :["Fries","Coke"]
    }
]




const loadMenu = () => {


    const menuDiv = document.getElementById("menu");

    for(let i=0;i<menu.length;i++){
        const foodDiv = document.createElement("div");
        foodDiv.className = "product";

        const foodName = document.createElement("h2");
        foodName.innerHTML = menu[i].name;

        const foodPrice = document.createElement("p");
        foodPrice.innerHTML = "Price : "+menu[i].price;


        const foodItems = document.createElement("p");
        foodItems.innerHTML = "Items : "+menu[i].items.join(", ");


        const orderbuttoon = document.createElement("button");
        orderbuttoon.innerHTML = "Order Now";
        orderbuttoon.addEventListener("click",()=>{
       
            placeOrder(menu[i])
        })



        foodDiv.appendChild(foodName);
        foodDiv.appendChild(foodPrice);
        foodDiv.appendChild(foodItems);
        foodDiv.appendChild(orderbuttoon);


        menuDiv.appendChild(foodDiv);
    }

}

const placeOrder = (order) => {

    alert("Order Placed : "+order.name + " Price : "+order.price + " Items : "+order.items.join(", "));
}
