const apiService = new ApiService()

let main = document.getElementById('main')

const init = () => {
    renderLists()
}

async function renderLists() {
    const lists = await apiService.fetchLists()
    main.innerHTML = ''
    // console.log(lists)
    lists.map(list => {
        const newList = new List(list)
        main.innerHTML += newList.renderLists()
    })
    attachClicksToLinks()
}

function attachClicksToLinks() {
    const lists = document.querySelectorAll('li a')
    for (const list of lists) {
        list.addEventListener('click', displayList)
    }
}

function attachClicksToLinks() {
    let lists = document.querySelectorAll('li a')
    lists.forEach(list => {
        list.addEventListener('click', displayList)
    })
}

async function displayList(e) {
    console.log(e.target)
    let id = e.target.dataset.id

    const data = await apiService.fetchList(id)
    const list = new List(data)
    main.innerHTML = list.renderList()
}



init()