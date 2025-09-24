const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

// Route to get all articles
router.get('/', ArticleController.getAllArticles);

module.exports = router;