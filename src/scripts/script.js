const numDivs = 40;

// Function to generate a random position
function getRandomPosition() {
  const posX = Math.floor(Math.random() * window.innerWidth);
  const posY = Math.floor(Math.random() * window.innerHeight);
  return { x: posX, y: posY };
}

// Function to create a random div and position it
function createRandomDiv() {
  const div = document.createElement("div");
  div.className = "gameDiv";
  const position = getRandomPosition();
  div.style.position = 'absolute';
  div.style.left = position.x + "px";
  div.style.top = position.y + "px";
  return div;
}

// Generate and append random divs to the container
for (let i = 0; i < numDivs; i++) {
  const randomDiv = createRandomDiv();
  document.body.appendChild(randomDiv);
}