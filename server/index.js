const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const logs = require('./api/logs');
const app = express();
const port = process.env.PORT || 3003;

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
  })
);
app.use(express.json());
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/logs', logs);
mongoose.connection.once('open', () => {
  console.log('Connected to MONGODB');
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World - Budget Tracker App',
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
