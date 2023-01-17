class List {
    constructor(data){
        this.id = data.id
        this.description = data.description
        this.completed = data.completed
        this.items = data.items
    }

    renderLists() {
        return `
        <li>
        <a href='#' data-id='${this.id}'>${this.description}</a>
        - ${this.completed ? 'Completed' : 'Not Completed'}
        </li>
        `
    }


}