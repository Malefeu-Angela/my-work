let today = new Date();
let li = document.querySelector("#day");

let daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekDay = daylist[today.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[today.getMonth()];

let hours = today.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let date = `${weekDay} ${today.getDate()} ${month}`;
let time = `${hours}:${minutes}`;
let day = `${date} ${time}`;

li.innerHTML = `${day}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "f81614abe2395d5dfecd45b9298041de";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = temp;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.temp}`;
  let wind = document.querySelector("#wind-speed");
  wind.innerHTML = `Wind :${response.data.main.temp} km/h`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function searchCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "203fa770242fcd2b9555d832a88ea567";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(showTemp);
}

navigator.geolocation.getCurrentPosition(showPosition);

let currentElement = document.querySelector("#current-location");
currentElement.addEventListener("click", searchCurrentLocation);
