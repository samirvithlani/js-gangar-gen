function myFun(){

    console.log("myFun() is called");

}

const loadData = () => {

    var user ={
        name:"ram",
        age:20,
        contact:1234567890
    }

    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const contact = document.getElementById("contact")

    // name.innerHTML = "Ram"
    // age.innerHTML = "20"
    // contact.innerHTML = "1234567890"
    name.innerHTML = user.name
    age.innerHTML = user.age
    contact.innerHTML = user.contact

}

