function showRandomImage(){

        var imageArray =[
            "../../images/lion.jpg",
            "../../images/river.jpg",
            "../../images/wood.jpg",
            "../../images/mountain.jpg",
            "../../images/rose.jpg",
        ]

    //random index..
    var randomIndex = Math.floor(Math.random() * imageArray.length);
    console.log(randomIndex);
    var randomImage = imageArray[randomIndex];

    var imageElement = document.getElementById("randomImage");
    imageElement.style.backgroundImage = "url('" + randomImage + "')";
    imageElement.style.backgroundSize = "cover";


}