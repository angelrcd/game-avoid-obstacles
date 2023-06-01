import shiftGameBoard from "./modules/gameBoard";
import refreshDisplay from "./modules/gameBoardDisplay";

let counter = setInterval(()=>{
  shiftGameBoard();
  refreshDisplay();
}, 2000);