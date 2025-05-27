from ultralytics import YOLO
import os

# Load a model
model = YOLO("yolo11n-pose.pt")  # load an official model

# Predict with the model
results = model.track("Input\MarchingVideoToTestHumanPose.mp4", show=True)  # predict on an image

# Access the results
for result in results:
    xy = result.keypoints.xy # x and y coordinates
    print(xy)
    xyn = result.keypoints.xyn  # normalized
    print(xyn)
    kpts = result.keypoints.data  # x, y, visibility (if available)
    print(kpts)