// server.ts

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

//initialization .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// route
app.get('/', (req, res) => {
  res.send('Hello from the backend 🎉');
});

//import route
import adminRoutes from './routes/adminRoutes';
app.use('/admin', adminRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


