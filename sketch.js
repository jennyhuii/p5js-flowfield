let num = 2000;
let noiseScale = 300,
  noiseStrength = 1;
let particles = [num];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < num; i++) {
    let loc = createVector(random(width), random(height), 2);
    let angle = 0; 
    let dir = createVector(cos(angle), sin(angle));
    let speed = random(0.25, 1.5); 
    particles[i] = new Particle(loc, dir, speed);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(0, 10);
  noStroke();
  rect(0, 0, width, height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }
}

class Particle {
  constructor(_loc, _dir, _speed) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
  }
  run() {
    this.move();
    this.checkEdges();
    this.update();
  }
  move() {
    let angle =
      noise(
        this.loc.x / noiseScale,
        this.loc.y / noiseScale,
        frameCount / noiseScale
      ) *
      TWO_PI *
      noiseStrength; 
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    let vel = this.dir.copy();
    let d = 1; 
    vel.mult(this.speed * d); 
    this.loc.add(vel); 
  }
  checkEdges() {
    if (
      this.loc.x < 0 ||
      this.loc.x > width ||
      this.loc.y < 0 ||
      this.loc.y > height
    ) {
      this.loc.x = random(width * 1.5);
      this.loc.y = random(height);
    }
  }
  update() {
    fill("#5946b2");
    circle(this.loc.x, this.loc.y, this.loc.z);
  }
}
