const { Router } = require('express');

const FormEntry = require('../model/FormEntry');
const BudgetEntry = require('../model/BudgetEntry');
const DATABASE_URL = process.env;

const router = Router();

router.get('/', async (req, res, next) => {
  //ReadAll
  try {
    const entries = await FormEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  //CreateOne
  const formEntry = new FormEntry(req.body);
  const createdEntry = await formEntry.save();
  res.json(createdEntry);
});

router.get('/:id', async (req, res, next) => {
  //ReadOne
  try {
    const { id } = req.params;
    const item = await FormEntry.findOne({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  //DeleteOne
  try {
    const { id } = req.params;
    await FormEntry.remove({ _id: id });
    res.json({
      message: 'success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
