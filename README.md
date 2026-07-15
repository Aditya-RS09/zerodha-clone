# Zerodha Clone

A full-stack **Zerodha-inspired stock trading platform** built with **React.js**, **Node.js/Express**, and **MongoDB**. The project recreates Zerodha's landing page, signup/login flow, and a live trading dashboard (holdings, positions, orders, watchlist) with a clean, responsive UI.

> This project is built for educational and learning purposes only and is inspired by the Zerodha platform. It is not affiliated with Zerodha in any way.

---

## Live Demo

| Service | Link |
|---|---|
| Frontend (Landing + Signup) | https://zerodhafrontend-a.netlify.app |
| Dashboard | https://zerodhadashboard-a.netlify.app |
| Backend API | https://zerodhabackend.netlify.app |

---

## How to Log In (Demo Mode)

This project uses a simulated OTP flow for demo purposes — no real SMS is sent.

1. Go to the [signup page](https://zerodhafrontend-a.netlify.app/signup)
2. Enter your name and a 10-digit mobile number
3. Click **Get OTP**
4. On the OTP screen, enter the hardcoded OTP: **`123456`**
5. Click **Continue** — you'll be redirected to the live dashboard, logged in under your name

You can log out anytime from the profile icon in the top-right corner of the dashboard.

---

## Features

**Landing Page**
- Home, Products, Pricing, About, Support, and Signup pages

**Dashboard**
- Watchlist, Holdings, Positions, Funds, Orders, and portfolio overview
- Persisted login session (name + mobile remembered across visits)
- Profile dropdown with logout

---

## Tech Stack

**Frontend & Dashboard:** React.js, React Router DOM, Bootstrap 5, JavaScript (ES6), HTML5, CSS3
**Backend:** Node.js, Express.js, MongoDB (Atlas)
**Deployment:** Netlify (including serverless functions for the backend API)

---

## Project Structure
