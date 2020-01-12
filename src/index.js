let now = new Date();
let time = document.querySelector("#time");
let hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
time.innerHTML = `🕤 ${hour}:${minute}h`;

let days = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let date = now.getDate();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let today = document.querySelector("#today");
today.innerHTML = `${day}, ${date} ${month}`;

function replaceTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#tempnow");
  temperatureElement.innerHTML = `${temperature}ºC`;
  document.querySelector("#city").innerHTML = response.data.name;
}

function searchCity(city) {
  let apiKey = "f89763fe48cd1b28ad39f0fed34a3093";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(replaceTemp);
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#submit").value;
  searchCity(city);
}
let element = document.querySelector("button");
element.addEventListener("click", showCity);

searchCity("Lisbon");
