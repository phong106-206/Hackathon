document.addEventListener("DOMContentLoaded", () => {
    
    // Listing all the references to fill the information dynamically.
    let startButton = document.getElementById("start-btn");
    let startScreen = document.getElementById("start-screen");
    let quizScreen = document.getElementById("quiz-screen");

    let question = document.getElementById("question");
    let answers = document.getElementById("answers");
    let feedback = document.getElementById("feedback");

    let nextButton = document.getElementById("next-btn");
    let resultScreen = document.getElementById("result-screen");
    let finalScore = document.getElementById("final-score");
    let playAgainButton = document.getElementById("play-again-btn");

    //Quiz Questions
    const questions = [
        {
            question: "What is the name of our Front End Dev teacher?",
            answers: [
                "Alan Simpson",
                "Batman",
                "Superman"
            ],
            correct: "Alan Simpson"
        },

        {
            question: "What is the last name of Phong?",
            answers: [
                "Nguyen",
                "Billy Bob",
                "Super Cool"
            ],
            correct: "Nguyen"
        },

        {
            question: "What is the last name of Chris?",
            answers: [
                "Kuharski",
                "Criminal",
                "Monster"
            ],
            correct: "Kuharski"
        },

        {
            question: "What is the last name of Lily?",
            answers: [
                "Despin",
                "Taco",
                "Ford Truck"
            ],
            correct: "Despin"
        },

        {
            question: "What is the last name of Jeremy?",
            answers: [
                "Ramirez",
                "Computer",
                "Raptor"
            ],
            correct: "Ramirez"
        }
    ];


    // Placing the variables on the class level so that they can be accessed by all the functions.
    let currentQuestion = 0
    let score = 0
    
    function startQuiz() {

        startScreen.style.display = "none";
        quizScreen.style.display = "none";
        resultScreen.style.display = "none";

        showQuestion();
    }

    function showQuestion() {
        let current = questions[currentQuestion];
        question.textContent = current.question;
        answers.innerHTML = "";
        feedback.textContent = "";
        nextButton.style.display = "none";

        for (let i = 0; i < current.answers.length; i++) {
            let answerButton = document.createElement("button");
            answerButton.textContent = current.answers[i];
            answerButton.addEventListener("click", () => {
                checkAnswer(current.answers[i]);
            });
            answers.appendChild(answerButton);
        }
    }

    function checkAnswer(selectedAnswer) {
        let current = questions[currentQuestion];

        if (selectedAnswer === current.correct) {
            feedback.textContent = "Correct!";
            score++;
        } else {
            feedback.textContent = "Incorrect! The correct answer is " + current.correct;
        }

        nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        }
        else {
            showResult()
        }
    });

    function showResult() {
        quizScreen.style.display = "none";
        resultScreen.style.display = "block";
        finalScore.textContent = "Your score is" + score + "out of" + questions.length;
    }

    playAgainButton.addEventListener("click", startQuiz);
})