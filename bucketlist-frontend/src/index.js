const apiService = new ApiService()

let main = document.getElementById('main')

const init = () => {
    renderLists()
}

async function renderLists() {
    const lists = await apiService.fetchLists()
    main.innerHTML = ''
    console.log(lists)
    lists.map(list => {
        const newList = new List(list)
        main.innerHTML += newList.renderLists()
    } )
}

function attachClicksToLinks() {
    const lists = document.querySelectorAll('li a')
    for (const list of lists) {
        list.addEventListener('click', displaylist)
    }
}



init()