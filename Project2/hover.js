// IMAGE CURSOR //

$(document).mousemove(function(e) {
    $(".circle").offset({
        left: e.pageX -350,
        top: e.pageY + -250
    });
});

// BEGIN MUSIC //

let song;

function preload () {
  song = loadSound ("BurialGhostHardware.mp3");
  background ();
}

function setup() {
  createCanvas(200,200);
  song.play();
  song.setVolume(0.5);
}

function draw() {;
}

		