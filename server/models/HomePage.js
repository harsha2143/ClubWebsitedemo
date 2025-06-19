// server/models/HomePage.js
const mongoose = require('mongoose');

const HomePageSchema = new mongoose.Schema({
  title: String,
  description: String,

  hero: {
    badge: String,
    heading: String,
    subtext: String,
    primaryButton: String,
    secondaryButton: String
  },

  stats: [
    {
      value: Number,
      label: String,
      suffix: String,
      icon: String  // e.g., "Users", "Calendar"
    }
  ],

  about: {
    heading: String,
    description: String,
    cards: [
      {
        title: String,
        description: String,
        icon: String
      }
    ]
  },

  events: {
    ongoing: [
      {
        title: String,
        date: String,
        description: String
      }
    ],
    upcoming: [
      {
        title: String,
        date: String,
        description: String
      }
    ]
  },

  testimonials: [
    {
      quote: String,
      name: String,
      role: String
    }
  ],

  contact: {
    location: String,
    email: String,
    phone: String
  }
});

module.exports = mongoose.model('HomePage', HomePageSchema);
