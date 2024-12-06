import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import chartRoutes from './routes/charts.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/charts', chartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});