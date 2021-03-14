const mongoose = require('mongoose');

const { Schema } = mongoose;

const budgetEntrySchema = new Schema({
  budget: String,
});

const BudgetEntry = mongoose.model('BudgetEntry', budgetEntrySchema);
module.exports = BudgetEntry;
