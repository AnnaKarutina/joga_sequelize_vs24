const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author');

// Route to get all authors
router.get('/', AuthorController.getAllAuthors);

// Route to get an article by slug
router.get('/:author_id', AuthorController.getAuthorById);

module.exports = router;