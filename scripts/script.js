const numDivs = 75;
const divSize = 50;
const minDistance = 100;


/* Overall functions to create game mechanics */
document.addEventListener("DOMContentLoaded", function() {

// To create movement in the images of rock, paper, scissors

let showButtons = document.getElementById("buttonOptions");
let addUserPoints = document.getElementById("userPoints");
let addComputerPoints = document.getElementById("computerPoints");
const moveRockLeft = document.getElementById("rockLeft");
const moveRockRight = document.getElementById("rockRight");
const movePaperLeft = document.getElementById("paperLeft")
const movePaperRight = document.getElementById("paperRight");
const moveScissorsLeft = document.getElementById("scissorsLeft");
const moveScissorsRight = document.getElementById("scissorsRight");
const moveTieMessage = document.getElementById("tie")

function moveImageUp() {
  moveRockLeft.style.top = '53%';
  moveRockRight.style.top = '53%';
  movePaperLeft.style.top = '48%';
  movePaperRight.style.top = '48%';
  moveScissorsLeft.style.top = '48%';
  moveScissorsRight.style.top = '48%';
};

function moveImageDown() {
  moveRockLeft.style.top = '70%';
  moveRockRight.style.top = '70%';
  movePaperLeft.style.top = '63%';
  movePaperRight.style.top = '63%';
  moveScissorsLeft.style.top = '63%';
  moveScissorsRight.style.top = '63%';
};

function timedMovement() {
  setTimeout(moveImageDown, 500); 
  setTimeout(moveImageUp, 700); 
  setTimeout(moveImageDown, 900); 
  setTimeout(moveImageUp, 1100); 
};

function lastTimedMovement() {
  setTimeout(moveImageDown, 1300); 
  setTimeout(moveImageUp, 1500); 
};

function tieMoveUp() {
  moveTieMessage.style.top = '105%';
  
}

function tieMoveDown() {
  moveTieMessage.style.top = '94%';
}

function tieMessage() {
  setTimeout(tieMoveUp, 500);
  setTimeout(tieMoveDown, 700);
  setTimeout(tieMoveUp, 2300);
}

// Hide other images paper and scissors

function hideImages() {
  movePaperLeft.style.opacity = "0";
  movePaperRight.style.opacity = "0";
  moveScissorsLeft.style.opacity = "0";
  moveScissorsRight.style.opacity = "0";
};

// Button functions

function disableButtons() {
  rockButtonChoice.style.cursor = "not-allowed";
  paperButtonChoice.style.cursor = "not-allowed";
  scissorsButtonChoice.style.cursor = "not-allowed";
  rockButtonChoice.style.pointerEvents = "none";
  paperButtonChoice.style.pointerEvents = "none";
  scissorsButtonChoice.style.pointerEvents = "none";
};

function enableButtons() {
  rockButtonChoice.style.cursor = "auto";
  paperButtonChoice.style.cursor = "auto";
  scissorsButtonChoice.style.cursor = "auto";
  rockButtonChoice.style.pointerEvents = "auto";
  paperButtonChoice.style.pointerEvents = "auto";
  scissorsButtonChoice.style.pointerEvents = "auto";
};

// Computers choice random

function computerChoice() {
  arrayChoice = ["rock", "paper", "scissors"];

  let randomChoice = Math.floor(Math.random() * arrayChoice.length);
  let computerRandom = arrayChoice[randomChoice];
  return computerRandom;
};

// Main function for the game rock, paper, scissors
let countdown = 10;
let computerPoints = 0;
let userPoints = 0;
let tieCount = 0;

function playButton() {
  moveRockRight.classList.add("visibleRight");
  moveRockLeft.classList.add("visibleLeft");
  showButtons.classList.add("visibleButtons");
  startGame.style.visibility = "hidden";
}

function gameBasics(buttonChoice) {
  let computerRandom = computerChoice();
  if (countdown === 0) {
    moveTieMessage.style.top = '94%';
    alert("User points: " + userPoints + " Computer points: " + computerPoints + " Tie Count: " + tieCount);
    return location.reload();
  } else if (buttonChoice  === "rock" && computerRandom === "rock") {
    disableButtons();
    countdown--;
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    tieMessage(); // Call tieMessage directly
    lastTimedMovement();
    setTimeout(function() {
      enableButtons();
    }, 1500);
    
    ++tieCount;
  } else if (buttonChoice  === "paper" && computerRandom === "paper") {
    countdown--;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    tieMessage(); // Call tieMessage directly
    setTimeout(function() {
      moveRockRight.style.opacity = 0; movePaperRight.style.opacity = 1;
      moveRockLeft.style.opacity = 0; movePaperLeft.style.opacity = 1;
      enableButtons();
    }, 1500);
    lastTimedMovement();
    ++tieCount;
  } else if (buttonChoice  === "scissors" && computerRandom === "scissors") {
    countdown--;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    tieMessage(); // Call tieMessage directly
    setTimeout(function() {
      moveRockRight.style.opacity = 0; moveScissorsRight.style.opacity = 1;
      moveRockLeft.style.opacity = 0; moveScissorsLeft.style.opacity = 1;
      enableButtons();
    }, 1500);
    lastTimedMovement();
    ++tieCount;
  } else if (buttonChoice  === "rock" && computerRandom === "paper") {
    countdown--;
    ++computerPoints;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    setTimeout(function() {
      moveRockRight.style.opacity = 0; movePaperRight.style.opacity = 1;
      addComputerPoints.textContent += "1"; enableButtons();
    }, 1500);
    lastTimedMovement();
  } else if (buttonChoice  === "rock" && computerRandom === "scissors") {
    countdown--;
    ++userPoints;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    setTimeout(function() {
      moveRockRight.style.opacity = 0; moveScissorsRight.style.opacity = 1;
      addUserPoints.textContent += "1"; enableButtons();
    }, 1500);
    lastTimedMovement(); 
  } else if (buttonChoice  === "paper" && computerRandom === "rock") {
    countdown--;
    ++userPoints;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    setTimeout(function() {
      moveRockLeft.style.opacity = 0; movePaperLeft.style.opacity = 1;
      addUserPoints.textContent += "1"; enableButtons();
    }, 1500);
    lastTimedMovement();
  } else if (buttonChoice  === "paper" && computerRandom === "scissors") {
    countdown--;
    ++computerPoints;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    setTimeout(function() {
      moveRockLeft.style.opacity = 0; movePaperLeft.style.opacity = 1;
      moveRockRight.style.opacity = 0; moveScissorsRight.style.opacity = 1;
      addComputerPoints.textContent += "1"; enableButtons();
    }, 1500);
    lastTimedMovement();
  } else if (buttonChoice  === "scissors" && computerRandom === "rock") {
    countdown--;
    ++computerPoints;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    setTimeout(function() {
      moveRockLeft.style.opacity = 0; moveScissorsLeft.style.opacity = 1;
      addComputerPoints.textContent += "1"; enableButtons();
    }, 1500);
    lastTimedMovement();
  } else if (buttonChoice  === "scissors" && computerRandom === "paper") {
    countdown--;
    ++userPoints;
    disableButtons();
    hideImages();
    moveRockRight.style.opacity = 1;
    moveRockLeft.style.opacity = 1;
    timedMovement();
    setTimeout(function() {
      moveRockLeft.style.opacity = 0; moveScissorsLeft.style.opacity = 1;
      moveRockRight.style.opacity = 0; movePaperRight.style.opacity = 1;
      addUserPoints.textContent += "1"; enableButtons();
    }, 1500);
    lastTimedMovement();
  }
}

// All events for the game stored here

let startGame = document.querySelector("#startButton");
startGame.addEventListener("click", playButton);

const rockButtonChoice = document.getElementById("rockChoice");
rockButtonChoice.addEventListener("click", function() {
  gameBasics("rock");
});

const paperButtonChoice = document.getElementById("paperChoice");
paperButtonChoice.addEventListener("click", function() {
  gameBasics("paper");
});

const scissorsButtonChoice = document.getElementById("scissorsChoice");
scissorsButtonChoice.addEventListener("click", function() {
  gameBasics("scissors");
});
});


