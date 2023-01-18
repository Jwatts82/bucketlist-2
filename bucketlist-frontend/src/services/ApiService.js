class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

async fetchLists() {
    let res = await fetch(this.baseURL + '/lists')
    let data = await res.json()
    return data
}

async fetchList(id) {
    let res = await fetch(this.baseURL + `/lists/${id}`)
    let data = await res.json()
    return data
}
    
}