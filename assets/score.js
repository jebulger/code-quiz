var scorePage = document.querySelector(".score-page");
var highScoreList = document.querySelector(".high-scores");
var goBackButton = document.querySelector(".go-back");
var clearScoreButton = document.querySelector(".clear-scores");

console.log(localStorage);

goBackButton = document.querySelector(".go-back").onclick = function() {
    window.location.href="index.html";
}

clearScoreButton = document.querySelector(".clear-scores").onclick = function() {
    localStorage.clear();
}