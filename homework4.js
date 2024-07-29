// Task 1

function startQuiz() {
    let score = 0;

    let answer1 = prompt("What is the capital of France?");
    let answer2 = prompt("What is 2 + 2?");
    let answer3 = prompt("Who wrote 'Harry Potter'?");

    if (answer1.toLowerCase() === "paris") {
        score++;
    }

    if (parseInt(answer2) === 4) {
        score++;
    }

    if (answer3.toLowerCase() === "jk rowling") {
        score++;
    }

    document.getElementById("score").innerText = "Your score is: " + score + "/3";
}

// Task 2

function startGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    let attempts = 0;
    let maxAttempts = 10;

    while (attempts < maxAttempts) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempts++;
        
        if (guess === randomNumber) {
            document.getElementById("feedback").innerText = "Congratulations! You guessed the number in " + attempts + " attempts.";
            break;
        } else if (guess > randomNumber) {
            alert("Too high! Try again.");
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        }

        if (attempts === maxAttempts) {
            document.getElementById("feedback").innerText = "Sorry, you've used all your attempts. The number was " + randomNumber + ".";
        }
    }
}

// Task 3

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature() {
    let temperature = parseFloat(prompt("Enter the temperature value:"));
    let unit = prompt("Is the unit Celsius (C) or Fahrenheit (F)?").toUpperCase();

    if (unit === "C") {
        let convertedTemperature = celsiusToFahrenheit(temperature);
        document.getElementById("result").innerText = temperature + "°C is " + convertedTemperature.toFixed(2) + "°F";
    } else if (unit === "F") {
        let convertedTemperature = fahrenheitToCelsius(temperature);
        document.getElementById("result").innerText = temperature + "°F is " + convertedTemperature.toFixed(2) + "°C";
    } else {
        alert("Please enter a valid unit (C or F).");
    }
}