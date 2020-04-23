const Sequelize = require('sequelize');
const sequelize = require('./config/db');
const { admin,measure_single,measure_triple,patient,relation_patient_doctor,subject} = require('./models/index');
admin(sequelize,Sequelize).sync({});
measure_single(sequelize,Sequelize).sync({});
measure_triple(sequelize,Sequelize).sync({});
patient(sequelize,Sequelize).sync({});
relation_patient_doctor(sequelize,Sequelize).sync({});
subject(sequelize,Sequelize).sync({});