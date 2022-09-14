const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

router.get('/api/users/', UserController.allUsers);
router.get('/api/users/:id', UserController.userById);
router.get('/api/name/:fullName', UserController.userByName);
router.post('/api/users/', UserController.createUser);
router.put('/api/users/:id', UserController.updateUser);
router.delete('/api/users/:id', UserController.deleteById);

module.exports = router;