let gameBoard = document.querySelector(".game-board");
let box = document.querySelectorAll(".box");
let span = document.querySelectorAll("span");
let info = document.querySelector(".game-info");
let one = document.querySelector(".one")

let playerOne = "X";
let playerTwo = "O";
let winningArrays = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]



function clearGameBoard() {
  console.log("inside board clear function");
  // gameBoard.classList.add("show") this gives flex-direction: column
  span.forEach((item) => {
    item.style.opacity = "1";
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
    //how to say playerX is active?
    let playerX
    let isActive = true
  box.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.preventDefault();
      if (square.innerHTML === "X" || square.innerHTML === "O") {
        return;
      } else {
        Array.from(box).forEach((boxlet) => {
            if (boxlet.innerText) {
              boxlet.innerHTML += `<img src="./red-x.jpg" class="red-x hidden" style="width: 45px; height: 40px"/>`;
              boxlet.innerHTML += `<img src="./black-o.jpg" class="black-o hidden" style="width: 45px; height: 40px"/>`;
            }
          });
        togglePlayers()
      }
    });
  });
}


//I need to say first item equal X
// function checkforAWin(player) {
//     for(let i=1; i<winningArrays.length; i++){
//         console.log(winningArrays[i])
//         if(winningArrays[i].includes(square[i].innerHTML)){
//             console.log(winningArrays[i], square[i].innerHTML)
//         }
//     }
// }


function togglePlayers() {
    counter = 0;
    box.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        // console.log(item);
        if (item.classList.contains("hidden") && item.classList.contains("red-x")) {
          item.classList.toggle("hidden");
        } else {
            return
        }
      });
    });
  }

gameBoard.addEventListener("click", (e) => {
  e.preventDefault();
  // startGame()
  playerXMoves();
});


