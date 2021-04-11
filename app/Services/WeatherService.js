import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "../Services/AxiosService.js"

class WeatherService {
    async getWeather() {
        let res = await api.get('weather')
        ProxyState.weather = new Weather(res.data)

    }
    toggleTemp() {
        let temp = ProxyState.weather
        if (temp.checked == true) {
            temp.checked = false
        } else {
            temp.checked = true
        }
        ProxyState.weather = ProxyState.weather
    }

}
export const weatherService = new WeatherService();