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
    console.log(event.target.textContent + 'clicked');
}

// function to handle end of quiz


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

