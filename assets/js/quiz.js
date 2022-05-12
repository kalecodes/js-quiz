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
var time = 50;
var penalty = 7;
var correct = 0;
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
        correct++;
        score = score + 3;
        validationDisplay.textContent = questions[currentQuestion].answer + " is correct!"
    } else {
        time = time - penalty;
        validationDisplay.textContent = "Sorry, that is incorrect. The correct choice was " + questions[currentQuestion].answer
    }

    // advance to next question
    currentQuestion++;

    // continue or end quiz based on current question position in array
    if (currentQuestion <= questions.length - 1) {
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
    // calculate final score
    const finalTime = time
    finalScore = finalTime + score

    // clear last question and timer
    container.innerHTML = ''

    // create elements to display new content
        // finished prompt header
    const endHeader = document.createElement('h2');
        // score div
    const correctCountDisplay = document.createElement('h3');
    const timeDisplay = document.createElement('h3');
    const scoreDisplay = document.createElement('h3');
    const finalScoreDisplay = document.createElement('h2');
        // initials label
    const initialsLabel = document.createElement('label');
        // initials input
    const initialsInput = document.createElement('input');
    initialsInput.setAttribute("type", "text");
        // submit button
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute("type", "submit");

    // asign content to generated elements
    endHeader.textContent = "Congrats!";
    correctCountDisplay.textContent = "You selected " + correct + "/" + questions.length + " answers correctly."
    timeDisplay.textContent = "You finished with " + finalTime + " seconds left."
    scoreDisplay.textContent = "You received " + score + " points for answering questions correctly."
    finalScoreDisplay.textContent = "Your final score is " + finalScore + " points!"
    initialsLabel.textContent = "Please enter your initals to be saved with your score: "
    submitBtn.textContent = "Submit";

    // append elements to container
    container.appendChild(endHeader);
    container.appendChild(correctCountDisplay);
    container.appendChild(timeDisplay);
    container.appendChild(scoreDisplay);
    container.appendChild(finalScoreDisplay);
    container.appendChild(initialsLabel);
    container.appendChild(initialsInput);
    container.appendChild(submitBtn);

    // event listener to submit initials input and score
    submitBtn.addEventListener("click", () => {
        if (!initialsInput.value) {
            alert("Please enter your initials");
        } else {
            // get current array of saved scores and parse
            var savedScores = JSON.parse(localStorage.getItem('savedScores')) || []
            // create object that holds new score to be saved
            const newScore = {
                initials: initialsInput.value,
                score: finalScore
            }
            // push newScore to savedScores array
            savedScores.push(newScore);
            // stringify and set updated savedScores array to localStorage
            localStorage.setItem("savedScores", JSON.stringify(savedScores));

            // redirect to high scores page to view saved score
            window.location.replace('./scores.html');
        }
    });
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

