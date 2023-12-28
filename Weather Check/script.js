let apiKey = "749f5da007defb6d50f5d43c3e26bd0a";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

let weatherImg = document.querySelector("#weatherImg")
let temp = document.querySelector("#temp")
let cityName = document.querySelector("#city")
let humidity = document.querySelector("#humidty")

let windSpeed = document.querySelector("#windSpeed")
let inputBox = document.querySelector("#inputValue")
let searchBtn = document.querySelector("#searchBtn")
let WeatherBox = document.querySelector(".all-weather")
let errorMessage = document.querySelector("#errMsg")


async function checkWeather(city){
    let res = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(res.status == 404){
      errorMessage.style.display = 'block'
      WeatherBox.style.display = 'none'
    }
    else{
      errorMessage.style.display = 'none'
      let data = await res.json()
 
      addData(data)
    }
    
   
}
searchBtn.addEventListener("click",()=>{
 
    inputvalue = inputBox.value
    inputval = inputvalue;
   
    if(inputval == ""){
        errorMessage.style.display = 'block'
    }
    else{
      checkWeather(inputval)

    }
   

})



function addData(data){
  temp.innerHTML=Math.round(data.main.temp) + "°c";
  cityName.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  windSpeed.innerHTML = data.wind.speed + "Km/h"


  if(data.weather[0].main === 'Haze'){
    weatherImg.src = "images/mist.png"
  }
  else if(data.weather[0].main === 'Clear'){
    weatherImg.src = "images/clear.png"

  }
  else if(data.weather[0].main === 'Drizzle'){
    weatherImg.src = "images/drizzle.png"

  }
  else if(data.weather[0].main === 'Rain'){
    weatherImg.src = "images/rain.png"

  }
  else if(data.weather[0].main === 'Snow'){
    weatherImg.src = "images/snow.png"

  }
  else if(data.weather[0].main === 'Clouds'){
    weatherImg.src = "images/clouds.png"

  }
  WeatherBox.style.display = 'block'
}

