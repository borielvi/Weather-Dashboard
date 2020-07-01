var now = moment();
var currentDay = now.format("MM/DD/YYYY");
console.log(currentDay);


var chosenIcon = "";
var icons = [
    '<i class="fas fa-sun"></i>',
    '<i class="fas fa-cloud-sun"></i>',
    '<i class="fas fa-cloud-sun-rain"></i>',
    '<i class="fas fa-snowflake"></i>'
];
var iconName = [
    "Clear",
    "Clouds",
    "Rain",
    "Snow"
];


var dashboardEl = document.createElement("h2");
var secondDashEl = document.createElement("p");
var thirdDashEl = document.createElement("p");
var forthDashEl = document.createElement("p");
var fifthDashEl = document.createElement("p");


var displayCD = document.querySelector("#weatherCD");
displayCD.style.display = "none";
var displayCDsec = document.querySelector("#weatherCDsec");
displayCDsec.style.display = "none";
var displayCDthi = document.querySelector("#weatherCDthi");
displayCDthi.style.display = "none";
var displayCDfor = document.querySelector("#weatherCDfor");
displayCDfor.style.display = "none";
var displayCDfif = document.querySelector("#weatherCDfif");
displayCDfif.style.display = "none";


var displayJS = document.querySelector("#weather");
var buttonClick = document.querySelector("#searchBtn");


var city = [
    austin = [],
    chicago = [],
    newYork = [],
    orlando = [],
    sanFranciso = [],
    seattle = [],
    denver = [],
    atlanta = []
];

var austin = document.querySelector("#austin");
var austinText = "austin";
city[0].push(austin, austinText);

var chicago = document.querySelector("#chicago");
var chicagoText = "chicago";
city[1].push(chicago, chicagoText);

var newYork = document.querySelector("#new-york");
var newYorkText = "new york";
city[2].push(newYork, newYorkText);

var orlando = document.querySelector("#orlando");
var orlandoText = "orlando";
city[3].push(orlando, orlandoText);

var sanFranciso = document.querySelector("#san-francisco");
var sanFrancisoText = "san francisco";
city[4].push(sanFranciso, sanFrancisoText);

var seattle = document.querySelector("#seattle");
var seattleText = "seattle";
city[5].push(seattle, seattleText);

var denver = document.querySelector("#denver");
var denverText = "denver";
city[6].push(denver, denverText);

var atlanta = document.querySelector("#atlanta");
var atlantaText = "atlanta";
city[7].push(atlanta, atlantaText);


console.log(city);


var uvI = 0;
var fiveDaysVar = [
    firstDay = [],
    secondDay = [],
    thirdDay = [],
    forthDay = [],
    fifthDay = []
];


