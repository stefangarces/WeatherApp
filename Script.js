const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchButton");

searchBtn.addEventListener('click', () => {
    let checkWeather = document.getElementById('onlyWeather');
    let checkAttraction = document.getElementById('onlyAttractions');
    getWeather();
})

async function getWeather() {
    let cityName = searchBox.value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=34832f1e903a4e490cfc9a2d3fffea23`);
    let json = await response.json();
    Weather(json);
    City(json);
}

function City(json) {
    let city = document.getElementById("city");
    let cityName = json.name;
    city.innerHTML = cityName;
}

function Weather(json) {
    let temp = document.getElementById('temp');
    let weather = document.getElementById("cityWeather");
    let weatherDes = json.weather[0].description;
    let tempDes = json.main.temp;
    weather.innerHTML = weatherDes;
    temp.innerHTML = tempDes + " °C";
    console.log(json);

} 

/*
function getAttraction() {
    let cityInfo = document.getElementById("cityInfo");
    cityInfo.innerHTML = json.name;
} */