const admin = require('./Admin');
const measure_single = require('./Measure_single');
const measure_triple = require('./Measure_triple');
const patient = require('./Patient');
const relation_patient_doctor = require('./Relation_patient_doctor');
const subject = require('./Subject');
module.exports = {
    admin,
    measure_single,
    measure_triple,
    patient,
    relation_patient_doctor,
    subject,
};