# MERN Auth App

A full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that implements user authentication via JWT (JSON Web Token). The application features user signup, login, password reset, and a professional user interface.

## Features

- User signup and login
- Password reset functionality
- JWT-based authentication
- Responsive UI with Tailwind CSS

## Technologies Used

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, bcryptjs, jsonwebtoken

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (you can use MongoDB Atlas for cloud)
- [SendGrid Account](https://sendgrid.com/) for sending emails

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd mern-auth-app

   
2. **Set Up the Backend**

 - Navigate to the backend directory:

    ```bash
    cd backend

 - Install the backend dependencies::

    ```bash
    npm install

 - Create a .env file in the backend directory and add your environment variables:

   ```plaintext

   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_generated_jwt_secret

 - Start the backend server:

    ```bash
    npm start
    
  The backend server will run on http://localhost:5000.


3. **Set Up the Fronten**

 - Navigate to the frontend directory:

    ```bash
    cd frontend

 - Install the frontend dependencies::

    ```bash
    npm install

 - Start the frontend development server:

    ```bash
    npm run dev
    
The frontend will run on http://localhost:5173 (or another port if specified).

## Usage   

1. **User Signup:** - Navigate to the /signup route to create a new account.
2. **User Login:** - Navigate to the /login route to log in to your account.
3. **Home:** -  After logging in, you will be redirected to the home page.


## Testing  

### Use Postman or similar tools to test the following API endpoints:
  - POST /api/auth/signup: For user registration.
  - POST /api/auth/login: For user login.
    
