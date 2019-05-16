// IMAGE CURSOR //

  $(document).ready(function(){
  	cursorposition();
  });  
  $(window).resize(function(){
  	cursorposition();
  });



function cursorposition() {

$(document).mousemove(function(e) {
	if ($(window).width() > 1024) {
		$(".triangle").offset({
	        left: e.pageX -300,
	        top: e.pageY + -300
    	});
	} if ($(window).width() < 1024) {
		$(".triangle").offset({
		left: e.pageX -250,
		top: e.pageY + -250
		});
	}
});

}

// $(document).mousemove(function(e){
//     $("#blob").css({left:e.pageX, top:e.pageY});
// });

// BEGIN MUSIC //

let song;

function preload () {
  song = loadSound ("BurialUntrue.mp3");
  background ();
}

function setup() {
  createCanvas(200,200);
  song.play();
  song.setVolume(0.5);
}

function draw() {;
}
