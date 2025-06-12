const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const registerRoute = require('./routes/register');
const requestRoute = require('./routes/request');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/patientlink', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('🟢 MongoDB połączone'))
  .catch(err => console.error('🔴 Błąd połączenia z MongoDB:', err));

app.use('/api/register-tablet', registerRoute);
app.use('/api/request', requestRoute); // ⬅️ Obsługa zgłoszeń

app.listen(PORT, () => console.log(`🚀 Backend działa na http://localhost:${PORT}`));
