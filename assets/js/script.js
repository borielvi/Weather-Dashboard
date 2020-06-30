
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


var cityClick = function(){
    for(var i = 0; i < 8; i++){

    }
}


var displayWeather = function(data, varInput){
    console.log(data);
    console.log(varInput);
};


var fetchWeather = function(weather, inputVar){
    fetch(weather).then(function(response){
        response.json().then(function(data) {
            displayWeather(data, inputVar);
        });
    });
    console.log(city);
};


var getWeather = function() {
    buttonClick.onclick = function(){
        var inputVar = document.querySelector("#text").value;
        var weather = "https://api.openweathermap.org/data/2.5/weather?q= " + inputVar + "&appid=4ec8ea150c1978f3a68ff2aed20de093";

        console.log(inputVar)
        fetchWeather(weather, inputVar);
    };
};


getWeather();