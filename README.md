# Flask + Node.js Form Submission App for Docker Practice

This project demonstrates frontend–backend communication using Node.js (Express) as the frontend server and Flask (Python) as the backend API.

The main purpose of this project is to understand how data flows from the browser to a backend service and how responses are sent back and displayed on the frontend. This architecture closely resembles real-world microservice communication used in production systems.

---

## 📌 Project Objective

- Send form data from the browser
- Handle the form request using Node.js and Express
- Forward the data to a Flask backend API
- Process and log the data in the Flask backend
- Send a JSON response back to the frontend
- Display the backend response in the browser

---

## 📁 Project Structure

FLASK_APP/
│
├── backend/
│ ├── venv/ # Python virtual environment (ignored in git)
│ ├── app.py # Flask backend server
│ └── .gitignore
│
├── frontend/
│ ├── node_modules/ # Node dependencies (ignored in git)
│ ├── app.js # Express frontend server
│ ├── package.json
│ ├── package-lock.json
│ └── .gitignore
│
├── .venv/ # Root Python virtual environment (ignored)
└── README.md


---

## 🚀 Technologies Used

### Backend
- Python
- Flask
- Flask-CORS

### Frontend
- Node.js
- Express.js
- Axios
- Body-parser

---

## ⚙️ How It Works (Flow)

1. User enters data in a form (browser)
2. Form submits data to **Node.js (Express)**
3. Express sends a **POST request** to **Flask backend** using Axios
4. Flask receives and logs the data
5. Flask sends a JSON response
6. Express receives the response
7. Response is rendered on the browser

---

## 🧪 API Communication

### Endpoints

| Service | Route | Method |
|-------|------|--------|
| Flask Backend | `/submit` | POST |
| Node Frontend | `/submit` | POST |

Data is exchanged in **JSON format**.

---

## ▶️ How to Run the Project

### 1️⃣ Start Flask Backend

```bash
cd backend
source venv/bin/activate   # or .venv/bin/activate (Linux / Mac)
pip install flask flask-cors
python app.py

Backend runs on:

http://localhost:5001

### 2️⃣ Start Node Frontend
cd frontend
npm install
node app.js

Frontend runs on:

http://localhost:3000


---

### ✅ What to do now
1. Create a file named **`README.md`**
2. Paste the above content
3. Save it
4. Push to GitHub

If you want, I can:
- Shorten it for recruiters
- Make it more **production-grade**
- Add **API request/response examples**
- Add **Docker instructions**

Just tell me 🚀
