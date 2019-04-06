// IMAGE CURSOR //

$(document).mousemove(function(e) {
    $(".squishy").offset({
        left: e.pageX -330,
        top: e.pageY + -320
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

// ANIMATION //

squishy.loadAnimation({
  container: document.getElementById("squishy", // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'squishy.json' // the path to the animation json
});