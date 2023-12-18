import mongoose from 'mongoose';
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: { type: String, unique: true, required: true },
  surname: { type: String, required: true },
  otherNames: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  Phonenumber: {type:Number, required:true },
  ResidentialAddress: {type:Number, required:true},
  EmergencyName: {type: String, required: true },
  Contact: {type:Number, required:true},
  RelationshipWithpatient:{type: String, required: true },


});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
