from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import tensorflow as tf
import os

from fastapi.middleware.cors import CORSMiddleware

# -----------------------------
# App setup
# -----------------------------
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Paths (RENDER SAFE)
# -----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "model", "mudra_model.h5")
LABELS_PATH = os.path.join(BASE_DIR, "model", "labels.npy")

# -----------------------------
# Load model & labels
# -----------------------------
model = tf.keras.models.load_model(MODEL_PATH)
labels = np.load(LABELS_PATH, allow_pickle=True)

# -----------------------------
# Request schema
# -----------------------------
class LandmarkInput(BaseModel):
    landmarks: list[float]

# -----------------------------
# Health check
# -----------------------------
@app.get("/")
def root():
    return {"status": "Backend is running"}

# -----------------------------
# Prediction endpoint
# -----------------------------
@app.post("/predict")
def predict_mudra(data: LandmarkInput):
    try:
        landmarks = np.array(data.landmarks, dtype=np.float32)

        # Validate length
        if landmarks.shape[0] != 63:
            return {
                "error": "Expected 63 landmark values",
                "received": int(landmarks.shape[0])
            }

        # Reshape for model
        landmarks = landmarks.reshape(1, 63)

        # Predict
        predictions = model.predict(landmarks)

        class_index = int(np.argmax(predictions))
        confidence = float(np.max(predictions))

        return {
            "mudra": str(labels[class_index]),
            "confidence": confidence
        }

    except Exception as e:
        # IMPORTANT: return error instead of crashing
        return {
            "error": "Prediction failed",
            "details": str(e)
        }
