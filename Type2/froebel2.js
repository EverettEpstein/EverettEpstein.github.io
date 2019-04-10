//P5 Animation//

// let angle = 0;

// let layout1;

// function preload(){
// 	layout1 = loadImage("froebeltext.jpg");
// }

// var cnv; 

// function centerCanvas() {
// 	var x = (windowWidth - width) / 2;
// 	var y = (windowHeight - height) / 2;
// 	cnv.position(0, 0);
// 	cnv.style ('z-index','-1');
// }

// function setup() {
// 	cnv = createCanvas(windowWidth, windowHeight, WEBGL);
// 	centerCanvas();
// 	noCursor ();
// }

// function windowResized() {
// 	centerCanvas();
// }

// function draw() {
// 	background (255,29, 37);
// 	ambientMaterial(255);
// 	ambientLight(247,208,0);
// 	noStroke ();
// 	translate (mouseX -width/2, mouseY-height/2);
//     push();
//     rotateZ(frameCount * 0.01);
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01);
//     cylinder(70, 300);
//     pop();

	
// }

//Cursor Movement//

$(document).mousemove(function(e) {
    $(".triangle").offset({
        left: e.pageX -600,
        top: e.pageY + -350,
    });
});
