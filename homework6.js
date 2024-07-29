document.addEventListener('DOMContentLoaded', () => {
    // Task 1
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

    // Task 2
    const quizData = [
        { question: "What is the capital of France?", correct: "Paris" },
        { question: "Which language runs in a web browser?", correct: "JavaScript" },
        { question: "What does CSS stand for?", correct: "Cascading Style Sheets" }
    ];

    document.getElementById('submit-quiz').addEventListener('click', () => {
        let score = 0;

        quizData.forEach((item, index) => {
            const selectedAnswer = document.querySelector(`input[name="question${index + 1}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === item.correct) {
                score++;
            }
        });

        document.getElementById('quiz-score').textContent = `Your score is: ${score} out of ${quizData.length}`;
    });

    // Task 3
    const expenseForm = document.getElementById('expense-form');
    const expenseDescription = document.getElementById('expense-description');
    const expenseAmount = document.getElementById('expense-amount');
    const expenseDate = document.getElementById('expense-date');
    const expenseList = document.getElementById('expense-list');
    const totalExpense = document.getElementById('total-expense');
    let total = 0;

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addExpense(expenseDescription.value, parseFloat(expenseAmount.value), expenseDate.value);
        expenseDescription.value = '';
        expenseAmount.value = '';
        expenseDate.value = '';
    });

    function addExpense(description, amount, date) {
        if (isNaN(amount) || amount <= 0) return; // Prevent adding invalid expenses

        const li = document.createElement('li');
        li.textContent = `${description} - Rs${amount.toFixed(2)} on ${date}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
            total -= amount;
            updateTotalExpense();
        });

        li.appendChild(deleteBtn);
        expenseList.appendChild(li);

        total += amount;
        updateTotalExpense();
    }

    function updateTotalExpense() {
        totalExpense.textContent = `Total Expense: Rs${total.toFixed(2)}`;
    }
});
