var userScore = 0;
var rightAnswer;
var questionList;
var qTimer;
var userChoice;
var questionTimer;
var b = 0;
var randNum = Math.floor(Math.random([b]) * 4);

var myQuestions = [

    {
        qtext: "What was the name of the Vampire in Nosferatu?",
        answers: ["Count Orlok", "Norman Bekkler", "Phil Donohue", "Stanley Steemer", "Joe Wolf"],
        rightAnswer: "Count Orlok"
    },
    {
        qtext: "What movie is Boris Karloff most well known for?",
        answers: ["Bend it like Boris", "The Green Pile", "Frankenstein", "Dracula", "Ferris Buellers"],
        rightAnswer: "Frankenstein"
    },
    {
        qtext: "In the movie the Changeling what is the name of the boy spirit haunting John Russell's gloomy abode?",
        answers: ["Lars", "Joseph", "Flea", "Pete Klaven", "Will Smith"],
        rightAnswer: "Joseph"
    },
    {
        qtext: "What Italian city was the movie Don't Look Now primarily shot in?",
        answers: ["Abruzzi!", "Rome", "Milan", "Venice", "Naples"],
        rightAnswer: "Venice"
    }

]

$(".start-quiz").on("click", playGame); //button the opening game panel that starts the game

$(document).on("load", $("#question-panel").addClass("d-none")); //scoped to the document - hides the question panel on page load

$(document).on("click", ".answerBtn", function() {
   userChoice = $(this).attr("data-name");
    if(userChoice === myQuestions[randNum].rightAnswer) {
     clearInterval(questionTimer);
     correctAnswer();
    } else {
     wrongAnswer();
    }
 })

function playGame() { //displays the game panel and question panel - generates the first question and starts the click (baked into generateQuestion).
    $(".game-panel").addClass("d-none");
    $("#question-panel").addClass("d-inline");
    generateQuestion();
}

function wrongAnswer() {
    clearInterval(questionTimer);
    clearQueue();
    generateQuestion();
    qTimer = 15;
  }

function clearQueue() {
  $("#questList").empty();
  $("#answerPanel").empty();
}

function correctAnswer() {  //when the user gets an answer right clear the panel - load the next question... the previous question should not show up again.
  clearInterval(questionTimer);
  userScore++;
  clearQueue();
  generateQuestion();
}

function generateQuestion() {
    qTimer = 16;
    randNum = Math.floor(Math.random([b]) * 4);
    var questionList = $("#questList");
    questionList.append(myQuestions[randNum].qtext);

    for(i = 0; i < myQuestions[randNum].answers.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("answerBtn m-1");
        newBtn.attr("data-name", myQuestions[randNum].answers[i]);
        newBtn.text(myQuestions[randNum].answers[i]);
        newBtn.appendTo("#answerPanel");
    }

   questionTimer = setInterval(function(){
        qTimer--;
          $("#qTimer").html(qTimer);
            if(qTimer <= 0) {
              clearInterval(questionTimer);
              $("#correct-answer").append(myQuestions[randNum].rightAnswer);
              $(".alert").show();
            }
        }, 1000);
    
  }

if(userScore === 4) {
    alert("You got them all right!")
}


