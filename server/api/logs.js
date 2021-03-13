const { Router } = require('express');

const FormEntry = require('../model/FormEntry');

const DATABASE_URL = process.env;

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await FormEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const formEntry = new FormEntry(req.body);
  const createdEntry = await formEntry.save();
  res.json(createdEntry);
});

module.exports = router;
