//const searchBtn = document.createElementById("searchButton");
const weatherOutput = document.getElementById("weatherText");

const url = new URL('https://api.openweathermap.org/data/2.5/weather');

url.searchParams.append("q", "Eskilstuna");
url.searchParams.append("appid", "34832f1e903a4e490cfc9a2d3fffea23");
url.searchParams.append("mode", "json");
url.searchParams.append("units", "metric");
url.searchParams.append("lang", "se");

weatherOutput.innerText = url;
