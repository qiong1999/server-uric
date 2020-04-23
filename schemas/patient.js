const sequelize = require('../configs/db');
const Sequelize = require('sequelize');
const Patient = sequelize.define('patients',{
    uuid:{
        type:Sequelize.STRING,
        primaryKey:true,
        unique:true,
    },
    openid:{
        type:Sequelize.STRING,
        unique:true,
    },
    headurl:{
        type:Sequelize.STRING,
    },
    name:{
        type:Sequelize.STRING,
    },
    phone:{
        type:Sequelize.STRING,
    },
    identify:{
        type:Sequelize.STRING,
    },
    address:{
        type:Sequelize.STRING,
    },
    relative_name:{
        type:Sequelize.STRING,
    },
    relative_relation:{
        type:Sequelize.STRING,
    },
    relative_phone:{
        type:Sequelize.STRING,
    },
    uric_target:{
        type:Sequelize.INTEGER,
    },
    sugar_target:{
        type:Sequelize.INTEGER,
    },
    fat_target:{
        type:Sequelize.INTEGER,
    },
  
},
{
   freezeTableName:false, 
});
module.exports = Patient;