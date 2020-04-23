const Sequelize = require('sequelize');
const sequelize = require('../configs/db');
const Measure_single=sequelize.define('measure_single',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    uric:{
        type:Sequelize.INTEGER,
    }
},{
    freezeTableName:false,
})
module.exports= Measure_single;