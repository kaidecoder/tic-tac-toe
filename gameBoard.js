let gameBoard = document.querySelector(".game-board");
let box = document.querySelectorAll(".box");
let span = document.querySelectorAll("span");
let info = document.querySelector(".game-info");

let playerOne = "X";
let playerTwo = "O";

function clearGameBoard() {
  console.log("inside board clear function");
  // gameBoard.classList.add("show") this gives flex-direction: column
  span.forEach((item) => {
    console.log(item.innerHTML);
    item.style.opacity = "0";
  });
}
clearGameBoard();

function setInfo() {
  info.innerHTML += "<br/><br />Player X goes first";
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
function playerXMoves() {
  box.forEach((square) => {
    console.log("inside the box");
    square.addEventListener("click", (e) => {
      e.preventDefault();
      if (square.innerHTML === "X" || square.innerHTML === "O") {
        return;
      } else {
        square.innerHTML = "X";
        checkforAWin("X");
      }
    });
  });
}

//I need to say first item equal X
function checkforAWin(player) {
  span.forEach((item) => {
    console.log(item.innerHTML);
    for (let x = 0; x < item.length; i++) {
      if (item[i].innerHTML === "X" && item.innerHTML === "X") {
        console.log("yes");
      }
    }
  });
}

gameBoard.addEventListener("click", (e) => {
  e.preventDefault();
  // startGame()
  playerXMoves();
});
