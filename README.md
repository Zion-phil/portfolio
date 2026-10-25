# Tsion Philipos - Portfolio

A modern, responsive personal portfolio website built with **React + Vite**. Features smooth scroll animations, a custom Node.js/Express backend for the contact form, and showcases full-stack AI applications.

🔗 **Live Demo:** [https://tsionphilipos-portfolio.vercel.app](https://tsionphilipos-portfolio.vercel.app)

---

## 🚀 Features

- **Modern UI:** Built with React and a customized HTML/CSS template featuring dark mode and AOS (Animate On Scroll).
- **Interactive Projects:** Showcases deployed full-stack applications (Evangadi Forum, GPT Clone, Netflix Clone).
- **Working Contact Form:** Uses a Node.js backend integrated with Brevo API to send real emails.
- **Responsive Design:** Fully mobile-friendly layout.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Vite, CSS3, Bootstrap, jQuery (for template plugins) |
| **Backend** | Node.js, Express.js |
| **Email Service** | Brevo (HTTP API) |
| **Deployment** | Vercel (Frontend), Render (Backend) |

---

## 📂 Project Structure
portfolio/
├── backend/ # Node.js Express server for the contact form
│ ├── server.js # Main backend entry point
│ ├── .env.example # Template for environment variables
│ └── package.json
├── public/ # Static assets (CSS, JS, Images)
├── src/ # React Source Code
│ ├── components/ # React components (Navbar, Hero, About, etc.)
│ ├── App.jsx # Main React App component
│ └── main.jsx # React entry point
├── index.html # Vite HTML template
├── package.json # Frontend dependencies
└── README.md

---

## 💻 Local Development Setup

### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Start the React development server
npm run dev

2. Backend Setup
cd backend
npm install

Create a .env file in the backend folder:
BREVO_API_KEY=your_brevo_api_key_here
PORT=5000

Start the backend server:
node server.js

 Deployment
Frontend: Deployed on Vercel. Connected to the GitHub repository. Updates automatically on push to main.

Backend: Deployed on Render as a Web Service. Uses environment variables for the Brevo API key.

