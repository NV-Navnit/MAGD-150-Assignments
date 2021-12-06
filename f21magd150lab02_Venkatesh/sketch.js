function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 100);
  stroke(0);
  
  //upper left triangle, bottom right is background
  push();
  colorMode(RGB);
  let a = color(125,0,250);
  fill(a);
  triangle(0,0,400,0,0,400);
  pop();
  
  //orange background
  push();
  noStroke();
  colorMode(HSB);
  let b = color(30,100,100,100);
  fill(b);
  quad(200, 0, 200, 400, 400, 299, 400, 99);
  quad(200, 0, 200, 400, 0, 300, 0, 100);
  pop();
  
  //middle line
  push();
  strokeWeight(3);
  line(400, 0, 200, 200);
  pop();
  
  colorMode(RGB);
  
  //Moon
  push();
  strokeWeight(2);
  strokeCap(SQUARE);
  let c = color('#808080');
  fill(c);
  arc(350,50,80,80,0,3*PI/2);
  pop();
  
  //outer crust
  push();
  strokeWeight(3);
  strokeCap(SQUARE);
  let d = color('#00AA00');
  fill(d);
  arc(200, 200, 300, 300, 0, 3*PI/2);
  pop();
  
  //inner crust
  push();
  strokeCap(SQUARE);
  strokeWeight(2);
  let e = color('#FFFF00');
  fill(e);
  arc(200, 200, 200, 200, 0, 3*PI/2);
  pop();
  
  //innermost crust
  push();
  strokeCap(SQUARE);
  strokeWeight(2);
  let f = color('#FF0000');
  fill(f);
  arc(200, 200, 75, 75, 0, 3*PI/2);
  pop();
  
}