# 🔐 Role-Based Dashboard (RBAC)

### Next.js + MongoDB Full Stack Application

---

## 🚀 Live Demo

👉 https://role-based-dashboard-o9w3.vercel.app

---

## 📌 Overview

This is a **full-stack role-based dashboard application** built using **Next.js (App Router)** and **MongoDB**.
It implements **authentication, role-based access control (RBAC), and CRUD operations**.

The system supports three roles:

* 👑 **Super Admin**
* 🧑‍💼 **Admin**
* 👤 **User**

Each role has specific permissions and access restrictions.

---

## 🎯 Features

### 🔐 Authentication

* Login using email & password
* Passwords stored securely using **bcrypt hashing**
* JWT-based authentication

---

### 👥 Role-Based Access Control

####  Super Admin

* Create, view, update, delete Admins
* Manage all Users across Admins

#### Admin

* Create, view, update, delete Users created by them
* Cannot access other Admins

#### 👤 User

* Login and access personal dashboard
* Can manage personal data (Notes module)

---

### 📊 Dashboard Features

* Role-based redirection after login
* User/Admin listing in table format
* Clean UI with white + orange theme
* Toast notifications for actions
* Interactive cards and layouts

---

## 🛠 Tech Stack

| Layer      | Technology           |
| ---------- | -------------------- |
| Frontend   | Next.js (App Router) |
| Backend    | Next.js API Routes   |
| Database   | MongoDB Atlas        |
| Auth       | JWT + bcrypt         |
| UI         | CSS (Custom styling) |
| Deployment | Vercel               |

---

## 📁 Folder Structure

```
app/
 ├── api/
 │    ├── auth/
 │    ├── admin/
 │    ├── user/
 │
 ├── dashboard/
 │    ├── super-admin/
 │    ├── admin/
 │    ├── user/
 │
 ├── login/
 ├── signup/
 └── page.jsx

lib/
 ├── db.js
 ├── auth.js

models/
 └── User.js
```

---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/role-based-dashboard.git
cd role-based-dashboard
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env.local`

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the application

```
npm run dev
```

👉 App will run at:
http://localhost:3000

---

## 🌐 Deployment

The application is deployed using **Vercel**.

### Steps:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables:

   * `MONGO_URI`
   * `JWT_SECRET`
4. Deploy

---

## 🧠 Approach

* Used **Next.js App Router** to handle both frontend and backend in a single project
* Implemented **JWT authentication** for secure access
* Designed **role-based access control (RBAC)** to restrict API and UI access
* Structured code into **models, API routes, and reusable components**
* Used **MongoDB Atlas** for scalable cloud database
* Ensured **clean UI and consistent design** across all pages

---

## 🔥 Future Improvements

* Middleware-based route protection
* Pagination & search in tables
* Edit/Delete UI actions
* Responsive mobile design
* Admin analytics dashboard

---

## 🙌 Conclusion

This project demonstrates:

* Full-stack development skills
* Authentication & authorization
* Clean architecture and UI design
* Real-world dashboard implementation

---

