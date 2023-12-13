const orange = document.getElementById("orange")
const white = document.getElementById("white")
const green = document.getElementById("green")


setTimeout(() => {
    orange.style.height = "100px"
    orange.style.width = "100%"
    orange.style.backgroundColor = "orange"
    orange.style.color = "white"

}, 2000);

setTimeout(() => {

    white.style.height = "100px"
    white.style.width = "100%"
    white.style.backgroundColor = "white"
    white.style.color = "green"
    white.style.border = "1px solid black"

},4000)

setTimeout(() => {

    green.style.height = "100px"
    green.style.width = "100%"
    green.style.backgroundColor = "green"
    green.style.color = "white"
},6000)