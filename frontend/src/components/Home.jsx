import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/home.jpg';


const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const user = JSON.parse(localStorage.getItem('user'));

  // Check if the user object exists
  if (!user) {
    return (
      <div
      className="flex flex-col mt-0.5 items-center justify-center w-full min-h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      
        <div className="bg-white opacity-80 p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-6">User not found. Please log in again.</h1>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>

    );
  }

  return (
    <div
      className="flex flex-col mt-0.5   w-full min-h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="flex justify-between p-4 rounded-lg  w-full text-right">
        <h1 className="text-5xl font-serif font-semibold mb-2 text-left">Welcome, {user.username}!</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 align-text-top justify-self-end"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;






