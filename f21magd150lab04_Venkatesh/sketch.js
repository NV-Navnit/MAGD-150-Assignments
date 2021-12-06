var x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  if (x == 0){
    print("One pizza with olives, enjoy!");
    print("Press a key to remove the cheese and press the mouse to change the olives from black to green.")
  }
  else if (x == 300){
    x = 50;
  }
  
  while(x <= width){
      ellipse(x, 200, 300, 300);
      x += 50;
        }

  //crust
  push();
  fill('#f9f9dc');
  ellipse(200, 200, 350);
  pop();
  
  //tomato sauce
  push();
  fill(255, 0, 0);
  ellipse(200, 200, 300);
  pop();
  
  //pressing a key gets rid of the cheese, for the lactose intolerant people or something
  if (keyIsPressed){
  }
  else{
    fill(255, 255, 0);
  ellipse(200, 200, 280);
  }
  
  //pressing the mouse changes the olives from black to green
  if (mouseIsPressed){
    
    fill(190, 255, 0);
    ellipse(120, 120, 20);
    ellipse(220, 300, 20);
    ellipse(300, 220, 20);
    ellipse(160, 170, 20);
    ellipse(260, 110, 20);
 
}
  else{
    fill(0, 0, 0);
    ellipse(120, 120, 20);
    ellipse(220, 300, 20);
    ellipse(300, 220, 20);
    ellipse(160, 170, 20);
    ellipse(260, 110, 20);
  }
  
  push();
  fill(255);
  strokeWeight(10);
  point(mouseX, mouseY);
  pop();
}
