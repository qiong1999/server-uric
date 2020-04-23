const Sequelize = require('sequelize')
const sequelize = require('../configs/db');
const Relation_patient_doctor = sequelize.define('relation_patient_doctor',{
    fk_patient_id:{
        type:Sequelize.STRING,
    },
    fk_doctor_id:{
        type:Sequelize.STRING,
    }
},{
    freezeTableName:true,
});

module.exports=Relation_patient_doctor;