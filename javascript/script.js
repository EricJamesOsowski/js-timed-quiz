var startButton = document.querySelector(".start-button");
var continueButton = document.querySelector(".continue-button");
var mainButtonText = document.getElementById("buttonText");
var quizHasStarted = false;
var clickableBoxes = document.querySelectorAll(".answer-options");
var curQuestion = 0;
var timeLeft = 60;
var scoreboardButton = document.getElementById("scorebox");


function myTimer() {
    timeLeft --;
    if (timeLeft <= 0) {
        timeLeft = 0;
        stopTest();
    }
    display.textContent = timeLeft;
}

function stopTimer() {
    clearInterval(myVar);
}

function stopTest() {
        stopTimer();
    var userScore = timeLeft;
    setTimeout(() => {
       alert(" Your final score was: "+userScore);
       localStorage.setItem('userScore', JSON.stringify(userScore));
       goToScoreboard();
    }, 1500);
}

for (let i = 0; i < clickableBoxes.length; i++) {
    clickableBoxes[i].setAttribute("hidden", true);
}

var quiz = [
    {
        "question"      :   "Long ago, the four nations lived together in harmony. Then, everything changed when the _____ nation attacked",
        "choices"       :   [
                                {displayText: "Water", isCorrect : false},
                                {displayText: "Earth", isCorrect : false},
                                {displayText: "Fire", isCorrect : true},
                                {displayText: "Air", isCorrect : false},
                            ]
    },
    {
        "question"      :   "Which of the following are NOT Aangs companions?",
        "choices"       :   [
                                {displayText: "Appa the sky-bison", isCorrect : false},
                                {displayText: "Momo the winged Lemur", isCorrect : false},
                                {displayText: "Katara the water bender", isCorrect : false},
                                {displayText: "Nyla the shirshu", isCorrect : true},
                            ]
    },
    {
        "question"      :   "What is Sokkas weapon of choice?",
        "choices"       :   [
                                {displayText: "Fire", isCorrect : false},
                                {displayText: "Sword", isCorrect : false},
                                {displayText: "Boomerang", isCorrect : true},
                                {displayText: "Staff", isCorrect : false},
                            ]
    },
    {
        "question"      :   "How do you get Appa to fly?",
        "choices"       :   [
                                {displayText: "Appa, Fly!", isCorrect : false},
                                {displayText: "Give him a coin", isCorrect : false},
                                {displayText: "Crack whip", isCorrect : false},
                                {displayText: "Yip Yip!",  isCorrect : true},
                            ]
    },
    {
        "question"      :   "Which of the following forms of bending DOES NOT exist?",
        "choices"       :   [
                                {displayText: "Metal bending",  isCorrect : false},
                                {displayText: "Syrup bending",  isCorrect : true},
                                {displayText: "Blood bending",  isCorrect : false},
                                {displayText: "Cloud bending",  isCorrect : false},
                            ]
    },
    {
        "question"      :   "Which of the following bending techniques did Aang invent himself?",
        "choices"       :   [
                                {displayText: "The Water Whip", isCorrect : false},
                                {displayText: "The Air Scooter", isCorrect : true},
                                {displayText: "Lightning Bending", isCorrect : false},
                                {displayText: "Breath Of Fire", isCorrect : false},
                            ]
    },
    {
        "question"      :   "How did Appa escape the circus?",
        "choices"       :   [
                                {displayText: "He chewed his way out of the cage", isCorrect : false},
                                {displayText: "He whipped the ringleader and escaped", isCorrect : true},
                                {displayText: "He convinced the tiger trainer to help him", isCorrect : false},
                                {displayText: "Appa was never in the circus", isCorrect : false},
                            ]
    },
    {
        "question"      :   "Why was Prince Zuko banished from the Fire Nation?",
        "choices"       :   [
                                {displayText: "He spoke out of turn", isCorrect : true},
                                {displayText: "He shot his brother with an arrow", isCorrect : false},
                                {displayText: "He was not a skilled enough fire bender", isCorrect : false},
                                {displayText: "He was beligerant to his father", isCorrect : false},
                            ]
    }
];

scoreboardButton.onclick = function () {
    goToScoreboard();
}

startButton.onclick = function () {
    
    for (let i = 0; i < clickableBoxes.length; i++) {
        clickableBoxes[i].removeAttribute("hidden", false);
    }

    if ((curQuestion) < quiz.length) {
        // Populates page with current question and answers
        drawQuestions(curQuestion);
    }
    else if ((curQuestion) == quiz.length) {
        stopTest();
    }

    // Changes start buttont to say continue
    mainButtonText.textContent=("Continue")
    startButton.setAttribute("class", "continue-button"); 
    startButton.setAttribute("id", "continue-button");
    continueButton = document.querySelector(".continue-button");
    display = document.querySelector('#time');
    var timerlength = 60;

    // Stops multiple timers from going at once.
    if (!quizHasStarted) 
    {
        window.myVar = setInterval(myTimer, 1000);
    }
    quizHasStarted = true;

    var checked = document.querySelector("input[type=radio]:checked");
    if (checked != null) {
        submitChoice(checked);
    }

    // Sets an index value to the radio buttons to be linked with quiz[curQuestion-1]choices[index of radio chose].isCorrect
    for (let i = 0; i < clickableBoxes.length; i++) {
       clickableBoxes[i].onclick = function(userChoice) {
        selectChoice(userChoice);
       }
    } 
    
    // Adds 1 to curQuestion
    incrementCurrentQuestion();
    // Resets all radios to false
    $(':radio').prop('checked',false)
}

// Populates the question text area and the radio options with the current question and answer options
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
    curQuestion ++;
}

function submitChoice(userChoice) {
    var choiceIndex = userChoice.getAttribute("index");

    if ( quiz[curQuestion-1].choices[choiceIndex].isCorrect ) {
        toast("Correct!!!");
    }
    else if ( !quiz[curQuestion-1].choices[choiceIndex].isCorrect ) {
        toast("Incorrect")
        timeLeft = decrementTimer(timeLeft);
    } 

}


function toast(snackText) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = snackText;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);
}

function decrementTimer(timer) {
    timer -= 10;
    return timer;
}

function goToScoreboard() {
    location.replace("scoreboard.html")
}