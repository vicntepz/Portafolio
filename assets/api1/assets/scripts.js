function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = "48c88135a8d45b7f88f501c408b0378d";
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperatura: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Descripcion: ${data.weather[0].description}</p>
            `;
        } else if (xhr.readyState === 4) {
            var weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        }
    };
    xhr.send();
}