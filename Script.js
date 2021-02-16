const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchButton");

searchBtn.addEventListener('click', () => {
    //getWeather();
    getAttraction();
})

async function getWeather() {
    let cityName = searchBox.value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=34832f1e903a4e490cfc9a2d3fffea23`);
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
    let temp = document.getElementById("temp");
    let weather = document.getElementById("cityWeather");
    let weatherDes = json.weather[0].description;
    let tempDes = json.main.temp;
    weather.innerHTML = weatherDes;
    temp.innerHTML = tempDes + " °C";

} 


async function getAttraction() {
    let cityName = searchBox.value;
    const cID = "F0XVM54UYVNCOZHAZDT4RSKENV3X5QN2DH2WALP0UDVQGYYI";
    const cSecret = "VMJ3P5SXFWKQVGF0ZRW4AUFWB25YZ4YFMRQUYT0KC0F2WCCI";

    let cDate = new Date();
    let Day = "0" + (cDate.getDate());
    let Month = "0" + (cDate.getMonth() + 1);
    let Year = cDate.getFullYear();
    let date = `${Year}${Month}${Day}`;
    
    let response = await fetch(`https://api.foursquare.com/v2/venues/search?near=${cityName}&client_id=${cID}&client_secret=${cSecret}&v=${date}`);
        let json = await response.json();
        console.log(json);
    
    /*
    let cityInfo = document.getElementById("cityInfo");
    cityInfo.innerHTML = json.name; */
}

