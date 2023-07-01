const numDivs = 75;
const divSize = 50;
const minDistance = 100;


// Function to create game mechanics
document.addEventListener("DOMContentLoaded", function() {

let hiddenImage = document.getElementById("imageRight");
let hiddenImageLeft = document.getElementById("imageLeft");
let showButtons = document.getElementById("buttonOptions");

let startGame = document.querySelector("#startButton");
startGame.addEventListener("click", gameBasics);

function gameBasics() {
  hiddenImage.classList.add("visibleRight");
  hiddenImageLeft.classList.add("visibleLeft");
  showButtons.classList.add("visibleButtons");
  startGame.style.visibility = "hidden";
  startGame.removeEventListener("click", gameBasics);
} 
});

// Create restart image

function startButtonImage() {
  let imgStart = document.createElement("img");
  imgStart.className = "imgStartButton";
  imgStart.src = "images/start-button.png";
  imgStart.alt = "start button";
  imgStart.style.visibility = "visible";

  let containerImg = document.getElementById("containerImg");
  containerImg.appendChild(imgStart);
};

// If restart image clicked then restart game

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