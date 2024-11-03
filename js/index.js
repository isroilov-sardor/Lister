const button = document.querySelector("#btn");
const type = document.querySelector("#input");
const block = document.querySelector(".block");

function returnNav(value, index) {
    return `
        <div class="all-sel" data-id="${index}">
            <div class="block-title">${value.todolist}</div>
            <div class="block-same">
                <img src="./images/penof-card.svg" width="27" height="27" alt="image">
                <button class="delete-button" data-id="${index}">X</button>
            </div>
        </div>
    `;
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    block.innerHTML = "";
    todos.forEach((todo, index) => {
        const info = returnNav(todo, index);
        block.innerHTML += info;
    });
    addDeleteEventListeners();
}

function saveTodo(value) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
}

function addDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const index = button.getAttribute("data-id");
            deleteTodo(index);
        });
    });
}

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").classList.add("hidden");
    }, 3000);
});

button &&
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const data = {
            todolist: type.value,
        };
        if (!type.value) {
            alert("fill in the blank");
            return;
        }
        saveTodo(data);
        loadTodos();
        type.value = "";
    });

loadTodos();
