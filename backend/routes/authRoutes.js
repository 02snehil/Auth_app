const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// Signup Endpoint
router.post('/signup', signup);

// Login Endpoint
router.post('/login', login);

module.exports = router;
