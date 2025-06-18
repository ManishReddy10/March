// const { time } = require("console");


// console.time("myTimer")
// index.js
const video = document.getElementById('video');
const metronomeSound = new Audio('strong_beat.wav');
const startMetronomeButton = document.getElementById('startMetronomeButton');
const testOutput = document.getElementById('testOutput')

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing the camera:', error);
    alert('Could not access the camera. Please allow camera access or check your device.');
  });

function startMetronome(bpm) {
  setInterval(() => metronomeSound.play(), 500);
  // console.timeStamp
}

startMetronome(120);

function onStartMetronomeButtonClick() {
  startMetronomeButton
}

class Metronome {

  constructor(bpm) {

  }

  startMetronome() {

  }

  stopMetronome() {

  }
}

// http://127.0.0.1:5500/March-Javascript/

/**
 * Metronome logic
 * Start metronome
 * Play beat
 * 
 */
