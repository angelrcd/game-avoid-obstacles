import shiftGameBoard from "./modules/gameBoard";
import refreshDisplay from "./modules/gameBoardDisplay";
import { getCollision } from "./modules/gameBoard";
import { updateScoresDisplay } from "./modules/scoresDisplay";

let score = 0;
let bestScore = 0;
let obstaclesHit = 0;

let counter = setInterval(()=>{
  const incomingColumn = shiftGameBoard();
  const collision = getCollision(incomingColumn)

  if (collision === 1) {
    obstaclesHit++;
  } else if (collision === 2){
    score++;
  }

  refreshDisplay();
  updateScoresDisplay(score, obstaclesHit)
}, 1000);