// questions array
const questions = [
    {
        question: 'question1',
        choices: ['choice1','choice2','choice3','choice 4'],
        answer: 'choice1'
    },
    {
        question: 'question2',
        choices: ['choice2','choice3','choice4','choice1'],
        answer: 'choice2'
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    },
    {
        question: '',
        choices: ['','','',''],
        answer: ''
    }
]

// define DOM constants
const container = document.getElementById('quiz-container');
const timer = document.getElementById('timer');
const content = document.getElementById('quiz-content');
const startBtn = document.getElementById('start');
const choiceElement = document.getElementById('choice');

// define function variables
var time = 80;
var penalty = 10;
var score = 0;
var currentQuestion = 0;

// function to conditionally render questions
const displayQuestion = () => {
    // clear starter content
    content.innerHTML = '';
    // create ul to display question
    const questionDisplay = document.createElement('ul');
    questionDisplay.textContent = questions[currentQuestion].question
    // append element to page
    content.appendChild(questionDisplay)
    // create li to display each choice
    questions[currentQuestion].choices.forEach(choice => {
        const choiceDisplay = document.createElement('li');
        choiceDisplay.textContent = choice;
        choiceDisplay.setAttribute('id', 'choice');
        questionDisplay.appendChild(choiceDisplay);
        // event listener for choice selection on click
        choiceDisplay.addEventListener("click", validateChoice);
    })
};

// function to handle answer validation
const validateChoice = (event) => {
    // create element to display validaton response
    validationDisplay = document.createElement("div");
    
    // capture clicked value
    const selected = event.target.textContent;
    // validate clicked value
    if (selected == questions[currentQuestion].answer) {
        score = score + 5;
        validationDisplay.textContent = questions[currentQuestion].answer + " is correct!"
    } else {
        time = time - penalty;
        validationDisplay.textContent = "Sorry, that is incorrect. The correct choice was " + questions[currentQuestion].answer
    }

    // advance to next question
    currentQuestion++;

    // continue or end quiz based on current question position in array
    if (currentQuestion <= questions.length) {
        displayQuestion(currentQuestion);
        // append validation response after new question is generated (prevents clearing)
        content.appendChild(validationDisplay);
    } else {
        validationDisplay.textContent = '';
        endQuiz();
    }
}

// function to handle end of quiz
const endQuiz = () => {
    // clear last question and timer
    questionDisplay.innerHTML = ''
    timer.textContent = 'Quiz complete'
    // create elements to display new content
        // finished prompt header
        // score div
        // initials label
        // initials input
        // submit button


    // append elements to container


    // calculate final score
        // remaining time + score

    // event listener to submit initials input and score

};

// event listener to start quiz on button click
startBtn.addEventListener("click", () => {
    setInterval(() => {
        if (time > 0) {
            time--;
            timer.textContent = "Time Remaining: " + time;
        } else {
            endQuiz();
            timer.textContent = "Time's up!"
        }
    }, 1000);
    displayQuestion();
});

