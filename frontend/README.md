
# 📚 Minimal Library Management System – Frontend

A clean and minimal Library Management System built using **React**, **TypeScript**, **Redux Toolkit with RTK Query**, and **Tailwind CSS**.

This project allows users to manage a list of books and borrow them without authentication. All data is fetched via a REST API.

---

## Features

✅ View all books  
✅ Add, Edit, and Delete books  
✅ Borrow books with quantity and due date  
✅ Borrow summary page (aggregated)  
✅ Clean, responsive UI with Tailwind  
✅ API Integration using RTK Query  
✅ Fully TypeScript supported

---

## Pages Overview

| Route | Description |
|-------|-------------|
| `/books` | List all books with actions (edit, delete, borrow) |
| `/create-book` | Form to add a new book |
| `/edit-book/:id` | Update an existing book |
| `/books/:id` | View single book details |
| `/borrow/:bookId` | Borrow form for a specific book |
| `/borrow-summary` | Aggregated borrow summary table |

---

## Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit + RTK Query**
- **Tailwind CSS**
- **React Router DOM**
- **Vite**

---


## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shahidullah-Kaisar/Assignment_4.git
cd library-management-client
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run dev
# or
yarn dev
```

The app will run on: [http://localhost:5173](http://localhost:5173)

---

## API Base URL

Make sure your `.env` or config matches the backend base URL:

```
VITE_API_BASE_URL=backend url
```

---

## Project Structure

```
src/
├── components/ 
├── root/
├── routes/
├── utils/
├── pages/ 
├── module/         
├── redux/           
├── interfaces/       
├── main.tsx         
├── App.tsx           

```

---

## Bonus Features

- Toast Notifications
- Optimistic UI update (auto re-render after actions)
- Mobile Responsive Design
- Type-safe forms and API layers

---

## Upcoming Improvements

- Search and filter by genre
- Pagination on book list
- Authentication (admin)

---


## Links

- [Backend Repository](https://github.com/Shahidullah-Kaisar/Library-Management-Server_A-3.git)  
- [Live Frontend Site]( https://library-management-tau-pink.vercel.app/)
- [Live Backend Site](https://librarynode.vercel.app/)

---

