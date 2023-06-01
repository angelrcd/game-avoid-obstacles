import shiftGameBoard from "./modules/gameBoard";
import refreshDisplay from "./modules/gameBoardDisplay";
import { getCollision } from "./modules/gameBoard";
import { updateScoresDisplay, setHighestScore } from "./modules/scoresDisplay";
import { initBoard } from "./modules/gameBoard";

let score = 0;
let bestScore = 0;
let lifes = 5;

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);


function startGame() {
  score = 0;
  lifes = 5;

  initBoard();
  updateScoresDisplay(score, lifes);
  refreshDisplay();

  let counter = setInterval(()=>{
    const incomingColumn = shiftGameBoard();
    const collision = getCollision(incomingColumn)
  
    if (collision === 1) {
      lifes--;
    } else if (collision === 2){
      score++;
    }
  
    refreshDisplay();
    updateScoresDisplay(score, lifes);

    checkGameOver(counter);
  }, 500);
}

function checkGameOver(counter){
  if (!lifes){
    clearInterval(counter);
    bestScore = Math.max(score, bestScore);
    setHighestScore(bestScore);
  }
}