var cityClick = function(){
    city[0][0].onclick = function(){
        var inputVar = city[0][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[1][0].onclick = function(){
        var inputVar = city[1][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[2][0].onclick = function(){
        var inputVar = city[2][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[3][0].onclick = function(){
        var inputVar = city[3][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[4][0].onclick = function(){
        var inputVar = city[4][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[5][0].onclick = function(){
        var inputVar = city[5][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[6][0].onclick = function(){
        var inputVar = city[6][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }

    city[7][0].onclick = function(){
        var inputVar = city[7][1];
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        fetchWeather(weather, fiveDay);
    }
};


var getWeather = function() {
    cityClick();
    buttonClick.onclick = function(){
        var inputVar = document.querySelector("#text").value;
        var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";
        var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        console.log(inputVar);
        fetchWeather(weather, fiveDay);
    };
};


var fetchWeather = function(weather, fiveDay){
    fiveDaysVar = [
        firstDay = [],
        secondDay = [],
        thirdDay = [],
        forthDay = [],
        fifthDay = []
    ];
    currentDay = now.format("MM/DD/YYYY");

    fetch(weather).then(function(response){
        response.json().then(function(data) {
            setWeather(data, fiveDay);
        });
    });
    console.log(city);
};


var setWeather = function(data, fiveDay){
    console.log(data);
    console.log(data.name);
    console.log(data.weather[0].description);
    console.log(data.main.temp);

    var temperature = Math.round((data.main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var humidity = data.main.humidity + "%";
    var windSpeed = data.wind.speed + " mph";
    var lat = data.coord.lat;
    var long = data.coord.lon;
    var name = data.name;
    var uvIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=4ec8ea150c1978f3a68ff2aed20de093&lat=" + lat + "&lon=" + long;

    for(var i = 0; i < 4; i++){
        if(iconName[i] == data.weather[0].main){
            chosenIcon = icons[i];
        }
    }

    fetchUVIndex(uvIndex, temperature, humidity, windSpeed, name, fiveDay);
};


var fetchUVIndex = function(inURL, temperature, humidity, windspeed, name, fiveDay){
    fetch(inURL).then(function(response){
        response.json().then(function(data) {
            console.log(data);
            console.log(data.value);
            uvI = data.value;
            displayWeather(temperature, humidity, windspeed, name, fiveDay);
        });
    });
};


var displayWeather = function(temperature, humidity, windspeed, name, fiveDay) {
    dashboardEl.innerHTML = name + " (" + currentDay + ") " + chosenIcon;
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

    fetchFiveDay(fiveDay);
};


var fetchFiveDay = function(fiveDay){
    fetch(fiveDay).then(function(response){
        response.json().then(function(data) {
            console.log(data);
            calculateFiveDay(data);
        });
    });
};


var calculateFiveDay = function(data) {
    var firstDayTemp = "Temperature: " + Math.round((data.list[4].main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var firstDayHumidity = "Humidity: " + data.list[4].main.humidity + "%";
    fiveDaysVar[0].push(firstDayTemp, firstDayHumidity);
    for(var i = 0; i < 4; i++){
        if(iconName[i] == data.list[4].weather[0].main){
            var firstDayIcon = icons[i];
            fiveDaysVar[0].push(firstDayIcon);
        }
    }
    displayCDfif.style.display = "block";
    currentDay = moment().add(1, "day").format("MM/DD/YYYY");
    displayCDfif.innerHTML = currentDay + "\n\n\n\n" + fiveDaysVar[0][2] + "\n\n\n\n" + fiveDaysVar[0][0] + "\n\n\n\n" + fiveDaysVar[0][1];


    var secondDayTemp = "Temperature: " + Math.round((data.list[12].main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var secondDayHumidity = "Humidity: " + data.list[12].main.humidity + "%";
    fiveDaysVar[1].push(secondDayTemp, secondDayHumidity);
    for(var i = 0; i < 4; i++){
        if(iconName[i] == data.list[12].weather[0].main){
            var secondDayIcon = icons[i];
            fiveDaysVar[1].push(secondDayIcon);
        }
    }
    displayCDfor.style.display = "block";
    currentDay = moment().add(2, "day").format("MM/DD/YYYY");
    displayCDfor.innerHTML = currentDay + "\n\n\n\n" + fiveDaysVar[1][2] + "\n\n\n\n" + fiveDaysVar[1][0] + "\n\n\n\n" + fiveDaysVar[1][1];


    var thirdDayTemp = "Temperature: " + Math.round((data.list[20].main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var thirdDayHumidity = "Humidity: " + data.list[20].main.humidity + "%";
    fiveDaysVar[2].push(thirdDayTemp, thirdDayHumidity);
    for(var i = 0; i < 4; i++){
        if(iconName[i] == data.list[20].weather[0].main){
            var thirdDayIcon = icons[i];
            fiveDaysVar[2].push(thirdDayIcon);
        }
    }
    displayCDthi.style.display = "block";
    currentDay = moment().add(3, "day").format("MM/DD/YYYY");
    displayCDthi.innerHTML = currentDay + "\n\n\n\n" + fiveDaysVar[2][2] + "\n\n\n\n" + fiveDaysVar[2][0] + "\n\n\n\n" + fiveDaysVar[2][1];


    var forthDayTemp = "Temperature: " + Math.round((data.list[28].main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var forthDayHumidity = "Humidity: " + data.list[28].main.humidity + "%";
    fiveDaysVar[3].push(forthDayTemp, forthDayHumidity);
    for(var i = 0; i < 4; i++){
        if(iconName[i] == data.list[28].weather[0].main){
            var forthDayIcon = icons[i];
            fiveDaysVar[3].push(forthDayIcon);
        }
    }
    displayCDsec.style.display = "block";
    currentDay = moment().add(4, "day").format("MM/DD/YYYY");
    displayCDsec.innerHTML = currentDay + "\n\n\n\n" + fiveDaysVar[3][2] + "\n\n\n\n" + fiveDaysVar[3][0] + "\n\n\n\n" + fiveDaysVar[3][1];


    var fifthDayTemp = "Temperature: " + Math.round((data.list[36].main.temp - 273.15) * 9/5 + 32) + "\u00B0";
    var fifthDayHumidity = "Humidity: " + data.list[36].main.humidity + "%";
    fiveDaysVar[4].push(fifthDayTemp, fifthDayHumidity);
    for(var i = 0; i < 4; i++){
        if(iconName[i] == data.list[36].weather[0].main){
            var fifthDayIcon = icons[i];
            fiveDaysVar[4].push(fifthDayIcon);
        }
    }
    displayCD.style.display = "block";
    currentDay = moment().add(5, "day").format("MM/DD/YYYY");
    displayCD.innerHTML = currentDay + "\n\n\n\n" + fiveDaysVar[4][2] + "\n\n\n\n" + fiveDaysVar[4][0] + "\n\n\n\n" + fiveDaysVar[4][1];
    console.log(fiveDaysVar);
};


getWeather();