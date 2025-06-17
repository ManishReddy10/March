// index.js
const video = document.getElementById('video');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing the camera:', error);
    alert('Could not access the camera. Please allow camera access or check your device.');
  });
