export default class Quote {
    constructor({ content, author }) {
        this.content = content
        this.author = author
    }

    get Template() {
        return /*html*/ `
        <div class="content">
            <h5>${this.content}</h5>
        </div>
        <div class="author">
            <h6>${this.author}</h6>
        </div>
        
        `


    }
}