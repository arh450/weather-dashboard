# Daily Planner

## URL

### https://gheptig.github.io/weather-dashboard/

## Brief Description
This is a basic U.S. city weather dashboard for displaying a city's current weather and 5-day forecast.  Using Bootstrap,jQuery, OpenWeather API, and Moment.JS a user is able to input an American city that will then be displayed to the page and detail the following:

* City name
* Current date
* Current weather icon (ex. clouds icon for cloudy)
* Current temperature, humidity, and windspeed
* Current UV index (based on 0-12 scale see color key below)
    * Low (0-2) = green
    * Moderate (3-5) = yellow
    * High (6-7) = orange
    * Very High (8-10) = red
    * Extreme (11+) = violet

* 5-day forecast that also displays date, temp, icon, and humidity.

* A search history that prepends the user's most recently searched city as a button and on-click will display that cities weather information again.

Using localstorage, a user can also refresh their browser window and not lose their current city weather data and search history buttons.  The user is also presented a "Clear Search History" button that will clear the user's localstorage and refresh the page.

## Technologies Used

* [HMTL](https://developer.mozilla.org/en-US/docs/Web/HTML) - Gives application it's structure and DOM elements.

* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to style the html elements/application.

* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) - Grid/Column system used to create page layout/structure.  Also used to create and style elements such as buttons, navbar, cards, and modal.

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used to dynamically display elements on html and get application to function/operate.

* [jQuery](https://jquery.com/) -  Used to simplify DOM traversal, event handling, and make AJAX GET requests from OpenWeather API

* [Moment.js](https://momentjs.com/) - Gives access to the current and upcoming dates that in turn provide functionality to the application.

* [OpenWeather API](https://openweathermap.org/) - Free weather API that provides documentation/access to retrieve detailed weather information for one or multiple locations.

## Preview

![Screenshot of WD](images\screenshot_3.PNG)

![Screenshot of WD](images\screenshot_1.PNG)

![Screenshot of WD](images\screenshot_2.PNG)

## Contributers/Authors

* Augustus Heptig - Author/Creator
