var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName + " to What is my Favourite Web-Series ? ");

var highscore = [{
        name: "Dheeraj",
        score: 9
    }

]


function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("right!!");
        score++;

    } else {
        console.log("wrong!")
    }
    console.log("current score is: ", score);
    console.log("------------------------------")
}

var questions = [{
        question: "Which is my Favourite Web-series ?",
        answer: "Chernobyl"
    },
    {
        question: "Who is my favourite character in the series ?",
        answer: "Valery Legasov"
    },
    {
        question: "Why do you think I love the series so much ?",
        answer: "Cinematic experience"
    },
    {
        question: "Does this show interpret my love for physics ?",
        answer: "yes"
    },
    {
        question: "Did I feel sad for the lives of the engineers who lost their lives ?",
        answer: "yes"
    },
    {
        question: "Which episode was the favourite of all 5 of them ?",
        answer: "final episode"
    },
    {
        question: "Why did legasov lie in vienna ?",
        answer: "KGB"
    },
    {
        question: "Was Boris Schebrina a good character ?",
        answer: "yes"
    },
    {
        question: "How much would you rate the show ?",
        answer: "10"
    }
];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

console.log("Your total score is: ", score);

console.log("check out the highscore: ", highscore);