let gameBoard = document.querySelector(".game-board");
let box = document.querySelectorAll(".box")
let span = document.querySelectorAll("span")
let info = document.querySelector(".game-info")

let playerOne = "X"
let playerTwo = "O"

function clearGameBoard(){
    console.log("inside board clear function")
    // gameBoard.classList.add("show") this gives flex-direction: column
    span.forEach(item => {
        item.innerHTML = ""
    })
}
clearGameBoard()

function setInfo(){
    info.innerHTML += "<br/><br />Player X goes first"
}

function startGame(){
    console.log("inside start")
    clearGameBoard()
    setInfo()
}
gameBoard.addEventListener("click", e => {
    e.preventDefault()
    startGame()
})