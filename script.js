// Start the timer and launch a question.

// Pulling DOM
var timer = document.querySelector(".timer");
var questionTitle = document.querySelector("#question-title")
var options = document.querySelectorAll(".options");


// Quizzes
var question = [
    {
    title: "HTML stands for:",
    options: ["Hypertext Makeup LAN", "Hightext Makeup Language", "Hypertext Markup Language"],
    correctAns: 2
},
{
    title: "CSS stands for:",
    options: ["Cascading Style Sheet", "Cascadind Support Signals", "Custom Style Sheet"],
    correctAns: 0
},
{
    title: "Javascript enables users to do what?",
    options: ["Become web-savvy", "Interact with an application", "Become physically fit"],
    correctAns: 1
},
{
    title: "Bootstrap is good for",
    options: ["Designing applications faster", "Browsing the internet", "Learning how to code"],
    correctAns: 2
}
]


// Question Display
function showQuestion() {
questionTitle.textContent = question[0].title
}

showQuestion();

// Options Display
options.forEach(function(element, index) {
element.textContent = question[0].options[index];
element.addEventListener("click", function() {
if (question.correctAns == index) {
    element.textContent = "Correct!"
} 
else {
    element.textContent = "Wrong!"
}

})
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


