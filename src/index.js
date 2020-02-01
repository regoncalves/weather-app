let now = new Date();
let time = document.querySelector("#time");
let hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
time.innerHTML = `Updated ${hour}:${minute}h`;

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
  let temperatureMax = Math.round(response.data.main.temp_max);
  let tempnowmaxElement = document.querySelector("#tempnowmaxima");
  tempnowmaxElement.innerHTML = `Max ${temperatureMax}ºC`;
  let temperatureMin = Math.round(response.data.main.temp_min);
  let tempnowminElement = document.querySelector("#tempnowminima");
  tempnowminElement.innerHTML = `Min ${temperatureMin}ºC`;
  document.querySelector("#city").innerHTML = response.data.name;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute(
    "alt",
    response.data.weather[0].description
  );
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
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
