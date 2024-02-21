

async function fetchWeather(){

    const params = new URLSearchParams({
        q: "Ahmedabad",
        appid: "fe4feefa8543e06d4f3c66d92c61b69c",
      });

    const url = "https://api.openweathermap.org/data/2.5/weather"+"?"+params.toString();
  
    const res = await fetch(url, {
      method: "GET",
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data.main.temp_min-273.15)
  
}

fetchWeather();