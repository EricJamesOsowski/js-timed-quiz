var startButton = document.querySelector(".start-button");
var questionText = document.getElementById("question-box");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var quizHasStarted = false;

var quiz = [
    {
        "question"      :   "How do you link a JavaScript file to an HTML page? ",
        "choices"       :   [
                                {displayText: "<link src = \"javascript.js\">", isCorrect : false},
                                "<include javascript.js",
                                "<script src =\"javascript.js\">",
                                "<javascript = src\"javascript.js\""
                            ],
        "correct"       :   "<script src =\"javascript.js\">",
    },
    {
        "question"      :   "A very useful tool used during development and debugging for printing content to the debugger is:",
        "choices"       :   [
                                "Javascript",
                                "Terminal / Bash",
                                "For loops",
                                "console.log"
                            ],
        "correct"       :   "console.log",
    },
    {
        "question"      :   "String values must be encolsed within ______ when being assigned to variables.",
        "choices"       :   [
                                "Commas",
                                "Curly brackets",
                                "Double quotes",
                                "Parentheses"
                            ],
        "correct"       :   "Double quotes",
    },
    {
        "question"      :   "Arrays in JavaScript can be used to store _______.",
        "choices"       :   [
                                "Numbers and strings",
                                "Other Arrays",
                                "Booleans",
                                "All of the above"
                            ],
        "correct"       :   "All of the above",
    },
    {
        "question"      :   "The condition in an if / else statemtn is encosed within ______.",
        "choices"       :   [
                                "Double quotes",
                                "Curly brackets",
                                "Parentheses",
                                "Square brackets"
                            ],
        "correct"       :   "Curly brackets",
    },
    {
        "question"      :   "Commonly used data types DO NOT include:",
        "choices"       :   [
                                "Strings",
                                "Booleans",
                                "Alerts",
                                "Numbers"
                            ],
        "correct"       :   "Alerts",
    },


];

// ===== TIMER =============================//
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

if (!quizHasStarted) {
    
    startButton.onclick = function () {
    
    startButton.setAttribute("class", "continue-button"); 
    startButton.setAttribute("id", "continue-button");
    startButton.innerHTML = ("Continue");
    // startButton.style.display = "none";


    var timerlength = 60,
    display = document.querySelector('#time');
    if (!quizHasStarted) {
        startTimer(timerlength, display);
    }
    
    quizHasStarted = true;
    
    for (let i = 0; i < quiz.length; i++) {
        questionText.innerHTML = quiz[i].question;
        answer1.value = quiz[i].choices[0].displayText;
        answer2.value = quiz[i].choices[1];
        answer3.value = quiz[i].choices[2];
        answer4.value = quiz[i].choices[3];

    }

}
}