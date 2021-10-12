function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
}

function draw() {
  background(0);

  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < 5000; i++) {
    let a = random(0, TWO_PI);
    let h = randomGaussian(mouseX / 200);
    let r = (exp(h) - 10) / (exp(h) + 1);
    let x = 400 * r * cos(a);
    let y = 400 * r * sin(a);
    circle(x, y, 2);
  }
  pop();

  circle(mouseX, height - 20, 4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
