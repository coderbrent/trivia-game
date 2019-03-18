var userCorrect = 0;
var userIncorrect = 0;

var myQuestions = {
   questionOne: {
        qtext: "What was the name of the Vampire in Nosferatu?",
        answers: ["Count Orlok", "Norman Bekkler", "Phil Donohue", "Stanley Steemer", "My asshole brother from Los Angeles"]
    },
    questionTwo: {
        qtext: "What movie is Boris Karloff most well known for?",
        answers: "Frankenstein",
        incorrectAnswers: ["Bend it like Boris", "The Green Pile", "Ferris Buellers Day At Work", "Dracula"]
    },
    questionThree: {
        qtext: "In the movie, the Changeling, what is the name of the boy spirit haunting John Russell's gloomy abode?",
        correctAnswer: "Joseph",
        incorrectAnswers: ["Lars", "Tim", "Brett", "Pete Klaven"]
    }
}

$(window).on("load", function() {
    $(".question-panel").toggleClass("invisible", true);
})

$(".start-quiz").on("click", function() {
    $(".question-panel").toggleClass("invisible", false);
    questionOne();
});

function questionOne() {
    $("#qTimer").text(qTimer);
    $("#question-body").text(myQuestions.questionOne.qtext);
    $(".answerBtn").text(myQuestions.questionOne.answers[0]);
    $(".answerBtn").text(myQuestions.questionOne.answers[1]);
    $(".answerBtn").text(myQuestions.questionOne.answers[2]);
    $(".answerBtn").text(myQuestions.questionOne.answers[3]);
    $(".answerBtn").text(myQuestions.questionOne.answers[4]);

    var qTimer = 10;

var daTimer = setInterval(function() {
    --qTimer;
    $("#qTimer").html(qTimer);
    if(qTimer === 0) {
        clearInterval(daTimer);
        qTimer = 0;
        userIncorrect += 1;
        $(".alert").toggleClass("hidden", false);
    } else {
        return;
    }
}, 1000)

$(".answerBtn").on("click", function() {
    var correctOmundo = $(".answerBtn").hasClass("correct");
    if(correctOmundo) {
        clearInterval(daTimer);
        qTimer = 0;
        userCorrect += 1;
        console.log("that is correct");
    } else {
        clearInterval(daTimer);
        qTimer = 0;
        userIncorrect +=1;
        console.log("that is incorrect");
    }
})

  
}

function questionTwo() {
    $("#question-body").text(myQuestions.questionTwo.qtext);
    $(".answerBtn1").text(myQuestions.questionTwo.correctAnswer);
    $(".answerBtn2").text(myQuestions.questionTwo.incorrectAnswers[0]);
    $(".answerBtn correct").text(myQuestions.questionTwo.incorrectAnswers[1]);
    $(".answerBtn3").text(myQuestions.questionTwo.incorrectAnswers[2]);
}









