// Start the timer and launch a question.

var timer = document.querySelector(".timer");

var questionTitle = document.querySelector("#question-title")

var question1 = "HTML stands for:"


function theTimer() {
    var timeLeft = 10;

    var timeInterval = setInterval(function() {
if (timeLeft > -1) {
timer.textContent = " Time left: " + timeLeft;
timeLeft--;
    }
        },

            1000);
}

theTimer()



// If answer clicked is incorrect reduce time.

// Add four more questions.

// Game ends when timer stops.

// User writes their initials.


