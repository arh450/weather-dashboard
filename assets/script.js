// Input bar with search button that allows user to search for city
// User city input then stored to empty variable
// Must store and grab user input to/from localstorage

// Going to need to create three AJAX calls
// One will show the city name, date, current temp(F), current humidity, current wind speed
// One will to get UV index
// The other will display the 5-day forcast for the user's searched city and display, date, weather image, temp(f), and the humdity

// Will moment.js be needed for current date??? or is it already in api?

$(document).ready(function () {


    // 1. Get Open Weather API Key
    var owApiKey = "fcb202793a3b50951b0129bcb32cb07d";
    // 2. Create Query URL for Current Weather
    var currentURL = `http://api.openweathermap.org/data/2.5/weather?q=springfield&appid=${owApiKey}&units=imperial`;

    // console.log(currentURL);

    // 3. Make AJAX call for current weather of Boston, MA (example in TEMP F)

    $.get(currentURL).then(function (response) {
        console.log(currentURL);
        console.log(response);

    });




























});