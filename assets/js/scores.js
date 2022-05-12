// define consts for existing elements
const scoresList = document.getElementById('scoresList');
const homeBtn = document.getElementById('home');
const clearBtn = document.getElementById('clear');

// get and parse stored scores from localstorage
var scores = localStorage.getItem(JSON.parse(savedScores)) || [];

// loop through scores to create elements
scores.forEach(score => {
    // create element
    const scoreItem = document.createElement('li');
    // assign values
    scoreItem.textContent = score.initials + " scored " + score.score + " points!";
    // append to page
    scoresList.appendChild(scoreItem);
})


// home button event listener


// clear scores event listener
    // clear localStorage
    // reload page to reflect changes