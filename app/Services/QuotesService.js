import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"
import { api } from "../Services/AxiosService.js"

class QuotesService {
    async getQuote() {
        let res = await api.get('quotes')
        ProxyState.quote = new Quote(res.data)
    }
}

export const quotesService = new QuotesService()