const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const contentRoutes = require('./routes/contentRoutes');
const homeRoutes = require('./routes/HomePageRoutes');

app.use('/api/pages', contentRoutes);
app.use('/api/home', homeRoutes); // ✅ Matches frontend calls

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
