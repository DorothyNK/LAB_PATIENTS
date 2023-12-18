import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const medicalRoutes = require('./routes/medicalRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/medical', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use('/api', medicalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
