/*
 * Gets the weather for a city
 */
var getWeather = function(city, country, callback) {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country, callback); // Reading data - a big old side effect
};


/*
 * Updates the weather display
 */
var updateDisplay = function(display_div) {
    getWeather("Belfast", "UK", function(weather) {
        display_div.innerHTML = weather; // Side effect
    });
};
