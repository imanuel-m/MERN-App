# Task Manager

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, read, update, and delete tasks efficiently.

## Features

- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Responsive design with Tailwind CSS
- RESTful API architecture

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- Vite as build tool

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- Environment variables support

## Project Structure

```
TaskManager/
├── client/                 # Frontend React application
│   ├── src/               # Source files
│   ├── public/            # Public assets
│   └── dist/              # Production build
│
└── server/                # Backend Node.js application
    ├── controllers/       # Route controllers
    ├── models/           # Database models
    ├── routes/           # API routes
    └── connect.js        # Database connection
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Configure environment variables:
Create a `.env` file in the server directory with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Install frontend dependencies:
```bash
cd ../client
npm install
```

5. Configure frontend environment variables:
Create a `.env` file in the client directory with:
```
VITE_API_URL=http://localhost:5000/api/v1
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173`

## API Endpoints

- `GET /api/v1/tasks` - Get all tasks
- `POST /api/v1/tasks` - Create a new task
- `PUT /api/v1/tasks/:id` - Update a task
- `DELETE /api/v1/tasks/:id` - Delete a task

## Deployment

The application is configured for deployment with Vercel:
- Frontend: Configured with `vercel.json` for React application
- Backend: Configured with `vercel.json` for serverless functions

## Author

Abel Gideon

## License

ISC 