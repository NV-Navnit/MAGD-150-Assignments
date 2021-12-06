function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(250);
  
  /*Theme is building, and must include symmetry, Contrast, Grouping, and scale
  I'm thinking of making something loosely inspired by starin hall, with the two
  buildings being connected 
  */
  
  push();
  strokeWeight(2);
  noFill();
  ellipse(300,150,600,300);
  fill(175);
  ellipse(300,250,595,50);
  strokeWeight(100);
  
  point(600, 0);
  
  strokeWeight(70);
  stroke(200);
  point(600, 0);
  pop();
  
  //I'm adding a border to better illustrate where the canvas starts and ends
  strokeWeight(5);
  line(0,0,0,300);
  line(0,0,600,0);
  line(600,300,0,300);
  line(600,300,600,0);
  //end of border
  
  ellipseMode(CENTER);
  
  push();
  strokeWeight(4);
  stroke(150);
  line(225,150,375,150);
  stroke(175);
  line(225,100,375,100);
  stroke(125);
  line(225,200,375,200);
  pop();
  
  //225,50,75,250
  //left building
  push();
  rectMode(CENTER);
  noStroke();
  fill(100);
  rect(153,150,150,200);
  pop();
  
  rectMode(CORNERS);
  
  //right building
  push();
  noStroke();
  fill(175);
  rect(523,50,375,100);
  pop();
  
  push();
  noStroke();
  fill(150)
  rect(523,100,375,150);
  pop();
  
  push();
  noStroke();
  fill(125);
  rect(523,150,375,200);
  pop();
  
  push();
  noStroke();
  fill(100);
  rect(523,200,375,250);
  pop();
  
}