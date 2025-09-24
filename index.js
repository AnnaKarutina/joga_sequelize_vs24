const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Import routes
const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);
const authorRoutes = require('./routes/author');
app.use('/author', authorRoutes);
const articleAdminRoutes = require('./routes/admin/article');
app.use('/admin', articleAdminRoutes);

// Start the server
app.listen(3026, () => {
  console.log('Server is running at http://localhost:3026');
});