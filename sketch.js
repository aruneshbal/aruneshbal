function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(mouseX % 256, mouseY % 256, (mouseX + mouseY) % 256);
  ellipse(mouseX, mouseY, 50, 55)
  let c = color(255, 204, 0);
  fill(c);
}