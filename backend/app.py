from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import tensorflow as tf
import numpy as np
import os

# Load model
MODEL_PATH = os.path.join("..", "model", "mudra_model.h5")
LABELS_PATH = os.path.join("..", "model", "labels.npy")

model = tf.keras.models.load_model(MODEL_PATH)
labels = np.load(LABELS_PATH, allow_pickle=True)


app = FastAPI()

# Allow browser requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class LandmarkInput(BaseModel):
    landmarks: list  # 63 floats

@app.get("/")
def root():
    return {"status": "Backend is running"}

@app.post("/predict")
def predict(data: LandmarkInput):
    x = np.array(data.landmarks).reshape(1, -1)
    preds = model.predict(x)
    idx = int(np.argmax(preds))
    conf = float(np.max(preds))

    return {
        "mudra": labels[idx],
        "confidence": conf
    }
