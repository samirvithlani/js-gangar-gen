async function postApiDemo1(user){

    const url = "https://node5.onrender.com/user/user"
    // const user = {
    //     name:"mithil",
    //     age: 20,
    //     email:"mithil@gmail.com",
    //     isActive: true
    // }
    console.log(JSON.stringify(user))

    const savedUser = await fetch(url,{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await savedUser.json()
    console.log(data)

}


const handleSubmit = (e) => {
    e.preventDefault() // prevent default behaviour of form
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const email = document.getElementById("email").value
    const isActive = document.getElementById("status").value

    var user = {
        name:name,
        age:age,
        email:email,
        isActive:isActive =="true" ? true : false
    }
    
    console.log(user)
    console.log("submit")
    postApiDemo1(user)
}