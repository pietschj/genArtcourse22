/// <reference path="../global.d.ts" />

function setup() {
  //change the dimension of your screen
  //arguments: w, h
  createCanvas(400, 400);
    background(55);
	rectMode(CENTER);
	strokeWeight(3);
	frameRate(2);
}

function draw() {

//this is a comment
	fill(204, 102, 0);
	//draws a rectangle 
	//arguments: x, y, w, h
	rect(50,50,100,50);
	fill('#2CF244');
	//draws a circle
	//arguments: x,y,w,h
	ellipse(200, 200, 100, 100);
	triangle(200,200,50,50, 200,100);
}
