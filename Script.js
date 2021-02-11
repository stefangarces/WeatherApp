const SearchBtn = document.getElementById("searchButton");

SearchBtn.onclick = async function() {
    let apiKey = "34832f1e903a4e490cfc9a2d3fffea23";
    let cityName = "Göteborg";
    let response = await fetch ('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}')
    let json = await response.json()
    console.log(json)
    setWeather(json)

    console.log(response)
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