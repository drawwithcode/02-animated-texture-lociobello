let ondaX;
let ondaY;
let ondaSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(5);
  ondaX = width / 2;
  ondaY = height / 2;
  ondaSize = 0;
}

function draw() {
  background(0);
  stroke(255);
  ondaSize += 20;
  circle(ondaX, ondaY, ondaSize);
}

function mousePressed() {
  ondaX = mouseX;
  ondaY = mouseY;
  ondaSize = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
