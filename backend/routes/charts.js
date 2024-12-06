import express from 'express';
import ChartData from '../models/ChartData.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

router.get('/research-funding', authenticateToken, async (req, res) => {
  try {
    const data = await ChartData.find({ type: 'funding' }).select('-_id title value');
    res.json(data);
  } catch (error) {
    console.error('Error fetching funding data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

router.get('/research-impact', authenticateToken, async (req, res) => {
  try {
    const data = await ChartData.find({ type: 'impact' }).select('-_id name value');
    res.json(data);
  } catch (error) {
    console.error('Error fetching impact data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

export default router;