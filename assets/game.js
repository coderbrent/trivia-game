var userScore = 0;
var questionList;
var qTimer = 15;
var userChoice;
var questionTimer;
var userCorrectAnswer;
var currQues;
var randNum;

var myQuestions = [
    {
        qtext: "What was the name of the Vampire in Nosferatu?",
        answers: ["Count Orlok", "Norman Bekkler", "Phil Donohue", "Stanley Steemer", "My asshole brother from Los Angeles"],
        rightAnswer: "Count Orlok"
    },
    {
        qtext: "What movie is Boris Karloff most well known for?",
        answers: ["Bend it like Boris", "The Green Pile", "Ferris Buellers Day At Work", "Dracula", "Frankenstein"],
        rightAnswer: "Frankenstein"
    },
    {
        qtext: "In the movie, the Changeling, what is the name of the boy spirit haunting John Russell's gloomy abode?",
        answers: ["Lars", "Joseph", "Flea", "Pete Klaven", "Will Smith"],
        rightAnswer: "Joseph"
    },
    {
        qtext: "What Italian city was the movie Don't Look Now primarily filmed in?",
        answers: ["Abruzzi", "Rome", "Milan", "Venice", "Naples"],
        rightAnswer: "Venice"
    }
    
]


$(".start-quiz").on("click", playGame); //button the opening game panel that starts the game

$(document).on("load", $("#question-panel").addClass("d-none")); //scoped to the document - hides the question panel on page load

$(document).on("click", ".answerBtn", function() {
    userChoice = $(this).attr("data-name");
    currQues = myQuestions[randNum].answers;
    if(userChoice === myQuestions[randNum].rightAnswer) {
    clearInterval(questionTimer);
    correctAnswer(); //we run the correctAnswer function if the player clicks the correct button.
    } else {
        clearInterval(questionTimer);
        currQues.pop;
    }
 })

function playGame() { //displays the game panel and question panel - generates the first question and starts the click (baked into generateQuestion).
    $(".game-panel").addClass("d-none");
    $("#question-panel").addClass("d-inline");
    generateQuestion();
}


function wrongAnswer() {
    clearInterval(questionTimer);
    userIncorrect--;
  }


function correctAnswer() {  //when the user gets an answer right clear the panel - load the next question... the previous question should not show up again.
  $("#questList").empty();
  $("#answerPanel").empty();
  myQuestions[randNum].answers.pop; //clears both question and answer choice divs
  generateQuestion();
  qTimer = 15;
  }

function generateQuestion() {
  questionPop = $("#questList");
  b = 0
  randNum = Math.floor(Math.random([b]) * 3 + 1)    //is this line scoped right?
  questionPop.append(myQuestions[randNum].qtext);

  userCorrectAnswer = myQuestions[0].rightAnswer;
    var userSelection = $(".answerBtn").on("click", function () {
        document.getElementById("answerBtn").value;
        console.log(userSelection);
    })

    genAnswerButtons();

    questionTimer = setInterval(function(){
      qTimer--;
        $("#qTimer").html(qTimer);
          if(qTimer <= 0) {
            clearInterval(questionTimer);
            console.log("times up!");
            $("#correct-answer").append(myQuestions[randNum].rightAnswer);
            $(".alert").show();
        }
    }, 1000);
   
}
    
function genAnswerButtons() {
    $("#answerPanel").empty();
    for(i = 0; i < myQuestions[randNum].answers.length; i++) {
        var newButt = $("<button>");
        newButt.addClass("answerBtn m-1");
        newButt.attr("data-name", myQuestions[randNum].answers[i]);
        newButt.text(myQuestions[randNum].answers[i]);
        newButt.appendTo("#answerPanel");
    }
  }







