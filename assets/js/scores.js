// define consts for existing elements
const scoresList = document.getElementById('scoresList');
const homeBtn = document.getElementById('home');
const clearBtn = document.getElementById('clear');

// get and parse stored scores from localstorage
var scores = JSON.parse(localStorage.getItem('savedScores')) || [];

// loop through scores to create elements
scores.forEach(score => {
    // create element
    const scoreItem = document.createElement('div');
    scoreItem.setAttribute("class", "p-2 border border-secondary rounded my-2")
    // assign values
    scoreItem.textContent = score.initials + " scored " + score.score + " points!";
    // append to page
    scoresList.appendChild(scoreItem);
});


// home button event listener
homeBtn.addEventListener("click", () => {
    window.location.replace('./index.html')
});

// clear scores event listener
clearBtn.addEventListener("click", () => {
    // clear localStorage
    localStorage.clear();
    // reload page to reflect changes
    window.location.reload();
});