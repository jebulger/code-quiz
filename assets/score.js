var scorePage = document.querySelector(".score-page");
var goBackButton = document.querySelector(".go-back");
var clearScoreButton = document.querySelector(".clear-scores");
var highScoreList = document.getElementById("list");

var scoreEntries = localStorage.getItem("scoreEntries");

function renderScores() {
    if (scoreEntries !== null) {
        var scoreArr = scoreEntries.split(",");
        for (i = 0; i < (scoreArr.length - 1); i++) {
            var scoreIndex = i;
            var li = document.createElement("li");
            document.querySelector(".high-scores").appendChild(li);
            li.textContent = (scoreIndex + 1) + ". " + scoreArr[i];
        }
    } else {
        highScoreList.style.display = "none";
        return;
    }
}

renderScores();

goBackButton = document.querySelector(".go-back").onclick = function() {
    window.location.href="index.html";
}

clearScoreButton = document.querySelector(".clear-scores").onclick = function() {
    highScoreList.style.display = "none";
    localStorage.clear();
}