
//this sets the sketch up
void setup() {
  println("setup");
  size(400,400);
  //background(255);
  //noStroke();
}

//this runs the whole time in a loop
void draw() {
  println("running");
  fill(127); 
  //my Rect
  rect(0,0,100,100);
  //draw they Eyes
  fill(85);
  
  //1st Row
  ellipse(30,30,25,25);
  ellipse(70,30,25,25);
  //2nd Row
  ellipse(30,70,25,25);
  ellipse(70,70,25,25);
}






