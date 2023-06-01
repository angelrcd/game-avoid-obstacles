import { gameBoardState } from "./gameBoard";
const boardColumns = document.querySelectorAll("#game-board .game-board-column");

export default function refreshDisplay(){
  boardColumns.forEach((boardColumn, columnNumber) => {
    const cells = boardColumn.querySelectorAll(".cell");

    cells.forEach(cell =>{
      const cellPosition = cell.getAttribute("data-position")
      const cellState = gameBoardState[columnNumber][cellPosition]

      if (cellState === 0){
        cell.setAttribute("data-state", "empty");
      } else if (cellState === 1) {
        cell.setAttribute("data-state", "obstacle");
      } else {
        cell.setAttribute("data-state", "scoreup")
      }
    })
  })
}
