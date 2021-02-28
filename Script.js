// variables are created for the search button, input-searchbox and "centerDiv" where the attractions posts are posted.
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchButton");
const post = document.getElementById("centerDiv");
const resetAtt = document.getElementById("resetButton");
let deleteInnerDiv = document.querySelectorAll("attractionFrame")
let deleteTitle = document.querySelectorAll("h3");
let deleteParagraph = document.querySelectorAll("p");

// variables are created for the checkboxes
const checkWeather = document.getElementById("onlyWeather");
const checkAttractions = document.getElementById("onlyAttractions");
const checkAlph = document.getElementById("alphOrder");

// This is where the code starts, the eventlistener waits for the button click and then executes the code
searchBtn.addEventListener("click", () => {
  if (checkWeather.checked == true) { getWeather(); }
  if (checkAttractions.checked == true) { getAttraction(); }
  if (checkWeather.checked == true && checkAttractions.checked == true) { getWeather(); getAttraction(); }
  if (checkWeather.checked == false && checkAttractions.checked == false && checkAlph.checked == false) { getWeather(); getAttraction(); }
});
// function to get the weather from the API
async function getWeather() {
  let cityName = searchBox.value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=en&appid=34832f1e903a4e490cfc9a2d3fffea23`
  );
  if (response.ok) {
    let json = await response.json();
    Weather(json);
    City(json);
  } else {
    alert("Couldn't find the weather of that city.");
  }
}

resetAtt.addEventListener("click", () => {
  window.location.reload();
})

// Put the name of the current city on display
function City(json) {
  let city = document.getElementById("city");
  let cityName = json.name;
  city.innerHTML = cityName;
}
// Function to get the weather from the API
function Weather(json) {
  let temp = document.getElementById("temp");
  let weather = document.getElementById("cityWeather");
  let weatherDes = json.weather[0].description;
  let tempDes = json.main.temp;
  weather.innerHTML = weatherDes;
  temp.innerHTML = tempDes + " °C";
}
// Function to get the attraction from the API
async function getAttraction() {
  let cityName = searchBox.value;
  const cID = "F0XVM54UYVNCOZHAZDT4RSKENV3X5QN2DH2WALP0UDVQGYYI";
  const cSecret = "VMJ3P5SXFWKQVGF0ZRW4AUFWB25YZ4YFMRQUYT0KC0F2WCCI";
  // creates the date
  let cDate = new Date();
  let Day = "0" + cDate.getDate();
  let Month = "0" + (cDate.getMonth() + 1);
  let Year = cDate.getFullYear();
  let date = `${Year}${Month}${Day}`;

  let response = await fetch(
    `https://api.foursquare.com/v2/venues/search?near=${cityName}&client_id=${cID}&client_secret=${cSecret}&v=${date}`
  );
  if (response.ok) {
    let json = await response.json();
    console.log(json);
    createElementsAttraction(json);
  } else {
    alert("The city doesn't exist. Try another one.");
  }
}
// Gets 5 attractions from the API with a 'while' loop
function createElementsAttraction(json) {
  // While loop to get more than one attraction
  let amountPosts = 0;
  let maxAmoutPosts = 10;

  while (amountPosts < maxAmoutPosts) {
    const innerDiv = document.createElement("div");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p");

    let titleText = json.response.venues[amountPosts].name;
    let adress = json.response.venues[amountPosts].location.address;

    title.append(titleText);
    paragraph.append(adress);

    innerDiv.classList.add("attractionFrame");
    title.classList.add("h3");
    paragraph.classList.add("p");

    innerDiv.appendChild(title);
    innerDiv.appendChild(paragraph);

    post.append(innerDiv);

    amountPosts++;
  }
}