// If the restart image is clicked then refresh and restart game

function gameRestart() {
  location.reload();
}; 

let restartButton = document.getElementById("restartButtonContainer");
restartButton.addEventListener("click", gameRestart);


// Array to store the positions of existing divs
const divPositions = [];

// Function to check if a new position collides with existing divs
function collidesWithExisting(position) {
  for (const existingPos of divPositions) {
    const distanceX = Math.abs(position.x - existingPos.x);
    const distanceY = Math.abs(position.y - existingPos.y);
    if (distanceX < minDistance && distanceY < minDistance) {
      return true;
    }
  }
  return false;
}

// Function to generate a random position that doesn't collide with existing divs

function getRandomPosition() {
  let position;
  do {
    position = {
      x: Math.floor(Math.random() * (window.innerWidth - divSize)),
      y: Math.floor(Math.random() * (window.innerHeight - divSize))
    };
  } while (collidesWithExisting(position));
  return position;
}

// Function to create a random div and position it
function createRandomDiv() {
  const div = document.createElement("div");
  div.className = "gameDiv";
  const position = getRandomPosition();
  div.style.position = 'absolute';
  div.style.left = position.x + "px";
  div.style.top = position.y + "px";
  div.style.zIndex = '-1'
  div.style.rotate = position.x + "deg";
  divPositions.push(position);
  return div;
}

// Generate and append random divs to the body
for (let i = 0; i < numDivs; i++) {
  const randomDiv = createRandomDiv();
  document.body.appendChild(randomDiv);
}