const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

// Route to get all articles
router.get('/', ArticleController.getAllArticles);

// Route to get an article by slug
router.get('/article/:slug', ArticleController.getArticleBySlug);

module.exports = router;