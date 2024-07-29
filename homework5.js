// Task 1
function calculateBMIDOM() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = weight / (height * height);
    document.getElementById("bmi-result").innerText = "Your BMI is: " + bmi.toFixed(2);
}

// Task 2
let todoList = [];

function addToDo() {
    let item = document.getElementById("todo-item").value;
    if (item) {
        todoList.push(item);
        displayToDoList();
        document.getElementById("todo-item").value = ''; // Clear input after adding
    }
}

function displayToDoList() {
    let ul = document.getElementById("todo-list");
    ul.innerHTML = "";
    todoList.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Task 3
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
