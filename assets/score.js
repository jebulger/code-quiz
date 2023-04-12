var scorePage = document.querySelector(".score-page");
var goBackButton = document.querySelector(".go-back");
var clearScoreButton = document.querySelector(".clear-scores");
var highScoreList = document.getElementById("list");

console.log(localStorage);

var scoreEntries = localStorage.getItem("scoreEntries");

function renderScores() {
    if (scoreEntries === null) {
        highScoreList.style.display = "none";
    } else {
        for (i = 0; i <= Storage.length; i++) {
            var li = document.createElement("li");
            document.querySelector(".high-scores").appendChild(li);
            li.textContent = (i + 1) + ". " + scoreEntries;
            console.log(scoreEntries);
        }
    }
}

renderScores();

console.log(scoreEntries);

goBackButton = document.querySelector(".go-back").onclick = function() {
    window.location.href="index.html";
}

clearScoreButton = document.querySelector(".clear-scores").onclick = function() {
    highScoreList.style.display = "none";
    localStorage.clear();
}