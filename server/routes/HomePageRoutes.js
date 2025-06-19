const express = require('express');
const router = express.Router();
const HomePage = require('../models/HomePage');

// GET /api/home
router.get('/', async (req, res) => {
  try {
    const page = await HomePage.findOne();
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch home page data' });
  }
});

// PUT /api/home
// PUT /api/home
router.put('/', async (req, res) => {
  try {
    const updated = await HomePage.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    console.error('Error updating HomePage:', err);
    res.status(500).json({ error: 'Failed to update home page' });
  }
});


module.exports = router;
