// Desc: Routes for authentication

const express = require('express');
const { register, verifyEmail, login, getUsers, deleteUser } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.get('/verify/:token', verifyEmail);
router.post('/login', login);
router.get('/users', authMiddleware, getUsers);
router.delete('/users/:id', authMiddleware, deleteUser);

module.exports = router;
