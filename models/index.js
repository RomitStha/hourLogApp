const {Sequelize,DataTypes} = require ('sequelize')

const sequelize = new Sequelize('hourLog', 'postgres','password',{
    host: 'localhost',
    port:5433,
    dialect:'postgres',
    pool: {max:5, min:0, idle:10000}
})

sequelize.authenticate()
.then(() => {
    console.log("connected...")
    
}).catch((err) => {
    console.log(err)
});



const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;



db.hourLog = require('./hourLog')(sequelize,DataTypes)
db.candidate = require('./candidate')(sequelize,DataTypes)
db.invoice = require('./invoice')(sequelize,DataTypes)

db.sequelize.sync({force:true})
.then(() =>{
    console.log("yes re-sync");
})

module.exports = db