let angle = 0;

let layout1;

function preload(){
	layout1 = loadImage("froebeltext.jpg");
}

var cnv; 

function centerCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(0, 0);
	cnv.style ('z-index','-1');
}

function setup() {
	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
	centerCanvas();
	noCursor ();
}

function windowResized() {
	centerCanvas();
}

function draw() {
	push();
	ambientLight (255);
	background(255,29,37);
	translate (mouseX -width/2, mouseY-height/2);
	rotateX(angle);
	rotateZ(angle);

	texture (layout1);
	rectMode(CENTER);
	// rect (0, 0, 250, 300);
	box (300, 300, 300);
	ambientMaterial (255);

	angle +=.005;
	pop();

	
}
