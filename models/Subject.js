const subject = (sequelize,DataTypes)=>sequelize.define('subject',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        unique:true,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
    },
    sheet_name:{
        type:DataTypes.STRING,
    }
});
module.exports=subject;