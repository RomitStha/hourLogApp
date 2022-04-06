const {sequelize,DataTypes} = require ('sequelize')

const sequelize = new sequelize('sequelize', 'postgres','password',{
    host: 'localhost',
    port:5433,
    dialect:'postgres',
})

sequelize.authenticate()
.then(() => {
    console.log("connected...")
    
}).catch((err) => {
    console.log(err)
});



const db = {};
db.sequelize = Sequelize;
db.sequelize = Sequelize;

db.sequelize.sync({force:true})
.then(() =>{
    console.log("yes re-sync");
})
db.users = require('./hourLog')(sequelize,DataTypes)
module.exports = db