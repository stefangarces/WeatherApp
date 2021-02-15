const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchButton");
let input = searchBox.value;

searchBtn.addEventListener('click', () => {
    let checkWeather = document.getElementById('onlyWeather');
    let checkAttraction = document.getElementById('onlyAttractions');
    getWeather();
})

async function getWeather() {
    // let cityName = ;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=gothenburg&units=metric&appid=34832f1e903a4e490cfc9a2d3fffea23`);
    let json = await response.json();
    console.log(response.status); // 200
    console.log(response.statusText); // OK
    //Weather(json);
    //City(json);
    console.log(json);
}

function City(json) {
    let city = document.getElementById("city");
    city.innerHTML = json.name;
}

function Weather(json) {
    let temp = document.getElementById('temp');
    let weather = document.getElementById('cityWeather');
    let weathercon = json.weather[0].icon;
    document.getElementById('weathercon').src = `http://openweathermap.org/img/w/${weathercon}.png`;

    temp.innerHTML = json.main.temp + " C°";
    weather.innerHTML = json.weather[0].description;

    let city = json.name;
    let weatherTitle = document.getElementById("weatherText");
    weatherTitle.innerHTML = `Weather in ${city}`;
} 

function getAttraction() {
    let cityInfo = document.getElementById("cityInfo");
    cityInfo.innerHTML = json.name;
}