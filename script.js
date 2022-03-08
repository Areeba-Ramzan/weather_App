var mainDiv = document.getElementsByClassName("mainDiv")[0];

mainDiv.style.backgroundImage = "url(./img/bg.jpg)";

var searchBox = document.getElementsByClassName("searchBox")[0];

function fetchDataFromAPI() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=43746d95a500fe466a4173f77b84f71c&units=metric`
  )
    .then((res) => res.json())
    .then((data) => showDataFromAPI(data));
}

function showDataFromAPI(data) {
  var inputContainer = document.getElementsByClassName("inputContainer")[0];

  var date = new Date();
  var today_date = date.getDate();

  var weekArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var weekDay = weekArray[date.getDay()];

  var monthArray = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var monthName = monthArray[date.getMonth()];

  var year = date.getFullYear();

  var weatherInfoContanier = document.getElementsByClassName(
    "weatherInfoContanier"
  )[0];
  var innerCode = "";

  innerCode += `<div class='createDiv'>

            <h1 class='nameHeading'>${data.name}, ${data.sys.country}</h1>

            <h2 class='timeHeading'>${date.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}</h2>

            <h3 class='dateHeading'>${
              today_date + " " + monthName + " " + `[${weekDay}]` + " " + year
            }</h3>

            <h4 class='tempHeading'>${Math.floor(data.main.temp)}\u00B0C</h4>

            <h5 class='minMaxHeading'>${Math.floor(
              data.main.temp_min
            )}\u00B0C (min) / ${Math.floor(
    data.main.temp_max
  )}\u00B0C (max)</h5>

            <h6 class='weatherConditionHeading'>${data.weather[0].main}</h6>

            </div>`;

  inputContainer.style.height = "400px";
  weatherInfoContanier.style.height = "17.5em";

  weatherInfoContanier.innerHTML = innerCode;

  if (data.weather[0].main == "Clear")
    mainDiv.style.backgroundImage = "url(./img/clearWeather.jpg)";
  else if (data.weather[0].main == "Haze")
    mainDiv.style.backgroundImage = "url(./img/hazeWeather.jpg)";
  else if (data.weather[0].main == "Clouds")
    mainDiv.style.backgroundImage = "url(./img/cloudyWeather.jpg)";
  else if (data.weather[0].main == "Rain")
    mainDiv.style.backgroundImage = "url(./img/rainWeather.jpg)";
  else if (data.weather[0].main == "Dust")
    mainDiv.style.backgroundImage = "url(./img/dustWeather.jpg)";
  else if (data.weather[0].main == "Smoke")
    mainDiv.style.backgroundImage = "url(./img/smokeWallpaper.jpg)";
  else mainDiv.style.backgroundImage = "url(./img/bg.jpg)";

  searchBox.value = "";
}
