// var time = 12;
// var box = document.getElementById('box');

// setTimeout(() => {
//     if(time>=12)
// {
//     box.className = "darkBox";
        
// }    
// }, 3000);


const themeButton = document.getElementById('theme-button')

themeButton.addEventListener("click",()=>{

    document.getElementById("box").className = "darkBox";

})

themeButton.addEventListener("dblclick",()=>{

    document.getElementById("box").className = "colorBox";
})

themeButton.addEventListener("mouseover",()=>{

    document.getElementById("theme-button").innerHTML = "Mouse Over";
})