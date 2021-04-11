import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.Templete
}

//Public
export default class WeatherController {
    constructor() {
        ProxyState.on("weather", _drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }
    toggleTemp() {
        weatherService.toggleTemp()
    }

}