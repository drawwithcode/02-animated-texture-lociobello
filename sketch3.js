let points = [],
  x,
  j,
  lines_length = 10,
  x_spacing = (y_spacing = lines_length * 2 - 2);

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (x = 0; x < width / x_spacing; x++) {
    for (y = 0; y < height / y_spacing; y++) {
      points.push(createVector(x * x_spacing, y * y_spacing));
    }
  }
}

function draw() {
  background(0);

  points.forEach(function (point) {
    drawVectorFromPoint(point);
  });
}

function drawVectorFromPoint(anchorLocation) {
  let mouse = createVector(mouseX, mouseY);
  let lineVector = p5.Vector.sub(mouse, anchorLocation);
  lineVector.setMag(lines_length);

  stroke(255);
  line(
    anchorLocation.x,
    anchorLocation.y,
    anchorLocation.x + lineVector.x,
    anchorLocation.y + lineVector.y
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
