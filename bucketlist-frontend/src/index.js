const apiService = new ApiService()

let main = document.getElementById('main')

const init = () => {
    renderLists()
    bindEventListeners()
}

function bindEventListeners() {
    document.getElementById('lists').addEventListener('click', renderLists)
    document.getElementById('list-form').addEventListener('click', displayCreateForm )
}

function attachClicksToLinks() {
    const lists = document.querySelectorAll('li a')
    for (const list of lists) {
        list.addEventListener('click', displayList)
    }
}

async function renderLists() {
    const lists = await apiService.fetchLists()
    main.innerHTML = ''
    lists.map(list => {
        const newList = new List(list)
        main.innerHTML += newList.renderLists()
    })
    attachClicksToLinks()
}

async function displayList(e) {
    console.log(e.target)
    let id = e.target.dataset.id

    const data = await apiService.fetchList(id)
    const list = new List(data)
    main.innerHTML = list.renderList()
}

async function displayCreateForm() {
    let formDiv = document.querySelector('#new-list-form')
    let html = `
        <form>
            <label>Description</label>
            <input type='text' id='description'></input>
            <label>Completed</label>
            <input type='checkbox' id='completed'></input>
            <input type='submit'></input>
        </form>
    `

    formDiv.innerHTML = html
    document.querySelector('form').addEventListener('submit', createList)
}

function clearForm() {
    let formDiv = document.querySelector('#new-list-form')
    formDiv.innerHTML = ''
}

async function createList(e) {
    e.preventDefault()
    let main = document.getElementById('main')
    let list = {
        description: e.target.querySelector('#description').value,
        completed: e.target.querySelector('#completed').checked
    }

    let data = await apiService.fetchCreateList(list)
    let newList = new List(data)
    main.innerHTML = newList.renderList()
        attachClicksToLinks()
        clearForm()
}



init()