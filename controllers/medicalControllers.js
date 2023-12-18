
const Patient = require('../models/patient');
const encounter = require('../models/encounter');
const Vitals = require('../models/vitals');

exports.registerPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.json(savedPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.startencounter = async (req, res) => {
  try {
    const newencounter = new encounter(req.body);
    const savedencounter = await newencounter.save();
    res.json(savedencounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitVitals = async (req, res) => {
  try {
    const newVitals = new Vitals(req.body);
    const savedVitals = await newVitals.save();
    res.json(savedVitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPatientDetails = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      res.status(404).json({ message: 'Patient not found' });
    } else {
      const visitations = await Visitation.find({ patientId: patient._id });
      const vitals = await Vitals.find({ patientId: patient._id });
      res.json({ patient, visitations, vitals });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
