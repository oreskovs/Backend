# 📝 Thinkboard - Full-Stack Notes App

This is a full-stack notes application called **Thinkboard**, built with the **MERN** stack (MongoDB, Express, React, Node) and featuring advanced **Rate Limiting** using **Upstash Redis**.

## ✨ Key Features

* **Full CRUD API:** A RESTful API supporting Create, Read, Update, and Delete operations for notes.
* **Rate Limiting:** Backend protection against abuse using **Upstash Redis** (currently configured for 10 requests per 20 seconds).
* **Modern UI:** User interface built with **React/Vite** and styled using **Tailwind CSS + DaisyUI**.
* **Toast Notifications:** Success/error messages provided via `react-hot-toast`.
* **429 Response Handling:** Dedicated UI component (`RateLimitedUI.jsx`) to inform users when the rate limit is reached.

## 🛠️ Technology Stack

| Part | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React, Vite, React Router | Fast and modern user interface |
| **Styling** | Tailwind CSS, DaisyUI (Theme: forest) | Utility-first CSS Framework |
| **Backend** | Node.js, Express.js | API Server |
| **Database** | MongoDB, Mongoose | Database and Object Data Modeling |
| **Caching/Limit** | Upstash Redis (@upstash/ratelimit) | Rate Limiting mechanism |
| **HTTP Client** | Axios | Handling frontend API requests |

## 🚀 Project Setup and Installation

The project is structured into two independent directories: `backend` (Express API) and `frontend` (React UI).

### 1. Cloning and Dependencies

```bash
# 1. Clone the repository
git clone <YOUR_REPOSITORY_URL>
cd thinkboard

# 2. Install BACKEND dependencies
cd backend
npm install

# 3. Install FRONTEND dependencies
cd ../frontend 
npm install
2. Backend Configuration (.env)Create a file named .env in the root of the backend directory and populate it with your environment variables:# MongoDB URI for database connection
MONGO_URI="<Your_MongoDB_Connection_String>"

# Port the server will run on
PORT=5001 

# Upstash Redis URL and Token
UPSTASH_REDIS_REST_URL="<Your_Upstash_Redis_REST_URL>"
UPSTASH_REDIS_REST_TOKEN="<Your_Upstash_Redis_REST_TOKEN>"
3. Running the ApplicationStart the Backend (In one terminal):Bashcd backend
npm run dev
# Server runs on http://localhost:5001
Start the Frontend (In a second terminal):Bashcd frontend
npm run dev
# Frontend runs on http://localhost:5173
🌐 API EndpointsAll backend routes are prefixed with /api/notes and are available at http://localhost:5001.MethodRouteDescriptionGET/api/notesRetrieves all notes.POST/api/notesCreates a new note. (Requires title and content in body)GET/api/notes/:idRetrieves a single note by ID.PUT/api/notes/:idUpdates an existing note by ID.DELETE/api/notes/:idDeletes a note by ID.