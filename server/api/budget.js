const { Router } = require('express');

const BudgetEntry = require('../model/BudgetEntry');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await BudgetEntry.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const budgetEntry = new BudgetEntry(req.body);
  const newEntry = await budgetEntry.save();
  res.json(newEntry);
});

module.exports = router;
