⚙️ Backend Description
🛠️ Tech Stack

Node.js – Server runtime environment

Express.js – Web framework for handling routes and APIs

MongoDB (Mongoose) – Database to store book details

Axios / Fetch (from frontend) – For sending API requests

CORS – To allow frontend–backend communication

dotenv – For environment variable management

🧩 Main Features

Book Management APIs

GET /book → Fetch all books

POST /book → Add a new book

PUT /book/:id → Update book details

DELETE /book/:id → Delete a book

Database Connection

mongoose.connect() used in db.js

Connection handled via environment variable (MONGO_URI)

Error Handling

Each API uses try–catch blocks and returns proper error responses (404, 500, etc.)

Server Setup

server.js handles express setup, routes, and middleware.
