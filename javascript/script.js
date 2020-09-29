var startButton = document.querySelector(".start-button");
var continueButton = document.querySelector(".continue-button");
var mainButtonText = document.getElementById("buttonText");
var quizHasStarted = false;
var clickableBoxes = document.querySelectorAll(".answer-options");
var curQuestion = 0;

for (let i = 0; i < clickableBoxes.length; i++) {
    clickableBoxes[i].setAttribute("hidden", true);
}

var quiz = [
    //Long ago, the four nations lived together in harmony. Then everything changed when the fire nation attacked.
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

// ===== TIMER counts down every second. Pass in duration and an element to display in =============================//
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
// This stops the timer at 0
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

startButton.onclick = function () {
    for (let i = 0; i < clickableBoxes.length; i++) {
        clickableBoxes[i].removeAttribute("hidden", false);
    }
    // console.log(curQuestion);
    drawQuestions(curQuestion);
    
    mainButtonText.textContent=("Continue")
    startButton.setAttribute("class", "continue-button"); 
    startButton.setAttribute("id", "continue-button");
    continueButton = document.querySelector(".continue-button");
    display = document.querySelector('#time');
    var timerlength = 60;

    // Stops multiple timers from going at once.
    if (!quizHasStarted) 
    {
        startTimer(timerlength, display);
    }
    quizHasStarted = true;
    var checked = document.querySelector("input[type=radio]:checked");
    
    if (checked != null) {
        submitChoice(checked);
    }


    for (let i = 0; i < clickableBoxes.length; i++) {
       clickableBoxes[i].onclick = function(userChoice) {
        selectChoice(userChoice);
       }
    } 
    
    incrementCurrentQuestion();    
    // Resets all radios to false
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
    
}

function selectChoice(userChoice) {
    startButton.removeAttribute("disabled");
}

function incrementCurrentQuestion() {
    curQuestion++;
}

function submitChoice(userChoice) {
    var choiceIndex = userChoice.getAttribute("index");

    console.log(choiceIndex);
    console.log(curQuestion-1);
    console.log(quiz[curQuestion-1].choices[choiceIndex]);

    if ( quiz[curQuestion-1].choices[choiceIndex].isCorrect ) {
        toast("Correct!!!");
    }
    else if ( !quiz[curQuestion-1].choices[choiceIndex].isCorrect ) {
        toast("Incorrect")
    }  
    else {
        toast("I don't know how, but you've broken my program. It doesn't matter much, we live in a dream within a dream and what we know of as reality is just an illusion created by our attatchment to ephemeral corporeal bodies.")
    }
    //  you have the index number, just compare it above and use quiz[something].sometihng[index] or some shit
    // console.dir("The Jquerey thing has submitted :"+ JSON.stringify($('input[name=choice]:checked')));
    // console.log("NON STRINGY"+ $('input[name=choice]:checked'));
}


function toast(snackText) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = snackText;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
  }