document.getElementById("btn").addEventListener("click",()=>{
    alert("Hello World");
})

// document.getElementsByClassName("box")[0].addEventListener("mouseover",()=>{
    
//     document.getElementsByClassName("box")[0].className = "box2";
//     document.getElementById("text").innerHTML = "Mouse Over";
// })


var box = document.getElementsByClassName("box")
for(let i=0;i<box.length;i++){

        box[i].addEventListener("mouseover",()=>{
            
            document.getElementById("text").innerHTML = "Mouse Over";
        })


}
