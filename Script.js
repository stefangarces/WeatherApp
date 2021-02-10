let searchBtn = document.getElementsByClassName("searchButton");

let output = document.querySelector("#weatherText");

function GetWeatherInfoUrl(cityName) {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");

    url.searchParams.append("q", cityName);
    url.searchParams.append("appid", "34832f1e903a4e490cfc9a2d3fffea23");
    url.searchParams.append("mode", "json");
    url.searchParams.append("units", "metric");
    url.searchParams.append("lang", "se");

    output.innerTEXT = url;

    return url;
}




/*
const searchBtn = document.getElementsByClassName("searchButton");

function search(){

    let searchBox = document.getElementsByClassName('searchBox');
    let userSearch = searchBox.value;
    
    console.log(userSearch);
    
    let onlyWeather = document.getElementById('onlyWeather');
    let onlyAttraction = document.getElementById('onlyAttraction');

    let weather = document.querySelector('#weather');
    let attraction = document.querySelector('#attraction');

    if (onlyWeather.checked == true) {
        weather.style.display = 'flex';
    } else {
        weather.style.display = 'none';
    }

    if (onlyAttraction.checked == true) {
        attraction.style.display = 'grid';
    } else {
        attraction.style.display = 'none';
    }

}
*/