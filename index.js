const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to sequelize app'});
});

// Start the server
app.listen(3026, () => {
  console.log('Server is running at http://localhost:3026');
});