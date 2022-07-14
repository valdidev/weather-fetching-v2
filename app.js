let weather = {
    "apiKey": "982c1a09f6bcdc89b40ddfefe17f2116",
    fetchWeather: function (place) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${this.apiKey}`
            ).then(res => res.json())
             .then(data => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.getElementById("city").textContent = name;
        document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`)
        document.getElementById("description").textContent = description;
        document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
        document.getElementById("wind").textContent = `Wind Speed: ${speed}km/h`;
        document.getElementById("weather").classList.remove("loading");
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
    },
    search: function () {
        this.fetchWeather(document.getElementById("searchBar").value)
    }
};

document.getElementById("searchButton").addEventListener("click", () => weather.search());
document.getElementById("searchBar").addEventListener("keyup", e => {
    if (e.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("valencia");