const measure_triple = (sequelize,DataTypes)=>sequelize.define('measure_triple',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        unique:true,
        allowNull:false,
    },
    uric:{
        type:DataTypes.INTEGER,
    },
    fat:{
        type:DataTypes.INTEGER,
    },
    sugar:{
        type:DataTypes.INTEGER
    }
});
module.exports = measure_triple;