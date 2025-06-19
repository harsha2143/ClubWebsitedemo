 
// server/routes/contentRoutes.js
const express = require('express');
const router = express.Router();
const Page = require('../models/Page');

// GET specific page content
router.get('/:pageName', async (req, res) => {
  try {
    const page = await Page.findOne({ name: req.params.pageName });
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE page content
router.put('/:pageName', async (req, res) => {
  try {
    const updated = await Page.findOneAndUpdate(
      { name: req.params.pageName },
      req.body,
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
