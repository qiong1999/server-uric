const Sequelize = require('sequelize');
const sequelize = new Sequelize('qionghua','root','19980411',{
    host:'im-here.cn',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000,
    }
});
sequelize.authenticate().then(()=>{
    console.log('connect successfully')
}).catch(err=>{
    console.error('connect fail')
})
module.exports = sequelize;