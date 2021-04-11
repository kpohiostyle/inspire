// import { weatherService } from "../Services/WeatherService.js";

export default class Weather {
    constructor({ name, main }) {
        this.name = name
        this.temp = main.temp
    }

    get Templete() {
        return /*html*/ `
        <div class="card text-white weather">
            <div class= "card-body ">
                <p onclick="app.weatherController.toggleTemp()">${this.checked ? Math.floor(1.8 * (this.temp - 273) + 32) + '&degF' : Math.floor(this.temp - 271.15) + '&degC'} | ${this.name}</p>
            </div>
        </div>
        `

    }

}