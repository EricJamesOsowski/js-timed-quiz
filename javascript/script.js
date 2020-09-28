var startButton = document.getElementById("start-button");

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
    startButton.style.display = "none";

    var timerlength = 60,
        display = document.querySelector('#time');
    startTimer(timerlength, display);
    
}


var quiz = [
    {
        "question"      :   "How do you link a JavaScript file to an HTML page? ",
        "choices"       :   [
                                "<link src = \"javascript.js\">",
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
