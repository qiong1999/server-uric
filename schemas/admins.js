const Sequelize = require('sequelize');
const sequelize = require('../configs/db');
const Admin = sequelize.define('admin',{
    uuid:{
        type:Sequelize.STRING,
        primaryKey:true,
    },
    username:{
        type:Sequelize.STRING,

    },
    password:{
        type:Sequelize.STRING,
    },
    role:{
        type:Sequelize.STRING,
    }
},{
    freezeTableName:false,
});
module.exports=Admin;