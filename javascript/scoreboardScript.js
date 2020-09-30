var saveScoreButton = document.getElementById("save-button");
var retakeTestButton = document.getElementById("retake-button");
var clearScoresButton = document.getElementById("clear-scores-button");
var userScore = JSON.parse(localStorage.getItem('userScore'));
display = document.querySelector('#time');
var isSaved = false;
displayUserScore();
var userInitialsArray = JSON.parse(localStorage.getItem('localScoreboard')) || []
fillScoreboard();

function displayUserScore() {
    display.textContent = userScore;
}

function populateScoreboard (index, name, score) {
    var scoreTable = document.getElementById("scoreboard-table");
    var tableRow = document.createElement("tr");
    var tableHead = document.createElement("th");
    var tableData = document.createElement("td");
    var tableData2 = document.createElement("td");
    tableData.textContent = name;
    tableData2.textContent = score;
    tableHead.textContent = index;
    scoreTable.appendChild(tableRow);
    tableRow.appendChild(tableHead);
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData2);
}

saveScoreButton.onclick = function () {
    if (!isSaved) {
        saveInitials();
        document.getElementById("scoreboard-table").innerHTML = "";
        fillScoreboard();
    }
    else if (isSaved) {
        alert("Nice try, but you've already saved!")
    }
    isSaved = true;
}

retakeTestButton.onclick = function () {
    goToIndex();
}
clearScoresButton.onclick = function () {
    localStorage.clear();
    document.getElementById("scoreboard-table").innerHTML = "";
}



function saveInitials() {
    var userInitials = document.getElementById("initials-box").value;
    if (userInitials && userScore) {
        var nameAndScore = {
        'username' : userInitials,
        'score' : userScore,}
    }
    else if (!userInitials) {
        alert("You have to input a name!")
    }
    else if (!userScore){
        alert("You haven't finished the test! Try saving after you've completed it.")
    }
    SaveDataToLocalStorage(nameAndScore) 
}


function locallyStoreArray() {
    userInitialsArray.push(JSON.parse(localStorage.getItem('localScoreboard')));
    localStorage.setItem('localScoreboard', JSON.stringify(userInitialsArray));
}

function SaveDataToLocalStorage(data)
{
    userInitialsArray = JSON.parse(localStorage.getItem('localScoreboard')) || [];
    userInitialsArray.push(data);
    localStorage.setItem('localScoreboard', JSON.stringify(userInitialsArray));
}

function goToIndex() {
    location.replace("index.html")
}

function fillScoreboard() {
    for (let i = 0; i < userInitialsArray.length; i++) {
        if (userInitialsArray[i]) {
            if (userInitialsArray[i].score) {
                populateScoreboard((i+1), userInitialsArray[i].username, userInitialsArray[i].score);
            }
        }
    }
}