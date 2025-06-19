 
// server/models/Page.js
const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  title: { type: String },
  description: { type: String },
  email: String,
  phone: String,
  address: String
});

module.exports = mongoose.model('Page', PageSchema);
