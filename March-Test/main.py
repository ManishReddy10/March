from ultralytics import YOLO
import os

# Load a model
model = YOLO("yolo11n-pose.pt")  # load an official model

# Predict with the model
results = model.track("Input\MarchingVideoToTestHumanPose.mp4", show = True)  # predict on an image

# Keypoint indexes
# 1. Nose
# 2. Left Eye
# 3. Right Eye
# 4. Left Ear
# 5. Right Ear
# 6. Left Shoulder
# 7. Right Shoulder
# 8. Left Elbow
# 9. Right Elbow
# 10. Left Wrist
# 11. Right Wrist
# 12. Left Hip
# 13. Right Hip
# 14. Left Knee
# 15. Right Knee
# 16. Left Ankle
# 17. Right Ankle




# Access the results
for result in results:
    # xy = result.keypoints.xy # x and y coordinates
    # print(xy)

    for i in range(12,17):
        xyn = result.keypoints.xyn[0][i]  # normalized

        if(i == 11):
            print("Left Hip", xyn)
        if(i == 12):
            print("Right Hip", xyn)
        if(i == 13):
            print("Left Knee", xyn)
        if(i == 14):
            print("Right Knee", xyn)
        if(i == 15):
            print("Left Ankle", xyn)
        if(i == 16):
            print("Right Ankle", xyn)
    
    # kpts = result.keypoints.data  # x, y, visibility (if available)
    # print(kpts)