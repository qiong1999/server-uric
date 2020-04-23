const admin = (sequelize,DataTypes)=>sequelize.define('admin',{
    uuid:{
        type:DataTypes.STRING,
        primaryKey:true,
        unique:true,
        allowNull:false,
    },
    username:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    },
    role:{
        type:DataTypes.STRING,
    }
})
module.exports = admin;