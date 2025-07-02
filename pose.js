// Variable to disable the video and prevent mediapipe model from function. Added so development could be easier
 
let disableModel = false;
let disableLogging = true;

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const easyOptionButton = document.querySelector(".easy-option");
const mediumOptionButton = document.querySelector(".medium-option");
const hardOptionButton = document.querySelector(".hard-option");

// defaults to easyOptionButton
easyOptionButton.classList.toggle("active");

easyOptionButton.addEventListener("click", () => {
  console.log(easyOptionButton.className);
  if (easyOptionButton.className !== "easy-option active") {
    
    easyOptionButton.classList.toggle("active");
    
    if (hardOptionButton.className == "hard-option active") {
    hardOptionButton.classList.toggle("active");
    }

    if (mediumOptionButton.className == "medium-option active") {
    mediumOptionButton.classList.toggle("active");
    }

  }
});

mediumOptionButton.addEventListener("click", () => {
  if (mediumOptionButton.className !== "medium-option active") {
    
    mediumOptionButton.classList.toggle("active");
    
    if (easyOptionButton.className == "easy-option active") {
    easyOptionButton.classList.toggle("active");
    }

    if (hardOptionButton.className == "hard-option active") {
    hardOptionButton.classList.toggle("active");
    }
  }
});

hardOptionButton.addEventListener("click", () => {
  if ((hardOptionButton.className !== "hard-option active")) {
    
    hardOptionButton.classList.toggle("active");
    
    if (easyOptionButton.className == "easy-option active") {
    easyOptionButton.classList.toggle("active");
    }

    if (mediumOptionButton.className == "medium-option active") {
    mediumOptionButton.classList.toggle("active");
    }
  }
});

const leftRightBeatOptionButton = document.querySelector(".left-right-beat-option");
const normalBeatOptionButton = document.querySelector(".normal-beat-option");

// defaults to leftRightBeatOptionButton
leftRightBeatOptionButton.classList.toggle("active");

leftRightBeatOptionButton.addEventListener("click", () => {
  if ((leftRightBeatOptionButton.className !== "left-right-beat-option active")) {
    
    leftRightBeatOptionButton.classList.toggle("active");
    
    if (normalBeatOptionButton.className == "normal-beat-option active") {
    normalBeatOptionButton.classList.toggle("active");
    }

  }
});

normalBeatOptionButton.addEventListener("click", () => {
  if ((normalBeatOptionButton.className !== "normal-beat-option active")) {
    
    normalBeatOptionButton.classList.toggle("active");
    
    if (leftRightBeatOptionButton.className == "left-right-beat-option active") {
    leftRightBeatOptionButton.classList.toggle("active");
    }

  }
});



var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

slider.oninput = function() {
  console.log(slider.value);
  
}


const greenBox = document.getElementById('greenBox');
greenBox.style.position = 'absolute';
greenBox.style.width = '300px';
greenBox.style.height = '30px';
greenBox.style.background = 'limegreen';
greenBox.style.bottom = '40px';
greenBox.style.right = '40px';
greenBox.style.cursor = 'grab';
greenBox.style.zIndex = 1000;
greenBox.style.borderRadius = '10px';
const greenBoxBorderWidth = 4;
greenBox.style.borderWidth = (greenBoxBorderWidth + "px");
greenBox.style.borderColor = 'black';
greenBox.style.borderStyle = 'solid';
document.body.appendChild(greenBox);

let isDraggingGreen = null;
let isPressingGreen = null;
let isHoveringOverGreen = null;

let offsetXGreen, offsetYGreen;

function updatePauseButtonMessage() {
    if (disableModel === false) {
        greenBox.textContent = "click to stop the model";
    } else {
        greenBox.textContent = "click to start the model";
    }
}
    
   
greenBox.addEventListener('mousedown', function(e) {
  isPressingGreen = true;
  console.log(isPressingGreen);
  offsetXGreen = e.clientX - greenBox.offsetLeft;
  offsetYGreen = e.clientY - greenBox.offsetTop;
  greenBox.style.cursor = 'grabbing';
  

//   if (disableModel == true) {
// } 
});


greenBox.addEventListener('mouseover', function(e) {
    isHoveringOverGreen = true;    
    console.log("MOUSE IS OVER GREEN BOX");
    
});



document.addEventListener('mousemove', function(e) {
    if (isPressingGreen) {
        greenBox.style.left = (e.clientX - offsetXGreen) + 'px';
        greenBox.style.top = (e.clientY - offsetYGreen) + 'px';
        isDraggingGreen = true;
    } else{
        isDraggingGreen = false;
        
    }
});


