const express = require('express');
const cors = require('cors');
const requestRoutes = require('./routes/requests');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/requests', requestRoutes);

module.exports = app;
