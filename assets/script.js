// Input bar with search button that allows user to search for city
// User city input then stored to empty variable
// Must store and grab user input to/from localstorage

// Going to need to create three AJAX calls
// One will show the city name, date, current temp(F), current humidity, current wind speed
// One will to get UV index
// The other will display the 5-day forcast for the user's searched city and display, date, weather image, temp(f), and the humdity

// Will moment.js be needed for current date??? or is it already in api?

$(document).ready(function () {


    // Open Weather API Key
    var owApiKey = "fcb202793a3b50951b0129bcb32cb07d";

    // var citySearch = $("#city-search").val();

    var currentURL = `http://api.openweathermap.org/data/2.5/weather?q=boston,US&appid=${owApiKey}&units=imperial`;

    var currentDate = moment().format("L");

    $.get(currentURL).then(function (response) {
        console.log(currentURL);
        console.log(response);

        // Create current city and date element
        var currentCity = response.name;
        var currentCityEl = $("<span>").attr("style", "font-size: 30px;").text(`${currentCity} (${currentDate})`);
        // Create current weather icon element 
        var weatherIcon = response.weather[0].icon;
        var currentIconEl = $("<img>").attr("src", `https://openweathermap.org/img/wn/${weatherIcon}.png`);
        // Create current temperature element
        var currentTemp = Math.floor(response.main.temp);
        var currentTempEl = $("<p>").text(`Temperature: ${currentTemp}F°`);
        // Create current humidity element
        var currentHumidity = response.main.humidity;
        var currentHumidityEl = $("<p>").text(`Humidity: ${currentHumidity}F°`);
        // Create current Windspeed display
        var currentWindspeed = Math.floor(response.wind.speed);
        var currentWindspeedEl = $("<p>").text(`WindSpeed: ${currentWindspeed}MPH`);
        // Append created weather information elements and append to current-city-display <div>
        $("#current-city-display").append(currentCityEl, currentIconEl, currentTempEl, currentHumidityEl, currentWindspeedEl);

    });




    // On click of search button to display user input

    // 


























});