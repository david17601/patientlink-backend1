const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const registerRoute = require('./routes/register');
const requestRoute = require('./routes/request');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://david1760:<db_password>@cluster0.qyetq1m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('🟢 MongoDB połączone'))
  .catch(err => console.error('🔴 Błąd połączenia z MongoDB:', err));

app.use('/api/register-tablet', registerRoute);
app.use('/api/request', requestRoute); // ⬅️ Obsługa zgłoszeń

app.listen(PORT, () => console.log(`🚀 Backend działa na http://localhost:${PORT}`));
