var isZoomed = false;
const zoom1 =()=>{

        var image = document.getElementById('image');
        if(isZoomed==true){
            image.style.width = "200px"; 
            image.style.height = "200px";
        }
        else{
            image.style.width = "400px"; 
            image.style.height = "400px";
            isZoomed = true;
        }

}