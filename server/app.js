require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json

// Basic Route
app.get('/', (req, res) => {
  res.send('Eatlytics Backend is running...');
});

// Starting the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
