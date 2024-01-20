async function getUSerData(){

    const res =  await fetch("https://node5.onrender.com/user/user",{
        method:"GET"
    })

    const data = await res.json()
    console.log(data)

}


//getUSerData()


const getWetherData = async ()=>{

    const params = new URLSearchParams({
        q: "London",
        appid: "fe4feefa8543e06d4f3c66d92c61b69c",
      });

      const url = "https://api.openweathermap.org/data/2.5/weather"+"?"+params.toString();

      const res = await fetch(url,{
        method:"GET"
      })
      const data = await res.json()
      console.log(data)
      console.log(data.name)
      console.log(data.main)
      console.log(data.main.temp_min - 273.15)


      const cityName = document.getElementById("cityName")
      cityName.innerHTML = data.name

      const minTemp = document.getElementById("minTemp")
      minTemp.innerHTML = (data.main.temp_min - 273.15)



}
getWetherData()