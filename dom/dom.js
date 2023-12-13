console.log("dom")

// identify the dom elements
//id
//name
//class
//tagname

var x = document.getElementById("txt")
console.log(x)
x.innerHTML = "hi"
x.style.color = "red"

//document.getElementById("txt").innerHTML = "hello"

var mydiv = document.getElementById("mydiv")

setTimeout(()=>{
    mydiv.style.color = "green"
    mydiv.style.backgroundColor = "yellow"
},2000)


var link = document.getElementById("link")

setTimeout(()=>{

    link.href = "https://www.facebook.com",
    link.innerHTML = "facebook"

},2500)

setInterval(()=>{
    link.href = "https://www.google.com",
    link.innerHTML = "google"
},4500)



