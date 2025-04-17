// server.js
const express = require('express');
//Enables frontend/backend communication
const cors = require('cors');
//Allows reading JSON/form data from requests
const bodyParser = require('body-parser');
//Loads .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend 🎉');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
