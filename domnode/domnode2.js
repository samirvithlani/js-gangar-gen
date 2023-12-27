function loadImages(){

    var mainDiv = document.getElementById("main");
    var imageUrl = "../images/mountain.jpg"

    const imgTag = document.createElement("img");
    imgTag.style.width = "300px";
    imgTag.style.height = "300px";
    imgTag.src = imageUrl;

    mainDiv.appendChild(imgTag);



}