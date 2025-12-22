# 🪷 Bharatanatyam Mudra Recognition using AI

An AI-powered web application that performs **real-time recognition of Asamyuta Hasta Mudras** from Bharatanatyam using a webcam.  
The system identifies the mudra and displays its **acupressure benefits, holding duration, Sanskrit shloka, and traditional Hasta Viniyoga**.

---

## 🌐 Live Demo

🔗 **Frontend (UI):**  
👉 https://bharatanatyam-mudra-ui.onrender.com  

🔗 **Backend API:**  
👉 https://bharatanatyam-mudra-api.onrender.com

---

## ✨ Features

- 🎥 Real-time hand gesture recognition using webcam  
- ✋ Detection of **Asamyuta Hasta Mudras**
- 🧠 Lightweight landmark-based neural network
- 🌿 Acupressure benefits for each mudra
- 📜 Sanskrit shloka (with Devanagari)
- 🕉️ Traditional Hasta Viniyoga explanations
- ⚡ Smooth, fast, browser-based experience
- 🎨 Classical, elegant UI inspired by Bharatanatyam aesthetics

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript
- MediaPipe Hands (21 hand landmarks)
- Canvas API
- Deployed as **Render Static Site**

### Backend
- FastAPI (Python)
- TensorFlow (ML inference)
- NumPy, scikit-learn
- Deployed as **Render Web Service**

---

## 🧠 How It Works

1. Webcam feed is captured in the browser
2. MediaPipe extracts **21 hand landmarks (x, y, z)**
3. Landmarks (63 values) are sent to the backend
4. Trained neural network predicts the mudra
5. UI displays:
   - Mudra name
   - Confidence score
   - Benefits
   - Duration
   - Sanskrit shloka
   - Hasta viniyoga

---

## 📂 Project Structure
bharatanatyam-mudra-ai/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── model/
│ ├── mudra_model.h5
│ └── labels.npy
│
├── web/
│ ├── index.html
│ ├── detect.html
│ ├── style.css
│ ├── app.js
│ └── images/
│
└── README.md



