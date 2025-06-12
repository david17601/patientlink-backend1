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

// ✅ Użycie zmiennej środowiskowej dla MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('🟢 MongoDB połączone'))
.catch(err => console.error('🔴 Błąd połączenia z MongoDB:', err));

app.use('/api/register-tablet', registerRoute);
app.use('/api/request', requestRoute);

app.listen(PORT, () => console.log(`🚀 Backend działa na http://localhost:${PORT}`));
