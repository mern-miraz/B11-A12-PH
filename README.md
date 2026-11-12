# B11 A12 - Course Management Website

This is a full-stack course management website built as part of my Programming Hero course assignment.

The project is divided into two main parts: a React frontend and a Node.js backend. The frontend handles the user interface, while the backend manages API requests and stores course data in MongoDB.

## Technologies Used

### Frontend
- React 19
- JavaScript
- Vite
- Tailwind CSS 4
- DaisyUI
- React Router
- Firebase
- Axios
- Swiper
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- MongoDB Native Driver
- CORS
- dotenv

## Project Structure

```text
B11-A12-PH/
│
├── client/          # React frontend application
│
├── server/          # Node.js and Express backend
│
└── README.md        # Project documentation
```

## Getting Started

Follow these steps to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/mern-miraz/B11-A12-PH.git
```

### 2. Setup the Backend

Open a terminal and navigate to the server directory:

```bash
cd B11-A12-PH/server
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file and add your MongoDB credentials:

```env
DB_USER=your_mongodb_username
BD_PASS=your_mongodb_password
PORT=3000
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup the Frontend

Open another terminal and navigate to the client directory:

```bash
cd B11-A12-PH/client
```

Install the dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend and backend will now run separately on your local machine.

## Learning Purpose

This project helped me practice full-stack web development using React, Node.js, Express.js, and MongoDB. I also gained experience working with frontend libraries, REST APIs, database operations, and project organization.

## Author

**Mirazul Islam**

- GitHub: [mern-miraz](https://github.com/mern-miraz)
