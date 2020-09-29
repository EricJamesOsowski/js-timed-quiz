var startButton = document.querySelector(".start-button");
var continueButton = document.querySelector(".continue-button");
var mainButtonText = document.getElementById("buttonText");
var quizHasStarted = false;
var curQuestion = 0;

var quiz = [
    {
        "question"      :   "How do you link a JavaScript file to an HTML page? ",
        "choices"       :   [
                                {displayText: "<link src = \"javascript.js\">", isCorrect : false},
                                {displayText: "<include javascript.js", isCorrect : false},
                                {displayText: "<script src =\"javascript.js\">", isCorrect : true},
                                {displayText: "<javascript = src\"javascript.js\"", isCorrect : false},
                            ]
    },
    {
        "question"      :   "A very useful tool used during development and debugging for printing content to the debugger is:",
        "choices"       :   [
                                {displayText: "Javascript", isCorrect : false},
                                {displayText: "Terminal / Bash", isCorrect : false},
                                {displayText: "For loops", isCorrect : false},
                                {displayText: "console.log", isCorrect : true},
                            ]
    },
    {
        "question"      :   "String values must be enclosed within ______ when being assigned to variables.",
        "choices"       :   [
                                {displayText: "Commas", isCorrect : false},
                                {displayText: "Curly brackets", isCorrect : false},
                                {displayText: "Double quotes", isCorrect : true},
                                {displayText: "Parentheses", isCorrect : false},
                            ]
    },
    {
        "question"      :   "Arrays in JavaScript can be used to store _______.",
        "choices"       :   [
                                {displayText: "Numbers and strings", isCorrect : false},
                                {displayText: "Other Arrays", isCorrect : false},
                                {displayText: "Booleans", isCorrect : false},
                                {displayText: "All of the above",  isCorrect : true},
                            ]
    },
    {
        "question"      :   "The condition in an if / else statement is encosed within ______.",
        "choices"       :   [
                                {displayText: "Double quotes",  isCorrect : false},
                                {displayText: "Curly brackets",  isCorrect : true},
                                {displayText: "Parentheses",  isCorrect : false},
                                {displayText: "Square brackets",  isCorrect : false},
                            ]
    },
    {
        "question"      :   "Commonly used data types DO NOT include:",
        "choices"       :   [
                                {displayText: "Strings", isCorrect : false},
                                {displayText: "Booleans", isCorrect : false},
                                {displayText: "Alerts", isCorrect : false},
                                {displayText: "Numbers", isCorrect : false},
                            ]
    }
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

startButton.onclick = function () {
    console.log(curQuestion);
    drawQuestions(curQuestion);
    incrementCurrentQuestion();
    mainButtonText.textContent=("Continue")
    startButton.setAttribute("class", "continue-button"); 
    startButton.setAttribute("id", "continue-button");
    continueButton = document.querySelector(".continue-button");
    display = document.querySelector('#time');
    var timerlength = 60;

    if (!quizHasStarted) 
    {
        startTimer(timerlength, display);
    }
    quizHasStarted = true;
    $(':radio').prop('checked',false)
}

function drawQuestions(index) 
{
    var questionText = document.getElementById("question-box");
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.setAttribute("index", "0");
    answer2.setAttribute("index", "1"); 
    answer3.setAttribute("index", "2"); 
    answer4.setAttribute("index", "3"); 
    var answerText1 = document.getElementById("answer-text1");
    var answerText2 = document.getElementById("answer-text2");
    var answerText3 = document.getElementById("answer-text3");
    var answerText4 = document.getElementById("answer-text4");
    answerText1.textContent = " " + quiz[index].choices[0].displayText;
    answerText2.textContent = " " + quiz[index].choices[1].displayText;
    answerText3.textContent = " " + quiz[index].choices[2].displayText;
    answerText4.textContent = " " + quiz[index].choices[3].displayText;
    questionText.innerHTML = quiz[index].question;
    startButton.setAttribute("disabled", true);
    
    var clickableBoxes = document.querySelectorAll(".answer-options");
    for (let i = 0; i < clickableBoxes.length; i++) {
       clickableBoxes[i].onclick = function(userChoice) {
        selectChoice(userChoice);
       }
    } 
}

function selectChoice(userChoice) {
    startButton.removeAttribute("disabled");
}

function incrementCurrentQuestion() {
    curQuestion++;
}

