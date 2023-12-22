let gameBoard = document.querySelector(".game-board");
let box = document.querySelectorAll(".box");
let span = document.querySelectorAll("span");
let info = document.querySelector(".game-info");
let one = document.querySelector(".one")

let playerOne = "X";
let playerTwo = "O";



function clearGameBoard() {
  console.log("inside board clear function");
  // gameBoard.classList.add("show") this gives flex-direction: column
  span.forEach((item) => {
    item.style.opacity = ".5";
  });
}
clearGameBoard();

function setInfo(player) {
  info.innerHTML += "<br/><br />Player X  goes first";
}

function startGame() {
  console.log("inside start");
  clearGameBoard();
  setInfo();
}
startGame();

/**
 * ! Click on any square to draw the X.  Check if there is something there already if so, message, otherwise, draw
 **/
let square
function playerXMoves() {
  span.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.preventDefault();
      if (square.innerHTML === "X" || square.innerHTML === "O") {
        return;
      } else {
        square.innerHTML = "X";
        // if(checkforAWin("X")){
        //     info.innerHTML = "We have a winner!"
        // }
      }
    });
  });
}


//I need to say first item equal X
function checkforAWin(player) {
  Array.from(span).forEach((item) => {
    console.log(item)
  });
}

gameBoard.addEventListener("click", (e) => {
  e.preventDefault();
  // startGame()
  playerXMoves();
});


