let weather = {
    "apiKey": "982c1a09f6bcdc89b40ddfefe17f2116",
    fetchWeather: function (place) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${this.apiKey}`
            ).then(res => res.json())
             .then(data => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
    }
}