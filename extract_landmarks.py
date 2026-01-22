import cv2
import mediapipe as mp
import os
import pandas as pd

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=True)

DATASET_PATH = "Datasets\\Training"

rows = []

for label in os.listdir(DATASET_PATH):
    label_path = os.path.join(DATASET_PATH, label)
    if not os.path.isdir(label_path):
        continue

    for img_name in os.listdir(label_path):
        img_path = os.path.join(label_path, img_name)

        image = cv2.imread(img_path)
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        result = hands.process(image_rgb)

        if result.multi_hand_landmarks:
            hand = result.multi_hand_landmarks[0]
            landmarks = []
            for lm in hand.landmark:
                landmarks.extend([lm.x, lm.y, lm.z])

            rows.append(landmarks + [label])

columns = [f"{axis}{i}" for i in range(21) for axis in ["x","y","z"]]
columns.append("label")

df = pd.DataFrame(rows, columns=columns)
df.to_csv("landmarks.csv", index=False)

print("Landmarks saved to landmarks.csv")
