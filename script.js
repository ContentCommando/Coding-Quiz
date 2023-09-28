// Start the timer and launch a question.

// Pulling DOM
var timer = document.querySelector(".timer");
var questionTitle = document.querySelector("#question-title");
var options = document.querySelectorAll(".options");
var nextBtn = document.querySelector("#next");
var score = 0;
var timeLeft = 10;

// Quizzes
var question = [
    {
    title: "HTML stands for:",
    options: ["Hypertext Makeup LAN", "Hightext Makeup Language", "Hypertext Markup Language", "Hardtext Memory Language"],
    correctAns: 2
},
{
    title: "CSS stands for:",
    options: ["Custom style Sheet", "Cascadind Support Signals", "Cascading Style Sheet", "Cast System Styling"],
    correctAns: 0
},
{
    title: "Javascript enables users to do what?",
    options: ["Become web-savvy", "Become Physically Fit", "Interact with an Application", "Repair Computers"],
    correctAns: 1
},
{
    title: "Bootstrap is good for",
    options: ["Learning How to Code", "Browsing the internet", "Developing Applications Faster", "Building Computers"],
    correctAns: 2
}
]

// Question Display
function showQuestion() {
questionTitle.textContent = question[0].title
}
    
showQuestion();

function nextQuestion() {
options.forEach(function(element, index) {
nextBtn.addEventListener("click", function() {
element.textContent = question[1].options[index];
nextBtn.addEventListener("click", function() {
element.textContent = question[2].options[index];
nextBtn.addEventListener("click", function() {
element.textContent = question[3].options[index]
                        })
                    })
                })
            })


nextBtn.addEventListener("click", function() {
questionTitle.textContent = question[1].title;
nextBtn.addEventListener("click", function() {
questionTitle.textContent = question[2].title;
nextBtn.addEventListener("click", function() {
questionTitle.textContent = question[3].title;
                }
            )
        }
        )
    }
)
}

nextQuestion();




// Options Display
// for (var i=0; i < question.length; i++) 

options.forEach(function(element, index) {
element.textContent = question[0].options[index];
element.addEventListener("click", function() {
if (question[0].correctAns == index) {
    element.textContent = "Correct!";
    ++score;   

} 
else {
    element.textContent = "Wrong!";
}

})
});




function theTimer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
if (timeLeft > -1) {
timer.textContent = " Time left: " + timeLeft;
timeLeft--;
 
    }
        },

            1000);
}

// theTimer()



