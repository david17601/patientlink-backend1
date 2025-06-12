const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

router.post('/', async (req, res) => {
  const { tabletID, category, level, priority, tabletData } = req.body;

  if (!tabletID || !category || !priority) {
    return res.status(400).json({ error: 'Brak wymaganych danych' });
  }

  try {
    const newRequest = new Request({
      tabletID,
      category,
      level,
      priority,
      tabletData: tabletData || {} // opcjonalnie, jeśli przesłano dane lokalizacji
    });

    await newRequest.save();
    res.status(201).json({ message: 'Zgłoszenie zapisane', data: newRequest });
  } catch (error) {
    res.status(500).json({ error: 'Błąd serwera', details: error.message });
  }
});

module.exports = router;
