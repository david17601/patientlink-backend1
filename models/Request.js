const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  tabletID: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String },
  priority: { type: Number, required: true },
  status: { type: String, default: 'oczekuje' },
  tabletData: {                                  
    budynek: String,
    oddzial: String,
    pietro: String,
    pokoj: String,
    lozko: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);
