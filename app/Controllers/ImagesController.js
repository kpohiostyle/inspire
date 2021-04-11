import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";


//Private
function _drawImage() {
    document.body.style.backgroundImage = `url(${ProxyState.image})`;

}

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    let am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    min = min < 10 ? "0" + min : min;


    let currentTime = hour + ":"
        + min + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}


//Public
export default class ImagesController {
    constructor() {
        ProxyState.on("image", _drawImage);
        this.getImage()
        // setInterval(showTime, 1000);
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            console.errer(error)
        }
    }

}

