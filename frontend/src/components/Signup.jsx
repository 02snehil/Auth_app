import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords don't match", type: 'error' });
      return;
    }
    setLoading(true);
    try {
      //const res = await axios.post('http://localhost:5000/api/auth/signup', {
      const res = await axios.post('https://auth-app-n44y.onrender.com/api/auth/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      if (res.status === 201) {
          setMessage({ text: res.data.msg, type: 'success' });
        }  
    } catch (err) {
      if (err.response) {
          setMessage({ text: err.response.data.msg, type:'error' });
        } else {
          setMessage({ text: err.response.data.msg, type: 'error' });
        }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-left">Username</label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-left">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-left">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-left">Re-enter Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Re-enter Password"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <p className="text-gray-700 mb-6">
            If you have already registered, please <Link to="/login" className="text-blue-600 hover:underline">log in</Link>
          </p>
          {message.text && (
            <p className={`mt-4 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {message.text}
            </p>
         )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
