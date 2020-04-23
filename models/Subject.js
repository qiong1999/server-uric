const Sequelize = require('sequelize');
const sequelize = require('../configs/db');
const Subject = sequelize.define('subject',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    name:{
        type:Sequelize.STRING,
    },
    sheet_name:{
        type:Sequelize.STRING,
    }
},{
    freezeTableName:false,
})
module.exports=Subject;