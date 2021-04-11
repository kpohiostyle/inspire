import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _drawQuote() {
    document.getElementById('quote').innerHTML = ProxyState.quote.Template
}

export default class QuotesController {
    constructor() {
        ProxyState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            console.error(error)
        }
    }
}