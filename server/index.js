const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World - Budget Tracker App',
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
