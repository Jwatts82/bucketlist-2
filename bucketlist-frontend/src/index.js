const apiService = new ApiService()

let main = document.getElementById('main')

const init = () => {
    renderLists()
}

async function renderLists() {
    const lists = await apiService.fetchLists()
    main.innerHTML = ''
    console.log(lists)
}



init()