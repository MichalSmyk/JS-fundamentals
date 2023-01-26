const WeatherClient = require('./weatherClient');

class Weather {
    constructor(client) {
        this.client = client;
        this.weatherData = null;
    }
        
    load(city){
        this.client.fetchWeatherData(city)
            .then((data) => {
                this.weatherData = data;
            })
    }

    getWeatherData(){
        return this.weatherData
           
    }
}

module.exports = Weather;