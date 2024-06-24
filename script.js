const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector('#btn');

const addTask = () => {
    if (inputBox.value === '') {
        alert('Please add to the list!')
        saveData();
    } else {
        const li = document.createElement('LI');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        const span = document.createElement('SPAN');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
    saveData();
}

const changeTask = (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
    saveData()
}

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}

button.addEventListener('click', addTask);
listContainer.addEventListener('click', changeTask);

showTask();