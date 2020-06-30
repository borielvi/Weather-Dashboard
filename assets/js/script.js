
var buttonClick = document.querySelector("#searchBtn");

var getWeather = function() {
    buttonClick.onclick = function(){
        var inputVar = document.querySelector("#text").value;
        var weather = fetch("https://api.openweathermap.org/data/2.5/weather?q= " + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093");
        console.log(weather);
        console.log(inputVar);
        console.log(buttonClick);
    }
}

getWeather();