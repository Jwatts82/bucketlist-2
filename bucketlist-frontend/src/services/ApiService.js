class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

async fetchLists() {
    let res = await fetch(this.baseURL + '/lists')
    let data = await res.json()
    return data
}

async fetchList() {
    let res = await fetch(this.baseURL + `/list/${id}`)
    let data = await res.json()
    return data
}
    
}