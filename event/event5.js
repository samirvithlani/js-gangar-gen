const submitHandler = (event) => {

    event.preventDefault()

    
    var name  = document.getElementById("name").value
    var age = document.getElementById("age").value

    if(name.length <3){
        var nameError = document.getElementById("nameError")
        //alert("Name must be at least 3 characters")
        nameError.innerHTML = "Name must be at least 3 characters"
        document.getElementById("name").style.borderColor = "red"
        
        
    }

    console.log(name) 
    console.log(age) 

    
}

const ageValidator = (event) => {


    var age = document.getElementById("age").value
    var ageError = document.getElementById("ageError")
    if(age<18){
        console.log("Age must be greater than 18")
        ageError.innerHTML = "Age must be greater than 18"

    }
    else{
        console.log("Age is valid")
        ageError.innerHTML = ""
    }



}