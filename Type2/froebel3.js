var cnv; 

function centerCanvas() {
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(0, 0, 0);
	cnv.style ('z-index','-1');
}

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	centerCanvas();
	noCursor ();
}

function windowResized() {
	centerCanvas();
}

function draw() {
  if (mouseIsPressed) {
    fill(247,208,0);
  } else {
    fill(255,29,37);
  }
  ellipse(mouseX, mouseY, 80, 80);
}