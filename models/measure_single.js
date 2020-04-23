const measure_single = (sequelize,DataTypes)=>sequelize.define('measure_single',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
    },
    uric:{
        type:DataTypes.INTEGER,
    }
});
module.exports = measure_single;