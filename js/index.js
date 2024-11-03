const button = document.querySelector("#btn");
const type = document.querySelector("#input");
const block = document.querySelector(".block");
const buttondel = document.querySelector(".delete-button");

function returnNav(value) {
    return `
   <div class="all-sel">
                    <div class="block-title">${value.todolist}</div>
                    <div class="block-same">
                        <img src="./images/penof-card.svg" width="27" height="27" alt="image">
                        <button class="delete-button">X</button>
                        </div>
                </div>
    `;
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => {
        const info = returnNav(todo);
        block.innerHTML += info;
    });
}

function saveTodo(value) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").classList.add("hidden");
    }, 3000);
});

button &&
    button.addEventListener("click", function (value) {
        value.preventDefault();
        const data = {
            todolist: type.value,
        };
        if (!type.value) {
            alert("fill in the blank");
            return;
        }
        const info = returnNav(data);
        saveTodo(data);
        block.innerHTML += info;
        type.value = "";
    });

loadTodos();
