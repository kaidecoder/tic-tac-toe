let gameBoard = document.querySelector(".game-board");
gameBoard.classList.add("grid");
let randomNumber = Math.floor(Math.random() * 49) + 1;
console.log(randomNumber);
let el;
let randomNum = document.querySelector(".random-number");
let btn = document.querySelector(".start-btn");
let div = document.querySelectorAll("div");
const scoreEl = document.querySelector(".score");
const countdownEl = document.querySelector(".countdown");
const startEl = document.querySelector(".start-btn");
let box;

let score = 0;
let timeUp = false;
let timeLimit = 20000;
let countdown;
let birdSound;
let gameOverSound;
let isActive = true;
let img;

function createEl(type, content, cls, cls2, cls3) {
  el = document.createElement(type);
  if (type === "div") {
    el.style.backgroundColor = "#ccc";
    el.innerText = content;
    el.classList.add(cls, cls2, cls3);
    gameBoard.append(el);
  }
}

//only show numbers on boxes.  Hide the boxes
function createBoard() {
  for (let i = 1; i <= 9; i++) {
    if (isActive) {
      createEl("div", `${i}`, "box", "chosen", "red-x");
      box = document.querySelector(".box");
    } else {
      createEl("div", `${i}`, "box", "chosen", "black-0");
    }
  }
}

//append the x/o with a number to each box
function appendImg() {
  console.log("in appendimg");
  box = document.querySelector(".box");
  isActive = true;
  Array.from(box).forEach((boxlet) => {
    console.log("inside boxlet");
    if (boxlet) {
      boxlet.innerHTML += `<img src="./red-x.jpg" style="width: 40px; height: 40px"/>`;
    } else {
      boxlet.innerHTML += `<img src="./black-o.jpg" style="width: 40px; height: 40px"/>`;
    }
  });
}

// //toggle the ships
function togglePlayers(isActive) {
  box = document.querySelector(".box");
  if (isActive) {
    counter = 0;
    Array.from(box).forEach((item) => {
      console.log(item);
      item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(item);
        if (item.classList.contains("hidden")) {
          item.classList.toggle("chosen");
        } else {
          // let clickSound = new Audio("./images/sounds_click.wav");
          // clickSound.play();
          // score += 10;
          item.classList.toggle("hidden");
          // item.style.fontFamily = "cursive";
        }
      });
    });
  }
}

function startGame() {
  createBoard();
  box = document.querySelector("box");
  isActive = true;
  appendImg();
  togglePlayers(isActive);
  //   birdSound = new Audio("./sounds/birds.mp3");
  //   birdSound.play();
  //   countdown = timeLimit / 1000;
  //   scoreEl.textContent = 0;
  //   scoreEl.style.display = "block";
  //   countdownEl.textContent = countdown;
  //   timeUp = false;
  //   score = 0;
  //   setTimeout(function () {
  //     timeUp = true;
  //   }, timeLimit);

  //   let startCountDown = setInterval(function () {
  //     countdown--;
  //     countdownEl.textContent = countdown;
  //     if (countdown < 0) {
  //       countdown = 0;
  //       birdSound.stop();
  //       clearInterval(startCountDown);
  //       timeUp = true;
  //       sinkShip();
  //       endGame();
  //     }
  //   }, 1000);
}

startEl.addEventListener("click", startGame);

// function endGame() {
//   deathSound.stop();
//   birdSound.stop();
//   gameOverSound = new Audio("./images/sounds_game_over.wav");
//   gameOverSound.play();
//   if (score > 10) {
//     countdownEl.textContent = "Great Job!!";
//   } else if (score > 7) {
//     countdownEl.textContent = "Wow.  Keep trying!";
//   } else {
//     countdownEl.textContent = "Try harder!!!";
//   }
// }

// startEl.addEventListener("click", startGame);

// function sinkShip(e) {
//   let deathSound = new Audio("./sounds/images_sounds_enemy-death.wav");
//   deathSound.play();
//   score++;
//   this.style.backgroundImage = 'url("./red-x.jpg")'
//   this.style.backgroundPosition = "center"
//   this.style.backgroundRepeat = "no-repeat"
//   this.style.backgroundSize = "cover"
//   // this.style.pointerEvents = "none"
//   // setTimeout(() => {
//   //   //Need arrow here to remember what 'this' represents
//   //   // this.style.backgroundImage = "url('./images/My project.png')"
//   //   //reengage the click function
//   //   // this.style.pointerEvents = "all"
//   // }, 800);
//   scoreEl.textContent = score;
// }

// ships.forEach((ship) => {
//   let shipDeath = new Audio("./sounds/images_sounds_enemy-death.wav");
//   shipDeath.play();
//   return ship.addEventListener("click", sinkShip);
// });
