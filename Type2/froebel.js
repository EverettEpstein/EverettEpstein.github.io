let angle = 0;

let wood;

function preload(){
	wood = loadImage("fbimage.jpg");
}
var cnv;
let value = 255; 

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
	fill(value)
	ambientLight (247,208,0);
	background(255);
	translate (mouseX -width/2, mouseY-height/2);
	rotateX(angle * .2);
	rotateZ(angle * .25);

	texture (wood);
	rectMode(CENTER);
	// rect (0, 0, 250, 300);
	cylinder (50, 400);
	ambientMaterial (255);

	angle +=.05;
}

// function mouseClicked() {
//   if (value === 255) {
//     value = 0;
//   } else {
//     value = 255;
//   }
// }