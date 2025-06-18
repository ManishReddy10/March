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

