const scoreDisplay = document.querySelector(".score");
const highestScoreDisplay = document.querySelector(".best-score");
const lifesDisplay = document.querySelector(".lifes");

export function updateScoresDisplay(score, lifes){
  scoreDisplay.textContent = score;
  lifesDisplay.textContent = lifes;
}

export function setHighestScore(highestScore){
  highestScoreDisplay.textContent = highestScore;
}