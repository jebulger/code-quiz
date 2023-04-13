var startButton = document.querySelector(".start-button");
var timerText = document.querySelector(".timer");
var startPage = document.getElementById("card-start");
var hiddenQuestions = document.querySelector("#questions");
var submit = document.querySelector(".submit");
var submitButton = document.querySelector(".submit-button");
var answerResult = document.querySelector(".result");
var header = document.querySelector(".header");
var finalScore = document.querySelector(".final-score");

var secondsLeft = 75;

var question = document.querySelector(".questions");

var answerOne = document.querySelector(".answer1");
var answerTwo = document.querySelector(".answer2");
var answerThree = document.querySelector(".answer3");
var answerFour = document.querySelector(".answer4");

var userChoice = 0;
var correctAnswer;

var userScore = 0;

var questions = [
    "Commonly used data types DO Not include:",
    "The condition in an if/else statement is enclosed with:________.",
    "Arrays in JavaScript can be used to store:___________.",
    "String values must be enclosed within ___________ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
]

var answersQ1 = ["1. strings", "2. booleans", "3. alerts", "4. numbers"]
var answersQ2 = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]
var answersQ3 = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
var answersQ4 = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
var answersQ5 = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"]

hiddenQuestions.classList.add("hidden")
submit.classList.add("hidden");

function startGame() {
    startButton.disabled = true;
    startTimer()
    startPage.style.display = "none";
    hiddenQuestions.classList.remove("hidden");
    hiddenQuestions.classList.add("questions-revealed")
    renderQuestions()
}

function startTimer() {
    timerText.textContent = "Time: " + secondsLeft;
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerText.textContent = "Time: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timerText.textContent = " ";
            submit.classList.remove("hidden");
            submit.classList.add("submit-styling");
            finalScore.textContent = "Your final score is: " + secondsLeft;
            hiddenQuestions.classList.remove("questions-revealed");
            hiddenQuestions.classList.add("hidden");
            answerResult.style.marginLeft = "15vw";
            setTimeout(() => {
                answerResult.style.display = "none";
            }
            , 2500);
        }
    }, 1000)
}

var currentQuestion = 1;

function renderQuestions() {
        if (currentQuestion === 1) {
            question.textContent = questions[0];
            answerOne.value = answersQ1[0];
            answerTwo.value = answersQ1[1];
            answerThree.value = answersQ1[2];
            answerFour.value = answersQ1[3];
            currentQuestion++;
        } else if (currentQuestion === 2) {
            question.textContent = questions[1];
            answerOne.value = answersQ2[0];
            answerTwo.value = answersQ2[1];
            answerThree.value = answersQ2[2];
            answerFour.value = answersQ2[3];
            currentQuestion++;
        } else if (currentQuestion === 3) {
            question.textContent = questions[2];
            answerOne.value = answersQ3[0];
            answerTwo.value = answersQ3[1];
            answerThree.value = answersQ3[2];
            answerFour.value = answersQ3[3];
            currentQuestion++;
        } else if (currentQuestion === 4) {
            question.textContent = questions[3];
            answerOne.value = answersQ4[0];
            answerTwo.value = answersQ4[1];
            answerThree.value = answersQ4[2];
            answerFour.value = answersQ4[3];
            currentQuestion++;
        } else if (currentQuestion === 5) {
            question.textContent = questions[4];
            answerOne.value = answersQ5[0];
            answerTwo.value = answersQ5[1];
            answerThree.value = answersQ5[2];
            answerFour.value = answersQ5[3];
            currentQuestion++;
        } else {
            hiddenQuestions.style.display = "none";
            submit.classList.remove("hidden");
            submit.classList.add("submit-styling");
            finalScore.textContent = "Your final score is: " + secondsLeft;
            userScore = secondsLeft;
            timerText.style.display = "none";
            answerResult.style.marginLeft = "15vw";
            setTimeout(() => {
                answerResult.style.display = "none";
            }
            , 2500);
        }
}

function checkValidity() {
    if (currentQuestion == 2 && userChoice !== 3) {
        secondsLeft = Math.floor(secondsLeft - 10);
        answerResult.textContent = "Wrong!"
        answerResult.style.borderTop = "1px solid slategray";
    } else if (currentQuestion == 3 && userChoice !== 2) {
        secondsLeft = Math.floor(secondsLeft - 10);
        answerResult.textContent = "Wrong!"
    } else if (currentQuestion == 4 && userChoice !== 4) {
        secondsLeft = Math.floor(secondsLeft - 10);
        answerResult.textContent = "Wrong!"
    } else if (currentQuestion == 5 && userChoice !== 3) {
        secondsLeft = Math.floor(secondsLeft - 10);
        answerResult.textContent = "Wrong!"
    } else if (currentQuestion == 6 && userChoice !== 4) {
        secondsLeft = Math.floor(secondsLeft - 10);
        answerResult.textContent = "Wrong!";
    } else {
        answerResult.textContent ="Correct!";
        answerResult.style.borderTop = "1px solid slategray";
        return;
    }
}

var userName = "";
var score = "";

function pressSubmit(event) {
    event.preventDefault();
    var userSubmission = document.querySelector(".user-submission").value;
    var scoreEntry = userSubmission + " - " + userScore;
    var scoreArr = [];
    var allScores = localStorage.getItem("scoreEntries")
    scoreArr.push(scoreEntry);
    scoreArr.push(allScores);
    localStorage.setItem("scoreEntries", scoreArr);
    window.location.href="high-score-page.html";
}

buttonChoice1 = document.querySelector("#one").onclick = function() {
    userChoice = 1;
    checkValidity();
    renderQuestions();
}
buttonChoice2 = document.querySelector("#two").onclick = function () {
    userChoice = 2;
    checkValidity();
    renderQuestions();
}
buttonChoice3 = document.querySelector("#three").onclick = function () {
    userChoice = 3;
    checkValidity();
    renderQuestions();
}
buttonChoice4 = document.querySelector("#four").onclick = function() {
    userChoice = 4;
    checkValidity();
    renderQuestions();
}

startButton.addEventListener("click", startGame);

submitButton.addEventListener("click", pressSubmit);