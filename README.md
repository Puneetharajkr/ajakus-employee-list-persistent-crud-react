# 🧑‍💼 Ajackus Employee List Dashboard - Persistent CRUD React App

Welcome to the **Ajackus Employee Directory Web App** – a fully responsive React-based dashboard that demonstrates powerful **CRUD operations** (Create, Read, Update, Delete), **filtering**, **sorting**, **pagination**, and **persistent data storage** using **localStorage**. Built as part of the Ajackus frontend/full-stack assignment.

🔗 **Live Demo:**  
👉 [Click to View Deployed App on Vercel](https://ajakus-employee-list-persistent-crud-puneetharaj-k-rs-projects.vercel.app/)

---

## 📋 Project Overview

This project allows users to manage a list of 100+ employees using mock data. You can **add new employees**, **edit existing ones**, **delete** them permanently, and even **reset** the employee list to its original static mock data set using a dedicated **Reset to Default** button.  
All changes are stored persistently using **localStorage**, so your updates remain even after a page refresh.

This is a realistic frontend-only app simulating how employee management might work in a real dashboard – **without needing a backend**.

---

## ⚙️ Tech Stack

- ⚛️ React.js (Vite)
- 🎨 CSS Modules
- 🧠 useState, useEffect, useMemo Hooks
- 💾 LocalStorage API
- 📁 Modular File Structure

---

## 📁 Folder Structure

```
employee-directory/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── mockData.js
│   ├── components/
│   │   ├── EmployeeCard.jsx
│   │   ├── EmployeeForm.jsx
│   │   ├── FilterSidebar.jsx
│   │   ├── Pagination.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── styles/
│   │   ├── App.module.css
│   │   ├── EmployeeCard.module.css
│   │   └── Dashboard.module.css
│   ├── utils/
│   │   └── validation.js
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/employee-directory.git
   cd employee-directory
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the App Locally**
   ```bash
   npm run dev
   ```

4. Open in browser: [http://localhost:5173](http://localhost:5173)

---

## ✅ Features Implemented

- ✅ **Static mock employee list** (120 employees via `mockData.js`)
- ✅ **Persistent Add/Edit/Delete** using `localStorage`
- ✅ **Search** by name or email
- ✅ **Filter** by first name, department, and role
- ✅ **Sort** by First Name and Department
- ✅ **Pagination** (10 per page)
- ✅ **Reset to Default** button (restores mock data and clears local changes)
- ✅ Responsive layout with CSS Modules
- ✅ Modular & reusable components
- ✅ Input validation for employee form

---

## 🖼️ Screenshots

### 🏠 Dashboard View  
![Dashboard View]: <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4f2b87e8-fd8e-41c4-a986-e7ce43a0e567" />


### ➕ Add New Employee  
![Add Employee](screenshots/add-employee.png)

### ✏️ Edit Employee  
![Edit Employee](screenshots/edit-employee.png)

### 🔍 Search & Filter  
![Search Filter](screenshots/search-filter.png)

### 🔄 Reset to Default Button  
![Reset Default](screenshots/reset.png)

---

## 🎥 Demo Video
```
📽️ Video Walkthrough: https://drive.google.com/file/d/1H3rlaAlzH37s7e1nHemAvFb41hdfVgFS/view?usp=sharing
```



## 💡 Notes for Reviewers / Recruiters

- This project demonstrates my **React fundamentals**, ability to **build scalable UI**, and apply **component-based architecture**.
- All operations are **fully functional without a backend**, thanks to `localStorage` persistence.
- The app mimics a real-world use-case of an employee directory and is suitable for showcasing frontend skillsets.
- The entire assignment was crafted with clarity, UX focus, and maintainability in mind.

---

## 🙏 Thank You!

Thanks to the Ajackus team for this great opportunity.  
I enjoyed building this assignment and demonstrating practical React skills with a clean, user-friendly UI.

---

> 🔄 Built by **Puneetharaj K R** | Made with ❤️ in React
