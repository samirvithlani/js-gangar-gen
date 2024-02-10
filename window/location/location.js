const getCurrentLocation = () => {


    window.navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);
        console.log(position.coords)
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    })





}
getCurrentLocation();