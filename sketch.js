var z = 0;
var noiseVals = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  stroke(255);

  for (var x = 0; x < width; x += 10) {
    noiseVals[x] = [];
    for (var y = 0; y < height; y += 10) {
      noiseVals[x][y] = 0;
    }
  }
}

function draw() {
  background(0);
  for (var x = 0; x < width; x += 10) {
    for (var y = 0; y < height; y += 10) {
      noiseVals[x][y] = 360 * noise(0.01 * x, 0.01 * y, z);

      push();
      translate(x, y);
      rotate(noiseVals[x][y]);
      line(0, 0, 10, 10);

      pop();
    }
  }
  z += 0.005;
}
