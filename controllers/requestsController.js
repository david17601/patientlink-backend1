const Request = require('../models/Request');
const Tablet = require('../models/Tablet');

exports.submitRequest = async (req, res) => {
  const { tabletID, category, value, priority } = req.body;

  if (!tabletID || !category || !value || priority === undefined) {
    return res.status(400).json({ error: 'Brakuje danych' });
  }

  try {
    const tablet = await Tablet.findOne({ tabletID });

    const newRequest = new Request({
      category,
      value,
      priority,
      tabletID,
      tabletData: tablet ? {
        budynek: tablet.budynek,
        oddzial: tablet.oddzial,
        pietro: tablet.pietro,
        pokoj: tablet.pokoj,
        lozko: tablet.lozko
      } : undefined
    });

    await newRequest.save();
    res.status(201).json({ message: 'Zgłoszenie zapisane', data: newRequest });
  } catch (err) {
    res.status(500).json({ error: 'Błąd serwera', details: err.message });
  }
};
