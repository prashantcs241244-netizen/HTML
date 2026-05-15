let apiKey = "9f6290d6cda9a36a63755fadee71f83d";

async function getWeather() {

  let city = document.getElementById("city").value;

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);

  let data = await response.json();

  document.getElementById("temp").innerText =
    Math.round(data.main.temp) + "°C";

  document.getElementById("cityName").innerText =
    data.name;
}