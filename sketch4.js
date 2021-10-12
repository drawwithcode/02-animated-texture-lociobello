let max_distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(0);

  for (let a = 0; a <= width; a += 30) {
    for (let b = 0; b <= height; b += 30) {
      let size = dist(mouseX, mouseY, a, b) / 1000;
      size = constrain(max_distance / size / 3, 6, 50);
      circle(a, b, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
