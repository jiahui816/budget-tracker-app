const mongoose = require('mongoose');

const { Schema } = mongoose;

const formEntrySchema = new Schema({
  item_name: String,
  item_cost: String,
  date: Date,
});

const FormEntry = mongoose.model('FormEntry', formEntrySchema);
module.exports = FormEntry;
