import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "../Services/AxiosService.js"

class ImagesService {
    async getImage() {
        let res = await api.get('images')
        ProxyState.image = res.data.url
    }
}

export const imagesService = new ImagesService();
