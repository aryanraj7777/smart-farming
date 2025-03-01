// script.js

document.addEventListener("DOMContentLoaded", function () {
    fetchWeather();
    fetchFarmingNews();
});

// Fetch weather using OpenWeather API
function fetchWeather() {
    const apiKey = "YOUR_OPENWEATHER_API_KEY";
    const city = "New Delhi"; // Change to user's location dynamically if needed
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
            document.getElementById("weather-data").textContent = weatherInfo;
        })
        .catch(error => {
            document.getElementById("weather-data").textContent = "Weather data unavailable";
        });
}

// Fetch latest farming news (Example: Using NewsAPI)
function fetchFarmingNews() {
    const apiKey = "YOUR_NEWSAPI_KEY";
    const url = `https://newsapi.org/v2/everything?q=agriculture&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsList = document.getElementById("news-list");
            newsList.innerHTML = ""; // Clear existing list

            data.articles.slice(0, 5).forEach(article => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
                newsList.appendChild(listItem);
            });
        })
        .catch(error => {
            document.getElementById("news-list").innerHTML = "Failed to load news.";
        });
}

