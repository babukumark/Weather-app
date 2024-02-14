"use strict"
// weather - API

// let apikey = "1ac41d822f470089588e62f6ac6cbdce";

// let cityName = prompt("Enter the city name : ");
// let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

// if(cityName)
// {
//     checkWeather(cityName)
// }
// function checkWeather(city)
// {
//     fetch(apiurl+`&appid=${apikey}&q=${city}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
// }




function getWeather(){
    var getcity = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getcity}&appid=${"24ba91ad9c1b80f5b6eeb94242117ecb"}&units=metric`)

    .then(ans => ans.json())
    .then(data => {
        console.log(data);
        document.getElementById("cityName").innerText=data.name;
        console.log(data.name);
        document.getElementById("temperature").innerText=data.main.temp+"°C";
        console.log(data.main.temp);
        document.getElementById("humidity").innerText="Humidity: "+data.main.humidity+"%";
        console.log(data.main.humidity);
        document.getElementById("windSpeed").innerText="Wind Speed: "+data.wind.speed+"m/s";
        console.log(data.wind.speed);
        backgroundImage(data.main.temp)
      })

  
}
let container = document.querySelector(".container")
function backgroundImage(temp){
    if (temp > 26) {
        container.style.backgroundImage = "url('Bg-1.webp')";
        container.style.color = "#000"
      } 
      else if (temp >= 20 && temp <= 25) {
        container.style.backgroundImage = "url('Bg-2.webp')";
        
      }
       else {
        container.style.backgroundImage = "url('Bg-3.webp')";
        container.style.color = "#fff"
      }
}



