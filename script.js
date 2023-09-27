// Start the timer and launch a question.

// Pulling DOM
var timer = document.querySelector(".timer");
var options = document.querySelectorAll(".options");
var questionTitle = document.querySelector("#question-title")




// Quizzes
var question1 = {
    title: "HTML stands for:",
    options: ["Hypertext Makeup LAN", "Hightext Makeup Language", "Hypertext Markup Language"],
    correctAns: 2
}


// Question Display
function showQuestion() {
 questionTitle.textContent = question1.title

}

showQuestion();


// Options Display
options.forEach(function(element, index) {
element.textContent = question1.options[index]
});




// function theTimer() {
//     var timeLeft = 10;
//     var timeInterval = setInterval(function() {
// if (timeLeft > -1) {
// timer.textContent = " Time left: " + timeLeft;
// timeLeft--;
 
//     }
//         },

//             1000);
// }

// theTimer()







// If answer clicked is incorrect reduce time.

// Add four more questions.

// Game ends when timer stops.

// User writes their initials.


