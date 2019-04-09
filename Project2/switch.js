// IMAGE CURSOR //

$(document).mousemove(function(e) {
    $(".triangle").offset({
        left: e.pageX -370,
        top: e.pageY + -400
    });
});

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
