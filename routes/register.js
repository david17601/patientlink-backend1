// Backend/routes/register.js
const express = require('express');
const router = express.Router();
const Tablet = require('../models/Tablet');

router.post('/', async (req, res) => {
  const { tabletID, budynek, oddzial, pietro, pokoj, lozko } = req.body;

  if (!tabletID || !budynek || !oddzial || !pietro || !pokoj || !lozko) {
    return res.status(400).json({ error: 'Brakuje wymaganych danych' });
  }

  try {
    const existing = await Tablet.findOne({ tabletID });
    if (existing) {
      return res.status(200).json({ message: 'Tablet już zarejestrowany', data: existing });
    }

    const newTablet = new Tablet({ tabletID, budynek, oddzial, pietro, pokoj, lozko });
    await newTablet.save();

    res.status(201).json({ message: 'Zarejestrowano tablet', data: newTablet });
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera', details: error.message });
  }
});

module.exports = router;
