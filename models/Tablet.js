// Backend/models/Tablet.js
const mongoose = require('mongoose');

const tabletSchema = new mongoose.Schema({
  tabletID: { type: String, required: true, unique: true },
  budynek: { type: String, required: true },
  oddzial: { type: String, required: true },
  pietro: { type: String, required: true },
  pokoj: { type: String, required: true },
  lozko: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tablet', tabletSchema);
