/// <reference path="../global.d.ts" />

function setup() {
  //change the dimension of your screen
  //arguments: w, h
  createCanvas(600, 600);
	background(55);
	rectMode(CENTER);
	strokeWeight(3);
	frameRate(2);
}

function draw() {

//this is a comment
	fill(204, 204, 204);
	//draws a rectangle 
	//arguments: x, y, w, h
	rect(50,50,100,50);
	fill('blue');
	//draws a circle
	//arguments: x,y,w,h
	//with system variables
	ellipseMode(CENTER);
	ellipse(width/2, height/2, width/2, width/2);
}
