class TicTacToe {
    constructor(playerX, playerO, imageX, imageO, turnX, turnO){
        this.playerX = playerX
        this.playerO = playerO
        this.imageX = "./red-x.jpg"
        this.imageO = "./black-o.jpg"
        this.turnX = true
        this.turnO = false
        this.winningArrays = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
          ];
    }
    clearGameBoard() {
        console.log("inside board clear function");
        // gameBoard.classList.add("show") this gives flex-direction: column
        span.forEach((item) => {
          item.style.opacity = "1";
        });
      }

    playerMoves() {
    //how to say playerX is active?
    if (isActive) {
        box.forEach((square) => {
        square.addEventListener("click", (e) => {
            e.preventDefault();
            if (square.classList.contains("red-x")) {
            return;
            } else {
            square.innerHTML = `<span>1<img src="./red-x.jpg" class="red-x chosen" style="width: 45px; height: 40px"/></span>`;
            //   boxlet.innerHTML += `<img src="./black-o.jpg" class="black-o hidden" style="width: 45px; height: 40px"/>`;

            togglePlayers();
            }
        });
        });
    }
    }

    togglePlayers() {
        counter = 0;
        box.forEach((item) => {
          item.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(item);
            if (
              item.classList.contains("hidden") &&
              item.classList.contains("red-x")
            ) {
              item.classList.toggle("hidden");
            } else {
              return;
            }
          });
        });
      }
}

gameBoard.addEventListener("click", (e) => {
    e.preventDefault();
    // startGame()
    playerXMoves();
  });