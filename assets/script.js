// Grabbing html elements and storing them into variables.
var startButton = document.querySelector(".start-button");
var timerText = document.querySelector(".timer");
var startPage = document.getElementById("card-start");
var hiddenQuestions = document.querySelector("#questions");
var submit = document.querySelector(".submit");
var submitButton = document.querySelector(".submit-button");
var answerResult = document.querySelector(".result");
var header = document.querySelector(".header");
var finalScore = document.querySelector(".final-score");

// Sets the start time for the timer
var secondsLeft = 75;

// This is selecting the h3 tag found within the section containing the questions
// This h3 tag is what is updated to physically display the question itself
var question = document.querySelector(".questions");

// Query selectors for the input buttons representing the multiple choice answers
var answerOne = document.querySelector(".answer1");
var answerTwo = document.querySelector(".answer2");
var answerThree = document.querySelector(".answer3");
var answerFour = document.querySelector(".answer4");

// Set to zero by default, this variable is used to track which input button the user selected
var userChoice = 0;

// Set to zero by default, is updated at the end of quiz to store seconds remaining as the user score
var userScore = 0;

// Array to store all the questions
var questions = [
    "Commonly used data types DO Not include:",
    "The condition in an if/else statement is enclosed with:________.",
    "Arrays in JavaScript can be used to store:___________.",
    "String values must be enclosed within ___________ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
]
// Array to store all the answers
var answersQ1 = ["1. strings", "2. booleans", "3. alerts", "4. numbers"]
var answersQ2 = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]
var answersQ3 = ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
var answersQ4 = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
var answersQ5 = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"]

// Before any functions get ran, the questions is added a class of hidden
// and the submit form is added a class of hidden
hiddenQuestions.classList.add("hidden")
submit.classList.add("hidden");

// This starts the timer, and removes the hidden class from the questions and gives them a new class
// for styling, also hides the start section and then the questions themselves are rendered
function startGame() {
    startButton.disabled = true;
    startTimer()
    startPage.style.display = "none";
    hiddenQuestions.classList.remove("hidden");
    hiddenQuestions.classList.add("questions-revealed")
    renderQuestions()
}

// Function is for the timer, it will go down by 1 each second the function is ran
// When it reaches zero, the timer clears itself  the quiz is over and the submit form is revealed
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
            // Used to style the message letting the user know if they are wrong or correct
            answerResult.style.marginLeft = "15vw";
            // This removes the result message after 2 and a half seconds of loading the submit form
            setTimeout(() => {
                answerResult.style.display = "none";
            }
            , 2500);
        }
    }, 1000)
}

// By default starts the current question at 1;
var currentQuestion = 1;

// function for displaying the questions and answers themselves
// checks to see what question is currently being displayed
// If there are still more questions left it will update the current question
// and move to the next one.
// Since there are not more than 5 questions, after the 5th question is answered
// The questions will be hidden, and the submit form is revealed
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

// Had to add one to the currentQuestion count when checking answer validity
// due to the count increasing each time the questions are rendered.
// But this function will check if the user selected a correct or wrong answer
// and will let them know.
// If an answer was wrong, 10 gets subtracted from the timer.
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

// Function to run in the submitButton event listener
// When ran, the function will prevent default, grab previous stored
// high scores, and then push the new score into the array containing previous scores.
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

// Each button choice is assigned a different value to keep track of which button is being clicked
// When the checkValidity() is run, it will compare which question the page is currently on vs what
// the user just selected
// Regardless of the outcome the function to render questions gets ran again.
// If there are no more questions to be rendered, the renderQuestions() will catch it,
// and hhide the questions and display the submit form.
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

// When clicked the startGame function will run
startButton.addEventListener("click", startGame);

// When clicked the pressSubmit function will run, grabbing local storage data,
// and storing new high score entry and pushing that entry into the local storage
submitButton.addEventListener("click", pressSubmit);