# B11 A12 - Course Management Server

This is the backend part of my Course Management project. It is built with Node.js and Express.js and uses MongoDB to store course information.

The server provides API endpoints to add new courses and retrieve all available courses from the database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- MongoDB Native Driver
- JavaScript
- CORS
- dotenv
- Nodemon

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check if the server is running |
| GET | `/courses` | Get all courses |
| POST | `/courses` | Add a new course |

## Installation and Setup

Follow these steps to run the server locally.

1. Clone the repository:

```bash
git clone https://github.com/mern-miraz/B11-A12-PH.git
```

2. Go to the server directory:

```bash
cd B11-A12-PH/server
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the server directory and add your MongoDB credentials:

```env
DB_USER=your_mongodb_username
BD_PASS=your_mongodb_password
PORT=3000
```

5. Start the development server:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

## Database

This project uses MongoDB Atlas to store course information.

- Database: `coursesDB`
- Collection: `courses`

## Learning Purpose

I built this project as part of my Programming Hero course assignment. It helped me practice creating REST API endpoints, connecting a Node.js server with MongoDB, handling HTTP requests, and working with environment variables.

## Author

**Mirazul Islam**

GitHub: [mern-miraz](https://github.com/mern-miraz)
