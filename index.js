const apiKey = "0f260e939729f0ad8232be1bc4ccce18";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchIcon = document.querySelector(".search-icon");
let locationBar = document.querySelector("#location");
let weatherImage = document.querySelector(".weather-sign");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humPercentage = document.querySelector(".percentage");
let windSpeed = document.querySelector(".speed");

searchIcon.addEventListener("click", getWeather);

async function getWeather() {
  const response = await fetch(apiUrl + locationBar.value + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  city.textContent = data.name;
  temp.textContent = Math.round(data.main.temp) + "°C";
  humPercentage.textContent = data.main.humidity + "%";
  windSpeed.textContent = data.wind.speed + " km/h";
  let weatherCondt = data.weather[0].main;
  return weatherCondt;
}

async function displayData(weather) {
  switch (weather) {
    case "Clouds":
      weatherImage.src = "assets/images&design/clouds.png";
      break;
    case "Clear":
      weatherImage.src = "assets/images&design/clear.png";
      break;
    case "Drizzle":
      weatherImage.src = "assets/images&design/drizzle.png";
      break;
    case "Mist":
      weatherImage.src = "assets/images&design/mist.png";
      break;
    case "Rain":
      weatherImage.src = "assets/images&design/rain.png";
      break;
    case "Snow":
      weatherImage.src = "assets/images&design/snow.png";
      break;
  }
}

function displayError() {
  temp.textContent = "23°C";
  city.textContent = "Berlin";
  humPercentage.textContent = "51%";
  windSpeed.textContent = "5.81 km/h";
}

getWeather().then(displayData).catch(displayError);
