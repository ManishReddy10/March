from ultralytics import YOLO

# Load a model
model = YOLO("yolo11n-pose.pt")  # load an official model

# Predict with the model
results = model("https://ultralytics.com/images/bus.jpg")  # predict on an image

# Access the results
for result in results:
    xy = result.keypoints.xy  # x and y coordinates
    print(xy)
    xyn = result.keypoints.xyn  # normalized
    print(xyn)
    kpts = result.keypoints.data  # x, y, visibility (if available)
    print(kpts)