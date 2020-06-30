var now = moment();
var currentDay = now.format("MM/DD/YYYY");
console.log(currentDay);


var dashboardEl = document.createElement("h2");
var secondDashEl = document.createElement("p");
var thirdDashEl = document.createElement("p");
var forthDashEl = document.createElement("p");
var fifthDashEl = document.createElement("p");
var displayJS = document.querySelector("#weather");
var buttonClick = document.querySelector("#searchBtn");
var city = [];
var austin = document.querySelector("#austin");
city.push(austin);
var chicago = document.querySelector("#chicago");
city.push(chicago);
var newYork = document.querySelector("#new-york");
city.push(newYork);
var orlando = document.querySelector("#orlando");
city.push(orlando);
var sanFranciso = document.querySelector("#san-francisco");
city.push(sanFranciso);
var seattle = document.querySelector("#seattle");
city.push(seattle);
var denver = document.querySelector("#denver");
city.push(denver);
var atlanta = document.querySelector("#atlanta");
city.push(atlanta);
var uvI = 0;


var cityClick = function(){
    for(var i = 0; i < 8; i++){

    };
};


var getWeather = function() {
    buttonClick.onclick = function(){
        var inputVar = document.querySelector("#text").value;
        var weather = "https://api.openweathermap.org/data/2.5/weather?q= " + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        console.log(inputVar);
        fetchWeather(weather, inputVar);
    };
};


var fetchWeather = function(weather, inputVar){
    fetch(weather).then(function(response){
        response.json().then(function(data) {
            setWeather(data, inputVar);
        });
    });
    console.log(city);
};


var setWeather = function(data, inputVar){
    console.log(data);
    console.log(data.name);
    console.log(data.weather[0].description);
    console.log(data.main.temp);

    var temperature = Math.round((data.main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var humidity = data.main.humidity + "%";
    var windSpeed = data.wind.speed + " mph";
    var maxTemp = (data.main.temp_max - 273.15) * 9/5 + 32;
    var minTemp = (data.main.temp_min - 273.15) * 9/5 + 32;
    var lat = data.coord.lat;
    var long = data.coord.lon;
    var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=4ec8ea150c1978f3a68ff2aed20de093&lat=" + lat + "&lon=" + long;
    console.log(temperature);
    console.log(humidity);
    console.log(windSpeed);

    fetchUVIndex(uvIndex, temperature, maxTemp, minTemp, humidity, windSpeed, inputVar);
};


var fetchUVIndex = function(inURL, temperature, maxTemp, minTemp, humidity, windspeed, inputVar){
    fetch(inURL).then(function(response){
        response.json().then(function(data) {
            console.log(data);
            console.log(data.value);
            uvI = data.value;
            displayWeather(temperature, maxTemp, minTemp, humidity, windspeed, inputVar);
        });
    });
};


var displayWeather = function(temperature, maxTemp, minTemp, humidity, windspeed, inputVar) {
    dashboardEl.innerHTML = inputVar + " (" + currentDay + ")";
    weather.appendChild(dashboardEl);

    secondDashEl.innerHTML = "Temperature: " + temperature;
    weather.appendChild(secondDashEl);

    thirdDashEl.innerHTML = "Humidity: " + humidity;
    weather.appendChild(thirdDashEl);

    forthDashEl.innerHTML = "Wind Speed: " + windspeed;
    weather.appendChild(forthDashEl);

    if(uvI >= 11){
        fifthDashEl.style.backgroundColor = "red";
    }else{
        if(uvI > 5){
            fifthDashEl.style.backgroundColor = "yellow";
        }else{
            fifthDashEl.style.backgroundColor = "green";
        }
    }
    fifthDashEl.innerHTML = "UV index: " + uvI;
    weather.appendChild(fifthDashEl);
};


getWeather();