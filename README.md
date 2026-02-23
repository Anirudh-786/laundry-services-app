# 🧺 Laundry Services Web App

A fully responsive Laundry Services Web Application that allows users to explore services, add items to cart, book appointments, and receive email confirmation using EmailJS.

---

## 🚀 Live Demo
( Add your Netlify link here )

---

## 📌 Project Overview

This web application streamlines the laundry booking experience.  
Users can:

- Browse available laundry services
- Add / Remove items to cart
- View total amount dynamically
- Book services with validation
- Receive professional invoice-style email confirmation

The project is built using **HTML, CSS, and Vanilla JavaScript** with EmailJS integration.

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Responsive Design)
- JavaScript (ES6)
- EmailJS (Email Integration)
- Netlify (Deployment)

---

## ✨ Features

### 🔹 Responsive Navbar
- Logo
- Navigation Links (Home, Services, About Us, Contact Us)
- Mobile hamburger menu

### 🔹 Hero Section
- Attractive gradient heading
- CTA button with smooth scroll
- Service illustration

### 🔹 Service Overview
- 15+ Laundry Services
- 240+ Happy Customers
- 2+ Years Experience

### 🔹 Dynamic Booking System
- Add / Remove services
- Real-time cart update
- Total amount calculation
- Input validation

### 🔹 Email Confirmation
- Sends booking details via EmailJS
- Premium invoice-style email template
- Includes:
  - Customer details
  - Selected services
  - Total amount

### 🔹 Quality Highlights Section
- Premium Services
- Quick Support
- Hassle-Free Delivery
- Affordable Prices

### 🔹 Newsletter Subscription
- Email validation
- UI feedback

### 🔹 Footer
- Important links
- Contact details
- Social media icons

---

## 📂 Folder Structure
Laundry-Services-Web-App/
│
├── index.html
├── style.css
├── script.js
└── images/
└── laundry.jfif

---

## ⚙️ How to Run Locally

1. Clone the repository
2. Open in VS Code
3. Run using Live Server
4. Configure EmailJS:
   - Add Gmail service
   - Create email template
   - Replace:
     - Service ID
     - Template ID
     - Public Key in script.js

---

## 📧 EmailJS Setup

- Create account at https://emailjs.com
- Add Gmail service
- Create email template with variables:
  - `{{user_name}}`
  - `{{user_email}}`
  - `{{user_phone}}`
  - `{{services}}`
  - `{{total}}`
- Add your public key in script.js

---

## 🧠 Challenges Faced

- Debugging 400 & 422 EmailJS errors
- Template variable mismatch
- Service activation configuration
- Responsive layout adjustments

---

## 💡 What I Learned

- DOM manipulation
- Event handling
- API integration
- EmailJS configuration & debugging
- Responsive UI design
- Real-world problem solving

---

## 📈 Future Improvements

- Add payment gateway
- Generate downloadable PDF invoice
- Add authentication system
- Store bookings in database
- Admin dashboard

---

## 👨‍💻 Author

Anirudh

---

## ⭐ If You Like This Project

Give it a star ⭐ on GitHub!
