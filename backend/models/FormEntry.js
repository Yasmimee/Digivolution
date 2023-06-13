// backend/api/formData.js

const express = require('express');
const router = express.Router();
const FormEntry = require('../models/FormEntry');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Create a new instance of the FormEntry model with the form data
    const formEntry = new FormEntry({ name, email, phone, service, message });

    // Save the form entry to MongoDB
    await formEntry.save();

    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred while saving form data' });
  }
});

module.exports = router;
