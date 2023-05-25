function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayIndex[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}

let currentDate = document.querySelector("h2#currentDate");
let date = new Date();
currentDate.innerHTML = formatDate(date);

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("h1#city");
  let cityInput = document.querySelector("#city-input");
  city.innerHTML = cityInput.value;
  let apiKey = "4c9b53e4f8f5eb00df5915bdca340605"
  let unit = "metric"
  let weatherUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${unit}&appid=${apiKey}`)

axios.get(`${weatherUrl}`).then(showTemp)
}

function showTemp(temperature) {
  let currentTemp = Math.round(temperature.data.main.temp)
  let tempDisplay = document.querySelector("#temp-display")
  tempDisplay.innerHTML = `${currentTemp}`
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);





