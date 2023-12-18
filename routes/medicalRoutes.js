import { express } from 'express';
const express = require('express');
const router = express.Router();
const medicalController = require('../controllers/medicalController');


router.post('/patients', medicalController.registerPatient);


router.post('/encounter', medicalController.startencounter);


router.post('/vitals', medicalController.submitVitals);
router.get('/patients', medicalController.getAllPatients);
router.get('/patients/:id', medicalController.getPatientDetails);

module.exports = router;
