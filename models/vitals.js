import mongoose from 'mongoose';
const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  temperature: Number,
  bloodPressure: String,
  pulseRate: Number,
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;
