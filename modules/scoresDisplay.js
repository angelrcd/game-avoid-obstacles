const scoreDisplay = document.querySelector(".score");
const bestScoreDisplay = document.querySelector(".best-score");
const lifesDisplay = document.querySelector(".lifes");

export function updateScoresDisplay(score, obstaclesHit){
  scoreDisplay.textContent = score;
  lifesDisplay.textContent = 5 - obstaclesHit;
}