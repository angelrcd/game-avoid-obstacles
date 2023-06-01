const TOP_MOST_POSITION = 0;
const BOTTOM_MOST_POSITION = 2;
const controllerCells = document.querySelectorAll("#controller-column .controller-cell");

// Initial position
let currentPosition = 1;

function moveUp(){
  if (currentPosition === TOP_MOST_POSITION){
    return;
  } else {
    currentPosition--;
  }
}

function moveDown(){
  if (currentPosition === BOTTOM_MOST_POSITION){
    return;
  } else {
    currentPosition++;
  }
}

function clearSelectedControllerPosition(){
  controllerCells.forEach(cell => {
    cell.setAttribute("aria-selected", false);
  })
}

function selectCurrentPosition(){
  controllerCells[currentPosition].setAttribute("aria-selected", true);
}

document.addEventListener("keydown", (e)=> {
  if(e.key === "ArrowUp"){
    moveUp();
    clearSelectedControllerPosition();
    selectCurrentPosition();
  } else if (e.key === "ArrowDown"){
    moveDown();
    clearSelectedControllerPosition();
    selectCurrentPosition();
  }
})