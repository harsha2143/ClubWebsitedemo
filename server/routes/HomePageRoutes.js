const express = require('express');
const router = express.Router();
const HomePage = require('../models/Homepage.js');

router.get('/', async (req, res) => {
  try {
    const page = await HomePage.findOne(); // Only one document expected
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch home page data' });
  }
});

module.exports = router;
