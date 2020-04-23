const Sequelize = require('sequelize');
const sequelize = require('../configs/db');
const Measure_triple = sequelize.define('measure_triple',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    uric:{
        type:Sequelize.INTEGER,
    },
    fat:{
        type:Sequelize.INTEGER,
    },
    sugar:{
        type:Sequelize.INTEGER,
    },
});
module.exports = Measure_triple;