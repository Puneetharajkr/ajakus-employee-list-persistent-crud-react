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
Dashboard View: <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4f2b87e8-fd8e-41c4-a986-e7ce43a0e567" />


### ➕ Add New Employee Form Validation 
Add Employee Form Validation <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f0f75059-7fb9-4b78-b354-e37bacce7505" />

### ➕ New Employee "Raj kr" Added
Add Employee <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/02001810-fccd-4a76-83a7-8ffd24e539e2" />


### ✏️ Edit Employee  
Edit "Raj kr" Employee Details <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/340aedfe-3ec2-4156-ae50-04ed9410c66d" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bafd6853-964b-4c37-a500-8797f1761e8a" />



### 🔍 Search & Filter  
Search by First Name:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d84e180d-353f-4895-a80d-3936d6cd34a3" />

Filter by First Name with Raj: 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4fdddfc8-bd01-4872-84a9-ea53a945933f" />

Filter by Department with  HR:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/66d0bb10-3da2-4a08-9acd-d1c7e45c17e9" />

Filter by Role with  Frontend:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1b377e3f-42b2-4489-b6d2-7c0335532a01" />


### 🔍 Sorting 
Sort by First Name in DESC Order:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bf6a131c-ff45-415a-bb8f-f8c79337ad16" />

Sort by Department in ASC Order:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f4c8f27f-27ed-4154-9e7f-3acb352a9a45" />

###  DELETE first 4 Employess
DELETE first 4 Employess from First1 to First4:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8589dc96-ffc7-4677-88e5-a4ff501885d9" />

### 🔄 Reset to Default Button  
Reset to Default Static Data to Get Same Employees from First1 to First4:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9d4b245a-22e9-46f0-9f0e-57bc561070ff" />

---

## 🎥 Demo Video

📽️ Video Walkthrough: (https://drive.google.com/file/d/1H3rlaAlzH37s7e1nHemAvFb41hdfVgFS/view?usp=sharing)




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
