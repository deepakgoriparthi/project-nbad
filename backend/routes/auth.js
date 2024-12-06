import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'deepak' && password === 'deepak') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'mykey');
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router;