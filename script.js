document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const searchButton = document.getElementById("search-button");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");

    searchButton.addEventListener("click", () => {
        const city = cityInput.value;
        if (city.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        // Replace 'YOUR_API_KEY' with a valid OpenWeatherMap API key
        const apiKey = 'ae0315121e4c8dfd65d6918bad3a493c';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                cityName.textContent = data.name;
                temperature.textContent = `${data.main.temp}°C`;
                description.textContent = data.weather[0].description;
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                alert("An error occurred while fetching weather data.");
            });
    });
});
