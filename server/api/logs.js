const { Router } = require('express');

const FormEntry = require('../model/FormEntry');
const BudgetEntry = require('../model/BudgetEntry')
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

router.get('/budget', async (req, res, next) => {
  try {
    const data = await BudgetEntry.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/budget', async (req, res) => {
  const budgetEntry = new BudgetEntry(req.body);
  const newEntry = await budgetEntry.save();
  res.json(newEntry);
});


module.exports = router;
