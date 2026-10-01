document.addEventListener("DOMContentLoaded", () => {

    // Get elements from HTML
    let start_button =
        document.getElementById("start-btn");

    let start_screen =
        document.getElementById("start-screen");

    let quiz_screen =
        document.getElementById("quiz-screen");

    let question =
        document.getElementById("question");

    let answers =
        document.getElementById("answers");

    let feedback =
        document.getElementById("feedback");

    let next_button =
        document.getElementById("next-btn");

    let result_screen =
        document.getElementById("result-screen");

    let final_score =
        document.getElementById("final-score");

    let play_again_button =
        document.getElementById("play-again-btn");


    // Store quiz questions
    let questions = [
        {
            question: "Who is your favorite teacher?",

            answers: [
                "Mr. Smith",
                "Ms. Brown",
                "Mr. Lee",
                "Ms. Wilson"
            ],

            correct_answer: "Mr. Smith"
        },

        {
            question: "What does HTML stand for?",

            answers: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Home Tool Markup Language",
                "Hyperlink Text Management Language"
            ],

            correct_answer:
                "Hyper Text Markup Language"
        },

        {
            question:
                "Which language makes a webpage interactive?",

            answers: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],

            correct_answer: "JavaScript"
        }
    ];


    // Store current question and score
    let current_question = 0;
    let score = 0;


    // Start the quiz
    start_button.addEventListener("click", startQuiz);


    function startQuiz() {

        current_question = 0;
        score = 0;

        start_screen.style.display = "none";

        quiz_screen.style.display = "block";

        result_screen.style.display = "none";

        showQuestion();
    }


    // Display the current question
    function showQuestion() {

        let current =
            questions[current_question];


        question.textContent =
            current.question;


        answers.innerHTML = "";

        feedback.textContent = "";

        next_button.style.display = "none";


        // Create answer buttons
        for (let i = 0;
             i < current.answers.length;
             i++) {

            let answer_button =
                document.createElement("button");


            answer_button.textContent =
                current.answers[i];


            answer_button.addEventListener(
                "click",
                () => {

                    checkAnswer(
                        current.answers[i]
                    );

                }
            );


            answers.appendChild(answer_button);
        }
    }


    // Check the answer
    function checkAnswer(selected_answer) {

        let current =
            questions[current_question];


        if (selected_answer === current.correct_answer) {

            feedback.textContent = "Correct!";

            score++;

        } else {

            feedback.textContent =
                "Incorrect! The correct answer is " +
                current.correct_answer;
        }


        // Disable answer buttons
        let answer_buttons =
            answers.querySelectorAll("button");


        for (let i = 0;
             i < answer_buttons.length;
             i++) {

            answer_buttons[i].disabled = true;
        }


        next_button.style.display = "block";
    }


    // Go to the next question
    next_button.addEventListener(
        "click",
        () => {

            current_question++;


            if (current_question < questions.length) {

                showQuestion();

            } else {

                showResult();
            }

        }
    );


    // Display the result
    function showResult() {

        quiz_screen.style.display = "none";

        result_screen.style.display = "block";


        final_score.textContent =
            "Your score is " +
            score +
            " out of " +
            questions.length;
    }


    // Play again
    play_again_button.addEventListener(
        "click",
        startQuiz
    );

});