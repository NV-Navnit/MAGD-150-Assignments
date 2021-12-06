var x = 50;
var y = 260;
var w = 75;
var h = 75;

var a = 310;
var b = 300;
var CircleSize = 75

var pX, pY;
var Ballbounce = 150;
var speed = 1;

var TVOn = false;

//Function overRect and overCircle have been taken from ButtonExample2, However their implementation in the draw function has been partially changed.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  
  pX = mouseX;
  pY = mouseY;
  
  rect(x,y,w,h);
  ellipse(a,b,CircleSize, CircleSize);
  
  //Antennas
  line(200, 105, 125, 50);
  line(200, 105, 275, 50);
  
  //TV
  push();
    fill(0);
    rect(110, 105, 185, 100);
  pop();

  //Cursor
  strokeWeight(2);
  point(pX, pY);
  
  //labels
  push();
    textSize(20);
    fill(0);
    text("Turns TV on", 35, 360);
    text("Turns TV off", 255, 360);
  pop();

  //creates text upon mouseover and turns TV off if mouse is pressed
  if(overCircle(a, b, CircleSize)){
    push();
      textSize(30);
      fill(0, 225, 0);
      text('Off?', 283, 310); 
    pop();
    if(mouseIsPressed){
      print("Turning the TV off");
      TVOn = false;
    }
  }
  
  //creates text upon mouseover and turns TV on if mouse is pressed
  if(overRect(x,y,w,h)){
    push();
      textSize(30);
      fill(0, 225, 0);
      text('On?', 60, 310); 
    pop();
    if(mouseIsPressed){
      print("Turning the TV on");
      TVOn = true;
    }
  } 
  
  //TV screen and ball animation
  if(TVOn){
      push();
    fill(200);
    rect(120, 120, 165, 70, 20);
      pop();
   
      ellipse(Ballbounce, 155, 50, 50);
    
      if(Ballbounce > 255) {
        speed = -1;
      }
      else if(Ballbounce < 150){
        speed = 1;
      }
    Ballbounce += speed;
  }
  
}
//Checks if mouse is over circle button
function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

//Checks if mouse is over rectangle button
function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}