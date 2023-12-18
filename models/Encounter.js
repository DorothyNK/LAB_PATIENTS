import mongoose from 'mongoose';
const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref:Patient, required: true },
  date: { type: Date, default: Date.now },
  timeofEncounter: String, 
  typeofEncounter: String, 


});

const encounter = mongoose.model('encounter', encounterSchema);

module.exports = encounter;
