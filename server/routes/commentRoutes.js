const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Add in the Controller functionality, add Middleware here
router.get('/api/comments/', commentController.listComments);
router.post('/api/comments/', commentController.insertComment);
router.put('/api/comments/:id', commentController.updateComment);
router.delete('/api/comments/:id', commentController.deleteSingleComment);
router.get('/api/searchcomment/:rating', commentController.searchSingleComment);

module.exports = router;