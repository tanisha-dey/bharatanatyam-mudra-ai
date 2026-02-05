# 🪷 Bharatanatyam Mudra Recognition using AI

An AI-powered web application that performs **real-time recognition of Asamyuta Hasta Mudras** from Bharatanatyam using a webcam.  
The system identifies the mudra and displays its **acupressure benefits, holding duration, Sanskrit shloka, and traditional Hasta Viniyoga**.

---

## 🌐 Live Demo

🔗 **Frontend (UI):**  
https://bharatanatyam-mudra-ui.onrender.com  

🔗 **Backend API:**  
https://bharatanatyam-mudra-api.onrender.com

---

## ✨ Features

- 🎥 Real-time hand gesture recognition using webcam  
- ✋ Detection of **Asamyuta Hasta Mudras**  
- 🧠 Lightweight landmark-based neural network  
- 🌿 Acupressure benefits for each mudra  
- 📜 Sanskrit shloka (with Devanagari)  
- 🕉️ Traditional Hasta Viniyoga explanations  
- ⚡ Fast, smooth browser-based inference  
- 🎨 Classical UI inspired by Bharatanatyam aesthetics  

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript  
- MediaPipe Hands (21 hand landmarks)  
- Canvas API  
- Deployed on Render (Static Site)

### Backend
- FastAPI (Python)  
- TensorFlow / Keras  
- NumPy, scikit-learn  
- Deployed on Render (Web Service)

---

## 🧠 How It Works

1. Webcam feed is captured in the browser  
2. MediaPipe extracts **21 hand landmarks (x, y, z)**  
3. 63 landmark values are sent to the backend API  
4. A trained neural network predicts the mudra  
5. The UI displays:
   - Mudra name  
   - Confidence score  
   - Acupressure benefits  
   - Holding duration  
   - Sanskrit shloka  
   - Hasta viniyoga  

---

## 📂 Project Structure

bharatanatyam-mudra-ai/
│
├── backend/
│ ├── app.py # FastAPI application
│ ├── requirements.txt # Backend dependencies
│ └── model/
│ ├── mudra_model.h5 # Trained TensorFlow model
│ └── labels.npy # Class labels
│
├── web/
│ ├── index.html # Landing page
│ ├── detect.html # Mudra detection page
│ ├── app.js # Webcam + API logic
│ ├── style.css # Styling
│ └── images/
│
└── README.md


---

## ⚙️ Prerequisites

Make sure the following are installed:

- Python **3.8 – 3.11**  
- pip  
- Git  

Check versions:

```bash
python --version
pip --version
git --version


🚀 How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/tanisha-dey/bharatanatyam-mudra-ai.git
cd bharatanatyam-mudra-ai

2️⃣ Backend Setup (FastAPI + TensorFlow)
cd backend
python -m venv venv


Activate the virtual environment:

Windows

venv\Scripts\activate


Mac / Linux

source venv/bin/activate


Install dependencies:

pip install fastapi uvicorn tensorflow numpy
pip install --upgrade pip


Run the backend server:

uvicorn app:app --reload


Backend runs at:

http://127.0.0.1:8000

http://127.0.0.1:8000/docs

3️⃣ Frontend Setup (Web UI)

Open a new terminal (keep backend running):

cd web
python -m http.server 5500


Open in browser:

http://localhost:5500

🎥 Usage

Allow webcam access in the browser

Perform Bharatanatyam hand mudras

Hand landmarks are captured in real time

AI predicts the mudra

Cultural and wellness information is displayed

🛠️ Common Issues

Uvicorn not found

Ensure the virtual environment is activated

Webcam not working

Allow browser camera permissions

Use Chrome or Edge

TensorFlow warnings

Informational only; safe to ignore

🚧 Future Improvements

Add more Bharatanatyam mudras

Improve model accuracy with larger datasets

Sequence-based mudra recognition

Mobile-friendly UI

🙏 Acknowledgements

Inspired by the rich tradition of Bharatanatyam and the vision of blending Indian classical arts with modern artificial intelligence.