greenBox.addEventListener('mouseup', function(e) {
    const rect = greenBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const insideLeft = x < greenBoxBorderWidth;
    const insideRight = x > rect.width - greenBoxBorderWidth;
    const insideTop = y < greenBoxBorderWidth;
    const insideBottom = y > rect.height - greenBoxBorderWidth;

    const onBorder = insideLeft || insideRight || insideTop || insideBottom;

    if (e.target === greenBox && onBorder) {
        console.log("TouchingBorder");
    }

    if (isHoveringOverGreen) {
        isPressingGreen = false;
    }

    greenBox.style.cursor = 'grab';

    // Only toggle model if it was a click, not a drag
    if (isDraggingGreen === false) {
        disableModel = !disableModel;
        updatePauseButtonMessage();
    }

    isDraggingGreen = false;  // Reset drag state
});

greenBox.addEventListener('mouseout', () => {
    isHoveringOverGreen = false;
});
////// d
// let elements = document.getElementsByClassName('shoutout');
// elements[0].style.color = 'red';
// for (let i in elements) {
//   if (elements.hasOwnProperty(i)) {rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//     elements[i].style.color = 'red';
//   }
// }
////// 

updatePauseButtonMessage();

import DeviceDetector from "https://cdn.skypack.dev/device-detector-js@2.2.10";
// Usage: testSupport({client?: string, os?: string}[])
// Client and os are regular expressions.
// See: https://cdn.jsdelivr.net/npm/device-detector-js@2.2.10/README.md for
// legal values for client and os
testSupport([
    { client: 'Chrome' },
    { client: 'Firefox' },
]);
function testSupport(supportedDevices) {
    const deviceDetector = new DeviceDetector();
    const detectedDevice = deviceDetector.parse(navigator.userAgent);
    let isSupported = false;
    for (const device of supportedDevices) {
        if (device.client !== undefined) {
            const re = new RegExp(`^${device.client}$`);
            if (!re.test(detectedDevice.client.name)) {
                continue;
            }
        }
        if (device.os !== undefined) {
            const re = new RegExp(`^${device.os}$`);
            if (!re.test(detectedDevice.os.name)) {
                continue;
            }
        }
        isSupported = true;
        break;
    }
    if (!isSupported) {
        alert(`This demo, running on ${detectedDevice.client.name}/${detectedDevice.os.name}, ` +
            `is not well supported at this time, expect some flakiness while we improve our code.`);
    }
}
const controls = window;
const LandmarkGrid = window.LandmarkGrid;
const drawingUtils = window;
const mpPose = window;
const options = {
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${mpPose.VERSION}/${file}`;
    }
};

if (!disableModel) {
    

// Our input frames will come from here.
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const controlsElement = document.getElementsByClassName('control-panel')[0];
const canvasCtx = canvasElement.getContext('2d');
// We'll add this to our control panel later, but we'll save it here so we can
// call tick() each time the graph runs.
const fpsControl = new controls.FPS();
// Optimization: Turn off animated spinner after its hiding animation is done.
const spinner = document.querySelector('.loading');
spinner.ontransitionend = () => {
    spinner.style.display = 'none';
};
const landmarkContainer = document.getElementsByClassName('landmark-grid-container')[0];
const grid = new LandmarkGrid(landmarkContainer, {
    connectionColor: 0xCCCCCC,
    definedColors: [{ name: 'LEFT', value: 0xffa500 }, { name: 'RIGHT', value: 0x00ffff }],
    range: 2,
    fitToGrid: true,
    labelSuffix: 'm',
    landmarkSize: 2,
    numCellsPerAxis: 4,
    showHidden: false,
    centered: true,
});



let xVar = "harambe";
let activeEffect = 'mask';
function onResults(results) {
    if (!disableModel) {
    // Hide the spinner.
    document.body.classList.add('loaded');
    // Update the frame rate.
    fpsControl.tick();
    // Draw the overlays.
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    if (results.segmentationMask) {
        canvasCtx.drawImage(results.segmentationMask, 0, 0, canvasElement.width, canvasElement.height);
        // Only overwrite existing pixels.
        if (activeEffect === 'mask' || activeEffect === 'both') {
            canvasCtx.globalCompositeOperation = 'source-in';
            // This can be a color or a texture or whatever...
            canvasCtx.fillStyle = '#00FF007F';
            canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        else {
            canvasCtx.globalCompositeOperation = 'source-out';
            canvasCtx.fillStyle = '#0000FF7F';
            canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        // Only overwrite missing pixels.
        canvasCtx.globalCompositeOperation = 'destination-atop';
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.globalCompositeOperation = 'source-over';
    }
    else {
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    }
    if (results.poseLandmarks) {
        drawingUtils.drawConnectors(canvasCtx, results.poseLandmarks, mpPose.POSE_CONNECTIONS, { visibilityMin: 0.65, color: 'white' });
        drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_LEFT)
            .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(255,138,0)' });
        drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_RIGHT)
            .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'rgb(0,217,231)' });
        drawingUtils.drawLandmarks(canvasCtx, Object.values(mpPose.POSE_LANDMARKS_NEUTRAL)
            .map(index => results.poseLandmarks[index]), { visibilityMin: 0.65, color: 'white', fillColor: 'white' });

        // if (Object.values(mpPose.POSE_LANDMARKS_NEUTRAL)
        //     .map(index => results.poseLandmarks[index]) === Object) {

        // }

        

        const leftKneeIndex = mpPose.POSE_LANDMARKS_LEFT.LEFT_KNEE;
        const rightKneeIndex = mpPose.POSE_LANDMARKS_RIGHT.RIGHT_KNEE;
        const leftKnee = results.poseLandmarks[leftKneeIndex];
        const rightKnee = results.poseLandmarks[rightKneeIndex];



        document.addEventListener('mousedown', function(e) {
            if (disableLogging == false) {
                console.log(Object.values(mpPose.POSE_LANDMARKS_RIGHT).map(index => results.poseLandmarks[index]));
                console.log(Object.values(mpPose.POSE_LANDMARKS_LEFT).map(index => results.poseLandmarks[index]));
                console.log(Object.values(mpPose.POSE_LANDMARKS_NEUTRAL).map(index => results.poseLandmarks[index]));
                    
                console.log('Left Knee:', {
                    x: leftKnee.x,
                    y: leftKnee.y,
                    z: leftKnee.z,
                    visibility: leftKnee.visibility
                });
    
                console.log('Right Knee:', {
                    x: rightKnee.x,
                    y: rightKnee.y,
                    z: rightKnee.z,
                    visibility: rightKnee.visibility
                });


            }
        }); 
        
        var testOutput = document.getElementById("demo");
        if (rightKnee.z > leftKnee.z) {
            testOutput.textContent = "right knee is in front"
        }
        if (rightKnee.z < leftKnee.z) {
            testOutput.textContent = "left knee is in front"
        }

        
    }
    canvasCtx.restore();
    if (results.poseWorldLandmarks) {
        grid.updateLandmarks(results.poseWorldLandmarks, mpPose.POSE_CONNECTIONS, [
            { list: Object.values(mpPose.POSE_LANDMARKS_LEFT), color: 'LEFT' },
            { list: Object.values(mpPose.POSE_LANDMARKS_RIGHT), color: 'RIGHT' },
        ]);
    }
    else {
        grid.updateLandmarks([]);
    }
     }
}
const pose = new mpPose.Pose(options);
pose.onResults(onResults);
// Present a control panel through which the user can manipulate the solution
// options.
new controls
    .ControlPanel(controlsElement, {
    selfieMode: true,
    modelComplexity: 1,
    smoothLandmarks: true,
    enableSegmentation: false,
    smoothSegmentation: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
    effect: 'background',
})
    .add([
    new controls.StaticText({ title: 'MediaPipe Pose' }),
    fpsControl,
    new controls.Toggle({ title: 'Selfie Mode', field: 'selfieMode' }),
    new controls.SourcePicker({
        onSourceChanged: () => {
            // Resets because this model gives better results when reset between
            // source changes.
            pose.reset();
        },
        onFrame: async (input, size) => {
            const aspect = size.height / size.width;
            let width, height;
            if (window.innerWidth > window.innerHeight) {
                height = window.innerHeight;
                width = height / aspect;
            }
            else {
                width = window.innerWidth;
                height = width * aspect;
            }
            canvasElement.width = width;
            canvasElement.height = height;
            await pose.send({ image: input });
        },
    }),
    new controls.Slider({
        title: 'Model Complexity',
        field: 'modelComplexity',
        discrete: ['Lite', 'Full', 'Heavy'],
    }),
    new controls.Toggle({ title: 'Smooth Landmarks', field: 'smoothLandmarks' }),
    new controls.Toggle({ title: 'Enable Segmentation', field: 'enableSegmentation' }),
    new controls.Toggle({ title: 'Smooth Segmentation', field: 'smoothSegmentation' }),
    new controls.Slider({
        title: 'Min Detection Confidence',
        field: 'minDetectionConfidence',
        range: [0, 1],
        step: 0.01
    }),
    new controls.Slider({
        title: 'Min Tracking Confidence',
        field: 'minTrackingConfidence',
        range: [0, 1],
        step: 0.01
    }),
    new controls.Slider({
        title: 'Effect',
        field: 'effect',
        discrete: { 'background': 'Background', 'mask': 'Foreground' },
    }),
])
    .on(x => {
    const options = x;
    videoElement.classList.toggle('selfie', options.selfieMode);
    activeEffect = x['effect'];
    pose.setOptions(options);
});

}

