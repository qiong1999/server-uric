

const relation_patient_doctor = (sequelize,DataTypes)=>sequelize.define('relation_patient_doctor',{
    fk_patient_id:{
        type:DataTypes.STRING,
    },
    fk_doctor_id:{
        type:DataTypes.STRING,
    }
});
module.exports = relation_patient_doctor;