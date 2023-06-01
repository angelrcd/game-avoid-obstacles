import refreshDisplay from "./gameBoardDisplay";
import { currentPosition } from "./controller";

const cellState = {
  empty : 0,
  obstacle : 1,
  scoreUp : 2,
}
export const gameBoardState = [];

export function initBoard(){
  gameBoardState.length = 0;
  // First two columns are empty
  gameBoardState.push([0,0,0]);
  gameBoardState.push([0,0,0]);

  for (let i=0; i< 7; i++) {
    gameBoardState.push(generateRandomColumn());
  }
}

function generateRandomColumn(){
  const result = [];

  while (result.length < 3) {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random integer between 0 and 2

    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
}

export default function shiftGameBoard(){
  const incomingColumn = gameBoardState.shift()
  gameBoardState.push(generateRandomColumn());
  return incomingColumn;
}

export function getCollision(incomingColumn){
  return incomingColumn[currentPosition];
}