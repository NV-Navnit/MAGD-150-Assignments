var y = 400;
var a = 499.5;
var b = 199.5;
var c = 600;
var d = 300;
var e = 150;

function setup() {
  createCanvas(400, 400);
  
  print("Mouse's x coordinate begins at: " + mouseX);
  print("Mouse's y coordinate begins at: " + mouseY);
  print("The bubble farthest down is yellow with a y coordinate of: " + max(y, a, b, c, d, e));
  print("Distance between the farthest bubbles (magenta and yellow): " + round(dist(125, e, 40, c)));
}

function draw() {
  background(0);
  
  //bubbles
  //Red
  fill(200, 0, 0);
  ellipse(100, y, 100, 100);
  y--;
  
  //Blue
  fill(0, 200, 0);
  ellipse(350 + 10, round(a), 25 * 2, 500 / 10);
  a--;
  
  //Green
  fill(0, 0, 200);
  ellipse(250, round(b), 40, 40);
  b--;
  
  //Yellow
  fill(200, 200, 0);
  ellipse(40, c, 60, 60);
  c--;
  
  //Cyan
  fill(0, 200, 200);
  ellipse(325, d, 150, 150);
  d--;
  
  //Magenta
  fill(200, 0, 200);
  ellipse(125, e, 100, 100);
  e--;
  
  //Lines
  push();
    noStroke();
    stroke(255, 0, 0);
    line(100, 115 - 15, mouseX, mouseY);
    stroke(0, 255, 0);
    line(100, 300, mouseX, mouseY);
    stroke(0, 0, 255);
    line(300, 100, mouseX, mouseY);
    stroke(255, 255, 0);
    line(300, 300, mouseX, mouseY);
    stroke(255);
    strokeWeight(40);
    point(pmouseX, pmouseY);
  pop();
  
  
}


